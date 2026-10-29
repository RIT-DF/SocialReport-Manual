#!/usr/bin/env node
// Decifra uma cópia de segurança do SocialReport (formato SRBK01, AES-256-GCM + scrypt) FORA do aplicativo.
// Só precisa do Node 18+ (sem instalar nada) e da senha que o administrador definiu em Configurações do sistema > Cópias de segurança.
//
//   SENHA_COPIA='sua senha' node decifrar-copia.mjs socialreport-AAAAMMDD-HHMMSS.dump.enc saida.dump
//   node decifrar-copia.mjs socialreport-AAAAMMDD-HHMMSS.dump.enc saida.dump     # pergunta a senha (não aparece na tela)
//
// A saída é um `pg_dump -Fc` (formato custom). Para restaurar num PostgreSQL vazio:
//   createdb socialreport_restaurado && pg_restore --no-owner --no-privileges -d socialreport_restaurado saida.dump
//
// Formato do arquivo (mesmo de server/backupCripto.mjs):
//   0..5 "SRBK01" | 6 log2(N) | 7 r | 8 p | 9..24 salt | 25..36 IV | 37..-17 texto cifrado | últimos 16 bytes: etiqueta GCM
//   chave = scrypt(senha UTF-8, salt, 32 bytes, N = 2^log2(N), r, p); o cabeçalho (bytes 0..36) é o dado adicional autenticado.
// Senha errada e arquivo alterado dão o mesmo erro.

import crypto from 'node:crypto';
import fs from 'node:fs';
import readline from 'node:readline';
import { pipeline } from 'node:stream/promises';

const [entrada, saida] = process.argv.slice(2);
if (!entrada || !saida) {
  console.error('Uso: SENHA_COPIA=... node decifrar-copia.mjs <arquivo.dump.enc> <saida.dump>');
  process.exit(2);
}
if (fs.existsSync(saida)) {
  console.error(`O arquivo de saída já existe e não será sobrescrito: ${saida}`);
  process.exit(2);
}

function perguntarSenha() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl._writeToOutput = (t) => { if (t.includes('Senha')) process.stdout.write(t); };
    rl.question('Senha da cópia: ', (r) => { rl.close(); process.stdout.write('\n'); resolve(r); });
  });
}

const senha = process.env.SENHA_COPIA || (await perguntarSenha());
const total = fs.statSync(entrada).size;
const cab = Buffer.alloc(37);
const fd = fs.openSync(entrada, 'r');
const etiqueta = Buffer.alloc(16);
try {
  if (total < 37 + 16) throw new Error('arquivo pequeno demais');
  fs.readSync(fd, cab, 0, 37, 0);
  fs.readSync(fd, etiqueta, 0, 16, total - 16);
} finally {
  fs.closeSync(fd);
}
if (cab.subarray(0, 6).toString('ascii') !== 'SRBK01') {
  console.error('Este arquivo não é uma cópia cifrada do SocialReport (marca SRBK01 ausente).');
  process.exit(1);
}
const chave = crypto.scryptSync(Buffer.from(senha, 'utf8'), cab.subarray(9, 25), 32, { N: 2 ** cab[6], r: cab[7], p: cab[8], maxmem: 256 * 1024 * 1024 });
const decifra = crypto.createDecipheriv('aes-256-gcm', chave, cab.subarray(25, 37));
decifra.setAAD(cab);
decifra.setAuthTag(etiqueta);
try {
  await pipeline(fs.createReadStream(entrada, { start: 37, end: total - 17 }), decifra, fs.createWriteStream(saida, { mode: 0o600 }));
  console.log(`Pronto: ${saida}`);
} catch {
  fs.rmSync(saida, { force: true });
  console.error('Senha errada ou arquivo alterado.');
  process.exit(1);
}

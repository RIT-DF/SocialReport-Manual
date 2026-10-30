---
title: Cópias de segurança
parent: "6. Administração"
nav_order: 1
permalink: /copias-de-seguranca/
---

# Cópias de segurança

Esta página é para o **administrador da organização**. Ela explica por que o sistema faz cópias do próprio banco de dados, como configurá-las, o que fazer com o e-mail que elas geram e, principalmente, **como abrir uma cópia quando precisar**. Você não precisa ser técnico para configurar e guardar as cópias. Para **restaurar** o sistema a partir de uma cópia, você vai precisar de ajuda técnica, e a página diz quando.

## Por que ter cópias

O SocialReport guarda num banco de dados tudo o que a sua equipe produziu: clientes, períodos, planilhas importadas, textos escritos e editados, capas e os relatórios emitidos. Se o servidor quebrar, for apagado por engano ou sofrer um ataque, **sem cópia esse trabalho some**. E refazer meses de relatórios (e a análise que a equipe revisou) custa caro.

A regra simples das cópias:

- **Uma cópia no mesmo lugar do original não é cópia.** Se o servidor se perde, a cópia que estava nele se perde junto. Por isso o sistema oferece **dois destinos**: o servidor e o seu e-mail. Use os dois.
- **Cópia que nunca foi testada é esperança, não cópia.** Por isso existe o teste de restauração (mais abaixo).
- **A cópia é cifrada com uma senha.** Quem pegar o arquivo sem a senha não consegue ler nada. Isso protege os dados dos seus clientes se o arquivo for parar onde não devia.

> **O que a cópia inclui.** A cópia é do **banco de dados do SocialReport**: o conteúdo do sistema (clientes, períodos, textos, relatórios). Não é uma cópia do servidor inteiro nem de outros sistemas que usem o mesmo servidor. O quadro a seguir diz o que fica de fora de propósito.
{: .note }

> **O que entra e o que NÃO entra na cópia.** Por segurança, a cópia **não leva os segredos do sistema**: as **chaves de IA** (Gemini, ChatGPT e Claude), a **senha do servidor de e-mail** (SMTP), o **segredo do login com Google**, os **tokens do Matomo** (leitura e administração), o **token do Moodle de cada cliente**, a **licença do V3RAnalytics**, o **segredo do app da Meta** e as **chaves da Meta de cada cliente** (a ligação do Instagram e do Facebook), o **segredo do app do YouTube e do LinkedIn** e as **chaves dessas duas redes de cada cliente**, e a **senha das próprias cópias**. Também ficam de fora as **sessões abertas do login**: depois de restaurar, **todos precisam entrar de novo** (a senha continua a mesma). Os segredos são apagados antes de a cópia ser gravada, então nem o arquivo guardado, nem o anexo do e-mail os contêm. **Entram** os clientes, períodos, relatórios, configurações e os **usuários, com as senhas de acesso embaralhadas** (hash): elas não são legíveis, mas são o que permite que as pessoas entrem depois de restaurar. Depois de restaurar, é preciso **cadastrar os segredos de novo** (veja "E depois de abrir?" mais abaixo).
>
> **Por que é assim:** a cópia sai do servidor por e-mail e vai parar em caixas de entrada e discos. Se levasse as chaves de IA e os tokens, quem achasse o arquivo e adivinhasse a senha ganharia também o acesso a esses serviços. Sem os segredos, o pior caso é ler os dados do sistema, não usar a sua conta de IA nem o seu Matomo. O preço é o recadastro depois de restaurar, que o resumo no fim da página lembra.
{: .warning }

## Como configurar

Só o **super-administrador** vê esta tela. Em **Configurações do Sistema**, abra **Cópias de segurança**.

| Campo | O que fazer |
|---|---|
| **Frequência** | **Diária**, **Semanal** ou **Desligada**. Para uma organização que emite relatórios uma vez por mês, **semanal** costuma bastar; **diária** é mais segura na semana de fechar o relatório. **Desligada** pausa as cópias automáticas |
| **Horário** (e **Dia da semana**, na frequência semanal) | Escolha uma hora de pouco uso, como de madrugada. O horário é o de **São Paulo** |
| **Quantas cópias manter no servidor** | O número de cópias antigas que ficam guardadas no servidor. As mais antigas são apagadas depois de cada cópia nova. Sete cópias semanais cobrem quase dois meses |
| **Senha das cópias** | A senha que cifra as cópias. **Mínimo de 16 caracteres.** Digite duas vezes (campo de confirmação): o sistema só salva se forem iguais. Veja "Prove a senha" e o aviso abaixo |
| **Destino: No próprio servidor** | Guarda as cópias numa pasta do servidor, com permissão só do aplicativo |
| **Destino: Por e-mail ao administrador** | Envia cada cópia cifrada, em anexo, ao e-mail do administrador |
| **E-mail do administrador** | Quem recebe a cópia (se marcado acima) e o **aviso quando uma cópia falhar** |
| **Limite do anexo (MB)** | Uma cópia maior que isso **não vai em anexo**: o administrador recebe só um aviso de que ela existe no servidor |

Depois de preencher, clique em **Salvar cópias**.

> **Atenção: a senha não tem volta.** O sistema **não guarda a sua senha** e não a mostra de volta: depois de salva, a tela mostra só "Senha definida" e a data. **Sem a senha, a cópia não abre, e ninguém consegue recuperar a senha ou abrir a cópia sem ela: nem o aplicativo, nem a equipe da V3RTECH.** Guarde a senha **fora do servidor**, num **cofre de senhas** (um gerenciador de senhas da organização, ou um cofre físico para quem prefere papel), e diga a pelo menos **uma segunda pessoa de confiança** onde ela está. Pessoa que sai da organização leva a senha na cabeça.
{: .warning }

> **Trocar a senha** vale para as cópias **novas**. As antigas continuam abrindo com a senha antiga: guarde as senhas antigas enquanto houver cópias antigas.
{: .note }

![Aba Cópias de segurança com o aviso do que entra e do que não entra, os campos de senha e confirmação, e o quadro Provar a senha]({{ '/assets/img/app/app-25-copias-config.png' | relative_url }})

**Prove a senha (recomendado).** Abaixo dos campos da senha há o quadro **Provar a senha**. Digite a senha que está no seu **cofre** (não a que você acha que lembra) e clique em **Provar a senha**. O sistema confere se ela abre as cópias e responde só **"A senha confere com a das cópias."** ou **"não confere"**, sem mostrar nada. Depois da prova, o quadro mostra a data da **última prova**.

- **Por que fazer:** cópia cifrada com uma senha que ninguém consegue repetir é arquivo perdido. A prova confirma que o que está no cofre é a senha certa (sem espaço a mais, sem letra trocada) **enquanto ainda dá tempo de corrigir**.
- **O aviso no painel.** Enquanto a senha atual nunca foi provada, o super-administrador vê um **aviso no topo do painel**. Ele some depois da prova. **Trocar a senha zera a prova**: prove a nova.
- **Limite.** São **5 tentativas a cada 15 minutos** por pessoa. Se errar várias vezes, espere, procure a senha certa no cofre e tente de novo.
- **Senha antiga.** Senhas definidas antes com 12 a 15 caracteres continuam valendo; só as **novas** exigem 16.

> **Pasta no servidor.** O destino "no próprio servidor" só funciona se a pasta de cópias foi preparada por quem hospeda a instalação. Se não foi, o destino aparece desligado, com o aviso "pasta de cópias não montada", e o resto (e-mail) funciona. Peça a quem hospeda para preparar a pasta.
{: .tip }

### O botão "Fazer cópia agora"

Faz uma cópia na hora, com as configurações **salvas**. Use depois de configurar (para ver se tudo funciona) e **antes de qualquer mudança grande**, como atualizar a versão do sistema. Salve as alterações antes de clicar.

## O histórico das cópias

Abaixo da configuração, **Últimas cópias e testes** lista cada cópia e cada teste: a **data**, **o quê** (cópia ou teste, e se foi manual ou agendada), o **tamanho**, o **destino**, e o **resultado**.

![Histórico das últimas cópias, com data, tamanho, destino e resultado]({{ '/assets/img/app/app-26-copias-historico.png' | relative_url }})

- **Concluída** é o que você quer ver.
- Cópias que **falham** aparecem com o motivo. Cada falha também **avisa o administrador por e-mail**, e o super-administrador vê uma **faixa no topo** do sistema. Uma cópia agendada que falha é **repetida depois de 30 minutos**, até três tentativas por horário.
- O ícone de **baixar** baixa o arquivo cifrado que está no servidor, para guardar onde você quiser. Fica desabilitado quando a cópia não ficou no servidor (por exemplo, quando só foi por e-mail).
- Dá para excluir execuções do histórico, uma a uma ou em lote.

> **Dica.** Uma vez por mês, olhe o histórico. Se a última cópia concluída tem mais de uma semana e a frequência é semanal, algo parou: investigue antes de precisar da cópia.
{: .tip }

## O e-mail de cópia: o que é e o que fazer com ele

Com o destino **Por e-mail ao administrador**, cada cópia chega por e-mail, com o arquivo **cifrado em anexo**. O arquivo tem o nome parecido com `socialreport-20261028-020000.dump.enc` (a data e a hora da cópia).

**O que o e-mail diz.** Desde a versão 1.23.1 todos os e-mails do sistema saem com o mesmo visual (logotipo e cores do SocialReport, o nome da organização no rodapé e links para o manual, a privacidade e os termos). O e-mail da cópia explica, em linguagem simples:

- **o que é**: uma cópia de segurança dos dados do sistema, para o dia em que o servidor quebrar ou um dado for apagado por engano;
- **de quando** é, o **tamanho** e o **nome do arquivo**;
- **o que não entra** nela (as chaves, senhas e tokens), para ninguém achar que a cópia basta para recolocar tudo no ar;
- **por que o arquivo não abre sozinho**: ele está cifrado; a senha foi definida em Configurações do sistema, nunca vai por e-mail e o sistema não consegue mostrá-la;
- **como abrir**, com o botão **Como abrir uma cópia**, que leva a esta página;
- **quando é a próxima** cópia automática e como mudar a frequência.

**O que fazer com ele**

1. **Guarde o anexo** em um lugar seguro, **diferente do servidor**: um armazenamento da organização (nuvem, disco da diretoria) ou um disco externo.
2. **Não apague** o e-mail até ter o arquivo guardado em outro lugar.
3. **Mantenha pelo menos algumas cópias**, de datas diferentes (por exemplo, as últimas quatro semanas e uma por mês). Uma cópia só pode estar com defeito justamente a que você precisa.

### Quando o e-mail é de falha

Se uma cópia ou um teste de restauração falha, o administrador recebe um e-mail de assunto **"[SocialReport] Cópia de segurança: FALHA na cópia"** (ou **"no teste de restauração"**). Ele diz **o que aconteceu**, em texto curto (sem endereço do banco nem caminho do servidor), **o que isso significa** e **o que fazer**:

- a cópia **daquele horário** não existe, mas as anteriores continuam válidas onde estavam;
- abra **Configurações do sistema > Cópias de segurança** e leia a mensagem completa no histórico;
- confira o **servidor de e-mail (SMTP)**, o destino escolhido e o espaço livre no servidor;
- clique em **Fazer cópia agora** (ou **Testar restauração**) para tentar de novo;
- se repetir, chame o suporte técnico levando a mensagem do e-mail.

Um terceiro e-mail, de **aviso de anexo grande**, chega quando a cópia passa do limite do anexo: ele diz onde o arquivo ficou e como baixá-lo, ou avisa, em destaque, que a cópia **não foi guardada em lugar nenhum** se o destino no servidor estiver indisponível.

> **Cuidado: o e-mail do administrador não deve ser uma lista ou um grupo.** Se o endereço for uma **lista de e-mail ou um grupo**, **todos os membros recebem a cópia**, com os dados de todos os clientes. A cópia é cifrada, mas, na mão de muita gente, a segurança é só a senha. Use um **endereço pessoal do administrador** ou uma **caixa restrita**, com acesso de poucas pessoas.
{: .warning }

> **Se o e-mail não chegou.** Verifique a **caixa de spam**; confira se o **Servidor SMTP** está configurado (nas mesmas Configurações do Sistema; sem ele nada sai); e veja se a cópia passou do **limite do anexo**. Se passou, você recebe só um aviso, e o arquivo está no servidor, para **baixar** pelo histórico.
{: .tip }

## Testar restauração

Uma cópia só serve se **abre e está inteira**. O botão **Testar restauração** confere isso sem arriscar nada: o sistema restaura a cópia num **banco temporário**, **confere o número de linhas de cada tabela**, **confere que não há segredos nem sessões de login dentro dela** e **apaga** o banco temporário em seguida. O banco em uso **não é tocado**.

**Como fazer**

1. Salve as alterações e clique em **Fazer cópia agora** (ou use uma cópia recente).
2. Clique em **Testar restauração**.
3. Aguarde alguns instantes e veja o resultado na lista de **Últimas cópias e testes**.

**O que o resultado significa**

| Resultado | O que quer dizer | O que fazer |
|---|---|---|
| **Concluída**, com a frase "tabelas com o mesmo número de linhas" | A cópia **abriu e tem o mesmo conteúdo** do banco: todas as tabelas conferem | Nada. É o que você quer |
| **Falhou**, dizendo que a cópia **leva segredos** | A cópia testada é anterior à versão 1.24.2 e ainda contém chaves ou tokens | Faça uma **cópia nova** e teste de novo. Apague as cópias antigas, que ainda levam os segredos |
| **Falhou** por conter **sessões do login** | A cópia é anterior à 1.25.0 e guarda as sessões abertas das pessoas | Faça uma **cópia nova**. As cópias novas já saem sem as sessões |
| **Falhou**, dizendo que o número de linhas **não confere** (com a tabela e os números) | A cópia abriu, mas **falta ou sobra algo** | Faça uma nova cópia e teste de novo. Se repetir, chame o suporte técnico |
| **Falhou**, dizendo que falta permissão para criar bancos | O sistema ainda **não foi preparado** para o teste. É uma configuração do servidor, que se faz uma vez | Peça a quem hospeda a instalação para liberar (o texto do erro traz a instrução exata) |
| **Falhou** por outro motivo | Veja a mensagem no histórico | Se não for clara, chame o suporte técnico |

> **Dica: faça o teste logo depois de configurar e depois uma vez por mês.** Descobrir que a cópia não abre no dia em que o servidor quebrou é tarde demais.
{: .tip }

## Como abrir uma cópia quando precisar

Uma cópia cifrada é um arquivo `.dump.enc`. Para **ler o conteúdo**, é preciso **tirar a cifra**, com a senha. Hoje isso se faz com uma ferramenta pequena, que roda no computador do administrador.

> **O que esta ferramenta faz e o que não faz.** Ela **abre** o arquivo cifrado e gera um arquivo de banco de dados (`.dump`). Ela **não restaura** o sistema. Para **restaurar o banco** a partir desse arquivo aberto, **chame o suporte técnico de quem hospeda a instalação**: é um procedimento de servidor, e feito errado pode apagar dados.
{: .important }

**O que você precisa**

1. O **arquivo da cópia** (`socialreport-....dump.enc`), baixado do e-mail ou do histórico.
2. A **senha** das cópias, a que está no seu cofre.
3. A ferramenta **`decifrar-copia.mjs`**: [baixar a ferramenta]({{ '/assets/ferramentas/decifrar-copia.mjs' | relative_url }}) (clique com o botão direito e escolha "Salvar link como", se o navegador abrir o texto em vez de baixar).
4. O **Node** instalado no computador (a versão 18 ou mais nova). O Node é um programa gratuito que executa a ferramenta. Veja a seção a seguir.

### Instalar o Node

O Node é instalado **uma vez**. Depois de instalado, você pode usar sempre.

**Windows**

1. Abra o site [nodejs.org](https://nodejs.org/) e baixe a versão marcada como **LTS**.
2. Execute o instalador e aceite as opções padrão (**Next** até o fim).
3. Abra o **Prompt de Comando** (digite "cmd" no menu Iniciar).
4. Confira digitando `node --version`. Deve aparecer um número começando com 18 ou mais (por exemplo, `v22.11.0`).

**macOS**

1. Abra o site [nodejs.org](https://nodejs.org/), baixe o instalador **LTS** para macOS e execute-o.
2. Abra o **Terminal** (procure por "Terminal" no Spotlight).
3. Confira digitando `node --version`.

(Quem usa o Homebrew pode instalar com `brew install node`.)

**Linux**

1. Abra o terminal.
2. Instale pelo gerenciador de pacotes: no **Fedora**, `sudo dnf install nodejs`; no **Arch**, `sudo pacman -S nodejs`; no **Debian** e **Ubuntu**, `sudo apt install nodejs`. Em versões antigas do Debian e do Ubuntu, o pacote pode ser mais velho que a versão 18. Nesse caso, use o instalador do site [nodejs.org](https://nodejs.org/).
3. Confira digitando `node --version`. Se o número começar com menos de 18, atualize.

### Abrir a cópia, passo a passo

1. Crie uma pasta, por exemplo `copia-restaurada`, e coloque nela **os dois arquivos**: o `decifrar-copia.mjs` e a cópia `socialreport-....dump.enc`.
2. Abra o terminal **dentro dessa pasta**. No Windows, abra a pasta no Explorador de Arquivos, clique na barra de endereço, digite `cmd` e tecle Enter. No macOS, clique com o botão direito na pasta e escolha "Nova janela do Terminal na pasta". No Linux, "Abrir terminal aqui" ou use o comando `cd`.
3. Digite o comando, trocando o nome do arquivo pelo da sua cópia (a senha **não vai no comando**: o programa a pergunta em seguida):

   ```text
   node decifrar-copia.mjs socialreport-20261028-020000.dump.enc saida.dump
   ```

4. O programa pergunta **"Senha da cópia:"**. **Digite a senha e tecle Enter.** A senha **não aparece na tela enquanto você digita**: isso é normal.
5. Se tudo der certo, aparece **`Pronto: saida.dump`**. O arquivo `saida.dump` é a cópia aberta.

**Quando dá errado**

| O que aparece | O que significa | O que fazer |
|---|---|---|
| **Senha errada ou arquivo alterado.** | A senha não é a que cifrou **aquela** cópia, ou o arquivo foi **modificado ou corrompido**. O programa dá a mesma mensagem nos dois casos | Confira a senha (cópias **antigas** usam a senha que valia na época). Baixe o arquivo de novo. Experimente outra cópia |
| **Este arquivo não é uma cópia cifrada do SocialReport** | O arquivo não é uma cópia do SocialReport, ou veio incompleto | Baixe de novo, sem renomear nem abrir em outro programa |
| **O arquivo de saída já existe e não será sobrescrito** | Já há um `saida.dump` na pasta | Apague-o ou escolha outro nome no comando |
| **`node` não é reconhecido como comando** (ou "command not found") | O Node não está instalado, ou o terminal foi aberto antes da instalação | Instale o Node e **abra um terminal novo** |
| **Parâmetros do arquivo fora do limite aceito** | O arquivo foi alterado ou não é uma cópia do SocialReport | Baixe de novo o arquivo original. Não o abra nem o salve em outro programa |
| Aparece um erro dizendo que o arquivo da ferramenta não foi encontrado | O terminal está em outra pasta | Abra o terminal **dentro** da pasta onde estão os arquivos |

> **Nunca escreva a senha no comando.** A ferramenta aceita também a senha numa variável de ambiente, mas isso grava a senha no histórico do terminal. O caminho certo é o deste passo a passo: o programa **pergunta** a senha e não a mostra na tela.
{: .warning }

> **Cópias novas e antigas abrem do mesmo jeito.** A ferramenta lê o formato do próprio arquivo. As cópias feitas a partir da 1.23.2 usam uma cifra mais difícil de quebrar, e as anteriores seguem abrindo com a mesma ferramenta.
{: .note }

> **O arquivo aberto (`saida.dump`) não está mais cifrado.** Ele tem os **dados** do sistema (clientes, relatórios, usuários), legíveis por quem o tiver. Só os segredos (chaves, senhas e tokens listados acima) ficam de fora, nas cópias da versão 1.24.2 em diante. Guarde-o só o tempo necessário, num lugar restrito, e **apague-o** quando o suporte técnico terminar.
{: .warning }

### E depois de abrir?

O `saida.dump` é um arquivo de banco de dados do PostgreSQL. **Restaurar** o sistema com ele é um trabalho para o **suporte técnico de quem hospeda a instalação**: eles criam um banco, restauram o arquivo e conferem o resultado. Envie a eles o `saida.dump` (ou a cópia cifrada e a senha, por canais separados) e diga **de que data** é a cópia e **o que se perdeu**.

**Depois de restaurar, cadastre de novo os segredos.** Entre como super-admin, abra **Configurações do sistema** e preencha:

- **Chaves de IA**: a chave de cada provedor (Gemini, ChatGPT e Claude);
- **E-mail (SMTP)**: a senha do servidor de e-mail;
- **Login com Google**: o segredo do cliente Google (depois de salvar, o serviço de login precisa ser recriado, passo do suporte técnico);
- **Matomo**: o token de leitura e, se usar a conexão automática por código, o token de administração;
- **Licença do V3RAnalytics** (aba **Matomo**): a licença da instância (veja [Site e plugin]({{ '/site-e-plugin/' | relative_url }}));
- **Moodle de cada cliente** (não é uma aba de Configurações do sistema: fica no **cadastro do cliente**, seção **Plataforma de cursos**, bloco **Acesso ao Moodle**): o token (ou, no jeito do complemento, o **código de conexão**, que se gera de novo na página do complemento no Moodle) de **cada cliente** que tem Moodle. O endereço, o modo de conexão e o id do relatório continuam lá, só a chave precisa ser colada de novo;
- **Meta (Instagram e Facebook)**: o **segredo do app**, na aba **Meta**, e depois **Renovar ligação** em **cada cliente** ligado, no cadastro do cliente (seção **Redes sociais (Meta)**). A cópia guarda quem estava ligado, mas não a chave: o cadastro mostra "precisa religar" até o login ser refeito (veja [Ligar o Instagram e o Facebook]({{ '/administracao/meta/' | relative_url }}));
- **YouTube e LinkedIn**: o **segredo do app** de cada rede, na aba **YouTube** e na aba **LinkedIn**, e depois **Religar** em **cada cliente** ligado, no cadastro do cliente (seções **YouTube** e **LinkedIn**). A cópia guarda quem estava ligado, mas não a chave: o cadastro mostra "precisa religar" até o login ser refeito (veja [Ligar o YouTube e o LinkedIn]({{ '/administracao/youtube-linkedin/' | relative_url }}));
- **Cópias de segurança**: uma **senha nova** para as cópias, que depois deve ser provada com **Provar a senha**.

Enquanto isso não for feito, a IA, o envio de e-mail (inclusive o envio do link do relatório ao cliente), o login com Google, a leitura do Matomo, do Moodle, da Meta, do YouTube e do LinkedIn e as cópias ficam desligados, e os plugins V3RAnalytics conectados depois não recebem licença. Os **usuários continuam entrando com as mesmas senhas**.

> **Como o suporte restaura.** A cópia feita a partir da 1.24.2 é um arquivo de texto SQL comprimido: o suporte descomprime e carrega no banco novo (`gunzip -c saida.dump | psql -d banco_novo`). As cópias anteriores são do formato antigo e se restauram com `pg_restore`.
{: .note }

> **O que se perde numa restauração.** O que foi feito **depois** da data da cópia. Se a cópia é de domingo e o problema foi na quinta, o que a equipe fez de segunda a quinta não está nela. Por isso, em semanas de fechamento, vale a frequência **diária** ou uma **Cópia agora** antes de mudanças grandes.
{: .note }

## Resumo: o que fazer agora

- [ ] Configure a frequência, o horário e o número de cópias.
- [ ] Defina a **senha** (16 caracteres ou mais) e guarde-a em um **cofre**, com uma segunda pessoa sabendo onde.
- [ ] Use **Provar a senha**: digite a senha guardada no cofre e confira que o sistema aceita. Enquanto isso não for feito, o painel mostra um aviso.
- [ ] Marque os **dois destinos** (servidor e e-mail).
- [ ] Use como e-mail do administrador um endereço **pessoal ou de caixa restrita**, nunca uma lista ou um grupo.
- [ ] Faça **uma cópia agora** e confira no histórico que ela **concluiu**.
- [ ] Faça um **Testar restauração** e veja o resultado **concluído**.
- [ ] Guarde os anexos recebidos fora do servidor.
- [ ] Guarde, em um cofre, as **chaves de IA, a senha do e-mail, os tokens** (Matomo, Moodle, Google, o segredo do app da Meta, do YouTube e do LinkedIn) **e a licença do V3RAnalytics**: a cópia não os leva, e você precisará deles para recadastrar depois de restaurar.
- [ ] Teste a abertura de uma cópia com a ferramenta **uma vez**, antes de precisar. Anote o telefone do suporte técnico de quem hospeda a instalação.

Voltar para [Administração]({{ '/administracao/' | relative_url }}).

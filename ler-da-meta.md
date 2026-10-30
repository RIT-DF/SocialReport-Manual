---
title: Ler da Meta
parent: "3. O mês do analista"
nav_order: 4
permalink: /mes-do-analista/ler-da-meta/
---

# Ler da Meta

Esta página é para quem **produz** o relatório. O botão **Ler da Meta**, na página do mês, traz as publicações do Instagram e do Facebook **direto das contas do cliente**, no mesmo formato que a planilha, sem você precisar exportar e importar a planilha dessas redes. Ele só aparece para um cliente que o super-administrador já **ligou** (veja a [parte 6]({{ '/administracao/meta/' | relative_url }}), que é dele).

As telas desta página vêm de uma organização fictícia, o **Instituto Horizonte**, e de uma simulação da Meta. Nomes, @ e números são inventados.

## Por que usar

A planilha exportada é o ponto fraco do fechamento do mês: é preciso lembrar de exportar as duas redes, no período certo, do cliente certo, e importar sem trocar os arquivos. A leitura da Meta tira esses passos do caminho e ainda resolve um número que a planilha nunca trouxe: o de **seguidores no fim do mês**.

**Exemplo.** No fechamento de outubro, a analista abre o mês do Instituto Horizonte e clica em **Ler da Meta**. Entram 6 publicações do Instagram e 4 do Facebook, com alcance, visualizações, curtidas, comentários, compartilhamentos e salvamentos de cada uma, e o sistema oferece 1.515 seguidores para o Instagram. Ela confere a contagem de publicações com o que viu no aplicativo, aceita o número de seguidores e segue para a revisão.

**Quando continuar na planilha.** A leitura **não substitui** a planilha em tudo:

- **Stories não entram.** A Meta só mostra um Story por 24 horas, então ele não existe mais quando você lê o mês. O Story do mês vem pela planilha.
- **A categoria editorial não vem.** A Meta não sabe que publicação é "Institucional" ou "Serviço", então as publicações lidas chegam como **Geral**. Se o cliente usa categorias no relatório, o capítulo de tipos de conteúdo perde a divisão. Veja [a tarefa 6]({{ '/mes-do-analista/#6-classificar-as-categorias' | relative_url }}).
- **LinkedIn, TikTok e YouTube** continuam só por planilha.
- **Cliente que ninguém ligou** não tem o botão.

## Três regras antes de clicar

1. **Uma fonte por rede, em cada mês.** O Instagram do mês vem **ou** da planilha **ou** da Meta, nunca dos dois: somar os dois contaria cada publicação duas vezes. Se o mês já tem postagens do Instagram vindas de planilha, o sistema pergunta se pode substituí-las (veja o passo 3). A planilha **fica guardada**, e dá para voltar a ela.
2. **Os números são os do momento da leitura.** Uma publicação continua acumulando alcance e interações nos dias seguintes. A leitura traz o que a Meta mostra **naquela hora**, e a tela diz: **"lido em dd/mm hh:mm (números acumulados até esse momento)"**. É o mesmo que exportar a planilha naquele dia: quem exporta no dia 1º e quem lê no dia 1º veem o mesmo número. Se ler de novo uma semana depois, os números das publicações do fim do mês estarão maiores.
3. **O mês precisa existir.** O bloco fica na página de um mês que já existe. Hoje, um mês novo só nasce ao importar uma planilha (a janela **Novo Período** exige ao menos um arquivo). Para um mês novo, importe antes a planilha de qualquer rede, por exemplo a do LinkedIn, ou a do Instagram, que a leitura substituirá com a sua confirmação.

## Passo a passo

### 1. Confira o estado da ligação

Em **Períodos & Emissão**, abra o mês (o botão do mês na lista). O bloco **Ler da Meta** fica no alto da página, acima de **Seguidores no fim do mês** e dos **Extratos Importados**.

![Bloco Ler da Meta na página do mês, com a mensagem Instagram e Facebook ligados e o botão Ler da Meta]({{ '/assets/img/app/app-71-meta-ler-da-meta.png' | relative_url }})

A frase embaixo do título é o estado da ligação:

| A frase diz | Quer dizer | O que fazer |
|---|---|---|
| **Instagram e Facebook ligados.** | Tudo certo | Leia |
| **Facebook ligado (a Página não tem Instagram ligado).** | Só o Facebook será lido | Leia o Facebook e traga o Instagram pela planilha |
| **… A ligação vence em dd/mm: peça ao administrador para renovar.** | Ainda lê, mas a ligação está perto do fim | Leia agora e avise o super-administrador |
| **Ligação expirada: peça ao administrador para renovar.** | A ligação parou. O botão fica **apagado** | Avise o super-administrador. Enquanto isso, use a planilha |
| **A conta da Meta perdeu a permissão de leitura: peça ao administrador para renovar.** | A ligação deixou de valer | Idem |
| **A ligação precisa ser refeita; peça ao administrador.** / **… precisa religar …** | O sistema foi restaurado ou teve a chave trocada | Idem |

![Bloco Ler da Meta com o botão apagado e a mensagem Ligação expirada: peça ao administrador para renovar]({{ '/assets/img/app/app-75-meta-ler-expirada.png' | relative_url }})

![Bloco Ler da Meta com a mensagem de que a ligação vence em 10/11 e o botão ainda habilitado]({{ '/assets/img/app/app-74-meta-ler-vence-em-breve.png' | relative_url }})

Você **não** renova a ligação: isso é do super-administrador, que faz um login na Meta. Seu papel é avisar, e fechar o mês pela planilha se não houver tempo.

### 2. Escolha o dia da leitura

Pense como pensaria no dia de exportar a planilha: depois que o ciclo termina, e com algum tempo para as últimas publicações acumularem resultado. Duas razões para não deixar para muito depois:

- **Seguidores.** O número do **último dia do ciclo** só é exato se o sistema o fotografou naquele dia (ele faz isso toda noite, a partir do dia em que o cliente foi ligado). Sem fotografia, o Instagram ainda consegue **reconstruir** o número se você ler até **30 dias** depois do fim do ciclo; passado disso, o sistema só tem o número **de hoje**, e avisa.
- **Mês já emitido.** Se o relatório já foi emitido e enviado, reler muda os números do mês, e o que o cliente viu deixa de bater com o sistema. Releia **antes** de emitir.

### 3. Leia

1. Clique em **Ler da Meta**. O botão mostra **"Lendo..."** enquanto o servidor busca. Ele lê as **duas redes de uma vez** (só o Facebook, quando o cliente não tem Instagram ligado), para o **ciclo do período** (veja a [tarefa 2]({{ '/mes-do-analista/#2-criar-o-período-do-mês' | relative_url }})): as datas do ciclo é que mandam, e não o mês do calendário.
2. **Se o mês já tem postagens vindas de planilha**, o bloco pergunta antes de mexer em qualquer coisa:

   ![Confirmação: Substituir as 13 postagens do Instagram da planilha Instagram_outubro_2026.xlsx pela leitura da Meta? A planilha fica guardada e dá para voltar a ela, e o mesmo para o Facebook, com os botões Substituir e Cancelar]({{ '/assets/img/app/app-72-meta-substituir-planilha.png' | relative_url }})

   - **Substituir** troca as postagens daquela rede pelas lidas. O arquivo da planilha **não é apagado**: fica guardado e deixa de contar (nem para as publicações, nem para seguidores, nem para o alcance da conta, nem para o link público).
   - **Cancelar** não muda **nada**, em nenhuma das redes. A pergunta vale para as duas redes juntas: se quer a leitura só de uma, clique em **Substituir** e depois use **Voltar para a planilha** na outra (passo 5).
3. Terminada a leitura, uma faixa passageira diz **"Leitura da Meta aplicada ao mês."** e o bloco lista o que aconteceu:

   ![Bloco Ler da Meta depois da leitura: pergunta sobre seguidores, lista do que foi lido em cada rede e, no pé, o arquivo lido de cada rede com o botão Voltar para a planilha]({{ '/assets/img/app/app-73-meta-leitura-aplicada.png' | relative_url }})

### 4. Leia o resumo e confira

O resumo traz uma linha por rede: **"Instagram: 6 novas, 0 atualizadas, 0 removidas."** Se alguma publicação foi recusada, a mesma linha termina com **"N recusada(s):"** e o motivo (a regra é a de sempre: por exemplo, **alcance maior que impressões**). **Publicação recusada não entra no relatório.** Compare a quantidade de publicações do período com o que você vê no aplicativo da rede.

Abaixo vêm as **observações da leitura**. Elas explicam o que a Meta não informou ou informou de outro jeito. As mais comuns:

| A frase diz | O que significa | O que fazer |
|---|---|---|
| **Stories do mês não entram na leitura automática… use a planilha para eles.** | Aviso de sempre, no Instagram | Se o mês teve Story que importa, traga-o pela planilha |
| **Alcance da conta do Instagram não lido: a Meta só informa até 30 dias de uma vez e o ciclo tem 31.** | O alcance **da conta** (pessoas diferentes que a conta atingiu no ciclo) só é lido em ciclos de até 30 dias. Em mês de 31 dias, ele fica vazio | Se tiver o número no painel da rede, digite-o no campo **Alcance da conta no mês**, na janela **Ajustar Ciclo** (tarefa 2). O alcance somado das publicações continua calculado |
| **A Meta não informou "visitas perfil" para reels: o campo ficou vazio.** | Para aquele tipo de publicação, a Meta não devolveu esse número | Nada, ou confira na rede se o número for importante |
| **A versão da API recusou "post_impressions_unique"; foi usado "post_total_media_view_unique".** | A Meta não informa mais **Alcance** no Facebook e informa **Visualizadores**. O sistema usou a segunda medida no lugar da primeira | Leia [a diferença abaixo](#alcance-e-visualizações-o-que-a-leitura-preenche). Nada a corrigir |
| **Seguidores: a Meta só informa o número de hoje (dd/mm), não o do fim do ciclo. Confira ou digite o do fim do mês.** | Não havia fotografia do último dia do ciclo, e o sistema usou o número do dia da leitura | Digite o número do fim do mês no bloco **Seguidores no fim do mês** (tarefa 3b), se o tiver |
| **A Meta não informou os cliques dos posts: ficaram 0.** | No Facebook, o número de cliques no link não veio | Cliques ficam em 0; não conclua que ninguém clicou |
| **Há publicação sem visualizações informadas pela Meta (publicação antiga): ela aparece como recusada.** | Publicações muito antigas, no Instagram, podem não ter a medida de visualizações | Veja a linha de recusadas e, se importar, traga essa publicação pela planilha |
| **A Página ligada não tem Instagram profissional: só o Facebook foi lido.** | O Instagram do cliente não está ligado à Página | Avise o super-administrador |

### 5. Os seguidores do fim do mês

A leitura traz o número de seguidores de cada rede e o oferece ao campo **Seguidores no fim do mês** (tarefa 3b). A regra é de **nunca passar por cima do que você digitou**:

- **Campo vazio** (ou com o número que a leitura anterior pôs, e que você não mexeu): o sistema **preenche**.
- **Campo com outro número** (um que você digitou): o sistema **mantém o seu** e pergunta: **"Seguidores do Instagram: o mês tem 1.480 digitado; a Meta leu 1.515. Trocar?"**, com os botões **Usar 1.515** e **Manter 1.480**.

Escolha olhando de onde veio o número lido (a observação da leitura diz) e o painel da rede: o **número de fim do mês**, a fotografia da noite do último dia, é o melhor; o **reconstruído** (Instagram) é uma boa aproximação; o **do dia da leitura** só vale se o fim do mês e o dia da leitura estão próximos.

### 6. Ler de novo, voltar para a planilha, remover a leitura

Depois da primeira leitura, o botão passa a dizer **Ler de novo**, e cada rede lida ganha uma linha no pé do bloco, com o nome do arquivo e **"lido em dd/mm hh:mm"**.

- **Ler de novo** atualiza as publicações com os números de agora. O que **você editou** no mês é **preservado**: a **marcação de anômalo**, a **imagem do post** e as **campanhas do site e dos cursos** que você escolheu na Revisão. Publicação que **sumiu** da conta (por exemplo, apagada no Instagram) é removida do mês, e a linha de resumo diz quantas.
- **Voltar para a planilha** aparece nas redes que a leitura **substituiu**. O sistema relê a planilha guardada e as postagens dela voltam a valer, no lugar das lidas. O número de seguidores que a leitura pôs no campo, se você não o mexeu, sai também.
- **Remover a leitura** aparece nas redes que **não** tinham planilha: a leitura sai, e a rede fica sem postagens até você importar algo.

Na lista **Extratos Importados**, cada arquivo diz de onde vem: a leitura aparece com **"lida da Meta"**, e a planilha que ela substituiu, com **"substituída pela leitura da Meta (não conta)"**. É ali que você confere, de relance, qual fonte vale em cada rede.

### 7. Os avisos na revisão

Abra a **Revisão** do mês. Quando o mês usa a leitura, ela mostra, **só para você**, avisos sobre o que merece conferência antes de emitir:

![Três avisos amarelos na revisão: seguidores do Instagram reconstruídos, seguidores do Facebook do dia da leitura e Stories fora da leitura]({{ '/assets/img/app/app-76-meta-avisos-revisao.png' | relative_url }})

- **"… o número de seguidores foi reconstruído para dd/mm/aaaa a partir do número de hoje e dos novos seguidores de cada dia. Confira."** O Instagram não tinha fotografia daquele dia, e o sistema calculou o número. Compare com o painel.
- **"… o número de seguidores é o de dd/mm/aaaa (dia da leitura), não o do fim do mês. Confira ou digite o do fim do mês."** O número é o do dia em que você leu. O gráfico de evolução mostrará esse valor como se fosse o do fim do mês.
- **"Instagram lido da Meta: os Stories não entram na leitura automática. Stories do mês: use a planilha."** Lembrete de que o Story do mês só entra pela planilha.

Esses avisos não vão para o relatório nem para o link público. Eles somem sozinhos quando você **voltar para a planilha** ou quando a leitura passar a ter a fotografia do fim do mês.

## Alcance e visualizações: o que a leitura preenche

O relatório trabalha com duas medidas parecidas, e a leitura as preenche assim:

| No relatório | **Instagram** vem de | **Facebook** vem de |
|---|---|---|
| **Alcance** (pessoas diferentes que viram) | **Alcance** da publicação | **Alcance**, quando a Meta ainda o informa; senão **Visualizadores** (pessoas diferentes que viram o conteúdo), marcado como tal |
| **Impressões** (vezes que apareceu, com repetição) | **Visualizações** | **Visualizações** |

Duas ideias para guardar:

- **Visualizações contam repetição; alcance não.** Uma pessoa que vê a mesma publicação três vezes soma três visualizações e um de alcance. É por isso que as visualizações são sempre iguais ou maiores que o alcance, e por isso a Meta trocou o antigo "impressões" por "visualizações" em 2025.
- **No Facebook, "Visualizadores" faz o papel de alcance** quando o "Alcance" deixa de existir, e o sistema **avisa** quando o mês e o anterior usam medidas diferentes (a variação do alcance deixa de ser uma comparação exata). Veja a [pergunta frequente]({{ '/perguntas-frequentes/' | relative_url }}) e o [glossário]({{ '/glossario/' | relative_url }}).

## Por que o número da leitura pode diferir da planilha

Não é defeito, e quase sempre tem uma destas causas:

- **Dia diferente.** Os números **acumulam**. Planilha exportada no dia 3 e leitura do dia 10 não vão bater, porque as publicações do fim do mês ganharam resultado no meio tempo.
- **Campo que a Meta não informou.** A observação da leitura diz qual ficou vazio (por exemplo, visitas ao perfil de um tipo de publicação). O campo vazio entra como vazio, e não como zero inventado.
- **Outro período.** A planilha foi exportada com outras datas, ou conta o horário de outro fuso. A leitura usa o **ciclo do período** e o horário de Brasília.
- **Publicação recusada.** As regras de sempre valem (por exemplo, alcance maior que impressões). A linha de resumo diz quantas foram recusadas e por quê.

Em caso de dúvida, não corrija na mão: **leia de novo no dia certo**, ou volte para a planilha, e conte à equipe qual das fontes você usou.

## Dicas e armadilhas

> **Dicas.**
> - **Anote o dia da leitura.** Se alguém perguntar por que um número mudou, a resposta é "lido em 5/11, às 12h". A tela mostra essa data no pé do bloco.
> - **Compare a quantidade de publicações** do resumo com a do aplicativo da rede, nas duas redes, antes de seguir. É a conferência mais barata e a que mais pega erro.
> - **Cliente com poucos dados no mês?** Leia mesmo assim: as linhas "0 novas" e as observações dizem o que a Meta devolveu.
{: .tip }

> **Armadilhas.**
> - **Reler um mês já emitido muda os números que o cliente recebeu.** Releia **antes** de emitir, nunca depois.
> - **Não leia no meio do ciclo e emita assim.** O número é o de **agora**: uma leitura anterior ao fim do ciclo traz um mês incompleto, sem aviso na tela (a regra do mês em andamento do relatório vale como sempre).
> - **Substituir a planilha perde a categoria editorial que vinha nela.** As publicações lidas chegam como **Geral**. Se a categoria importa para este cliente, mantenha a planilha ou volte a ela.
> - **Uma fonte por rede também depois da leitura.** A pergunta da substituição só existe ao **ler da Meta**. Se você importar uma planilha da mesma rede **depois** de ler, o sistema não pergunta nada. Decida qual fonte vale e deixe uma só: **Voltar para a planilha** ou **Remover a leitura**.
> - **Cliente com a mesma Página de outro cliente** recebe os mesmos números. Se dois relatórios saírem iguais, avise o super-administrador.
{: .warning }

## Quando dá errado

| A mensagem diz | O que fazer |
|---|---|
| **Ligação expirada: peça ao administrador para renovar.** / **A conta da Meta perdeu a permissão de leitura …** | O super-administrador renova. Use a planilha enquanto isso |
| **Já há uma leitura da Meta deste cliente em andamento. Aguarde terminar.** | Outra pessoa (ou outra aba sua) está lendo o mesmo cliente. Espere um instante |
| **Limite de 6 leituras da Meta a cada 10 minutos atingido. Tente de novo em N s.** | Você leu muitas vezes seguidas. Espere o tempo que a mensagem diz |
| **A Meta limitou as leituras por agora. Tente de novo mais tarde.** | A própria Meta pôs um limite de uso. Tente de novo depois, ou use a planilha |
| **Não foi possível ler a Meta: …** | A Meta não respondeu ou recusou algo. Tente de novo; se repetir, leve a mensagem ao suporte |
| **O app da Meta não está configurado (configurações do sistema, aba Meta).** | Problema do super-administrador |
| **Não foi possível baixar o original de "…". Envie a planilha de novo.** (ao voltar para a planilha) | A planilha guardada não pôde ser lida. Importe-a de novo em **Acrescentar Planilha** |
| **"…" precisa de mapeamento de colunas: envie a planilha de novo pelo "Acrescentar Planilha".** (ao voltar) | Importe a planilha de novo e ligue as colunas, como na tarefa 4 |
| O bloco **Ler da Meta** não aparece | O cliente não foi ligado. Fale com o super-administrador |

## Limites do papel

O **analista** lê, relê, volta para a planilha e remove a leitura. **Não** liga o cliente, não renova a ligação, não vê a chave, o app da Meta nem a lista de Páginas. Tudo isso é do **super-administrador**, e a [parte 6]({{ '/administracao/meta/' | relative_url }}) explica. Uma ligação com problema aparece para você só como a frase do bloco e o botão apagado.

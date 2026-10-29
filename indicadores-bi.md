---
title: Indicadores (BI)
parent: "3. O mês do analista"
nav_order: 1
permalink: /mes-do-analista/indicadores/
---

# Indicadores (BI)

Esta página é para quem **produz** o relatório e precisa responder a perguntas que atravessam vários meses: "como foi o trimestre?", "crescemos em relação ao ano passado?". A tela **Indicadores (BI)** fica no menu, logo abaixo de **Visão Geral**. "BI" é a sigla de *business intelligence*; aqui quer dizer só isto: **uma tela para olhar vários meses lado a lado**, com as contas já feitas.

As telas desta página vêm de uma organização fictícia, a **Associação Modelo Aurora**. Nomes e números são inventados.

## Por que usar esta tela

O relatório mensal responde "como foi o mês?". Quando a diretoria pergunta pelo trimestre, a saída antiga era abrir relatório por relatório e somar à mão. É nessa soma que se erra: soma-se o que não se soma (seguidores, por exemplo), compara-se um trimestre inteiro com outro que tem um mês faltando, ou mistura-se o alcance medido de dois jeitos diferentes. A tela faz as contas pela mesma regra para todo mundo e **avisa, em cada cartão, quando uma comparação não é confiável**, em vez de mostrar um percentual que engana.

## De onde vêm os números

Entender a origem evita a maior parte das dúvidas:

- **Dos relatórios do próprio sistema.** Cada mês fechado fica guardado quando você **salva** o relatório. Se você mudou um número no relatório e não salvou, a tela não sabe.
- **O mês em andamento é calculado na hora.** Ele não fica guardado: a cada abertura, a tela refaz a conta com o que está no sistema até hoje, e marca o resultado como **parcial**.
- **Dos marcos históricos, para os meses antigos.** São os totais de meses de antes do primeiro relatório, cadastrados pelo super-administrador no cadastro do cliente (veja a [parte 6]({{ '/administracao/' | relative_url }})). Como só têm os totais (publicações, alcance, impressões, engajamento e seguidores), a tela os marca como **menos detalhados**. Não têm site, cursos nem imprensa.
- **Mais de um relatório no mesmo mês?** Vale o **emitido**; sem ele, o **validado**; sem ele, o **rascunho**. Relatório **consolidado** (vários meses em um) não entra: o mês dele já está nos relatórios mensais. O consolidado, por sua vez, **lê esta mesma base**.
- **Relatório vence marco.** Quando o mês tem os dois, vale o relatório, que é mais detalhado.
- **Mês sem dado aparece como "—", nunca como zero.** Zero quer dizer "aconteceu zero vezes"; o traço quer dizer "não foi medido". A diferença muda a conclusão.

## Passo a passo

### 1. Escolha o cliente e o período

1. Confira o **cliente ativo** no alto da tela. Os indicadores são sempre do cliente ativo.
2. Em **Período**, clique num atalho: **1º tri**, **2º tri**, **3º tri**, **4º tri**, **1º sem**, **2º sem**, **Ano** ou **Tudo** (do primeiro ao último mês com dado). Os atalhos de trimestre, semestre e ano valem para o ano em que o período da tela começa (com **Tudo** ativo, o ano do último mês).
3. Para um intervalo qualquer, use **De** e **Até** (mês e ano). A etiqueta **Personalizado** se acende quando o período não é nenhum dos atalhos. Se você escolher um início depois do fim, o outro lado acompanha.
4. Decida o interruptor **Incluir mês em andamento (parcial)**. Ele já vem ligado. Desligado, o mês que ainda não fechou **sai dos cartões, dos gráficos e da tabela**.

Ao abrir a tela pela primeira vez, o período é o **trimestre do mês mais recente com dado**.

![Tela Indicadores (BI) com o período 3º tri de 2026, os atalhos de período, o interruptor do mês em andamento e a lista de indicadores marcados]({{ '/assets/img/app/app-31-bi-periodo-indicadores.png' | relative_url }})

### 2. Escolha os indicadores

Em **Indicadores**, marque os que quer ver. São onze: **Publicações**, **Alcance**, **Impressões**, **Engajamento**, **Taxa de engajamento**, **Seguidores**, **Frequência semanal**, **Menções**, **Visitas ao site**, **Inscrições** e **Conclusões**.

Os botões em lote poupam cliques: **Todos** marca os onze, **Nenhum** limpa a lista e **Padrão** volta aos quatro iniciais (Publicações, Alcance, Engajamento e Seguidores). Com nenhum marcado, a tela pede que você marque ao menos um.

Cada indicador tem seu cartão e seu gráfico. Eles não se misturam, porque as escalas são diferentes: seguidores na casa dos milhares ao lado de uma taxa de 3,7% deixaria a taxa invisível.

### 3. Leia os cartões

Cada cartão traz o **valor do período**, a linha que diz de onde ele vem ("soma dos meses", "no último mês com dado") e **duas comparações**, quando há dados:

- **Contra o período anterior**: a janela imediatamente antes, **do mesmo tamanho**. Para o 3º trimestre de 2026, é o 2º trimestre.
- **Contra o mesmo período do ano passado**: as mesmas datas, um ano antes.

Em **Tudo** não há comparação, porque não existe "antes" do primeiro mês: o cartão diz "sem comparação em 'Tudo'".

![Quatro cartões de indicadores do 3º trimestre de 2026, com o valor do período e as comparações com o período anterior e com o ano passado]({{ '/assets/img/app/app-32-bi-cartoes.png' | relative_url }})

Como cada indicador é calculado no período:

| Indicador | Como o valor do período é calculado |
|---|---|
| Publicações, Alcance, Impressões, Engajamento, Menções, Visitas ao site, Inscrições, Conclusões | **soma** dos meses |
| Taxa de engajamento | engajamento ÷ impressões do **período inteiro**, e não a média das taxas dos meses |
| Seguidores | o valor do **último mês com dado**, com o **ganho no período** (quanto subiu desde o início) |
| Frequência semanal | publicações por semana no período inteiro |

A seta mostra a direção (**alta**, **queda**, **estável**); a variação da taxa de engajamento é dada em **pontos percentuais** (p.p.), porque é a diferença entre duas porcentagens.

### 4. Entenda os selos

Os **selos** amarelos avisam que o número pede cuidado. Eles são o motivo de a tela ser confiável: ela diz o que não sabe.

| Selo ou texto | O que significa | O que fazer |
|---|---|---|
| **parcial** | o período inclui o mês em andamento. A variação sai em cinza, "(parcial, sem tendência)", sem seta de alta ou queda | espere o mês fechar para tirar conclusão, ou desligue o interruptor |
| **inclui marco histórico (menos detalhado)** | algum mês do período vem do cadastro do cliente, não de um relatório | leia como ordem de grandeza; não espere detalhe por rede |
| **definições de alcance diferentes** | os meses usam medidas de alcance diferentes (**Alcance** e **Visualizadores**, no Facebook). O **total some** ("sem total") quando o período mistura as duas, e a comparação diz "sem comparação" | não some nem compare: alcance de medidas diferentes não é a mesma coisa |
| **alcance de fontes mistas (conta e publicações)** | alguns meses têm o alcance da conta e outros só o somado das publicações | trate a soma com cautela |
| **redes não comparáveis** | os seguidores são de conjuntos de redes diferentes nos dois lados | a comparação não é feita; veja abaixo |
| **sem dados suficientes (k de n meses)** | só **k** dos **n** meses do período têm esse dado | complete os meses que faltam, ou aceite que não há comparação |
| **sem base de comparação (anterior = 0)** | o período de referência vale zero, e variação sobre zero não existe | não há o que concluir |

![Cartões de alcance e seguidores do 2º trimestre de 2026: alcance sem total pelas definições diferentes, seguidores com o selo de redes não comparáveis]({{ '/assets/img/app/app-33-bi-selos.png' | relative_url }})

**Por que o total do alcance some.** O Facebook deixou de informar **Alcance** e passou a informar **Visualizadores** (veja a [pergunta frequente]({{ '/perguntas-frequentes/' | relative_url }}) sobre o assunto). Somar meses medidos de um jeito com meses medidos de outro daria um número que não é nenhum dos dois. A tela prefere mostrar "—" a mostrar um total errado.

**Por que "redes não comparáveis".** Se em um período o cliente tinha Instagram e Facebook e no outro passou a ter também LinkedIn, a soma de seguidores dos dois lados cresce porque entrou uma rede nova, e não porque as pessoas passaram a seguir mais. Quando só **uma** rede existe de um lado, ela fica **fora da comparação** e o cartão diz, por exemplo, "(fora da comparação: linkedin)". Quando as redes não se encontram em nada, o selo aparece e a comparação não é feita. Marcos históricos têm só o total de seguidores, sem rede: só se comparam com outro marco.

![Cartões de publicações e seguidores do 3º trimestre de 2025, com o selo de marco histórico e a comparação indisponível]({{ '/assets/img/app/app-34-bi-marco.png' | relative_url }})

### 5. Leia os gráficos

Cada indicador marcado tem um gráfico de linhas com **até três linhas**, alinhadas pela posição do mês:

- **linha cheia**, na cor do cliente: o período escolhido;
- **linha tracejada**, cinza-escura: o período anterior;
- **linha pontilhada**, cinza-clara: o mesmo período do ano passado.

Os marcadores também falam: **quadrado** é mês de **marco histórico** (menos detalhado) e **círculo tracejado**, com o trecho final tracejado, é o **mês em andamento** (parcial). Mês sem dado deixa a linha **interrompida**, em vez de despencar até zero.

![Gráficos de publicações e seguidores com o mês em andamento marcado por círculo tracejado]({{ '/assets/img/app/app-35-bi-graficos-parcial.png' | relative_url }})

![Gráficos de publicações e alcance com os meses de marco histórico marcados por quadrados]({{ '/assets/img/app/app-36-bi-graficos-marco.png' | relative_url }})

### 6. Use a tabela de meses

No fim da tela, **Meses do período** lista cada mês, com **origem** (Relatório ou Marco histórico), **status** (Rascunho, Validado ou Emitido), o selo **parcial — dados até DD/MM** quando for o caso e os indicadores marcados.

- **Abrir relatório** leva à revisão daquele mês. Mês de marco diz "sem relatório".
- Marque os meses que quer (ou **Selecionar todos**) e use **Exportar CSV dos marcados** ou **Copiar como tabela**. O CSV separa as colunas por **ponto e vírgula**, usa vírgula nos decimais e não põe ponto de milhar, que é o que o Excel e o LibreOffice em português esperam (os acentos saem certos); mês sem dado fica em branco, e não zero. A cópia cola direto numa planilha. A coluna **Observação** leva os selos, para quem receber a planilha saber que o número é parcial.
- Os botões ficam apagados enquanto nenhum mês estiver marcado, e uma linha de aviso diz quantos meses foram exportados ou copiados.

![Tabela de meses do período com dois meses marcados, os botões de exportar e copiar e o botão Abrir relatório em cada linha]({{ '/assets/img/app/app-37-bi-tabela.png' | relative_url }})

### 7. Mande o link para um colega

O endereço da tela guarda **o período, os indicadores marcados e o interruptor do mês em andamento**. Copie o endereço do navegador e envie: o colega abre a tela já do mesmo jeito. Algo como `#/indicadores?de=2026-07&ate=2026-09&ind=posts,alcance&parcial=1`.

> **O endereço não leva o cliente.** Quem abre vê os indicadores do **cliente que tiver ativo** na própria tela. Antes de discutir um número com o colega, confira nos dois lados o cliente no alto. E, como a tela exige login, o link serve para a equipe, e não para o cliente: quem não tem conta não abre.
{: .warning }

### 8. Leve o período para um relatório consolidado

Com o período e os indicadores que você quer na tela, o botão **Gerar consolidado deste período**, no alto, leva à tela **Consolidados** já com as datas preenchidas, para criar **um book só** do período, com análise e conclusão. Se o período não puder virar consolidado (um mês só, mais de 24 meses ou um mês que ainda não começou), o botão fica apagado e uma linha diz o motivo. Veja [Relatório consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }}).

## Exemplo: o 3º trimestre da Associação Modelo Aurora

A diretoria pergunta: "o trimestre foi melhor ou pior que o do ano passado?". Você clica em **3º tri**, deixa os quatro indicadores padrão e lê:

- **Publicações: 42.** Igual ao 2º trimestre (0,0%, **estável**) e 28,8% **abaixo** do 3º trimestre de 2025, que teve 59.
- **Seguidores: 5.960 em setembro**, com **ganho de 180 no trimestre (+3,1%)**. Contra o 3º trimestre de 2025, **+13,2%**, "fora da comparação: linkedin", porque essa rede só entrou nos relatórios em maio de 2026.
- **Alcance: 54.457, sem comparação.** Os meses usam definições diferentes, e a tela se recusa a comparar.

A decisão: a queda em publicações é real, e o ritmo de crescimento de seguidores é bom. A conversa com a diretoria deve ser "publicamos menos e crescemos mais", e **não** "o alcance caiu", porque a tela não afirma isso. Para o comparativo do alcance, o caminho é esperar os dois lados estarem na mesma medida.

## Dicas e armadilhas

- **Antes de comparar, olhe o selo, depois o número.** Um "+13,2%" com selo de marco e rede fora da comparação é uma pista, não uma prova.
- **Mês em andamento ligado ou desligado?** Ligado, o período inclui o mês incompleto, e a soma parece menor do que será. Desligado, o período fica com menos meses e a comparação com uma janela cheia diz "sem dados suficientes (2 de 3 meses)". Para o relatório que vai ao cliente, **feche o mês antes**. Para acompanhar o andamento, deixe ligado e leia o selo.
- **O alcance de um período é soma de meses, não pessoas diferentes.** A mesma pessoa pode estar nos três meses do trimestre. Diga "alcance somado de 54 mil", e não "alcançamos 54 mil pessoas". Veja [Alcance]({{ '/conceitos/' | relative_url }}).
- **Seguidores não se somam.** O cartão mostra o valor do **último** mês com dado. Se esse mês é o em andamento, o número é provisório.
- **Período diferente, conclusão diferente.** Comparar o 3º trimestre com o 4º, ou janeiro a março com abril a junho, mistura estações do ano. A comparação com o **mesmo período do ano passado** existe justamente para isso.
- **Número do BI diferente do relatório?** Salve o relatório do mês de novo: é o salvamento que atualiza a base. Se o mês tem rascunho e relatório emitido, vale o emitido.
- **Planilha para o cliente.** Exporte só os meses que ele precisa e diga, no corpo da mensagem, se o último é parcial. A coluna **Observação** ajuda, mas é fácil de passar batido.

## Quando dá errado

| O que você vê | O que significa | O que fazer |
|---|---|---|
| "Escolha um cliente para ver os indicadores." | não há cliente ativo | escolha um no seletor do alto da tela |
| "Este cliente ainda não tem meses com dados para os indicadores." | nenhum relatório salvo e nenhum marco histórico | salve o primeiro relatório do cliente, ou peça ao super-administrador que cadastre os marcos |
| Mensagem em vermelho no lugar dos cartões | a tela não conseguiu ler a base | recarregue a página; se continuar, avise o suporte técnico |
| "Marque ao menos um indicador para ver os cartões e os gráficos." | a lista de indicadores está vazia | clique em **Padrão** ou marque os que quer |
| "Nenhum mês com dados neste período." (tabela) | o período não tem nenhum mês na base | amplie o período ou use **Tudo** |
| Cartão com "—" e "sem dados no período" | nenhum mês do período tem esse indicador (menções, visitas, inscrições e conclusões só existem em meses de relatório) | confira se o site e os cursos estavam ligados naquele mês |
| Comparação "sem dados suficientes (1 de 3 meses)" | só um dos três meses tem o dado | complete os relatórios que faltam, ou leia só o valor do período |
| O colega vê outros números com o mesmo link | o link não leva o cliente | confira o cliente ativo dos dois |

## Limites do papel

O **analista** e o **super-administrador** veem a tela e exportam. Cadastrar os **marcos históricos** é do super-administrador, pelo cadastro do cliente. Corrigir um número é feito **no relatório do mês**, não aqui: a tela só lê.

Veja também: [O mês do analista]({{ '/mes-do-analista/' | relative_url }}), [Relatório consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }}), [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}) e o [Glossário]({{ '/glossario/' | relative_url }}).

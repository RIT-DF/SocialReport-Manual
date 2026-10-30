---
title: Relatório consolidado
parent: "3. O mês do analista"
nav_order: 3
permalink: /mes-do-analista/consolidado/
---

# Relatório consolidado

Esta página é para quem **produz** o relatório. O **relatório consolidado** junta vários meses (um trimestre, um semestre, um ano ou um período que você escolher) em **um book só**, com o mesmo cuidado do relatório mensal: números com as comparações já feitas, avisos de quando a conta não é confiável, textos que você revisa, link público, PDF e envio por e-mail. A tela **Consolidados** fica no menu, logo abaixo de **Períodos & Emissão**.

As telas e os slides desta página vêm de uma organização fictícia, a **Associação Modelo Aurora**. Nomes e números são inventados.

## Por que usar

A diretoria raramente quer doze relatórios. Ela quer saber "como foi o ano?" ou "o trimestre fechou bem?". Sem o consolidado, a saída era entregar os mensais e deixar a conclusão para quem lê, ou montar uma apresentação à mão, somando números de cabeça. É nessa soma que se erra: soma-se o que não se soma, esquece-se um mês sem dado, compara-se um trimestre inteiro com outro que tem um mês faltando.

O consolidado faz as contas **pela mesma regra dos [Indicadores (BI)]({{ '/mes-do-analista/indicadores/' | relative_url }})** e, em cada número, **diz quando a comparação não é confiável** em vez de mostrar um percentual que engana. No fim, o cliente recebe **uma peça só**, com análise, recomendações e conclusão do período, e ela entra no [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}) ao lado dos mensais.

> **O consolidado não substitui os mensais.** Ele lê os números dos relatórios mensais **salvos**. Se o mês de agosto não tem relatório, o consolidado não inventa agosto: diz que ele ficou sem dado. Corrigir um número continua sendo feito **no relatório do mês**.
{: .note }

## De onde vêm os números

- **Da mesma base dos Indicadores (BI).** Cada mês vem do relatório mensal salvo (vale o **emitido**; sem ele, o **validado**; sem ele, o **rascunho**), ou do **marco histórico** cadastrado no cliente, quando o mês é antigo e não tem relatório.
- **O mês em andamento entra.** Diferente dos Indicadores, aqui **não há interruptor**: o consolidado é feito por você, que sabe o que está entregando. O mês incompleto entra com o selo **parcial**, e as variações dele saem **neutras**, sem seta de alta ou queda.
- **Os números ficam guardados no consolidado.** Ao criar, o sistema tira um "retrato" da base e o guarda. A partir daí, o link público e o PDF mostram **esse retrato**, e não a base ao vivo. Isso evita que um relatório já entregue mude sozinho. Se a base mudou depois, a revisão avisa e você decide se atualiza (veja [a seção 1 da revisão](#1-situação-dos-meses)).
- **Mês sem dado aparece fora das somas, nunca como zero.** E o total diz quantos meses entraram: "soma de 2 de 3 meses".
- **Mês vazio também não conta.** Um mês [criado sem planilha]({{ '/mes-do-analista/#criar-o-mês-sem-planilha' | relative_url }}) que ainda não recebeu nenhuma publicação **não aparece** no consolidado: para as contas, é como se o mês não tivesse relatório. Leia das redes ou acrescente a planilha **antes** de criar o consolidado, e confira a prévia de cobertura.

## Criar um consolidado

### 1. Escolha o período

Há dois caminhos para chegar ao mesmo lugar:

- No menu, clique em **Consolidados**. No alto da tela está o painel **Novo consolidado**.
- Nos **Indicadores (BI)**, com o período que você quer já na tela, clique em **Gerar consolidado deste período**. A tela **Consolidados** abre com as datas preenchidas. Se o período não puder virar consolidado, o botão fica apagado e uma linha diz o motivo.

No painel, escolha o período pelos atalhos **1º tri**, **2º tri**, **3º tri**, **4º tri**, **1º sem**, **2º sem**, **Ano** ou **Tudo**, ou por **De** e **Até** (mês e ano). A etiqueta **Personalizado** acende quando o período não é nenhum dos atalhos. Ao abrir a tela sem datas, ela sugere o **último trimestre civil fechado**, o caso mais comum: o analista fecha o trimestre que acabou.

![Painel Novo consolidado com o 3º trimestre de 2026 escolhido e a prévia: 3 de 3 meses com dado, os três meses marcados como Fechado, e o botão Criar consolidado]({{ '/assets/img/app/app-42-consolidado-novo.png' | relative_url }})

As regras do período valem na prévia e no servidor:

- **De 2 a 24 meses.** Um mês só não é consolidado (é o relatório mensal), e mais de dois anos vira outra pergunta.
- **Sem mês futuro.** O último mês não pode passar do mês corrente.
- **O ano corrente vai de janeiro até o mês atual.** Em outubro, o atalho **Ano** de 2026 vira "2026 (janeiro a outubro)".

### 2. Leia a prévia de cobertura

**Antes de criar, o painel mostra o que o consolidado vai encontrar em cada mês.** É a parte mais útil da tela, porque é aqui que você descobre, em dois segundos, se o período está pronto:

- **"k de n meses com dado"**: quantos meses têm número. Todos? Ótimo. Faltou algum? Vale ir ao mês faltante antes de criar.
- **Meses em andamento**, com "dados até DD/MM".
- **Meses de marco histórico**, que entram nos totais, mas **sem detalhe por rede nem posts**.
- **Meses sem dado**, que ficam fora das somas.
- **Meses com relatório em rascunho**, para você lembrar de validar ou emitir o mensal antes.

Cada mês também aparece num selo: **Fechado**, **Em andamento**, **Marco histórico** ou **Sem dado**.

![Prévia do ano de 2025: 11 de 12 meses com dado, 8 meses de marco histórico, 1 mês sem dado, e cada mês com seu selo (Marco histórico, Fechado, Sem dado)]({{ '/assets/img/app/app-43-consolidado-previa-marcos.png' | relative_url }})

![Prévia de 2026 de janeiro a outubro: 10 de 10 meses com dado, 1 mês em andamento (dados até 20/10) e 1 mês com relatório em rascunho]({{ '/assets/img/app/app-53-consolidado-previa-ano-corrente.png' | relative_url }})

Quando o período não vale, a prévia diz por quê e o botão **Criar consolidado** fica apagado: "O período não pode passar do mês corrente.", "O consolidado precisa de pelo menos 2 meses." ou "O consolidado tem no máximo 24 meses.".

![Prévia recusada com a mensagem O período não pode passar do mês corrente e o botão Criar consolidado apagado]({{ '/assets/img/app/app-44-consolidado-previa-recusada.png' | relative_url }})

### 3. Crie

Clique em **Criar consolidado**. O sistema monta o retrato e abre a **revisão**. **Para cada cliente e cada intervalo existe um consolidado só.** Se você pedir um que já existe, o sistema não cria outro: **abre o que já existe** e avisa "Já havia um consolidado deste cliente para este período: ele foi aberto, em vez de criar outro.". Isso protege contra dois relatórios diferentes para o mesmo trimestre circulando ao mesmo tempo.

## A lista dos consolidados

A mesma tela, logo abaixo do painel, lista os consolidados do cliente ativo. Cada linha mostra o período, o status (**Rascunho**, **Validado** ou **Emitido**), a quantidade de meses, as datas, a data de emissão e, quando é o caso, "sem análise da IA".

![Lista com três consolidados: 3º trimestre de 2026 emitido, agosto a outubro de 2026 em rascunho e 2025 em rascunho, cada um com os botões Abrir revisão, Ver book, Copiar link, Gerar novo link e Excluir]({{ '/assets/img/app/app-45-consolidados-lista.png' | relative_url }})

**Ações de cada consolidado:**

- **Abrir revisão**: a tela de trabalho, descrita abaixo.
- **Ver book**: abre direto o book, para conferir como o cliente verá. Não grava nada.
- **Copiar link**: copia o link público. Se o consolidado ainda não foi emitido, o aviso lembra: "Atenção: este consolidado ainda não foi emitido."
- **Gerar novo link**: troca o endereço. O antigo **deixa de abrir na hora**, mesmo para quem já o recebeu; a confirmação avisa isso.
- **Excluir**: apaga o consolidado. Os relatórios mensais **não mudam**. Não dá para desfazer, e, se ele estava emitido, o link público dele para de abrir.

**Ações em lote.** Marque os consolidados (ou **Selecionar todos**) e use a barra:

- **Copiar links dos emitidos**: uma linha por consolidado, com o período e o endereço. Os que não foram emitidos são **recusados** (e aparecem na lista de recusados, com o motivo "ainda não foi emitido").
- **Atualizar números**: refaz o retrato dos marcados a partir da base atual. Os **emitidos ficam de fora** ("já emitido: atualize pela revisão, que pede confirmação"), de propósito, porque atualizar um emitido muda o que o cliente vê.
- **Excluir**: apaga os marcados.

Toda ação em lote pede confirmação que **diz quantos** consolidados serão afetados, e o resultado separa **concluídos**, **recusados por regra** e **falhos**.

![Dois consolidados marcados na lista, com a barra mostrando Selecionar todos, 2 selecionados e os botões Copiar links dos emitidos, Atualizar números e Excluir]({{ '/assets/img/app/app-46-consolidados-lote.png' | relative_url }})

> **Excluir em lote não separa os emitidos.** Diferente da exclusão de períodos (que recusa os emitidos), aqui a confirmação **conta quantos dos marcados estão emitidos** e avisa que os links deles vão parar de abrir. Leia a contagem antes de confirmar.
{: .warning }

## A revisão, seção por seção

Clique em **Abrir revisão** (ou crie um consolidado novo). No alto estão o período, o cliente, o status, o número de meses e as datas. Os três botões do alto:

- **Visualizar book**: abre o book com as **suas edições que ainda não foram salvas**. **Não grava nada.**
- **Salvar**: grava os textos e a escolha dos posts. Um consolidado novo vira **validado**; um consolidado **emitido continua emitido**, nunca é rebaixado.
- **Emitir**: grava e marca como **emitido**. Veja [a seção Emitir](#emitir).

Quando há alterações que ainda não foram salvas, uma faixa avisa: "Há alterações não salvas (textos ou escolha dos posts)". **Números, linhas e comparações não se editam aqui:** eles vêm da base. Você edita textos, a escolha dos posts, a capa e o status.

### 1. Situação dos meses

Uma tabela, uma linha por mês: a **situação** (Fechado, Em andamento com "dados até", Marco histórico, Sem dado), o status do **relatório do mês** que a base usou (Emitido, Validado, Rascunho), se **site** ou **cursos** estão **parciais** e qual **definição de alcance** o mês usa (**Alcance**, **Visualizadores**, **Visualizações no lugar do alcance**, no mês em que o YouTube está entre as redes, ou **Mista**, quando o mês mistura definições).

![Seção Situação dos meses do consolidado de agosto a outubro: agosto e setembro fechados, outubro em andamento com dados até 20/10 e relatório em rascunho, agosto com site parcial]({{ '/assets/img/app/app-48-consolidado-situacao-parcial.png' | relative_url }})

**Atualizar números.** Se você mudou algo num mês depois de criar o consolidado (salvou um relatório de novo, emitiu o que estava em rascunho), a base não é a mesma do retrato. A revisão avisa: "A base mensal mudou depois deste retrato" e lista os meses. **Nada se atualiza sozinho.** Clique em **Atualizar números** para trazer os valores novos.

- O que **continua**: os textos que você editou e a escolha manual dos posts que ainda forem candidatos.
- Num consolidado **emitido**, o sistema pede confirmação: "o link público passa a mostrar os números novos. Ele continua emitido". Pense antes: o cliente que já leu vai ver outro número.

![Consolidado do 3º trimestre com o aviso A base mensal mudou depois deste retrato (2026-08) e o botão Atualizar números]({{ '/assets/img/app/app-47-consolidado-situacao-meses.png' | relative_url }})

### 2. Melhores posts do período

O book mostra **até 3 posts** como evidência do período. A tela lista os **10 candidatos**: os de maior engajamento ponderado entre os meses que têm relatório (o mesmo critério do mensal, com os atípicos marcados). Meses de marco histórico não têm posts.

- **Escolha automática** (o padrão): os três primeiros da lista.
- **Escolha sua**: marque e desmarque os que quiser, **até 3**. Tentar marcar o quarto é recusado, com o motivo.
- Em lote: **Voltar à escolha automática** e **Desmarcar todos**. Não há "selecionar todos" aqui, porque o book só leva três.

Cada candidato mostra o canal, o formato, o mês, o engajamento, o alcance (ou **visualizadores**) e os avisos **atípico** ou **mês em andamento**. O ícone à direita abre o post original.

![Seção Melhores posts do período com dez candidatos, três marcados, a indicação 3 de 3 escolhidos e os botões Voltar à escolha automática e Desmarcar todos]({{ '/assets/img/app/app-49-consolidado-posts.png' | relative_url }})

> **O consolidado não guarda a imagem dos posts.** O slide mostra título, canal, mês, alcance, engajamento e o link para o post original. Se o post escolhido não tem imagem disponível, o espaço da imagem fica com um ícone no lugar.
{: .note }

Sem nenhum post escolhido, o slide de melhores posts **sai do book**, e o aviso aparece na hora de emitir.

### 3. Site e cursos do período

Esta seção só aparece para o cliente que tem site ou cursos ligados. Ela decide **de onde vem o capítulo**:

- **Buscar o site do período** e **Buscar cursos do período** leem, pelo servidor, **o intervalo inteiro** (do primeiro ao último dia), comparado com **a janela anterior do mesmo tamanho**. O capítulo ganha os mesmos slides do relatório mensal: visão, origens, conversões, receitas (loja) e conteúdo e público.
- **Sem a leitura** (ou se ela falhar), o capítulo usa a **série mensal da base**: a soma das visitas, inscrições e conclusões **mês a mês**, com as duas comparações e um gráfico. É menos rico, mas é fiel ao que foi salvo.

A tela diz em qual dos dois você está: "Lido para o período inteiro em DD/MM/AAAA" ou "Sem leitura do período inteiro: o capítulo usa a série mensal da base." E, quando a busca falha, diz o motivo e termina com "O capítulo continua na série mensal da base.".

**Leitura que dá certo, mas sem visitas.** Pode acontecer de a busca funcionar e o site **não ter registrado visitas** no período (ou a medição ter começado depois dele). Nesse caso o capítulo **não usa a leitura**: ele fica com a série mensal da base, e a tela avisa, no lugar da frase "Site lido para o período inteiro": **"O site foi lido, mas não registrou visitas neste período (ou a medição começou depois dele). O capítulo continua na série mensal da base."** Os cursos têm o aviso equivalente, para **inscrições e conclusões**. Não é erro: é a tela dizendo, com franqueza, de onde vem o capítulo. A indicação de que a leitura foi feita só aparece quando ela de fato entra no book.

![Seção Site e cursos do período: o site lido para o período inteiro, e os cursos sem leitura, com o aviso de que o complemento do Moodle lê no máximo 400 dias e o capítulo continua na série mensal]({{ '/assets/img/app/app-50-consolidado-site-cursos.png' | relative_url }})

**Por que a leitura dos cursos às vezes não acontece.** O **complemento do Moodle** lê, no máximo, **400 dias por vez** (cerca de **13 meses**). O consolidado lê também o período anterior e o mesmo período do ano passado, e **cada janela** tem de caber nesse limite. Um consolidado de 14 meses ou mais, ou de 24 meses, ficará com o capítulo de cursos na **série mensal**, e a tela explica o motivo. O **site** (Matomo) não tem esse limite de dias, mas um intervalo grande pode demorar: se a leitura falhar ou estourar o tempo, o capítulo também fica na série mensal, e a tela diz o motivo sem quebrar nada.

> **Dica.** Para um ano inteiro, aceite a série mensal nos cursos: ela soma os meses que você já salvou, e é justamente o que o consolidado quer mostrar. Reserve a leitura do período inteiro para trimestres e semestres, onde os detalhes (origens, tabela de cursos) agregam.
{: .tip }

### 4. Análise e textos

O book tem sete textos: **Resumo executivo**, **Redes sociais**, **Site**, **Cursos**, **Análise do período**, **Recomendações e próximos passos** (um passo por linha) e **Conclusão**. Cada um tem **uma origem**, que aparece num selo ao lado do título:

| Selo | O que significa |
|---|---|
| **Números** | texto montado pelo sistema a partir dos números do período, sem IA |
| **IA** | texto que a inteligência artificial escreveu |
| **Editado por você** | texto que você escreveu ou alterou |

**Quem vale primeiro:** o que você editou vale mais que a IA, e a IA vale mais que o texto dos números. Por isso, **Gerar de novo** troca só o texto da IA e **nunca apaga o que você editou**.

![Seção Análise e textos, com os avisos de análise feita com números anteriores e de números a conferir, e os campos com os selos IA, Números e Editado por você]({{ '/assets/img/app/app-51-consolidado-textos.png' | relative_url }})

- **Gerar análise** (e, depois, **Gerar de novo**) pede o texto à IA. **Quem chama a IA é o servidor**, com os números do retrato e, no máximo, cinco publicações resumidas. A IA **não recebe a lista inteira de posts**, e nenhuma chave de IA passa pelo seu navegador.
- Por texto, **Voltar ao texto da IA** (ou **Voltar ao texto dos números**, quando ainda não há IA) descarta a sua edição daquele campo; **Ocultar** tira o campo do book (a etiqueta **Oculto no book** aparece), e basta escrever de novo para ele voltar.
- Em lote, **Descartar todas as edições** pede confirmação dizendo **quantos** textos e **quais** vão voltar.
- Suas edições só vão ao servidor quando você clica em **Salvar** ou **Emitir**; o **Visualizar book** já as mostra.

**Dois avisos que a revisão dá, e que você deve ler:**

- **"Análise feita com números anteriores."** Você atualizou os números depois de gerar a análise. O texto pode citar valores que mudaram. Gere de novo ou confira.
- **"Números a conferir na análise da IA."** O sistema procura, no texto da IA, números que **não aparecem** nos dados do período, e também palavras como "queda" ou "alta" numa comparação com **mês em andamento**. Cada caso é listado ("Resumo executivo: "99.999" não aparece nos números do período"). É uma ajuda para você conferir, e não uma garantia: **leia o texto inteiro**.

### 5. Capa

Igual à do relatório mensal: o modelo da capa vem do cadastro do cliente, e você pode trocar a imagem, quando o modelo aceita. Veja a [tarefa 10 do mês do analista]({{ '/mes-do-analista/#10-conferir-a-capa-e-as-imagens-dos-melhores-posts' | relative_url }}).

### Emitir

Clique em **Emitir**. Antes de gravar, o sistema abre um diálogo com **os avisos pendentes**. **Nenhum deles impede a emissão**: emitir é decisão sua. Eles existem para que você não emita sem perceber.

![Diálogo Emitir este consolidado com quatro avisos pendentes: inclui mês em andamento, mês em rascunho, análise feita com números anteriores e dois números da análise que não conferem]({{ '/assets/img/app/app-52-consolidado-emitir.png' | relative_url }})

Os avisos possíveis:

- **Meses incompletos**: "N de M meses sem dado".
- **Inclui mês em andamento**: as variações saem neutras.
- **Inclui marco histórico**: sem detalhe por rede nem posts.
- **Meses com relatório em rascunho**.
- **A base mensal mudou** depois do retrato.
- **A análise da IA foi feita com números anteriores**.
- **Números da análise que não conferem**.
- **Nenhum melhor post escolhido**.

Sem avisos, o diálogo diz "Nenhum aviso pendente." Ao confirmar, o consolidado fica **emitido**: entra no portfólio e o link público mostra esta versão. Um consolidado já emitido pode ser emitido de novo, e o diálogo diz isso ("Emitir de novo este consolidado?").

## O book

O book do consolidado é um deck 16:9 como o do mensal: setas ou teclado, sumário clicável, PDF e link. Ele **só mostra o capítulo que tem dado**: capítulo sem dado não tem slide nem item no sumário.

![Capa do consolidado de agosto a outubro: período auditado, base de seguidores e o selo Inclui mês em andamento, dados até 20/10]({{ '/assets/img/app/app-54-consolidado-slide-capa.png' | relative_url }})

A capa diz **Relatório consolidado**, o **período auditado** (as datas reais dos ciclos), a **base de seguidores** no fim do período e, quando há mês incompleto, o selo **"Inclui mês em andamento: dados até DD/MM"**.

| Capítulo | O que mostra |
|---|---|
| **Sumário** | só os capítulos que existem |
| **1. Meses do período** | cada mês com a origem (Relatório, Marco histórico ou Sem dado), o status do relatório, a situação ("Fechado", "Em andamento (dados até DD/MM)", "Menos detalhado", "Fora das somas"), site e cursos parciais e a definição do alcance, mais a legenda das regras |
| **2. Resumo executivo** | um cartão por indicador que tem dado, cada um com **duas comparações** (**vs. anterior** e **vs. ano passado**) e o texto do resumo |
| **3. Evolução mensal** | até quatro gráficos por slide, mês a mês, com o período, o período anterior e o mesmo período do ano passado |
| **4. Evolução por rede** | até três redes por slide: totais, variação, seguidores do início ao fim e a linha das interações por mês |
| **5. Melhores posts** | os até três escolhidos, com o mês |
| **5.1. Melhor post de cada rede** | só quando há mais de uma rede |
| **Site** e **Cursos** | os slides do mensal (se você buscou o período) ou a série mensal, com a nota "Soma das visitas registradas mês a mês na base" |
| **Análise do período**, **Recomendações e próximos passos**, **Conclusão** | os textos da seção 4 da revisão; textos longos continuam em outro slide, sem cortar |

![Slide Meses do período do 3º trimestre, com a tabela de três meses fechados e a legenda das regras]({{ '/assets/img/app/app-56-consolidado-slide-meses.png' | relative_url }})

![Slide Resumo executivo do 3º trimestre de 2026 com oito cartões de indicadores, cada um com as comparações vs. anterior e vs. ano passado e os selos de aviso]({{ '/assets/img/app/app-57-consolidado-slide-resumo.png' | relative_url }})

![Slide Evolução mensal com quatro gráficos de linhas e a legenda dos marcadores]({{ '/assets/img/app/app-58-consolidado-slide-evolucao.png' | relative_url }})

### As regras que o book aplica

Elas são as mesmas dos Indicadores (BI), e o book as **explica no próprio slide**. Entenda o que você vai ver:

- **Somam-se:** publicações, impressões, interações, menções, visitas, inscrições e conclusões. A **taxa de engajamento** é as interações do período ÷ as impressões do período, e não a média das taxas dos meses. A **frequência semanal** é o total de publicações dividido pelas semanas do período.
- **Seguidores não se somam:** vale o do **último mês com dado**, com o ganho desde o mês anterior ao início. Só entram na conta as redes que existem **nos dois lados**; as que ficaram de fora aparecem como "(fora da comparação: linkedin)". Marco contra relatório vira "redes não comparáveis", sem percentual.
- **Alcance com definições diferentes fica "—".** O alcance só é somado quando **todos os meses usam a mesma definição** (todos **Alcance**, ou todos **Visualizadores**). Com **Alcance** misturado a **Visualizadores**, ou com um mês **Mista**, o total some, aparece "definições de alcance diferentes: sem total" e a comparação diz "sem comparação". O mesmo vale para cada rede. Um mês só de **Visualizações no lugar do alcance** (o YouTube) soma com outro mês igual, e não com um mês de **Alcance**. O rótulo do cartão lembra: **"Alcance — soma dos meses (a mesma pessoa pode ser contada em meses diferentes)"**.
- **Rede que não informa alcance fica "alcance não informado".** Se, num mês, uma rede tem **alcance 0 e impressões acima de 0** (acontece quando o alcance não veio na planilha, ou a rede não o informa), o consolidado **não trata o 0 como número**: o total de alcance daquela rede fica vazio, a comparação diz o motivo, e o slide **Evolução por rede** escreve **"alcance não informado pela rede"**. A análise escrita pela IA recebe a mesma informação e **não pode escrever "0 de alcance"**. Alcance 0 com impressões 0 continua sendo 0. Não é correção do consolidado: é conferir a planilha daquele mês e, se o alcance existe, importá-lo.
- **Cobertura, "k de n meses".** Quando só alguns meses têm o dado, o total diz "soma de k de n meses" e a comparação só acontece se **as duas janelas** estiverem completas. Senão: "sem dados suficientes (k de n meses)". Ausente nunca vira zero. A análise da IA recebe também **quantos meses** cada janela comparada cobre, e por isso cita a cobertura certa de cada comparação, e não a do período inteiro.
- **Marco histórico** entra nos totais com o selo "inclui marco histórico (menos detalhado)". Não tem rede por rede nem posts: na evolução por rede, o slide diz "sem detalhe em N meses (marco histórico)" e o slide de posts diz quantos meses ficaram sem publicações.
- **Mês em andamento:** as variações saem em cinza, "(parcial, sem tendência)", sem seta. O texto do resumo não fala em "subiu" ou "caiu". O selo aparece no rodapé dos slides e na capa. Site e cursos parciais só marcam o indicador correspondente.
- **Ciclos que não são meses civis.** Se algum relatório mensal foi feito com um ciclo diferente do mês do calendário, o período auditado vem dos ciclos reais e uma nota no slide **Meses do período** avisa.

![Slide Evolução por rede de 2026 de janeiro a outubro, com Facebook, Instagram e LinkedIn: alcance sem total pelas definições diferentes, seguidores do início ao fim e o LinkedIn fora da comparação]({{ '/assets/img/app/app-59-consolidado-slide-redes.png' | relative_url }})

![Slide Site no período, com a nota de que o site não foi lido para o intervalo inteiro, o cartão de visitas com a cobertura de 4 de 10 meses e o gráfico mês a mês]({{ '/assets/img/app/app-60-consolidado-slide-site-mensal.png' | relative_url }})

## Link público, e-mail e PDF

**Funcionam exatamente como no relatório mensal.** Com o book aberto (pelo botão **Ver book** ou **Visualizar book**), a barra do alto tem **Compartilhar & Incorporar** e **Imprimir / Salvar PDF (16:9)**. Tudo o que está na [tarefa 12 do mês do analista]({{ '/mes-do-analista/#12-compartilhar-o-link-e-gerar-o-pdf' | relative_url }}) vale aqui: o link direto, o código para incorporar numa página do site, o botão **Gerar novo link** (o antigo deixa de abrir) e o **Enviar o link por e-mail ao cliente**, com a lista de destinatários do cliente, prévia, confirmação e o registro de quem recebeu.

As diferenças são pequenas:

- **O e-mail diz o que é.** O texto e o assunto falam em "o relatório consolidado do 3º trimestre de 2026 de [organização]", e não em "relatório do mês".
- **O nome do PDF** inclui "consolidado" e o período: `associacao-modelo-aurora-consolidado-3-trimestre-de-2026-report.pdf`, por exemplo.
- **O link público lê o retrato guardado.** Ele não consulta a base ao vivo, não chama a IA e só leva os **posts escolhidos** (até três), nunca a lista de candidatos. Quem recebe vê só agregados.

> **Emita antes de enviar.** Um consolidado em rascunho já tem link, e **quem o recebe lê o que estiver salvo**. Copiar o link de um rascunho funciona, mas o sistema avisa. Para o cliente, emita primeiro.
{: .warning }

## O portfólio

O consolidado **emitido** entra sozinho no [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}), com a etiqueta **Consolidado** no cartão, ao lado dos mensais, do mais recente para o mais antigo. O botão **Revisão** do cartão abre a revisão do consolidado. Excluído, ele sai da lista; **em rascunho ou validado, não aparece**. Todas as regras de link do portfólio (desligar, gerar novo, a opção de trocar os links dos relatórios) valem para o consolidado como para qualquer outro relatório.

## Exemplo: o 3º trimestre da Associação Modelo Aurora

A diretoria da Associação Modelo Aurora pede o fechamento do 3º trimestre para a reunião do conselho.

1. Nos **Indicadores (BI)**, você clica em **3º tri** e vê os números do trimestre (veja o [exemplo da página]({{ '/mes-do-analista/indicadores/#exemplo-o-3º-trimestre-da-associação-modelo-aurora' | relative_url }})). Está bom? Clique em **Gerar consolidado deste período**.
2. Na tela **Consolidados**, a prévia diz: **3 de 3 meses com dado**, os três **Fechado**. Você clica em **Criar consolidado**.
3. Na revisão, a **Situação dos meses** mostra agosto com **site parcial**: a medição do site começou no meio do mês. Você anota que o capítulo do site vai trazer essa nota.
4. Em **Site e cursos do período**, clica em **Buscar o site do período**. Para os **cursos**, o trimestre cabe no limite do complemento do Moodle: clica em **Buscar cursos do período** também.
5. Em **Análise e textos**, clica em **Gerar análise**. Você lê o **Resumo executivo**: o alcance **não tem comparação** (os meses usam definições diferentes), e a IA escreveu uma frase que sugere crescimento. Você troca a frase por "o alcance mudou de medida em março; não comparamos com o trimestre anterior". O selo do campo vira **Editado por você**, e um novo **Gerar de novo** não o apagará.
6. Em **Visualizar book**, você percorre os slides. O resumo mostra **Publicações: 42, 28,8% abaixo do ano passado** e **Seguidores: 5.960, ganho de 180 (+3,1%)**, com "fora da comparação: linkedin" na comparação com o ano passado.
7. Em **Emitir**, o diálogo diz "Nenhum aviso pendente". Você confirma, copia o link no **Portfólio** e envia ao conselho.

A conversa da reunião deixa de ser "o alcance caiu" e passa a ser "publicamos menos e crescemos mais": é o que o relatório consegue sustentar.

## Dicas e armadilhas

- **Feche e emita os mensais antes de consolidar.** O consolidado vale o que os meses valem. Mês em **rascunho** entra, mas o diálogo de emissão avisa; mês **sem dado** fica fora das somas. Antes de criar, leia a prévia: ela mostra isso.
- **Se você mudou um mês, atualize os números.** O consolidado guarda um retrato. Sem **Atualizar números**, ele continua com os valores de quando foi criado, e o aviso de base mudada só aparece quando você abre a revisão.
- **Atualizou os números? Gere a análise de novo.** A IA escreveu sobre os números antigos. O aviso "Análise feita com números anteriores" existe para isso.
- **Não leve a análise da IA sem ler.** O aviso de números a conferir é uma rede de segurança, não um revisor. Um texto que cita um número certo no contexto errado passa pelo aviso.
- **Prefira períodos que a diretoria já usa.** Trimestre, semestre e ano fecham com os atalhos. Um período "agosto a outubro" é válido, mas é difícil comparar com o ano passado se ninguém mais o usa.
- **Atenção aos marcos.** Um consolidado de um ano que começa antes do primeiro relatório terá meses de marco: totais, sim; rede por rede e posts, não. O próprio book avisa, mas diga ao cliente.
- **Alcance somado não é pessoas diferentes.** A mesma pessoa pode estar nos três meses do trimestre. Diga "alcance somado de 54 mil", e não "alcançamos 54 mil pessoas". Veja [Alcance]({{ '/conceitos/' | relative_url }}).
- **Consolidado emitido pode ser mudado.** Emitir de novo, atualizar números e editar textos mudam o que o link mostra. Se o cliente já leu, avise o que mudou.
- **Gere link novo por motivo, e não por rotina.** O antigo para de abrir, inclusive em e-mails já enviados.

## Quando dá errado

| O que você vê | O que significa | O que fazer |
|---|---|---|
| "Escolha um cliente para ver os relatórios consolidados." | não há cliente ativo | escolha um no seletor do alto da tela |
| "Este cliente ainda não tem relatórios consolidados." | nenhum foi criado | crie o primeiro no painel **Novo consolidado** |
| "O consolidado precisa de pelo menos 2 meses." | o período tem um mês só | para um mês só, use o relatório mensal; amplie o período |
| "O consolidado tem no máximo 24 meses." | o período é longo demais | divida em dois consolidados (por exemplo, um por ano) |
| "O período não pode passar do mês corrente." | o último mês é futuro | escolha um **Até** que não passe do mês atual |
| "O mês final vem antes do inicial." | **De** vem depois de **Até** | corrija as datas |
| "Não foi possível ler a base mensal ([motivo]). A prévia abaixo mostra os meses como 'sem dado'; o servidor confere ao criar." | a tela não conseguiu consultar os meses para a prévia | recarregue; o servidor ainda confere ao criar, mas a prévia não vale |
| Abriu um consolidado em vez de criar outro | já existia um para esse cliente e esse período | trabalhe nele; se quer outro formato, exclua o antigo ou mude o período |
| "A base mensal mudou depois deste retrato" | algum mês mudou depois da criação | confira os meses listados e clique em **Atualizar números** |
| "NÃO foi possível gravar no servidor: [motivo] As alterações continuam nesta tela." | o salvamento falhou | não feche a página; tente de novo, e avise o suporte técnico se persistir |
| Cursos: "O complemento do Moodle lê no máximo 400 dias..." | o período (ou a janela de comparação) passa de cerca de 13 meses | aceite a série mensal, ou use um período menor para a leitura |
| Site ou cursos "continuam na série mensal da base" | a leitura do período inteiro falhou ou demorou | tente de novo mais tarde; a série mensal já é um capítulo completo |
| "Tente de novo em N s." ao gerar a análise | o limite de chamadas de IA por minuto foi atingido | espere o tempo indicado |
| "Não foi possível gerar a análise: [motivo]" | a IA não respondeu | os textos dos números continuam; tente de novo ou escreva você mesmo |
| "Relatório consolidado não encontrado." | o consolidado foi excluído, ou o endereço está errado | volte para **Consolidados** e abra pela lista |
| Cliente diz "relatório não encontrado" | o link foi trocado ou o consolidado excluído | gere um novo link e envie |

## Limites do papel

O **analista** e o **super-administrador** criam, revisam, emitem, enviam e excluem consolidados, do cliente ativo. Não há papel só de leitura. Quem não tem conta, como o cliente, só abre os links que recebe. Cadastrar os **marcos históricos** é do super-administrador, pelo cadastro do cliente; corrigir um número é feito **no relatório do mês**.

Veja também: [Indicadores (BI)]({{ '/mes-do-analista/indicadores/' | relative_url }}), [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}), [O mês do analista]({{ '/mes-do-analista/' | relative_url }}) e o [Glossário]({{ '/glossario/' | relative_url }}).

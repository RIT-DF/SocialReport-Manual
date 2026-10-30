---
title: "3. O mês do analista"
nav_order: 4
has_children: true
permalink: /mes-do-analista/
---

# 3. O mês do analista

Esta parte é para quem **produz** o relatório: a equipe de mídias sociais. Ela acompanha o mês de trabalho na ordem em que as coisas acontecem, tarefa por tarefa. Cada tarefa diz **por que ela importa**, como fazê-la, o que acontece se for feita errada e como corrigir.

Os exemplos e as telas vêm do relatório de outubro de 2026 do **Instituto Horizonte**, uma organização fictícia. Os números são de um relatório real; nomes, logotipos, fotos, endereços e pessoas foram trocados.

## O mês em uma olhada

| # | Tarefa | Onde |
|---|---|---|
| 1 | [Escolher o cliente ativo](#1-escolher-o-cliente-ativo) | cabeçalho do sistema |
| 2 | [Criar o período do mês](#2-criar-o-período-do-mês) | Períodos & Emissão |
| 3 | [Importar as planilhas das redes](#3-importar-as-planilhas-das-redes) | Períodos & Emissão |
| 3b | [Informar os seguidores de cada rede](#3b-informar-os-seguidores-de-cada-rede) | Períodos & Emissão |
| 3c | [Ler da Meta, no lugar da planilha](#3c-ler-da-meta-no-lugar-da-planilha) | Períodos & Emissão |
| 4 | [Conferir as inconsistências da importação](#4-conferir-as-inconsistências-da-importação) | durante a importação |
| 5 | [Conferir os números e marcar os posts fora da curva](#5-conferir-os-números-e-marcar-os-posts-fora-da-curva) | Períodos & Emissão |
| 6 | [Classificar as categorias](#6-classificar-as-categorias) | planilha e cadastro do cliente |
| 7 | [Revisar o capítulo do site](#7-revisar-o-capítulo-do-site) | Revisão |
| 7b | [Revisar o capítulo dos cursos](#7b-revisar-o-capítulo-dos-cursos) | Revisão |
| 8 | [Cuidar do clipping](#8-cuidar-do-clipping-imprensa) | Períodos & Emissão |
| 9 | [Gerar e revisar a análise da IA](#9-gerar-e-revisar-a-análise-da-ia) | Revisão |
| 10 | [Conferir a capa e as imagens dos melhores posts](#10-conferir-a-capa-e-as-imagens-dos-melhores-posts) | Revisão |
| 11 | [Salvar e emitir o relatório](#11-salvar-e-emitir-o-relatório) | Revisão |
| 12 | [Compartilhar o link e gerar o PDF](#12-compartilhar-o-link-e-gerar-o-pdf) | o relatório aberto |
| 13 | [Cuidar de vários períodos de uma vez](#13-cuidar-de-vários-períodos-de-uma-vez) | Períodos & Emissão |

> **O que é só do super-administrador.** Ligar o site e o Instagram e o Facebook de um cliente, configurar a inteligência artificial, o Matomo e a Meta, convidar pessoas e trocar a identidade da organização ficam em "Configurações do Sistema" e no cadastro do cliente, e são tratados na [parte 6]({{ '/administracao/' | relative_url }}) e na [parte 5]({{ '/site-e-plugin/' | relative_url }}). Aqui estão as tarefas de quem monta o relatório.
{: .note }

## 1. Escolher o cliente ativo

**Por que importa.** Tudo o que você faz no sistema (importar, conferir, gerar, compartilhar) vale para o **cliente ativo**. Importar a planilha de um cliente dentro de outro é o erro mais caro do mês: os números vão parar no relatório errado, e o cliente que o recebe vê dados que não são dele.

**Passo a passo**

1. No alto da tela, abra o seletor **Cliente ativo**.
2. Escolha o cliente com quem vai trabalhar. A lista mostra o nome, o logotipo e quantas redes ele tem.
3. Confira o nome em **Marca ativa**, na página Períodos & Emissão, antes de qualquer importação.

![Seletor de cliente ativo aberto, com a lista de clientes]({{ '/assets/img/app/app-01-cliente-ativo.png' | relative_url }})

> **Dica.** Faça da conferência do **nome da marca ativa** o primeiro gesto de toda sessão. Leva um segundo e evita o erro de maior custo.
{: .tip }

## 2. Criar o período do mês

**Por que importa.** O período é a "gaveta" do mês: ele guarda as planilhas, os números, os textos e o link do relatório. Sem ele, não há onde colocar nada. E o **ciclo** (as datas de início e fim) define quais publicações entram: só as do intervalo contam.

![Página Períodos e Ingestão de Planilhas, com a marca ativa, a lista de meses e o botão Novo Período]({{ '/assets/img/app/app-02-periodos-lista.png' | relative_url }})

**Passo a passo**

1. Entre em **Períodos & Emissão**.
2. Clique em **Novo Período**.
3. Escolha o **Mês de Referência** e o **Ano**.
4. Confira o **Ciclo de Medição das Mídias**. O padrão é o mês cheio. Se o cliente fecha o relatório em outras datas (por exemplo, de 25/09 a 25/10), ajuste a **Data Inicial** e a **Data Final**. O botão **Restaurar Mês Inteiro** volta ao padrão.
5. Siga para a importação (próxima tarefa) na mesma janela, ou feche com **Cancelar**.

![Janela Importar Novo Período, com mês, ano, ciclo de medição e a área para soltar as planilhas]({{ '/assets/img/app/app-03-novo-periodo.png' | relative_url }})

> **O mês de referência segue o fim do ciclo.** Um ciclo de 25/09 a 25/10 é o relatório de **outubro**. Se o sistema deduzir as datas das publicações da planilha, o mês e o ano vêm da **data final**.
{: .note }

**Ajustar o ciclo depois.** Na lista de períodos, o selo **Ciclo: 01/10/2026 a 31/10/2026** abre uma janela para trocar as datas.

![Janela Ajustar Ciclo de Medição, com datas inicial e final e o alcance da conta no mês]({{ '/assets/img/app/app-05-ciclo.png' | relative_url }})

Nessa janela também há **Detectar das Postagens** (sugere as datas a partir das publicações importadas) e o campo opcional **Alcance da conta no mês**, para quando a rede informa o alcance da conta e não só o somado das publicações.

> **Atenção.** Mudar o ciclo muda **quais publicações contam**. Se um período já foi emitido, a troca altera os números do relatório que o cliente já recebeu. Combine com quem o recebeu antes.
{: .warning }

## 3. Importar as planilhas das redes

**Por que importa.** As planilhas são a fonte dos números das redes. Por padrão, o sistema não "puxa" dados das redes sozinho: ele lê o que você importa. (A exceção é o Instagram e o Facebook de um cliente que o super-administrador ligou à Meta: veja a [tarefa 3c](#3c-ler-da-meta-no-lugar-da-planilha).) Importar direito significa que os números do relatório batem com o que a rede mostra.

**O modelo de planilha.** O botão **Modelo de Planilha**, no alto da página, baixa uma planilha padrão com as colunas que o sistema reconhece: data, canal, formato, pauta (título do conteúdo), link da publicação, categoria editorial, alcance, impressões, interações, curtidas, respostas/comentários, compartilhamentos, salvamentos, visitas ao perfil, visualizações de vídeo, reações e a marcação de anômalo (sim ou não). Há também uma aba **Resumo do Mês**, onde se informam o alcance da conta e o **número de seguidores** do mês, na linha **Seguidores da rede no fim do mês** (uma rede por arquivo). Você também pode digitar os seguidores direto na tela do mês, sem mexer na planilha: veja a [tarefa 3b](#3b-informar-os-seguidores-de-cada-rede). Planilhas com outros nomes de coluna também funcionam, e o sistema ajuda a ligar cada coluna ao campo certo (veja a próxima tarefa).

**A exportação do Meta entra como veio.** Você pode importar direto o arquivo que o Facebook ou o Instagram exporta, sem refazer no modelo. Em algumas exportações a coluna **Data** vem com a palavra **"Total"** em vez de uma data: nesse caso o sistema usa a **data do "Horário de publicação"** de cada postagem. A linha de total de verdade (sem horário de publicação) continua sendo ignorada. O Meta exporta o horário no fuso do Pacífico, e o sistema o converte para o horário de Brasília; uma postagem feita à noite não cai mais no dia seguinte por causa do fuso.

**Alcance e "Visualizadores" (Facebook).** O Meta encerra o **Alcance** do Facebook em 31/10/2026 e passa a informar **Visualizadores**. Se a planilha tem **Visualizadores** e não tem **Alcance**, o sistema usa **Visualizadores** como o alcance daquelas postagens (a coluna **Visualizações** continua sendo as impressões; **"Visualizadores de 3 segundos"** é outra coisa e não conta). Se a planilha tem as duas colunas, vale **Alcance**. As duas medidas **não são idênticas**, e o sistema avisa quando a comparação mistura as duas (veja a próxima tarefa).

**Passo a passo, com arquivos do computador**

1. Em **Novo Período**, escolha **Upload de Arquivo Local**.
2. Clique na área pontilhada ou **arraste os arquivos** para ela. Aceita **.xlsx**, **.xls** e **.csv**, vários de uma vez (por exemplo, uma planilha do Instagram e outra do Facebook).
3. Confira o que o sistema encontrou e clique em **Consolidar Período**.

**Passo a passo, com planilha online**

1. Em **Novo Período**, escolha **Planilha Online (Drive / OneDrive)**.
2. Cole o **link compartilhado** da planilha do Google Sheets ou do OneDrive/Excel Online e clique em **Carregar Planilha Online**.
3. Confira e clique em **Consolidar Período**.

![Janela de importação na aba de planilha online, com o campo do link compartilhado]({{ '/assets/img/app/app-04-planilha-online.png' | relative_url }})

> **O compartilhamento precisa estar aberto para leitura.** No Google Drive ou no OneDrive, configure o arquivo como **"Qualquer pessoa com o link pode visualizar"**. Se estiver restrito, o sistema não consegue baixar a planilha.
{: .important }

**Vários arquivos e vários meses de uma vez.** Você pode subir de uma vez planilhas de vários meses. O sistema mostra os meses encontrados, com o total e a divisão por arquivo e por rede, e você marca quais viram período. Cada período recebe as publicações do **seu mês**, vindas de todos os arquivos, **sem duplicar** uma publicação que apareça em dois arquivos. Um mês que já existe é **completado**, não duplicado, e reimportar o mesmo lote não muda os totais. A confirmação diz quantos períodos serão criados e quantos atualizados.

**Acrescentar uma planilha a um período que já existe.** Na página do período, **Acrescentar Planilha** abre a mesma janela. Serve para somar uma rede que faltou ou uma planilha corrigida.

![Extratos importados do período e a área de clipping]({{ '/assets/img/app/app-06-extratos-clipping.png' | relative_url }})

Cada planilha do período aparece como um cartão em **Extratos Importados para este Mês**, com a rede e o número de linhas. Há botões para baixar a planilha e para excluí-la. **Excluir uma planilha remove só as publicações que vieram dela, naquele período.** As de outros arquivos continuam.

Se o período veio de uma **planilha online**, ele fica ligado a ela, e é possível **sincronizar** de novo quando a planilha for editada na nuvem. A sincronização atualiza só as publicações daquele período e daquele arquivo e, se houver publicações que sumiram da planilha, **avisa quantas serão removidas e pede confirmação**.

> **Dicas.**
> - Importe **uma planilha por rede** e confira o nome do arquivo e a rede no cartão.
> - Mantenha o **mesmo modelo de planilha todo mês**. Quando o formato muda, o sistema pede para ligar as colunas de novo.
> - Informe os seguidores de cada rede (na linha **Seguidores da rede no fim do mês** da aba **Resumo do Mês**, ou na tela do mês, como na [tarefa 3b](#3b-informar-os-seguidores-de-cada-rede)). O número vale por rede e vai para o gráfico de evolução, a capa, o comparativo e o link público. **Sem ele, o gráfico diz "Sem dado de seguidores" e a linha se interrompe naquele mês**, em vez de cair para zero. Não digite 0 para "não sei": zero é um número, e o gráfico vai mostrar que a conta perdeu todo mundo.
{: .tip }

## 3b. Informar os seguidores de cada rede

**Por que importa.** As exportações das redes trazem o desempenho de cada publicação, mas **não trazem o total de seguidores da conta**. Esse número só existe no painel da própria rede, e muda a cada dia. Por isso é você quem o informa, e o melhor momento é o **último dia do mês**: é o número que fecha o mês e o que o mês seguinte vai comparar. Sem ele, o relatório não mostra a base de seguidores, nem o gráfico de evolução, nem a variação mês a mês daquela rede.

**Passo a passo**

1. Em **Períodos & Emissão**, abra o mês (o botão do mês na lista).
2. Role até o bloco **Seguidores no fim de [mês] de [ano]**. Há um campo por rede (**Seguidores do Instagram no fim do mês**, **Seguidores do Facebook no fim do mês**, e assim por diante), com as redes que o mês tem, as do cadastro do cliente e as que já têm número.
3. Digite o total de seguidores de cada rede **no último dia do mês**, como aparece no painel da rede.
4. Clique em **Salvar seguidores**. Só então o número é gravado: o botão fica desabilitado enquanto você não mudar nada, e a mensagem **"Seguidores gravados."** confirma.

*Captura pendente: o bloco "Seguidores no fim de [mês]" na tela do mês (campo, "Sugestão" e botão "Salvar seguidores"). Precisa de um período de teste no app, com login.*

**A sugestão do mês anterior.** Quando o mês anterior do mesmo cliente tem número, abaixo do campo aparece **"Sugestão (mês anterior): N, não gravada."** com o link **Usar sugestão**. A sugestão **não é gravada** sozinha: ela só entra no mês quando você clica em **Usar sugestão** (ou digita) e salva. Serve de atalho para quando o número mal mudou, e de conferência para quando você digitou um valor muito diferente.

**Qual número vale.** O número digitado aqui **vale mais** que o da planilha. Se a planilha importada trouxer outro número, a tela diz qual vale: **"A planilha importada traz N; vale o número digitado."** (ou **"vale esse número enquanto nada for digitado"**, quando você ainda não digitou nada). Assim você corrige um erro da planilha sem reimportar.

**Meses passados.** O bloco existe em todo mês, então dá para **corrigir ou completar meses antigos**. Isso conserta o gráfico de evolução e o comparativo dos relatórios daqueles meses.

**Exemplo.** No fechamento de outubro, o Instagram do Instituto Horizonte tinha 1.650 seguidores e o Facebook, 980. O campo do Instagram mostra "Sugestão (setembro de 2026): 1.620, não gravada." Você digita **1650** (não usa a sugestão, porque o número mudou), digita **980** no Facebook e clica em **Salvar seguidores**.

> **Dicas e armadilhas.**
> - **Anote no último dia do mês**, não "mais ou menos". Seguidores de hoje num relatório de mês passado fazem a base parecer maior do que foi.
> - **Não digite 0 para "não sei"**: o campo vazio é "não informado" e o gráfico interrompe a linha; zero é um número e o gráfico mostra que a conta perdeu todo mundo.
> - **Não grave a sugestão sem conferir.** Ela é o número do mês passado; se você só clicar e salvar, o comparativo mostrará "nenhuma variação" onde houve crescimento.
> - **Uma rede sem número nos dois meses fica de fora do total** do comparativo (veja [Comparativo geral]({{ '/como-ler-o-relatorio/redes/' | relative_url }})).
{: .tip }

**Quando dá errado.** Na revisão, aparece um aviso só para você: **"Falta o número de seguidores de [rede] neste mês. Sem ele, o relatório não mostra a base de seguidores nem o comparativo dessa rede. Preencha na tela do mês (Períodos) ou na linha "Seguidores" da planilha."** O aviso não aparece no relatório nem no link público. Volte à tela do mês, preencha e salve.

## 3c. Ler da Meta, no lugar da planilha

**Por que importa.** Para o cliente que o super-administrador **ligou à Meta**, o Instagram e o Facebook do mês podem vir direto das contas: um clique em **Ler da Meta** traz as publicações, com alcance, visualizações e interações, e oferece o número de seguidores do fim do mês. Não há planilha para exportar, conferir e trocar sem querer por outra. **A planilha continua valendo**, e o Story, a categoria editorial e as outras redes seguem vindo por ela.

Os números da leitura são os **do momento em que você lê** (como exportar a planilha naquele dia), e cada rede usa **uma fonte por mês**: ou a planilha ou a Meta. Substituir a planilha pede confirmação, e dá para **voltar para a planilha**.

![Bloco Ler da Meta na página do mês, com a mensagem Instagram e Facebook ligados e o botão Ler da Meta]({{ '/assets/img/app/app-71-meta-ler-da-meta.png' | relative_url }})

O passo a passo, os avisos e o que fazer quando dá errado estão em [Ler da Meta]({{ '/mes-do-analista/ler-da-meta/' | relative_url }}).

## 4. Conferir as inconsistências da importação

**Por que importa.** Uma planilha com erro vira um relatório com erro, e o cliente confia nele. O sistema recusa o que não faz sentido e mostra o motivo; sua tarefa é ler a lista antes de confirmar.

> **Captura pendente.** Esta tela só aparece depois de escolher um arquivo, e escolher um arquivo grava dados, então ela não foi capturada. O texto abaixo descreve o que acontece.
{: .note }

O que o sistema faz sozinho:

- **Recusa linhas incoerentes.** O caso típico: **alcance maior que impressões** (o alcance, que conta pessoas, nunca pode passar das impressões, que contam exibições). A linha é recusada com a mensagem do problema, e a lista mostra a linha e a coluna.
- **Ignora linhas de total e de subtotal**, que não são publicações. Elas aparecem na prévia como ignoradas.
- **Entende números "sujos":** números escritos como texto, com ponto e vírgula, traços e vazios.
- **Sugere a ligação das colunas** quando os nomes não são os do modelo (por exemplo, "Tema" ou "Editoria" para a categoria).
- **Avisa quando o alcance muda de definição.** Se o mês atual usa **Visualizadores** e o anterior usou **Alcance** (ou o contrário), a revisão mostra um aviso a você e o slide do comparativo traz uma nota curta (também no link público): **"o alcance deste mês e o do anterior usam definições diferentes: a variação do alcance não é uma comparação exata"**. Não é erro da planilha, e não há o que corrigir: é o Meta que mudou a conta. Leia a variação do alcance com esse cuidado, e não conclua que a página "perdeu público" só por ela.

O que você faz:

1. **Leia a lista de erros** de cada planilha. Uma linha recusada **não entra no relatório**.
2. Se as colunas estiverem trocadas, use **Mapear Colunas** (ligação manual, com a primeira amostra de cada coluna ao lado) ou **Mapear com IA** / **Corrigir com IA** (a IA lê uma amostra e propõe a ligação). Depois, **Aplicar e Reprocessar Planilha**.
3. Se o erro é de digitação na planilha, **corrija na origem** e importe de novo.

> **Atenção.** Linha recusada some do relatório **em silêncio** para quem só olha o total. Compare o número de publicações do período com o número de linhas da planilha. Se faltam publicações, a causa está na lista de recusadas.
{: .warning }

## 5. Conferir os números e marcar os posts fora da curva

**Por que importa.** É a última chance de pegar o erro antes de o cliente ver. E os **posts fora da curva** (uma vaga muito compartilhada, um vídeo que viralizou) distorcem a média do mês: marcá-los é o que deixa o relatório comparar a rotina com a rotina.

**Passo a passo**

1. Na página do período, role até os cartões **Posts, Alcance, Impressões, Engajamento, Ponderado e CTR de cliques**. Confira se batem com o esperado.
2. Veja **Desempenho por Canal** e **Eficiência por Categoria Editorial**.
3. Role até o **Extrato Consolidado de Pautas**, a lista de todas as publicações.
4. Clique no selo **Orgânico** de uma linha para trocá-lo por **Anômalo**, e de volta. Para várias de uma vez, marque as linhas e use **Marcar como anômalas** ou **Remover marcação de anômala**.

![Indicadores do período, com os totais, o desempenho por canal e a eficiência por categoria]({{ '/assets/img/app/app-08-indicadores.png' | relative_url }})

![Extrato consolidado de pautas, com a data, o canal, a pauta, a categoria, os números e o selo Orgânico ou Anômalo]({{ '/assets/img/app/app-09-pautas.png' | relative_url }})

Quando o título da publicação parece de **vaga ou oportunidade**, o sistema mostra **"sugerido: anômalo"** ao lado do selo. É só uma sugestão: ele não marca sozinho.

> **O que marcar como anômalo.** Publicações cujo resultado **não representa a rotina**: vaga de emprego muito compartilhada, vídeo viral, uma crise. Se marcar demais, o relatório perde a visão total do mês. Se não marcar nada, um único pico distorce a média. Veja [Post fora da curva]({{ '/conceitos/' | relative_url }}) e [Picos atípicos]({{ '/como-ler-o-relatorio/panorama/' | relative_url }}).
{: .tip }

**Alcance 0 numa rede, com impressões e interações.** No exemplo, todas as linhas do Facebook têm alcance 0. Isso é impossível na realidade e quer dizer que o **alcance não veio na planilha** (confira se a planilha do Facebook tem **Alcance** ou **Visualizadores**). Verifique a fonte antes de emitir; o relatório mostrará "alcance 0", e o cliente vai ler "ninguém viu".

## 6. Classificar as categorias

**Por que importa.** As páginas de tipo de conteúdo só dizem algo se as publicações estiverem bem classificadas. Sem classificação, tudo cai em **"Geral"** e a comparação entre assuntos perde o sentido.

A categoria **vem da planilha**, na coluna **Categoria** (o sistema também reconhece "Tema" e "Editoria"). Ela é de **texto livre**, mas o cadastro do cliente guarda a lista de **Categorias Editoriais** do cliente (separadas por vírgula), que serve de referência para a equipe usar sempre os mesmos nomes.

![Cadastro do cliente: modelo de capa, imagem da capa, categorias editoriais e canais contratados]({{ '/assets/img/app/app-16-cliente-capa.png' | relative_url }})

> **Dica.** Use poucas categorias, com nomes que o cliente entenda (três a cinco). "Institucional" e "Serviço" dizem mais do que quinze rótulos que ninguém lembra. E escreva sempre do mesmo jeito: "Serviço" e "Servico" viram duas categorias.
{: .tip }

## 7. Revisar o capítulo do site

**Por que importa.** O capítulo do site é o que diz se as redes levam gente ao que a organização mais quer. Ele depende de duas coisas que só você pode garantir: que os números estejam **atualizados** e que os links das publicações estejam **marcados**.

Abra a revisão pelo botão **Revisar / Gerar com IA** do período. O primeiro bloco é o **Site**.

![Bloco Site da revisão, com a última busca, os avisos do analista e as campanhas de link marcado]({{ '/assets/img/app/app-12-revisao-site.png' | relative_url }})

**O que você vê e faz**

- **Atualizar dados do site** busca os números do site para o ciclo do relatório. Use no fechamento do mês, ou se o site ainda estava processando os últimos dias na busca anterior. A frase **"Última busca"** diz quando foi, e avisa **"ciclo ainda em andamento: números parciais"** se o mês não terminou.
- Os números ficam **guardados no relatório**: o link público e o PDF mostram sempre a foto do mês fechado, mesmo que o site mude depois. Só mudam quando você clica em **Atualizar dados do site**.
- Se os números guardados são de **outro intervalo** que o do ciclo, o sistema avisa e pede para atualizar.
- **Matomo fora do ar ou não configurado:** o sistema avisa. O relatório pode sair **sem o capítulo** ou com os números que já estavam guardados.
- **Posts e campanhas de link marcado.** Para o cartão do melhor post dizer **"levou N visitas ao site"**, o post precisa estar ligado a uma **campanha**: automaticamente, se o título do post for **igual** ao nome da campanha; ou por escolha sua, na lista ao lado de cada post. **Nunca por data.** Salve o rascunho para valer.
- **Gerar análise do site com IA** escreve o texto dos slides do site, cruzando redes e site, **só com os números da tela**. Textos que você já editou **não são trocados**.

**Os avisos do analista.** Dois avisos aparecem só para você, nunca no relatório nem no link público:

- **Cobertura de links marcados:** "0% das visitas das redes vieram por link marcado". É um lembrete para a equipe marcar os links nas publicações. Sem isso, o número de visitas das redes é **subestimado**.
- **Tráfego de fora do Brasil:** aparece quando a parcela de visitas de fora do país passa do limite configurado (padrão de 30%). Pode ser robô ou campanha fora do país. **Confira antes de emitir.**

> **Atenção.** O aviso de tráfego estrangeiro é para você investigar, não para ignorar. Robôs inflam as visitas, e o relatório vai dizer que o site "tem muito movimento" quando é lixo.
{: .warning }

## 7b. Revisar o capítulo dos cursos

**Por que importa.** Para o cliente que tem uma plataforma de cursos (Moodle), o relatório ganha o capítulo **Cursos**: inscrições, conclusões e, o mais útil, o **caminho** que leva do post à inscrição. Quem decide se esse caminho aparece e se ele diz algo verdadeiro é você, na revisão. O capítulo só existe quando o Moodle do cliente está ligado (veja [Administração]({{ '/administracao/' | relative_url }})) e houve inscrição ou conclusão no ciclo. Para entender cada slide, leia [Os cursos]({{ '/como-ler-o-relatorio/cursos/' | relative_url }}).

Na revisão, o bloco **Cursos** vem logo depois do bloco do site.

**O que você vê e faz**

- **Atualizar dados dos cursos** busca os números do ciclo (inscrições e conclusões do Moodle; visitas e origens do Matomo). A frase **"Última busca"** diz quando foi, e avisa se o ciclo ainda está em andamento. Se os números guardados são de outro intervalo que o do ciclo, a tela avisa e pede para atualizar.
- **Relatórios salvos antes desta versão (1.30.0) não têm o caminho.** Para ganhar o slide **Do post ao curso**, abra a revisão do mês e clique em **Atualizar dados dos cursos**.
- **Gerar análise do caminho com IA.** O botão aparece quando há visitas vindas das redes, de campanhas ou de outros sites à plataforma. A IA cruza o alcance das redes, as visitas à plataforma e as inscrições, e escreve o texto do slide **Do post ao curso**. Ela só afirma o que os números sustentam, e o texto com número que não está nos dados é descartado. Depois de gerado, o botão passa a dizer **Gerar a análise de novo**. O texto que você editar vale no lugar do da IA.
- **Posts e campanhas que levam aos cursos.** Para o cartão do Top Posts dizer **"Levou N pessoas aos cursos"**, o post precisa estar ligado a uma **campanha** dos cursos (a campanha do link marcado). Cada post tem uma lista: se o título do post for **igual** ao nome da campanha, a ligação é automática e a lista mostra **"Automática: [campanha]"**; se não, escolha a campanha na lista. **Nunca por data.** Clique em **Salvar Alterações** para valer no relatório.
- **A caixa editável "Cursos: do post ao curso"** fica entre os textos analíticos da narrativa (bloco **Narrativa Executiva Assistida por IA**), ao lado da **Cursos: visão geral**. É o texto do slide: leia, corrija e salve. Apagar o texto o oculta.
- **Diagnóstico e Próximos Passos** passam a **cruzar redes, site e cursos** quando há dado dos três: ao regerar a narrativa, a IA considera o que as redes, o site e os cursos mostram juntos.

*Captura pendente: bloco "Cursos" da revisão com o botão "Gerar análise do caminho com IA" e a lista "Posts e campanhas que levam aos cursos". Precisa de relatório com cursos e login.*

> **Dicas e armadilhas.**
> - **Marque os links das publicações** que levam à plataforma de cursos. Sem campanha, o Matomo vê "acesso direto" ou "redes sociais" em geral, e o post não recebe crédito.
> - **"Levou N pessoas" é um piso**: o Matomo conta visitas, e quem usa bloqueador de anúncios não entra na conta. O número real é igual ou maior.
> - **Campanha dividida:** se vários posts usam o mesmo link, o número é **da campanha**, e o cartão avisa "dividida entre N posts".
> - **Regerar a narrativa apaga as edições** dos textos principais (veja a [tarefa 9](#9-gerar-e-revisar-a-análise-da-ia)). Gere a análise do caminho **antes** de editar.
{: .tip }

**Quando dá errado.** O Moodle ou o Matomo fora do ar aparecem como aviso, nunca como "mês sem inscrição"; o relatório continua com os números já guardados. **"Acesso ao Moodle deste cliente não configurado"** quer dizer que falta o acesso no cadastro do cliente (parte 6). Sem Moodle ligado, ou sem inscrição nem conclusão no ciclo, o capítulo não aparece.

## 8. Cuidar do clipping (imprensa)

**Por que importa.** O clipping mostra o que a imprensa disse sobre a organização. É uma página opcional, mas, quando existe, é uma das que o conselho e os financiadores mais gostam, porque é prova externa de credibilidade.

Na página do período, o cartão **Repercussão na Imprensa & Clipping** mostra quantas matérias estão **aprovadas** para o relatório, o sentimento favorável e a **síntese da imprensa**.

- **Escanear Notícias na Web** faz a varredura automática de notícias no ciclo, com os termos que o cliente cadastrou (nome, siglas, termos de contexto, termos a ignorar e veículos prioritários).
- **Revisar Clipping** abre a **curadoria**: você vê as matérias encontradas, escolhe **as que entram** no relatório, **adiciona uma matéria à mão** quando tiver uma reportagem comprovada e confirma com **Confirmar no Relatório**.

![Curadoria de notícias na imprensa, sem matérias encontradas, com os botões para buscar e para adicionar uma matéria]({{ '/assets/img/app/app-07-clipping.png' | relative_url }})

> **Só entra matéria real.** O sistema não inventa matérias: se a varredura não acha nada no ciclo, o relatório não tem a página de clipping. Não force. Nenhuma menção é melhor do que uma menção fraca.
{: .important }

> **Dica.** Se o nome da organização é uma sigla que também é de outra empresa, cadastre **termos de contexto** e **termos para ignorar** no cadastro do cliente. Sem isso, a varredura traz matérias de homônimos (a sigla de uma companhia de energia, por exemplo).
{: .tip }

## 9. Gerar e revisar a análise da IA

**Por que importa.** A análise é o que diferencia o relatório de uma tabela. Mas a IA escreve com segurança mesmo quando o dado é pouco, e é **a sua equipe que assina o documento**. Revisar não é formalidade: é onde você, que conhece a organização, impede que o relatório afirme o que não é verdade.

Na revisão, o bloco **Narrativa Executiva Assistida por IA** reúne os textos: apresentação, destaques, eficiência por categoria, aprendizados, recomendações e conclusão, e mais abaixo os **textos analíticos dos slides** (comparativo, evolução, taxa de engajamento, diagnóstico e site).

![Bloco da narrativa executiva, com o provedor de IA usado e os campos de texto editáveis]({{ '/assets/img/app/app-13-revisao-narrativa.png' | relative_url }})

**Passo a passo**

1. Clique em **Regerar com IA** para a IA escrever os textos a partir dos números do mês. A linha **Provedor** mostra qual IA respondeu.
2. **Leia cada texto.** Todos são caixas editáveis.
3. Corrija o que estiver errado, exagerado ou sem sentido para a organização. Apague um texto analítico para **ocultá-lo** no slide.
4. Clique em **Salvar Narrativa** (ou **Salvar Alterações da Narrativa**) para guardar as edições.

**O que conferir em cada frase**

- **Tem o número que a sustenta?** Frase sem número é opinião.
- **O número está certo?** Compare com os cartões do período.
- **Avisa o limite do dado?** Com mês parcial, links sem marcação ou alcance não informado, o texto deve dizer isso.
- **É verdade para esta organização?** A IA não sabe do que a organização fez de fora das redes.

> **Atenção: Regerar apaga o que você editou.** **Regerar com IA** troca os seis textos principais pelos novos e **grava na hora**. Se você já tinha editado, as edições se perdem. Regere **antes** de editar; depois de editar, só salve.
{: .warning }

> **Se a IA falhar.** A tela avisa "Falha ao acionar IA". Isso costuma ser chave de IA inativa, sem crédito ou com limite de uso atingido: avise o super-administrador (veja a [parte 6]({{ '/administracao/' | relative_url }})). Você pode escrever os textos à mão e salvar.
{: .note }

## 10. Conferir a capa e as imagens dos melhores posts

**Por que importa.** A capa é a primeira coisa que o cliente vê, e as imagens dos melhores posts são o que dá cara ao relatório. Mas imagem é onde mais aparece rosto de gente: vale olhar com atenção.

![Capa do relatório com imagem gerada, e as três melhores publicações com a imagem e o endereço de cada uma]({{ '/assets/img/app/app-14-revisao-capa.png' | relative_url }})

- **Capa.** O **modelo** (clássico, faixa de marca ou com foto) e a origem da imagem (foto automática do post de maior destaque, sem foto, ou ilustração gerada por IA) são escolhidos **no cadastro do cliente**. Na revisão, você pode **Gerar outra** imagem, **Enviar imagem própria** ou **Usar a faixa de marca**. A imagem fica guardada no servidor, uma cópia por relatório, e o link público e o PDF só leem essa cópia.
- **Melhores publicações.** Em **Evidência Visual: Top Publicações do Mês**, cada uma das campeãs tem **Puxar Imagem** (busca a imagem do endereço da publicação) ou **Anexar print local**. Depois, **Salvar Prints Anexados**.

> **Rosto de criança.** Para escolas e organizações que atendem crianças, use no cadastro do cliente a opção **Sem foto** (a capa usa a faixa de marca, sem imagem). As fotos dos posts que você puxa também aparecem nos slides: confira se a organização tem autorização de uso de imagem.
{: .warning }

## 11. Salvar e emitir o relatório

**Por que importa.** O estado do relatório (**validado** ou **emitido**) diz ao resto da equipe em que ponto ele está, e determina o que o sistema deixa fazer (por exemplo, períodos já emitidos **não** podem ser excluídos em lote).

No alto da revisão há três botões, e cada um faz uma coisa só:

- **Salvar Alterações:** guarda o que você fez (textos, prints, campanhas dos posts) e marca o período como **validado**. Pode ser feito quantas vezes quiser, e nunca desfaz uma emissão.
- **Visualizar Book 16:9:** abre o relatório com as edições que estão na tela, para você conferir. **Não grava nada.** O que você não salvou continua só na tela: o link do cliente mostra sempre a última versão salva.
- **Emitir Relatório:** grava e marca o período como **emitido**, a versão que vai para o cliente. Períodos emitidos ficam protegidos contra exclusão em lote.

**Mês em andamento.** Se você abre o relatório antes de o período terminar (o fim do ciclo é depois de hoje), ou os dados foram coletados antes do fim, o **rodapé de todo slide** e a revisão mostram o selo **"Mês em andamento — dados até DD/MM"**. Nesse caso as **comparações com o mês anterior** (e com o mesmo mês do ano anterior, no site e nos cursos) saem como **parciais**: o percentual aparece em cinza, sem seta, com o selo **"parcial"**, e o texto da análise não fala em "subiu" ou "caiu".

![Nota "Mês em andamento (dados até 29/10): as comparações são parciais" no comparativo, e o selo do rodapé dos slides]({{ '/assets/img/app/app-30-mes-em-andamento.png' | relative_url }})

- **Por que importa:** comparar 29 dias de um mês com 31 dias do outro (ou, pior, 10 dias com 31) faz qualquer rede parecer em queda. O selo impede que o cliente leia "-30%" onde o certo é "o mês ainda não acabou".
- **O que fazer:** se o relatório é para o cliente, **espere o mês fechar**, importe a planilha completa e use **Atualizar dados do site**. O selo some sozinho. Se precisar de um relatório parcial (uma reunião no meio do mês), emita sabendo que ele sairá com o selo, e diga ao cliente.
- **A evolução histórica termina no mês do relatório.** Meses importados depois, para períodos mais novos, não aparecem nos gráficos de um relatório antigo: ele não muda com o tempo.

> **Dica.** Antes de emitir, abra o relatório pelo **Visualizar Book 16:9** (sem gravar) e percorra todos os slides, como o cliente fará: setas ou teclado, página por página. Se algum texto cortou ou ficou estranho, é aqui que se corrige.
{: .tip }

## 12. Compartilhar o link e gerar o PDF

**Por que importa.** O relatório só cumpre o papel quando chega à pessoa certa, do jeito certo. E o link abre **sem senha**, então quem o recebe precisa ser quem deve.

Com o relatório aberto, a barra de cima tem as setas dos slides, **Compartilhar & Incorporar** e **Imprimir / Salvar PDF (16:9)**.

![Relatório aberto no sistema, com a barra de navegação, o botão Compartilhar e Incorporar e o botão de PDF]({{ '/assets/img/app/app-22-book-barra.png' | relative_url }})

**Compartilhar.** Clique em **Compartilhar & Incorporar**. A janela mostra:

- o **link direto para leitura**, com **Copiar Link**;
- o **código para WordPress** (um `iframe`), com **Copiar Código**, para colocar o relatório numa página do site da organização;
- o botão **Gerar novo link**.

![Janela Compartilhar e Incorporar, com o link direto, o botão Gerar novo link e o código para WordPress]({{ '/assets/img/app/app-23-compartilhar.png' | relative_url }})

**Enviar o link por e-mail ao cliente.** Entre o link e o código do WordPress, a janela tem o bloco **Enviar o link por e-mail ao cliente**. Ele manda o link a quem o cliente indicou como destinatário (cadastro do cliente, seção **Destinatários do relatório**, veja a [parte 6]({{ '/administracao/' | relative_url }})). Qualquer analista pode enviar.

![Janela Compartilhar e Incorporar, com o bloco Enviar o link por e-mail ao cliente]({{ '/assets/img/app/app-29-compartilhar-enviar.png' | relative_url }})

*Captura pendente: o bloco com destinatários cadastrados (lista com caixas marcadas, mensagem e botão **Revisar e enviar**). A captura acima mostra o estado de um cliente sem destinatários, e foi mantida assim porque montar a lista gravaria dados reais do cliente.*

1. **Confira a lista.** Cada destinatário aparece com a caixa **marcada**. **Desmarque** quem não deve receber **neste** envio (o cadastro não muda).
2. **Escreva uma mensagem, se quiser.** O campo **Mensagem (opcional)** é um recado curto que aparece no e-mail, antes do botão **Abrir o relatório**.
3. Clique em **Revisar e enviar**. A janela de confirmação diz **quantos destinatários** e **quais** vão receber, e repete a mensagem.
4. Confirme em **Enviar para N**.
5. O **resultado vem por pessoa**: **Enviado**, **Recusado** (o servidor de e-mail não aceitou aquele endereço) ou **Falhou** (erro no envio, com o motivo ao lado). Cada pessoa recebe **um e-mail só dela**, que a chama pelo nome e traz o botão com o link. O assunto é **"Nome do cliente: relatório de Mês/Ano"**.
6. Tudo fica no **registro "Envios deste período"**: quando, quem enviou e o resultado de cada destinatário. Para tentar de novo com quem falhou ou foi recusado, use **Reenviar** na linha do registro: ele remarca os mesmos destinatários e a mesma mensagem, e você confirma de novo.

- **Por que usar:** o envio por aqui sai com o visual do SocialReport, vai só a quem está na lista do cliente e deixa o registro de quem recebeu e quando. Link colado em mensagem avulsa não deixa rastro.
- **Só com o link ativo.** O bloco avisa "Este relatório ainda não tem link público ativo" quando falta o link: salve o relatório ou gere o link antes. Sem destinatários cadastrados, o bloco diz onde cadastrá-los.
- **Limite.** Há um limite de envios por minuto por pessoa (5 por padrão). Passou dele, o sistema recusa por um instante: espere e tente de novo.
- **E-mail que não sai.** Depende do **Servidor SMTP** configurado pelo super-administrador (veja a [parte 6]({{ '/administracao/' | relative_url }})). Se tudo **Falhou**, avise-o.

> **O link revogado deixa de abrir, mesmo no e-mail já enviado.** O e-mail leva o link que valia na hora do envio. Se depois você usar **Gerar novo link** (ou o período for excluído), esse link para de abrir **para quem já o recebeu**, e o e-mail antigo vira um botão que não leva a lugar nenhum. Depois de gerar um link novo, **envie de novo** pelo bloco acima.
{: .warning }

**Gerar novo link.** Use quando o link foi parar onde não devia (encaminhado a quem não devia, publicado por engano). O sistema pede confirmação: **o link atual deixa de abrir na hora para quem já o recebeu, e o código para WordPress também muda.** Depois, a tela mostra o link novo para copiar.

![Pedido de confirmação ao gerar novo link, avisando que o link atual deixa de abrir]({{ '/assets/img/app/app-24-compartilhar-novo-link.png' | relative_url }})

> **Atenção.** Gerar novo link **não é desfazível** e quebra o link em todo lugar onde ele já foi colocado: e-mails, mensagens e a página do site da organização (o código de incorporação muda). Depois de gerar, **reenvie o link novo** a quem precisa e **troque o código** na página do site. E, no relatório que a organização publicou em um site, o relatório some até o código ser trocado.
{: .warning }

**PDF.** **Imprimir / Salvar PDF (16:9)** abre a janela de impressão do navegador. Escolha **Salvar como PDF**. Sai uma página por slide, em formato de tela de apresentação (16:9). Confira, no PDF, se todas as páginas saíram e nenhuma ficou cortada.

## 13. Cuidar de vários períodos de uma vez

**Por que importa.** Ao assumir um cliente com meses acumulados, ou ao refazer links, repetir a mesma ação período a período é cansativo e dá erro. A lista de períodos tem **ação em lote**.

1. Marque a caixa à esquerda de cada período (ou **Selecionar todos**).
2. Aparece uma barra com o número de **selecionados** e as ações: **Gerar novo link** e **Excluir selecionados**.

![Lista de períodos com dois selecionados e a barra de ações em lote]({{ '/assets/img/app/app-10-lote.png' | relative_url }})

![Confirmação do novo link em lote, informando quantos períodos serão afetados]({{ '/assets/img/app/app-11-novo-link-lote.png' | relative_url }})

A confirmação sempre **diz quantos períodos** serão afetados. Ao terminar, o resultado separa os **concluídos**, os **recusados por regra** (com o motivo) e os que **falharam**, e não esconde falha parcial.

> **Atenção com a exclusão.** Excluir um período apaga as planilhas, os números e os textos dele, e **os links públicos desses relatórios deixam de abrir**. Períodos **já emitidos** são **recusados** na exclusão em lote e precisam ser excluídos **um a um**, de propósito, para não se apagar por engano um relatório que o cliente já recebeu.
{: .warning }

## Depois do mês: acompanhar a evolução e organizar a entrega

Três telas do menu cuidam do que acontece **depois** que o relatório do mês está pronto. Cada uma tem a sua página:

- **[Indicadores (BI)]({{ '/mes-do-analista/indicadores/' | relative_url }})**: para olhar o trimestre, o semestre ou o ano, e comparar com o período anterior e com o ano passado, com os avisos que dizem quando uma comparação não é confiável. Use quando a diretoria perguntar "e no conjunto?".
- **[Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }})**: reúne os relatórios **emitidos** do cliente, com os links, e oferece **um link só** para o cliente ver todos. É também onde você troca vários links de uma vez.
- **[Relatório consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }})**: junta vários meses (trimestre, semestre, ano ou período escolhido) em **um book só**, com comparações, análise, link, PDF e e-mail. Use quando o cliente pedir o fechamento do período, e não doze relatórios.

Os três dependem do que você faz neste mês: o **Indicadores** e o **Consolidado** leem o que você **salvou**, e o **Portfólio** só mostra o que você **emitiu**.

## Checklist do mês

- [ ] Cliente ativo conferido.
- [ ] Período criado, com o ciclo certo.
- [ ] Planilhas importadas; lista de recusadas lida.
- [ ] Seguidores de cada rede informados no fim do mês (sem o aviso da revisão); zeros de alcance verificados.
- [ ] Posts fora da curva marcados.
- [ ] Categorias consistentes.
- [ ] Dados do site atualizados; avisos do analista lidos; links marcados.
- [ ] Cursos (quando o cliente tem): dados atualizados, campanhas dos posts ligadas, análise do caminho lida.
- [ ] Clipping revisado (ou sem clipping, de propósito).
- [ ] Análise da IA lida, corrigida e salva.
- [ ] Capa e imagens conferidas.
- [ ] Relatório percorrido slide a slide antes de emitir.
- [ ] Relatório sem o selo "Mês em andamento" (ou o cliente avisado de que é parcial).
- [ ] No fim de trimestre, semestre ou ano: [consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }}) criado, com a prévia de cobertura lida e os meses fechados antes.
- [ ] Relatório emitido aparece no [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}) do cliente; o link do portfólio está só com quem deve vê-lo.
- [ ] Link enviado só a quem deve (de preferência pelo bloco de e-mail do Compartilhar, que deixa registro); PDF conferido.

Continue em [Boas práticas]({{ '/boas-praticas/' | relative_url }}) para os hábitos que evitam retrabalho, ou em [Perguntas frequentes]({{ '/perguntas-frequentes/' | relative_url }}) para as dúvidas mais comuns.

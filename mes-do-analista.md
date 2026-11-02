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
| 2 | [Criar o período do mês](#2-criar-o-período-do-mês), com ou [sem planilha](#criar-o-mês-sem-planilha) | Períodos & Emissão |
| 2b | [Ler as fontes ao criar o mês](#ler-as-fontes-ao-criar-o-mês) | Períodos & Emissão |
| 2c | [Quando o sistema cria e lê o mês sozinho](#quando-o-sistema-cria-e-lê-o-mês-sozinho) | Períodos & Emissão |
| 3 | [Importar as planilhas das redes](#3-importar-as-planilhas-das-redes) | Períodos & Emissão |
| 3b | [Informar os seguidores de cada rede](#3b-informar-os-seguidores-de-cada-rede) | Períodos & Emissão |
| 3c | [Ler da Meta, no lugar da planilha](#3c-ler-da-meta-no-lugar-da-planilha) | Períodos & Emissão |
| 3d | [Ler do YouTube e do LinkedIn, no lugar da planilha](#3d-ler-do-youtube-e-do-linkedin-no-lugar-da-planilha) | Períodos & Emissão |
| 4 | [Conferir as inconsistências da importação](#4-conferir-as-inconsistências-da-importação) | durante a importação |
| 5 | [Conferir os números e marcar os posts fora da curva](#5-conferir-os-números-e-marcar-os-posts-fora-da-curva) | Períodos & Emissão |
| 6 | [Classificar as categorias](#6-classificar-as-categorias) | planilha e cadastro do cliente |
| 7 | [Revisar o capítulo do site](#7-revisar-o-capítulo-do-site) | Revisão |
| 7b | [Revisar o capítulo dos cursos](#7b-revisar-o-capítulo-dos-cursos) | Revisão |
| 8 | [Cuidar do clipping](#8-cuidar-do-clipping-imprensa) | Períodos & Emissão |
| 9 | [Gerar e revisar a análise da IA](#9-gerar-e-revisar-a-análise-da-ia) | Revisão |
| 10 | [Conferir a capa e as imagens dos melhores posts](#10-conferir-a-capa-e-as-imagens-dos-melhores-posts) | Revisão |
| 11 | [Salvar e emitir o relatório](#11-salvar-e-emitir-o-relatório), com o [relatório emitido congelado](#relatório-emitido-fica-como-foi-emitido) e a [gravação segura](#salvar-com-segurança-duas-pessoas-no-mesmo-mês-e-sair-sem-salvar) | Revisão |
| 12 | [Compartilhar o link e gerar o PDF](#12-compartilhar-o-link-e-gerar-o-pdf) | o relatório aberto |
| 13 | [Cuidar de vários períodos de uma vez](#13-cuidar-de-vários-períodos-de-uma-vez) | Períodos & Emissão |

> **O que é só do super-administrador.** Ligar o site, o Instagram e o Facebook, o YouTube e o LinkedIn de um cliente, configurar a inteligência artificial, o Matomo e as redes (Meta, YouTube e LinkedIn), convidar pessoas e trocar a identidade da organização ficam em "Configurações do Sistema" e no cadastro do cliente, e são tratados na [parte 6]({{ '/administracao/' | relative_url }}) e na [parte 5]({{ '/site-e-plugin/' | relative_url }}). Aqui estão as tarefas de quem monta o relatório.
{: .note }

> **Onde aparecem as mensagens do sistema.** As confirmações e os resultados passageiros ("salvo", "importado", "lido") aparecem como um aviso discreto no **canto inferior direito** da tela, sem empurrar o conteúdo para baixo. Os de sucesso e os informativos **somem sozinhos em alguns segundos**; deixar o mouse sobre o aviso, ou o foco do teclado nele, segura-o na tela. Os de **erro ficam até você fechar** (no **×** do aviso), para dar tempo de ler. Vários avisos se empilham. O que pede uma decisão sua (as janelas de confirmação), o erro de um campo (junto do campo), os avisos que continuam valendo enquanto o problema existir (como "ligação expirada") e os resumos longos de leitura continuam **no lugar de sempre**, na própria tela.
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
4. Confira o **Ciclo de Medição das Mídias**. Se o super-administrador cadastrou um **dia de fechamento** para o cliente, a janela já abre no último período fechado dele, com as datas dele (fechamento no dia 25: de 26/09 a 25/10, que é o relatório de **outubro**), e o botão passa a dizer **Restaurar o ciclo do cadastro**. Sem dia de fechamento, o padrão é o mês cheio, e o botão é **Restaurar Mês Inteiro**. Nos dois casos você pode ajustar a **Data Inicial** e a **Data Final**: as datas que você escolher à mão **não são trocadas** se você mudar o mês depois.
5. Escolha como o mês começa, na mesma janela:
   - **Com planilha:** siga para a importação (próxima tarefa).
   - **Sem planilha:** não escolha arquivo nenhum. O botão do canto da janela passa a dizer **Criar mês sem planilha**, e uma dica embaixo explica: sem arquivo, o mês é criado vazio, e você lê direto das redes ligadas ou acrescenta uma planilha depois. Clique nele (veja [Criar o mês sem planilha](#criar-o-mês-sem-planilha)).
   - Para desistir, feche com **Cancelar**.
6. Se o cliente tem fontes ligadas (redes, site, cursos), a janela mostra o bloco **Ler ao criar o mês**, com cada uma já marcada. Confira o que vai ser lido e desmarque o que não quiser. Veja [Ler as fontes ao criar o mês](#ler-as-fontes-ao-criar-o-mês).

![Janela Importar Novo Período, com mês, ano, ciclo de medição, a área para soltar as planilhas e o bloco Ler ao criar o mês, com Instagram, Facebook, YouTube e Site marcados]({{ '/assets/img/app/app-03-novo-periodo.png' | relative_url }})

No celular, a janela é a mesma, em uma coluna só: o bloco **Ler ao criar o mês** fica logo acima dos botões.

![Janela Importar Novo Período no celular, em uma coluna, com o bloco Ler ao criar o mês acima dos botões Cancelar e Criar mês sem planilha]({{ '/assets/img/app/app-03-novo-periodo-mobile.png' | relative_url }})

### Cliente com dia de fechamento: o ciclo já vem pronto

**Por que importa.** Muitas organizações fecham o relatório fora do mês civil: de 26 de um mês a 25 do seguinte, por exemplo. Antes, cada mês começava com você digitando as duas datas, e uma data errada muda **quais publicações contam** sem que nada na tela avise. Com o dia de fechamento no cadastro do cliente, a janela **Novo Período** já abre com as datas certas.

**Como funciona.** O período vai do dia seguinte ao fechamento do mês anterior até o dia de fechamento, e o **mês do relatório é o da data final**: de 26/09 a 25/10 é o relatório de **outubro**. Em mês mais curto vale o último dia (fechamento 31 em fevereiro fecha no dia 28, ou no 29 em ano bissexto). Quem cadastra o dia é o super-administrador (veja [Clientes e marcas]({{ '/administracao/#período-e-fechamento-do-cliente' | relative_url }})); você só vê o resultado.

![Janela Novo Período de um cliente com fechamento no dia 25, aberta em outubro de 2026, com as datas 26/09/2026 e 25/10/2026 e o botão Restaurar o ciclo do cadastro]({{ '/assets/img/app/app-112-novo-periodo-ciclo-do-cliente.png' | relative_url }})

**Exemplo.** O Instituto Horizonte fecha no dia 25. Em 29 de outubro, você abre **Novo Período** e a janela já está em **Outubro de 2026**, de **26/09/2026 a 25/10/2026**. Se você troca o mês para **Novembro**, as datas passam para 26/10 a 25/11. Se mudar uma data à mão (por exemplo, o início para 28/10) e depois trocar o mês, a data que você escolheu fica como está.

> **Dicas e armadilhas.**
> - **Mudar o dia de fechamento no cadastro vale só para os próximos períodos.** Os que já existem não mudam, nem o ciclo deles.
> - **Conferiu o ciclo, confira o mês.** A janela abre no último período **já fechado**; se você quer o mês em andamento (uma prévia, por exemplo), escolha-o nos seletores.
> - **Sem dia de fechamento no cadastro, nada muda:** a janela abre no mês cheio, como sempre. Se o cliente fecha em outras datas e a janela abre no mês civil, peça ao super-administrador para cadastrar o dia.
{: .tip }

### Criar o mês sem planilha

**Por que importa.** Para o cliente que já está ligado à Meta, ao YouTube ou ao LinkedIn, a planilha deixou de ser o ponto de partida: os números vêm das próprias redes. Antes, o mês só passava a existir depois de você subir um arquivo, mesmo que fosse só para ele nascer e você poder usar o botão de ler das redes. Agora o mês nasce sozinho, e o primeiro número que entra nele pode ser o da leitura.

**O que acontece quando você clica em Criar mês sem planilha**

1. A janela fecha e o mês aparece na lista de períodos como **"0 publicações · 0 arquivos"**. É assim que um mês vazio se apresenta, e não é erro.
2. Se havia fontes marcadas em **Ler ao criar o mês**, a leitura delas começa agora, em segundo plano (veja [Ler as fontes ao criar o mês](#ler-as-fontes-ao-criar-o-mês)). Se você desmarcou todas, o mês fica vazio. Em qualquer dos casos, ao abrir o mês, ele abre normalmente. Para cada rede ligada ao cliente você vê o bloco de leitura: **Ler da Meta**, **Ler do YouTube** e **Ler do LinkedIn** (veja as tarefas [3c](#3c-ler-da-meta-no-lugar-da-planilha) e [3d](#3d-ler-do-youtube-e-do-linkedin-no-lugar-da-planilha)). Cliente sem nenhuma rede ligada não tem esses blocos, e aí a saída é a planilha.
3. A planilha continua valendo: **Acrescentar Planilha**, na página do mês, soma uma rede que a leitura não cobre (o TikTok, por exemplo, só entra por planilha).

![Mês criado sem planilha, com 0 publicações e 0 arquivos na lista e os blocos Ler da Meta e Ler do YouTube na página do mês]({{ '/assets/img/app/app-99-mes-vazio-blocos-leitura.png' | relative_url }})

**Exemplo.** O Instituto Horizonte tem o Instagram e o Facebook ligados à Meta e o LinkedIn ligado. No dia 1º de novembro você cria **outubro de 2026** sem planilha e **desmarca** as fontes do bloco **Ler ao criar o mês**, porque prefere ler uma rede de cada vez. O mês aparece com "0 publicações · 0 arquivos"; você abre, clica em **Ler da Meta** e depois em **Ler do LinkedIn**, e as publicações entram sem arquivo nenhum. (Com as fontes marcadas, que é o padrão, essa leitura já teria corrido sozinha: a próxima seção conta como.)

**Se o mês já existe.** Criar sem planilha um mês que já está no sistema **não grava nada e não substitui nada**. A janela fecha, a tela abre o mês que estava salvo e mostra, por alguns segundos, o aviso **"Este mês já existe: abrimos o que estava salvo."** É de propósito: você não perde as publicações, os textos nem os seguidores já lançados por apertar o botão sem pensar.

> **Dicas e armadilhas.**
> - **Mês vazio não é relatório pronto.** Enquanto ele não tiver nenhuma publicação no ciclo, o relatório **não pode ser emitido** (veja a [tarefa 11](#11-salvar-e-emitir-o-relatório)) e o mês **não aparece** nos [Indicadores]({{ '/mes-do-analista/indicadores/' | relative_url }}) nem no [consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }}). Não é defeito: ele só conta depois de ter dado.
> - **Confira o ciclo antes de criar.** O ciclo vale para a leitura das redes também: ela traz só as publicações das datas do ciclo. Ajuste **Data Inicial** e **Data Final** antes de clicar, ou depois, pelo selo do ciclo na lista.
> - **Escolheu um arquivo sem querer?** O botão volta a dizer **Consolidar Período**, e a dica some. Para voltar ao mês sem planilha, feche com **Cancelar** e abra o **Novo Período** de novo, sem escolher arquivo.
> - **Não precisa subir uma planilha qualquer só para o mês nascer.** Se o cliente tem a rede ligada, crie sem planilha e leia dela. Subir uma planilha de outra rede só para criar o mês deixava a leitura com a pergunta de substituição e uma planilha guardada que não era a fonte do mês.
{: .tip }

**Quando dá errado**

| A tela diz | Quer dizer | O que fazer |
|---|---|---|
| **"Este mês já existe: abrimos o que estava salvo."** | O mês já estava criado; nada foi gravado | Trabalhe no mês aberto. Para trocar o conteúdo dele, use **Acrescentar Planilha** ou a leitura das redes |
| O mês aparece com **"0 publicações · 0 arquivos"** | O mês nasceu vazio, como esperado | Leia das redes ou acrescente uma planilha |
| Não há bloco de leitura na página do mês | O cliente não tem aquela rede ligada | Avise o super-administrador para ligar a rede, ou use a planilha |

### Ler as fontes ao criar o mês

**Por que importa.** Antes, criar o mês era só o começo: depois você abria a página dele e clicava, rede por rede, em **Ler da Meta**, **Ler do YouTube**, **Ler do LinkedIn**, e ainda buscava os números do site e dos cursos na revisão. Agora a própria janela que cria o mês já oferece as fontes do cliente. Você cria, o **servidor** lê todas, uma de cada vez, e você continua usando o app, ou fecha a página: a leitura termina sozinha. O mês nasce com os números, e o tempo que sobra vai para conferir, não para clicar.

**O bloco "Ler ao criar o mês".** Aparece na janela **Novo Período**, abaixo da área dos arquivos, para o cliente que tem pelo menos uma fonte. As fontes possíveis são **Instagram**, **Facebook**, **YouTube**, **LinkedIn**, **Site (Matomo)** e **Cursos (Moodle)**. Cada uma segue uma regra:

| A fonte aparece... | Quando | O que você faz |
|---|---|---|
| **Marcada** | Está ligada ao cliente e em condição de ler | Nada: ela será lida. Desmarque se não quiser ler agora |
| **Desabilitada, com o motivo embaixo** | Está ligada, mas não pode ler agora. Exemplo: **"Ligação expirada: peça ao administrador para renovar."** | Resolva o motivo (muitas vezes é do super-administrador) e use o botão de ler do mês depois |
| **Desabilitada, com "A planilha escolhida já traz esta rede"** | Você escolheu, na mesma janela, uma planilha daquela rede | Nada. Vale **uma fonte por rede por mês**: a planilha ganhou, e a rede não é lida |
| **Não aparece** | O cliente contratou a rede, mas ninguém a ligou ainda | Peça ao super-administrador para ligar (veja a [parte 6]({{ '/administracao/' | relative_url }})) |

![Bloco Ler ao criar o mês com Instagram e Facebook desabilitados e a mensagem Ligação expirada: peça ao administrador para renovar, e YouTube e Site marcados]({{ '/assets/img/app/app-109-novo-periodo-fonte-bloqueada.png' | relative_url }})

Se o mês que você está criando ainda não terminou, o bloco avisa em amarelo: **"Este mês ainda não terminou: os números lidos serão parciais, até o dia da leitura."**

**Escolher planilha e ler fontes na mesma janela.** Funciona, e cada rede tem uma fonte só. No exemplo abaixo, o arquivo traz as abas do Instagram e do YouTube: as duas redes ficam bloqueadas, e o Facebook e o site, que a planilha não cobre, seguem marcados e são lidos ao criar.

![Janela Novo Período com duas abas preenchidas do modelo, Instagram e YouTube, como dois cartões, e as redes delas bloqueadas em Ler ao criar o mês, enquanto Facebook e Site seguem marcados]({{ '/assets/img/app/app-106-novo-periodo-planilha-bloqueia-rede.png' | relative_url }})

No celular, os cartões das planilhas e o bloco de fontes se empilham, e nada sai da tela.

![Janela Novo Período no celular, com os cartões das duas abas e o bloco Ler ao criar o mês, com Instagram e YouTube bloqueados]({{ '/assets/img/app/app-106-novo-periodo-planilha-bloqueia-rede-mobile.png' | relative_url }})

**O que acontece quando você cria o mês**

1. A janela fecha e o mês entra na lista de períodos.
2. Aparece o painel **Leitura das fontes**, com o nome do mês. Cada fonte passa por **Aguardando**, **Lendo…** e termina em **Concluída**, **Recusada** ou **Com falha**. Enquanto isso o painel diz: **"O servidor está lendo as fontes. Você pode continuar usando o app, ou até fechar a página: a leitura termina sozinha, e esta tela mostra o resultado quando você voltar."**
3. **Você pode continuar trabalhando, ou ir embora.** Nada trava: abra outro mês, mude de cliente, edite, feche a página. Se você (ou outra pessoa) editar o mês enquanto a leitura corre, **a edição não se perde**: a leitura é aplicada sobre a versão mais recente do mês.
4. Quando todas terminam, o painel troca o aviso de andamento por um resumo, como **"Leitura terminada: 1 concluída, 3 com falha."**, e lista o resultado de cada fonte. Se alguma fonte falhou ou foi recusada, o painel fica amarelo. **Fechou a página no meio?** Ao voltar a **Períodos & Emissão**, o painel está lá, com o resultado. O **X** do canto fecha o painel, e **o que você fechou não volta**.

![Painel Leitura das fontes de outubro de 2026, com o resumo 1 concluída, 3 com falha, Instagram e Facebook com falha pelo limite de leituras da Meta, YouTube concluído com 5 novas publicações e Site com falha porque não foi possível conectar ao Matomo]({{ '/assets/img/app/app-107-leitura-ao-criar-resultado.png' | relative_url }})

No celular, o painel ocupa a largura da tela e a lista continua legível:

![Painel Leitura das fontes no celular, com as mesmas quatro fontes e o resumo no alto]({{ '/assets/img/app/app-107-leitura-ao-criar-resultado-mobile.png' | relative_url }})

**Como ler o resultado de cada fonte**

| O painel diz | Quer dizer | O que fazer |
|---|---|---|
| **Concluída**, com "N novas, N atualizadas, N removidas." | A fonte foi lida e entrou no mês | Confira os números na página do mês |
| **Concluída**, com "N linhas recusadas: …" | A fonte entrou, mas o leitor barrou algumas linhas por incoerência (as mesmas regras da [tarefa 4](#4-conferir-as-inconsistências-da-importação)) | Leia o motivo. Linha recusada não entra no relatório |
| **Concluída**, com "Nenhuma publicação encontrada neste ciclo" | A rede não devolveu nada para as datas do ciclo. Em mês antigo, pode ser a janela de leitura da rede | Confira o ciclo. Se o mês é antigo, use a planilha |
| **Concluída**, com "Seguidores: o mês tem N digitado e a leitura trouxe M; o digitado foi mantido." | Você já tinha digitado os seguidores, e o número digitado vale mais | Nada. Se o digitado estiver errado, corrija na [tarefa 3b](#3b-informar-os-seguidores-de-cada-rede) |
| **Com falha**, com **"A leitura foi interrompida (o servidor reiniciou) e não terminou. Leia de novo pelo botão do mês."** | O servidor reiniciou no meio da leitura e não conseguiu retomá-la | Leia de novo pelo botão da fonte na página do mês (ou **Atualizar dados do site** / **dos cursos**, na revisão) |
| **Recusada** | O mês já tem publicações dessa rede vindas de planilha, e vale uma fonte por rede por mês: a leitura não foi aplicada | Mantenha a planilha, ou use o botão de ler do mês para **substituí-la** (ele pede confirmação) |
| **Com falha**, com **"Limite de 6 leituras da Meta a cada 10 minutos atingido. Tente de novo em N s."** | A Meta limita as leituras **por pessoa**, somando todos os clientes. Instagram e Facebook, lidos juntos, gastam uma só | Espere o tempo que a tela diz e clique em **Ler da Meta** na página do mês |
| **Com falha**, com **"Não foi possível conectar ao Matomo."** | O Matomo, que fornece os números do site, não respondeu | Na revisão, **Atualizar dados do site** ([tarefa 7](#7-revisar-o-capítulo-do-site)). Se persistir, avise o super-administrador |
| **Com falha**, com outra mensagem (ligação vencida ou revogada, acesso do Moodle não configurado) | A ligação da rede ou o acesso ao Moodle precisa de atenção | A mensagem diz o que houve. A renovação é do super-administrador (veja a [parte 6]({{ '/administracao/' | relative_url }})) |

**A falha de uma fonte não para as outras.** No painel da figura, o Instagram e o Facebook falharam e o YouTube foi lido e concluído do mesmo jeito. O que deu certo fica gravado; o que falhou, você refaz com o botão de ler da fonte.

**Exemplo.** Na quinta-feira, 29 de outubro, a coordenação do Instituto Horizonte pede uma prévia do relatório de outubro. Você abre **Novo Período**, deixa **Outubro** e **2026**, e vê as quatro fontes ligadas já marcadas, com o aviso amarelo de que o mês não terminou. Clica em **Criar mês sem planilha**. O painel mostra o andamento e, em seguida, o resumo: o YouTube trouxe 5 vídeos, mas o Instagram e o Facebook falharam pelo limite de leituras da Meta e o Matomo estava fora do ar. Você espera os 540 segundos que a tela indica, clica em **Ler da Meta** na página do mês e, mais tarde, em **Atualizar dados do site** na revisão. No dia 3 de novembro, com o mês fechado, você lê de novo para trocar os números parciais pelos finais.

> **Dicas e armadilhas.**
> - **Mês em andamento traz números parciais.** A leitura só enxerga até o dia em que roda, e o painel repete o aviso. **Leia de novo depois que o mês fechar**: os números de publicações recentes ainda crescem nos dias seguintes. Relatório de mês aberto, emitido sem reler, mostra menos do que o mês teve.
> - **Pode fechar a página.** A leitura corre no **servidor**, não na sua tela: fechar a página, trocar de computador ou desligar o aparelho não a interrompe. Ao voltar a **Períodos & Emissão**, o painel mostra o resultado de cada fonte. Se o servidor reiniciar no meio, ele tenta retomar a leitura sozinho; se não conseguir, a fonte aparece **Com falha**, dizendo que foi interrompida, e você lê pelo botão dela.
> - **Fechou o painel no X e quer rever o resultado?** Ele não volta. Abra o mês e use o botão de ler da fonte: os números atuais aparecem de novo, com o horário da leitura.
> - **A leitura não escreve textos com IA.** Ela busca os números do site e dos cursos, mas **não roda a análise por IA** desses capítulos. Gere os textos na revisão, como sempre ([tarefa 7](#7-revisar-o-capítulo-do-site) e [tarefa 7b](#7b-revisar-o-capítulo-dos-cursos)).
> - **Abrir um mês que já existe não lê nada.** Se o mês já está no sistema, a janela só o abre (veja [Se o mês já existe](#criar-o-mês-sem-planilha)). A leitura ao criar vale para mês novo.
> - **Desmarcou uma rede de propósito?** Ela não é lida e não aparece no painel. Para ler depois, use o botão de ler dela na página do mês.
> - **Muitas leituras seguidas esbarram no limite da Meta.** O limite é de 6 leituras em 10 minutos por pessoa, e cada mês criado com Instagram ou Facebook marcado gasta uma. Criando vários meses em sequência, os últimos podem falhar. Espere o tempo que a mensagem diz e leia pelo botão do mês.
{: .tip }

> **O mês de referência segue o fim do ciclo.** Um ciclo de 25/09 a 25/10 é o relatório de **outubro**. Se o sistema deduzir as datas das publicações da planilha, o mês e o ano vêm da **data final**.
{: .note }

### Quando o sistema cria e lê o mês sozinho

**Por que importa.** Criar o mês e ler as redes é a parte repetitiva do fechamento: todo mês, no mesmo dia, alguém precisa lembrar. Para o cliente que o super-administrador marcou para isso, o sistema faz essa parte no dia seguinte ao fechamento, e você começa o mês pela **revisão**, não pela criação. **Ele não emite nada**: conferir os números e emitir continua com você.

**O que o sistema faz, e quando**

1. **No dia seguinte ao fechamento do cliente** (a partir das 5h, horário de Brasília), cria o período, se ele ainda não existe, e lê as fontes ligadas do cliente. Com fechamento no dia 25, isso acontece no dia 26.
2. **Três dias depois**, se o período ainda **não** estiver emitido, lê de novo. O motivo é que algumas redes (o YouTube, por exemplo) demoram de dois a três dias para entregar todos os números. A segunda leitura **mantém o que você editou** e **não troca** uma rede que você substituiu por planilha.
3. **A equipe recebe um e-mail** com o resumo de cada leitura (**"Período de [mês] pronto para revisar"** e, depois, **"Segunda leitura de [mês] concluída"**), com o resultado por fonte. Quem recebe são os analistas e os super-administradores; **o cliente nunca recebe**.

**Onde aparece.** Na lista de **Períodos & Emissão**, o mês preparado pelo sistema ganha um selo discreto, **Criado automaticamente** (ou **Lido automaticamente**, quando o mês já existia e o sistema só leu), e, ao abrir o mês, um painel com o horário e o resultado de cada fonte.

![Lista de períodos com o selo Criado automaticamente no mês de janeiro, e o painel com o horário e o resultado de cada fonte: Instagram, Facebook e site lidos, YouTube com falha por ligação expirada]({{ '/assets/img/app/app-113-periodos-selo-criado-automaticamente.png' | relative_url }})

O painel diz **quando** o sistema criou e leu (**"Criado e lido automaticamente em 26/01, 05:05. Emitir continua com você, depois da revisão."**), mostra **lida**, **não aplicada** ou **falhou** para cada fonte (a falha **aparece**, com o motivo) e tem o botão **Ler de novo**, que refaz a leitura das fontes que o sistema leu, do mesmo jeito que o botão de ler de cada fonte. O botão **some** quando o mês é emitido.

![Painel do período criado automaticamente, com o horário, o botão Ler de novo e o resultado de cada fonte]({{ '/assets/img/app/app-114-periodo-painel-fechamento.png' | relative_url }})

**Ler de novo** refaz a leitura das fontes que o sistema leu, como o botão de cada fonte, e só aparece enquanto o mês não está emitido.

**Quem liga.** A criação automática é uma chave **por cliente**, no cadastro, **desligada até alguém ligar**, e só o super-administrador a liga (veja [Clientes e marcas]({{ '/administracao/#período-e-fechamento-do-cliente' | relative_url }})). Ao ligar a chave, o sistema já processa o ciclo fechado mais recente do cliente.

**Exemplo.** O Instituto Horizonte fecha no dia 25 e está com a chave ligada. No dia 26, às 5h, o sistema cria **janeiro de 2026** (de 26/12 a 25/01) e lê o Instagram, o Facebook, o YouTube e o site. Ao abrir o sistema, você vê o selo e o painel: Instagram e Facebook **lidos**, site **lido**, e o YouTube **falhou**: **"Ligação expirada: peça ao administrador para renovar."** Você avisa o super-administrador, e depois da renovação clica em **Ler de novo**. No dia 29, o sistema lê de novo sozinho; como você já tinha editado os textos, eles ficam como estão. Você revisa e emite.

> **Dicas e armadilhas.**
> - **Mês criado sozinho não é mês conferido.** Abra o painel antes de tudo: uma fonte que **falhou** não entra no relatório, e só você vai perceber se não olhar.
> - **Se você criou o mês à mão antes do sistema, ele não cria outro nem apaga o seu.** Ele só lê as fontes que ainda **não têm dado**, e não toca no que você já tem.
> - **Apagou o mês de propósito? Ele não volta.** O sistema não recria um mês que o analista apagou.
> - **Ficam de fora:** cliente inativo, cliente com contrato encerrado, cliente sem nenhuma fonte ligada e mês já emitido. Se o painel diz **"Segunda leitura não feita: o período já estava emitido."**, é isso. **"Segunda leitura sem fontes a ler (as redes foram trocadas por planilha)."** quer dizer que a planilha ganhou das redes, e não há o que ler.
> - **Chegou o e-mail e não há selo?** Confira o cliente ativo no alto do sistema: o selo e o painel só aparecem para o cliente em que você está.
{: .tip }

**Ajustar o ciclo depois.** Na lista de períodos, o selo **Ciclo: 01/10/2026 a 31/10/2026** abre uma janela para trocar as datas.

![Janela Ajustar Ciclo de Medição, com datas inicial e final e o alcance da conta no mês]({{ '/assets/img/app/app-05-ciclo.png' | relative_url }})

Nessa janela também há **Detectar das Postagens** (sugere as datas a partir das publicações importadas) e o campo opcional **Alcance da conta no mês**, para quando a rede informa o alcance da conta e não só o somado das publicações.

> **Atenção.** Mudar o ciclo muda **quais publicações contam**. Num período já emitido, a troca muda os dados do mês, mas o link do cliente continua mostrando o relatório como foi emitido, até você reemitir (veja a [tarefa 11](#relatório-emitido-fica-como-foi-emitido)). Combine com quem o recebeu antes de reemitir.
{: .warning }

## 3. Importar as planilhas das redes

**Por que importa.** As planilhas são a fonte dos números das redes. Por padrão, o sistema não "puxa" dados das redes sozinho: ele lê o que você importa. (A exceção é o Instagram e o Facebook de um cliente que o super-administrador ligou à Meta, e o YouTube e o LinkedIn de um cliente ligado a essas redes: veja as tarefas [3c](#3c-ler-da-meta-no-lugar-da-planilha) e [3d](#3d-ler-do-youtube-e-do-linkedin-no-lugar-da-planilha).) Importar direito significa que os números do relatório batem com o que a rede mostra.

**O modelo de planilha.** O botão **Modelo de Planilha**, no alto da página, baixa um arquivo com **uma aba para cada rede** (**Instagram**, **Facebook**, **LinkedIn**, **TikTok** e **YouTube**) e três abas de apoio. Cada aba de rede tem **só as colunas que aquela rede informa**, com os nomes que ela usa, e **não tem a coluna "Canal"**: a rede é a da aba. Você preenche as abas das redes que o cliente usa e deixa as outras em branco.

Toda aba de rede começa com **Data**, **Pauta / Título do Conteúdo**, **Link da Publicação**, **Formato** e **Categoria Editorial**, e termina com **Anômalo (Sim/Não)**. No meio, cada rede tem as suas:

| Aba | Colunas do meio |
|---|---|
| **Instagram** | Alcance, Impressões, Interações, Curtidas, Comentários, Compartilhamentos, Salvamentos, Visitas ao Perfil |
| **Facebook** | Alcance, Impressões, Interações, Reações, Comentários, Compartilhamentos, Cliques no Link |
| **LinkedIn** | Alcance, Impressões, Interações, Reações, Comentários, Compartilhamentos, Cliques |
| **TikTok** | Visualizações (no lugar do alcance), Curtidas, Comentários, Compartilhamentos |
| **YouTube** | Visualizações (no lugar do alcance), Curtidas, Comentários, Compartilhamentos, Taxa de Retenção |

As três abas de apoio:

- **Resumo do Mês.** Uma linha por rede, com **Seguidores no fim do mês** e **Alcance da conta no mês** (o alcance que a própria rede informa para a conta, que **não é a soma** do alcance de cada publicação). O YouTube e o TikTok não informam alcance da conta. Você também pode digitar os seguidores direto na tela do mês, sem mexer na planilha: veja a [tarefa 3b](#3b-informar-os-seguidores-de-cada-rede). **O número digitado na tela vale mais que o da planilha.**
- **Exemplos.** Três linhas fictícias (Instagram, Facebook e YouTube) que mostram o jeito de preencher. **Nada dela é importado**, nem se você a preencher.
- **Instruções & Dicionário.** O passo a passo e o que é cada coluna, com as abas em que ela aparece.

**Por que uma aba por rede.** Cada rede conta de um jeito: o Instagram tem salvamentos e visitas ao perfil, o Facebook tem reações e cliques no link, o YouTube e o TikTok não informam alcance, e sim visualizações. Num modelo só, com todas as colunas misturadas, metade delas ficava sempre vazia e era fácil preencher a coluna errada. Na aba da rede, só aparece o que ela entrega, e a rede não precisa ser repetida em cada linha.

**O que acontece quando você envia o arquivo.** Cada aba **preenchida** vira um **cartão** na prévia, com o nome do arquivo e a aba (por exemplo, **modelo.xlsx · aba Instagram**), e é importada como uma planilha **daquela rede**. A aba em branco é ignorada, e a rede dela continua livre para ser lida pelo **Ler ao criar o mês**. As redes das abas preenchidas, ao contrário, ficam bloqueadas ali: vale uma fonte por rede por mês.

**O YouTube e o TikTok entram com visualizações no lugar do alcance**, e a origem fica marcada, como já acontece na leitura automática do YouTube. O relatório avisa que visualizações não são a mesma coisa que alcance (a mesma pessoa pode ver mais de uma vez).

> **Armadilhas do modelo.**
> - **Não mude os títulos das colunas nem o nome das abas.** Uma aba só é reconhecida como de rede se o nome **começa pelo nome da rede** ("Instagram", "Facebook"...). Renomeada para outra coisa, ela deixa de ser reconhecida como aba da rede, e as linhas dela podem ficar de fora do mês. Confira os cartões da prévia: cada aba preenchida tem de aparecer com o seu nome.
> - **O número do Resumo do Mês de uma rede cuja aba está em branco não entra.** Se você preencheu os seguidores do Facebook no Resumo mas não preencheu nenhuma linha na aba Facebook, esse número é ignorado: ele só vale junto com a aba da rede.
> - **Modelo em branco não cria nada.** Se você enviar o modelo sem preencher aba nenhuma, a prévia diz **"O modelo está em branco: preencha as abas das redes que o cliente usa e envie de novo."**, o botão **Consolidar Período** fica desabilitado e nenhuma rede é bloqueada em **Ler ao criar o mês**.
> - **Planilhas no modelo antigo continuam funcionando.** O arquivo de uma aba só, com a coluna **Canal**, as exportações das redes e as planilhas já guardadas nos meses antigos são lidas como sempre foram. Não precisa refazer nada que já existe.
{: .warning }

**A exportação do Meta entra como veio.** Você pode importar direto o arquivo que o Facebook ou o Instagram exporta, sem refazer no modelo. Em algumas exportações a coluna **Data** vem com a palavra **"Total"** em vez de uma data: nesse caso o sistema usa a **data do "Horário de publicação"** de cada postagem. A linha de total de verdade (sem horário de publicação) continua sendo ignorada. O Meta exporta o horário no fuso do Pacífico, e o sistema o converte para o horário de Brasília; uma postagem feita à noite não cai mais no dia seguinte por causa do fuso.

**Formato e link da exportação do Business Suite.** Em um **mês novo**, as colunas **Tipo de post** (vira o formato da publicação) e **Link permanente** (vira o link) da exportação do Business Suite da Meta são reconhecidas sozinhas, sem ligar as colunas à mão. Em um **mês que já tem publicações importadas**, nada muda, nem se você importar a mesma planilha de novo: as publicações ficam como estavam (formato "Não informado" e sem link, se foi assim que entraram), sem duplicar e sem perder o que você editou. Se você ligar as colunas à mão, a sua ligação vale como sempre valeu, e a leitura automática da Meta (**Ler da Meta**) tem o mapeamento próprio. **O aviso da prévia acompanha o que vale para o mês.** Em mês novo, com a coluna **Tipo de post** na planilha, a prévia **não mostra mais** o aviso "N linhas sem Formato", porque o formato será reconhecido ao gravar. Em mês que já tem publicações, a prévia segue mostrando o aviso, e ele é verdadeiro: as publicações ficam como estavam, sem formato. Nesse caso, confira o formato e o link depois de importar.

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

Se o período veio de uma **planilha online**, ele fica ligado a ela, e é possível **sincronizar** de novo quando a planilha for editada na nuvem. Se a planilha online usa o modelo por rede, cada aba preenchida vira o seu cartão, e a sincronização lê **só a aba da rede** de cada cartão. A sincronização atualiza só as publicações daquele período e daquele arquivo e, se houver publicações que sumiram da planilha, **avisa quantas serão removidas e pede confirmação**.

> **Dicas.**
> - Importe **uma planilha por rede** (ou use o modelo, com uma aba por rede) e confira o nome do arquivo, a aba e a rede no cartão.
> - Mantenha o **mesmo modelo de planilha todo mês**. Quando o formato muda, o sistema pede para ligar as colunas de novo.
> - Informe os seguidores de cada rede (na linha da rede, coluna **Seguidores no fim do mês**, da aba **Resumo do Mês**, ou na tela do mês, como na [tarefa 3b](#3b-informar-os-seguidores-de-cada-rede)). O número vale por rede e vai para o gráfico de evolução, a capa, o comparativo e o link público. **Sem ele, o gráfico diz "Sem dado de seguidores" e a linha se interrompe naquele mês**, em vez de cair para zero. Não digite 0 para "não sei": zero é um número, e o gráfico vai mostrar que a conta perdeu todo mundo.
{: .tip }

## 3b. Informar os seguidores de cada rede

**Por que importa.** As exportações das redes trazem o desempenho de cada publicação, mas **não trazem o total de seguidores da conta**. Esse número só existe no painel da própria rede, e muda a cada dia. Por isso é você quem o informa, e o melhor momento é o **último dia do mês**: é o número que fecha o mês e o que o mês seguinte vai comparar. Sem ele, o relatório não mostra a base de seguidores, nem o gráfico de evolução, nem a variação mês a mês daquela rede.

**Passo a passo**

1. Em **Períodos & Emissão**, abra o mês (o botão do mês na lista).
2. Role até o bloco **Seguidores no fim de [mês] de [ano]**. Há um campo por rede (**Seguidores do Instagram no fim do mês**, **Seguidores do Facebook no fim do mês**, e assim por diante), com as redes que o mês tem, as do cadastro do cliente e as que já têm número.
3. Digite o total de seguidores de cada rede **no último dia do mês**, como aparece no painel da rede.
4. Clique em **Salvar seguidores**. Só então o número é gravado: o botão fica desabilitado enquanto você não mudar nada, e a mensagem **"Seguidores gravados."** confirma.

![Bloco Seguidores no fim de janeiro de 2026, com o campo de cada rede, a sugestão do mês anterior e o botão Salvar seguidores]({{ '/assets/img/app/app-100-seguidores-fim-do-mes.png' | relative_url }})

**A sugestão do mês anterior.** Quando o mês anterior do mesmo cliente tem número, abaixo do campo aparece **"Sugestão (mês anterior): N, não gravada."** com o link **Usar sugestão**. A sugestão **não é gravada** sozinha: ela só entra no mês quando você clica em **Usar sugestão** (ou digita) e salva. Serve de atalho para quando o número mal mudou, e de conferência para quando você digitou um valor muito diferente.

**Quando o número vem da leitura das redes.** As redes só informam o número "de agora". Por isso o sistema **fotografa** os seguidores de cada rede a cada 4 horas e na hora em que a ligação é confirmada, e usa a foto para saber o número de um dia que já passou. Para um **mês fechado**, a leitura procura, nesta ordem: a **foto do último dia** do ciclo; a **foto mais próxima**, até 3 dias de distância (a revisão diz a data da foto usada); e o total por dia que a própria rede guardou (Facebook). **O Instagram não calcula o número a partir do de hoje**, porque o ganho diário que a Meta informa não desconta quem deixou de seguir e o resultado sairia menor que o real. Se nada disso existe, o **campo fica em branco**, com um aviso para você **digitar o número do fim do mês ou usar o marco histórico do cliente** (os totais de meses passados cadastrados em Clientes & Marcas). O número de hoje **não** entra mais como se fosse o do fim do mês. Mês **em andamento** continua com o número de hoje, e a revisão avisa.

**Qual número vale.** O número digitado aqui **vale mais** que o da planilha. Se a planilha importada trouxer outro número, a tela diz qual vale: **"A planilha importada traz N; vale o número digitado."** (ou **"vale esse número enquanto nada for digitado"**, quando você ainda não digitou nada). Assim você corrige um erro da planilha sem reimportar.

**Meses passados.** O bloco existe em todo mês, então dá para **corrigir ou completar meses antigos**. Isso conserta o gráfico de evolução e o comparativo dos relatórios daqueles meses.

**Exemplo.** No fechamento de outubro, o Instagram do Instituto Horizonte tinha 1.650 seguidores e o Facebook, 980. O campo do Instagram mostra "Sugestão (setembro de 2026): 1.620, não gravada." Você digita **1650** (não usa a sugestão, porque o número mudou), digita **980** no Facebook e clica em **Salvar seguidores**.

> **Dicas e armadilhas.**
> - **Anote no último dia do mês**, não "mais ou menos". Seguidores de hoje num relatório de mês passado fazem a base parecer maior do que foi. A leitura das redes já não faz isso sozinha em mês fechado (deixa o campo em branco), mas o que você digita vale como digitou.
> - **Campo em branco não é zero.** Em mês fechado sem foto, o gráfico interrompe a linha daquela rede em vez de inventar um número. Preencha, ou o comparativo fica sem essa rede.
> - **Não digite 0 para "não sei"**: o campo vazio é "não informado" e o gráfico interrompe a linha; zero é um número e o gráfico mostra que a conta perdeu todo mundo.
> - **Não grave a sugestão sem conferir.** Ela é o número do mês passado; se você só clicar e salvar, o comparativo mostrará "nenhuma variação" onde houve crescimento.
> - **Uma rede sem número nos dois meses fica de fora do total** do comparativo (veja [Comparativo geral]({{ '/como-ler-o-relatorio/redes/' | relative_url }})).
{: .tip }

**Quando dá errado.** Na revisão, o quadro **Avisos da revisão** traz um aviso só para você: **"Falta o número de seguidores de [rede] neste mês. Sem ele, o relatório não mostra a base de seguidores nem o comparativo dessa rede. Preencha na tela do mês (Períodos) ou na linha "Seguidores" da planilha."** O aviso não aparece no relatório nem no link público. Volte à tela do mês, preencha e salve.

Quando o número foi lido das redes e não é o do último dia, o quadro diz de onde ele veio: **"Instagram e Facebook: o número de seguidores é o da foto mais próxima, de 29/01/2026; a do último dia do mês não estava guardada. Confira."** A data à vista serve para você comparar com o painel da rede e, se tiver o do fim do mês, digitá-lo. O mesmo aviso vale para YouTube e LinkedIn.

![Quadro Avisos da revisão com três itens: falta de seguidores do LinkedIn, seguidores do Instagram e do Facebook vindos da foto mais próxima, de 29/01/2026, e o aviso dos Stories]({{ '/assets/img/app/app-120-revisao-avisos-seguidores.png' | relative_url }})

## 3c. Ler da Meta, no lugar da planilha

**Por que importa.** Para o cliente que o super-administrador **ligou à Meta**, o Instagram e o Facebook do mês podem vir direto das contas: um clique em **Ler da Meta** traz as publicações, com alcance, visualizações e interações, e oferece o número de seguidores do fim do mês. Não há planilha para exportar, conferir e trocar sem querer por outra. **A planilha continua valendo**, e a categoria editorial, as outras redes e os Stories de antes da captura seguem vindo por ela. Os Stories que o sistema capturou enquanto estavam no ar entram na leitura.

Os números da leitura são os **do momento em que você lê** (como exportar a planilha naquele dia), e cada rede usa **uma fonte por mês**: ou a planilha ou a Meta. Substituir a planilha pede confirmação, e dá para **voltar para a planilha**.

![Bloco Ler da Meta na página do mês, com a mensagem Instagram e Facebook ligados e o botão Ler da Meta]({{ '/assets/img/app/app-71-meta-ler-da-meta.png' | relative_url }})

O passo a passo, os avisos e o que fazer quando dá errado estão em [Ler da Meta]({{ '/mes-do-analista/ler-da-meta/' | relative_url }}).

> **Mês novo?** Não precisa subir planilha para ele existir: crie o mês [sem planilha](#criar-o-mês-sem-planilha) e o bloco **Ler da Meta** já está na página dele. Com o Instagram e o Facebook marcados em **Ler ao criar o mês**, a leitura corre sozinha logo depois de criar ([veja como](#ler-as-fontes-ao-criar-o-mês)), e este botão fica para refazer a leitura.
{: .tip }

## 3d. Ler do YouTube e do LinkedIn, no lugar da planilha

**Por que importa.** Para o cliente que o super-administrador **ligou ao YouTube** ou **ao LinkedIn**, os vídeos e as publicações do mês podem vir direto do canal e da Página: um clique em **Ler do YouTube** (ou **Ler do LinkedIn**) traz os números de cada um e oferece o número de inscritos ou seguidores do fim do mês. Valem as mesmas regras do [Ler da Meta](#3c-ler-da-meta-no-lugar-da-planilha): **uma fonte por rede em cada mês**, números **do momento da leitura**, e a planilha continua valendo e dá para voltar a ela. A diferença que muda a sua leitura do relatório: **o YouTube não informa alcance por vídeo**, e as **visualizações vão no lugar do alcance**, o que o relatório avisa.

![Bloco Ler do YouTube na página do mês, com a mensagem YouTube ligado, a explicação de que as visualizações vão no lugar do alcance e o botão Ler do YouTube]({{ '/assets/img/app/app-92-youtube-ler-do-youtube.png' | relative_url }})

Cada rede ligada tem o **seu** bloco. O passo a passo, os avisos e o que fazer quando dá errado estão em [Ler do YouTube e do LinkedIn]({{ '/mes-do-analista/ler-do-youtube-e-linkedin/' | relative_url }}).

> **Mês novo?** Crie o mês [sem planilha](#criar-o-mês-sem-planilha): os blocos **Ler do YouTube** e **Ler do LinkedIn** das redes ligadas já aparecem na página dele. Com as redes marcadas em **Ler ao criar o mês**, a leitura corre sozinha ao criar ([veja como](#ler-as-fontes-ao-criar-o-mês)), e estes botões servem para refazê-la.
{: .tip }

## 4. Conferir as inconsistências da importação

**Por que importa.** Uma planilha com erro vira um relatório com erro, e o cliente confia nele. O sistema recusa o que não faz sentido e mostra o motivo; sua tarefa é ler a lista antes de confirmar.

![Cartão da planilha instagram-outubro.xlsx, aba Instagram, na janela Novo Período, com a linha recusada por alcance maior que impressões e a linha de total ignorada]({{ '/assets/img/app/app-103-importacao-erros.png' | relative_url }})

O cartão de cada planilha mostra o nome do arquivo (e, no modelo por rede, a aba: **· aba Instagram**), quantas linhas valem, quantas foram bloqueadas e, logo abaixo, a linha e a coluna de cada problema. A linha de total aparece como ignorada.

O que o sistema faz sozinho:

- **Recusa linhas incoerentes.** O caso típico: **alcance maior que impressões** (o alcance, que conta pessoas, nunca pode passar das impressões, que contam exibições). A linha é recusada com a mensagem do problema, e a lista mostra a linha e a coluna.
- **Ignora linhas de total e de subtotal**, que não são publicações. Elas aparecem na prévia como ignoradas.
- **Entende números "sujos":** números escritos como texto, com ponto e vírgula, traços e vazios.
- **Sugere a ligação das colunas** quando os nomes não são os do modelo (por exemplo, "Tema" ou "Editoria" para a categoria).
- **Avisa quando o alcance muda de definição.** Se o mês atual usa **Visualizadores** e o anterior usou **Alcance** (ou o contrário), a revisão mostra um aviso a você e o slide do comparativo traz uma nota curta (também no link público): **"o alcance deste mês e o do anterior usam definições diferentes: a variação do alcance não é uma comparação exata"**. Não é erro da planilha, e não há o que corrigir: é o Meta que mudou a conta. Leia a variação do alcance com esse cuidado, e não conclua que a página "perdeu público" só por ela.

O que você faz:

1. **Leia a lista de erros** de cada planilha. Uma linha recusada **não entra no relatório**.
2. Se as colunas estiverem trocadas, use **Mapear Colunas** (ligação manual, com a primeira amostra de cada coluna ao lado) ou **Mapear com IA** (no cartão com erros, o botão se chama **Resolver com IA**): a IA lê uma amostra e propõe a ligação. Depois, **Aplicar e Reprocessar Planilha**.
3. Se o erro é de digitação na planilha, **corrija na origem** e importe de novo.

> **Atenção.** Linha recusada some do relatório **em silêncio** para quem só olha o total. Compare o número de publicações do período com o número de linhas da planilha. Se faltam publicações, a causa está na lista de recusadas.
{: .warning }

## 5. Conferir os números e marcar os posts fora da curva

**Por que importa.** É a última chance de pegar o erro antes de o cliente ver. E os **posts fora da curva** (uma vaga muito compartilhada, um vídeo que viralizou) distorcem a média do mês: marcá-los é o que deixa o relatório comparar a rotina com a rotina.

**Passo a passo**

1. Na página do período, role até os cartões **Posts, Alcance, Impressões, Engajamento, Ponderado e CTR de cliques**. Confira se batem com o esperado. **O cartão de alcance muda de nome conforme as redes do mês:** com Instagram, Facebook e LinkedIn ele diz **Alcance** ("contas únicas", e a linha de cada rede termina em "contas alcançadas"); num mês **só com YouTube** diz **Visualizações** ("a mesma pessoa pode repetir", e a linha da rede termina em "visualizações"); num mês com YouTube **e** outras redes diz **Alcance e visualizações** ("soma de alcance e visualizações"). É o mesmo aviso do relatório: o YouTube não informa alcance por vídeo, e visualização conta a mesma pessoa mais de uma vez.
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
- **Mês fechado com números parciais.** Se o ciclo já terminou e os números guardados vão só até um dia antes do fim (a busca foi feita com o mês aberto), a revisão avisa: **"O mês já fechou e os números do site guardados são parciais: vão só de dd/mm a dd/mm, e o ciclo é de dd/mm a dd/mm. Clique em \"Atualizar dados do site\"."** Em mês em andamento isso é esperado; em mês fechado, o relatório sairia incompleto. Em mês **já emitido**, a revisão não busca sozinha: avisa que faltam os números, e o botão pede confirmação (veja a [tarefa 11](#relatório-emitido-fica-como-foi-emitido)).
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
- **Mês fechado com números parciais:** o mesmo aviso do site aparece (**"O mês já fechou e os números dos cursos guardados são parciais…"**), pedindo **Atualizar dados dos cursos**.
- **De que dia são os números.** A taxa de conclusão, os inscritos ativos e o total de cursos da plataforma **não são do ciclo**: são do dia da busca no Moodle, e o slide diz **"até dd/mm"**. Busque perto do fechamento para o dia fazer sentido ([como o leitor vê isso]({{ '/como-ler-o-relatorio/cursos/' | relative_url }})).
- **Relatórios salvos antes desta versão (1.30.0) não têm o caminho.** Para ganhar o slide **Do post ao curso**, abra a revisão do mês e clique em **Atualizar dados dos cursos**.
- **Gerar análise do caminho com IA.** O botão aparece quando há visitas vindas das redes, de campanhas ou de outros sites à plataforma. A IA cruza o alcance das redes, as visitas à plataforma e as inscrições, e escreve o texto do slide **Do post ao curso**. Ela só afirma o que os números sustentam, e o texto com número que não está nos dados é descartado. Depois de gerado, o botão passa a dizer **Gerar a análise de novo**. O texto que você editar vale no lugar do da IA.
- **Posts e campanhas que levam aos cursos.** Para o cartão do Top Posts dizer **"Levou N pessoas aos cursos"**, o post precisa estar ligado a uma **campanha** dos cursos (a campanha do link marcado). Cada post tem uma lista: se o título do post for **igual** ao nome da campanha, a ligação é automática e a lista mostra **"Automática: [campanha]"**; se não, escolha a campanha na lista. **Nunca por data.** Clique em **Salvar Alterações** para valer no relatório.
- **A caixa editável "Cursos: do post ao curso"** fica entre os textos analíticos da narrativa (bloco **Narrativa Executiva Assistida por IA**), ao lado da **Cursos: visão geral**. É o texto do slide: leia, corrija e salve. Apagar o texto o oculta.
- **Diagnóstico e Próximos Passos** passam a **cruzar redes, site e cursos** quando há dado dos três: ao regerar a narrativa, a IA considera o que as redes, o site e os cursos mostram juntos.

![Bloco Cursos da revisão, com o botão Gerar análise do caminho com IA e a lista Posts e campanhas que levam aos cursos]({{ '/assets/img/app/app-101-revisao-bloco-cursos.png' | relative_url }})

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
- **Melhores publicações.** Em **Evidência Visual: Top Publicações do Mês**, cada uma das campeãs tem **Puxar Imagem** (busca a imagem do endereço da publicação) ou **Anexar print local**. Depois, **Salvar Prints Anexados**. **Vídeo do YouTube é exceção:** o sistema não busca imagem na página do YouTube, então **Puxar Imagem** não traz nada para ele, a capa automática não o usa, e o cartão mostra **"Vídeo do YouTube (a miniatura não é exibida)"**. Se quiser uma imagem ali, use **Anexar print local**.

> **Rosto de criança.** Para escolas e organizações que atendem crianças, use no cadastro do cliente a opção **Sem foto** (a capa usa a faixa de marca, sem imagem). As fotos dos posts que você puxa também aparecem nos slides: confira se a organização tem autorização de uso de imagem.
{: .warning }

## 11. Salvar e emitir o relatório

**Por que importa.** O estado do relatório (**validado** ou **emitido**) diz ao resto da equipe em que ponto ele está, e determina o que o sistema deixa fazer (por exemplo, períodos já emitidos **não** podem ser excluídos em lote).

No alto da revisão há três botões, e cada um faz uma coisa só. Num mês **já emitido**, dois deles mudam de nome (veja [Relatório emitido: fica como foi emitido](#relatório-emitido-fica-como-foi-emitido)):

- **Salvar Alterações:** guarda o que você fez (textos, prints, campanhas dos posts) e marca o período como **validado**. Pode ser feito quantas vezes quiser, e nunca desfaz uma emissão.
- **Visualizar Book 16:9:** abre o relatório com as edições que estão na tela, para você conferir. **Não grava nada.** O que você não salvou continua só na tela e nunca chega ao link do cliente. Num mês emitido, o botão se chama **Visualizar com as alterações**.
- **Emitir Relatório:** grava e marca o período como **emitido**, a versão que vai para o cliente. Períodos emitidos ficam protegidos contra exclusão em lote. **O link do cliente só abre depois de emitido:** enquanto o período é rascunho ou validado, quem abre o link vê "Relatório não encontrado".

**Relatório sem publicação não se emite.** Se o período não tem **nenhuma publicação dentro do ciclo**, o **Emitir Relatório** não grava a emissão: a tela mostra, no canto inferior direito, o aviso **"Este mês não tem publicações no ciclo: leia das redes ligadas ou acrescente uma planilha antes de emitir o relatório."** O servidor recusa do mesmo jeito, então não adianta tentar por outro caminho.

- **Por que existe:** emitir é entregar. Um relatório sem publicação seria um book vazio indo ao cliente, quando o que falta é só ler as redes ou acrescentar a planilha.
- **Quando acontece:** quase sempre num mês criado [sem planilha](#criar-o-mês-sem-planilha) em que a leitura das redes ainda não foi feita, ou num mês cujo **ciclo** foi ajustado para um intervalo onde não há publicação. Confira também se uma planilha excluída não deixou o mês vazio.
- **O que fazer:** leia das redes ([3c](#3c-ler-da-meta-no-lugar-da-planilha) e [3d](#3d-ler-do-youtube-e-do-linkedin-no-lugar-da-planilha)) ou acrescente uma planilha (tarefa 3), confira o ciclo (tarefa 2) e emita de novo.
- **O que continua funcionando:** **Salvar Alterações** e **Visualizar Book 16:9** funcionam normalmente num mês sem publicação, para você adiantar textos e conferir o deck. Um relatório que **já estava emitido** continua podendo ser gravado.

### Relatório emitido: fica como foi emitido

**Por que importa.** O cliente recebe o link e passa a citá-lo em reunião, em prestação de contas, em e-mail. Se o relatório mudasse sozinho depois, o que ele leu na terça não bateria com o que alguém abre na sexta, e você não saberia explicar por quê. Por isso, **ao emitir, o sistema guarda uma "foto" do relatório**: os números, as comparações, os textos gerados, os meses anteriores usados e os dados do cliente. O link do cliente e a tela da revisão passam a mostrar **essa foto**.

**O que muda para você**

- **Nada do que acontece depois altera o que o cliente vê:** mudar uma regra de cálculo, uma cor, o cadastro do cliente, um marco histórico, emitir o mês seguinte, ou editar o próprio mês. Os números mensais dos Indicadores e do consolidado, para um mês emitido, também saem da foto.
- **A revisão de um mês emitido mostra uma faixa azul** que diz quando e por quem o relatório foi emitido, e que as suas alterações não mudam o que o cliente vê até você reemitir. Os botões do alto mudam: **Visualizar Book 16:9** vira **Visualizar com as alterações** (mostra como ficaria numa reemissão, sem gravar nada) e **Emitir Relatório** vira **Reemitir Relatório**. Na faixa, **Ver como emitido** abre o relatório exatamente como o cliente o vê.

![Revisão de um mês emitido, com os botões Salvar Alterações, Visualizar com as alterações e Reemitir Relatório, e a faixa azul que diz quando o relatório foi emitido, com os botões Ver como emitido e Reemitir Relatório]({{ '/assets/img/app/app-117-revisao-emitido.png' | relative_url }})

- **Reemitir troca o que o cliente vê.** O botão pede confirmação (**"Reemitir troca o que o cliente vê."**), grava as edições da tela, refaz a foto com o que o mês e o cadastro têm agora e registra quando e por quem. **O link do cliente continua o mesmo.**

![Confirmação de reemissão: Reemitir troca o que o cliente vê, com os botões Cancelar e Reemitir e mudar o link do cliente]({{ '/assets/img/app/app-118-reemitir-confirmacao.png' | relative_url }})

- **Reler uma rede, ou atualizar os dados do site ou dos cursos, num mês emitido** muda os dados do mês, mas não o link do cliente. A tela pede confirmação antes (**"Este mês já foi emitido."**), e o servidor recusa a gravação sem ela. A busca automática da revisão não mexe em mês emitido: só avisa que faltam os números.

![Aviso Este mês já foi emitido, dizendo que atualizar os dados dos cursos troca os dados do mês, mas o link do cliente continua como foi emitido, com os botões Cancelar e Atualizar os dados do mês]({{ '/assets/img/app/app-119-emitido-confirmar-atualizar.png' | relative_url }})

- **Salvar Alterações num mês emitido** grava e continua emitido; a tela avisa **"Alterações salvas! O link do cliente só muda quando você reemitir o relatório."**
- **Relatórios emitidos antes da versão 1.43.0** ganharam a foto na atualização, com o que mostravam até ali. Se a foto de algum não pôde ser gravada, o link dele diz que o relatório está **em preparação** (nunca mostra números recalculados) até você reemitir.
- **Relatórios emitidos antes da versão 1.43.1 não têm a frase de data no rodapé** (veja abaixo) **até serem reemitidos.**

**Exemplo.** O relatório de janeiro do Instituto Horizonte foi emitido em 29/10. No dia 3 de novembro você percebe que um post estava na categoria errada. Corrige e clica em **Salvar Alterações**: o cliente continua vendo a versão de 29/10. Você abre **Visualizar com as alterações**, confere, avisa a coordenação e clica em **Reemitir Relatório**. Depois de confirmar, o mesmo link mostra o relatório corrigido, e a faixa passa a listar as duas emissões.

> **Dicas e armadilhas.**
> - **Salvou e achou que o cliente já vê?** Não vê. Só a reemissão muda o link. Se a mudança importa, reemita.
> - **Reemitir muda o que o cliente pode já ter citado.** Avise quem recebeu o relatório antes de reemitir um mês que mudou de números.
> - **Releia antes de emitir, não depois.** Reler um mês emitido exige confirmação e ainda deixa você com uma reemissão a fazer.
> - **PDF já enviado não muda.** O PDF guardado pelo cliente é a versão da época; só o link acompanha a reemissão.
{: .tip }

**Quando dá errado**

| A tela diz | Quer dizer | O que fazer |
|---|---|---|
| **"As alterações não foram gravadas no servidor, então o relatório não foi reemitido."** | A gravação das suas edições falhou (conflito ou conexão); nada foi reemitido | Resolva o aviso de conflito (veja a próxima seção) e reemita |
| **"Não foi possível reemitir: …"** | O servidor recusou a reemissão | Leia o motivo; tente de novo e, se persistir, avise o super-administrador |
| **"O registro do que o cliente vê não foi encontrado (…)."** | A foto do relatório não foi gravada; o link do cliente diz que o relatório está em preparação | Clique em **Reemitir Relatório** |

### De quando são os números: o rodapé

**Por que importa.** Número de rede social continua crescendo depois que a publicação sai. Dois relatórios do mesmo mês, lidos em dias diferentes, mostram números diferentes sem que nenhum esteja errado. Por isso o **rodapé de todo slide** diz de quando são as publicações, rede por rede.

![Slide Visão Executiva do Mês, com o rodapé Publicações lidas em 03/02 (Instagram e Facebook), lidas em 04/02 (YouTube) e planilha importada em 02/02 (LinkedIn)]({{ '/assets/img/relatorio/relatorio-29-rodape-publicacoes-lidas.png' | relative_url }})

- **Rede lida pela integração** (Meta, YouTube, LinkedIn): o rodapé mostra o **dia da leitura**: **"Publicações lidas em 03/02 (Instagram e Facebook)"**.
- **Rede que veio por planilha:** mostra o dia em que a planilha foi **importada**, quando o arquivo tem essa data: **"planilha importada em 02/02 (LinkedIn)"**. Sem data válida, a rede simplesmente não aparece na frase; nada é inventado.
- A data é guardada **ao emitir ou reemitir**. Relatório emitido antes da 1.43.1 não mostra a frase até ser reemitido.

**Por que uma leitura tardia tem números maiores.** Uma publicação continua recebendo alcance, visualizações, curtidas e compartilhamentos nos dias seguintes (um vídeo no YouTube, por semanas). A leitura traz o que a rede mostra **naquele dia**. Exemplo: um carrossel do Instituto Horizonte publicado em 28/10 tinha 3.900 de alcance na leitura de 02/11 e 4.700 na de 12/11. Os dois números estão certos; são de dias diferentes. Para comparar mês com mês, leia sempre **a mesma distância do fechamento** (a criação automática faz isso: no dia seguinte e três dias depois).

**Outros números que dizem de quando são**

- **YouTube:** **compartilhamentos e retenção média** são **acumulados do início do ciclo até o dia da leitura**, e contam também o que aconteceu depois do fim do ciclo. O slide marca as duas colunas com asterisco e a nota **"Compartilhamentos e retenção média são acumulados do início do ciclo até a leitura em dd/mm: podem crescer depois."**
- **Cursos:** a taxa de conclusão, os inscritos ativos e o total de cursos da plataforma são do **dia da busca no Moodle**, e o slide diz **"até dd/mm"**.
- **LinkedIn:** o alcance da conta só existe por **mês do calendário**. Com ciclo fora do mês civil (fechamento no dia 25, por exemplo), o campo fica vazio e a leitura avisa, para você digitar se precisar.

**Mês em andamento.** Se você abre o relatório antes de o período terminar (o fim do ciclo é depois de hoje), ou os dados foram coletados antes do fim, o **rodapé de todo slide** e a revisão mostram o selo **"Mês em andamento — dados até DD/MM"**. Nesse caso as **comparações com o mês anterior** (e com o mesmo mês do ano anterior, no site e nos cursos) saem como **parciais**: o percentual aparece em cinza, sem seta, com o selo **"parcial"**, e o texto da análise não fala em "subiu" ou "caiu".

![Nota "Mês em andamento (dados até 29/10): as comparações são parciais" no comparativo, e o selo do rodapé dos slides]({{ '/assets/img/app/app-30-mes-em-andamento.png' | relative_url }})

- **Por que importa:** comparar 29 dias de um mês com 31 dias do outro (ou, pior, 10 dias com 31) faz qualquer rede parecer em queda. O selo impede que o cliente leia "-30%" onde o certo é "o mês ainda não acabou".
- **O que fazer:** se o relatório é para o cliente, **espere o mês fechar**, importe a planilha completa e use **Atualizar dados do site**. O selo some sozinho. Se precisar de um relatório parcial (uma reunião no meio do mês), emita sabendo que ele sairá com o selo, e diga ao cliente.
- **A evolução histórica termina no mês do relatório.** Meses importados depois, para períodos mais novos, não aparecem nos gráficos de um relatório antigo: ele não muda com o tempo.

> **Dica.** Antes de emitir, abra o relatório pelo **Visualizar Book 16:9** (sem gravar) e percorra todos os slides, como o cliente fará: setas ou teclado, página por página. Se algum texto cortou ou ficou estranho, é aqui que se corrige.
{: .tip }

### Salvar com segurança: duas pessoas no mesmo mês, e sair sem salvar

**Por que importa.** Duas pessoas (ou duas abas suas) abertas no mesmo mês já se sobrescreviam sem aviso: quem salvasse por último vencia, e o trabalho do outro sumia em silêncio. Agora **toda gravação parte da versão do mês que a tela abriu**. Se o mês mudou em outro lugar, a sua gravação **não é feita por cima**: a tela avisa, e o que você digitou continua lá.

**O aviso de conflito.** Uma faixa amarela aparece no alto: **"O mês Janeiro/2026 foi alterado em outro lugar (outra aba ou outra pessoa) desde que você o abriu. Sua alteração NÃO foi salva, para não apagar a do outro lugar. O que você digitou continua na tela."**

![Faixa amarela de conflito de gravação no alto da revisão, com os botões Recarregar o mês e Salvar a minha mesmo assim]({{ '/assets/img/app/app-115-aviso-conflito-gravacao.png' | relative_url }})

Você escolhe:

- **Recarregar o mês** traz a versão que está no servidor. **O que você digitou na tela se perde**, por escolha sua. Copie o seu texto para outro lugar antes, se ele vale a pena.
- **Salvar a minha mesmo assim** grava a sua edição **por cima** do que o servidor tem agora. **Apaga a alteração do outro.** Use só quando tiver certeza de que o outro lugar não tinha nada que importe.

Quando a sua alteração tinha ficado guardada neste navegador sem chegar ao servidor, a faixa diz outra coisa: **"A alteração de Janeiro/2026 que não tinha chegado ao servidor não foi enviada: o mês mudou em outro lugar desde então. Ela está guardada."** As saídas são as mesmas. A cópia guardada no navegador **não vence** o servidor pelo relógio do computador: só é reenviada se o mês não mudou lá desde então.

As buscas (site, cursos, imagens, capa, análise por IA) e a leitura das fontes se aplicam **sobre o mês como está no servidor**: uma não apaga o que a outra acabou de gravar.

**Sair sem salvar.** Se você mexeu na revisão e tenta sair (pelo menu, pelo botão **Voltar**, pelo botão voltar do navegador ou fechando a aba), o sistema pergunta antes de descartar: **"Sair sem salvar?"**, com **Continuar editando** e **Sair sem salvar**. Ao fechar a aba, quem pergunta é o próprio navegador.

![Pergunta Sair sem salvar?, avisando que há alterações no relatório que ainda não foram salvas, com os botões Continuar editando e Sair sem salvar]({{ '/assets/img/app/app-116-sair-sem-salvar.png' | relative_url }})

> **Dicas e armadilhas.**
> - **Combine quem edita o mês.** O aviso protege, mas escolher entre duas edições é trabalho de gente.
> - **Aviso sem outra pessoa?** Uma aba esquecida aberta no mesmo mês, ou uma leitura que o servidor terminou, também muda o mês. **Recarregar o mês** resolve.
> - **Não responda "Salvar a minha mesmo assim" no automático.** É o único botão que apaga trabalho alheio.
> - **"Não foi possível salvar."** logo abaixo do aviso quer dizer que a conexão falhou; a edição continua na tela. Tente de novo.
{: .tip }

## 12. Compartilhar o link e gerar o PDF

**Por que importa.** O relatório só cumpre o papel quando chega à pessoa certa, do jeito certo. E o link abre **sem senha**, então quem o recebe precisa ser quem deve.

Com o relatório aberto, a barra de cima tem as setas dos slides, **Compartilhar & Incorporar** e **Imprimir / Salvar PDF (16:9)**.

![Relatório aberto no sistema, com a barra de navegação, o botão Compartilhar e Incorporar e o botão de PDF]({{ '/assets/img/app/app-22-book-barra.png' | relative_url }})

**O link mostra o relatório como foi emitido.** Mudanças feitas depois só chegam ao cliente quando você reemite (tarefa 11).

**Só depois de emitir.** O link, o código para WordPress e o envio por e-mail só valem para relatório **emitido**. Enquanto o período é rascunho ou validado, **Copiar Link**, **Copiar Código** e o envio por e-mail ficam desativados, com o aviso de que o link fica disponível depois de emitir, e quem abrir um link já enviado vê "Relatório não encontrado". Se um relatório emitido voltar a rascunho, o link também deixa de abrir; ao emitir de novo, **o mesmo link volta a abrir**, sem gerar outro. O histórico de meses anteriores que acompanha o link público também só leva relatórios **emitidos**: um mês anterior ainda em rascunho não aparece para o cliente. A visualização do book pela equipe (com login) funciona em qualquer situação.

**Compartilhar.** Clique em **Compartilhar & Incorporar**. A janela mostra:

- o **link direto para leitura**, com **Copiar Link**;
- o **código para WordPress** (um `iframe`), com **Copiar Código**, para colocar o relatório numa página do site da organização;
- o botão **Gerar novo link**.

![Janela Compartilhar e Incorporar, com o link direto, o botão Gerar novo link e o código para WordPress]({{ '/assets/img/app/app-23-compartilhar.png' | relative_url }})

**Enviar o link por e-mail ao cliente.** Entre o link e o código do WordPress, a janela tem o bloco **Enviar o link por e-mail ao cliente**. Ele manda o link a quem o cliente indicou como destinatário (cadastro do cliente, seção **Destinatários do relatório**, veja a [parte 6]({{ '/administracao/' | relative_url }})). Qualquer analista pode enviar.

![Janela Compartilhar e Incorporar, com o bloco Enviar o link por e-mail ao cliente]({{ '/assets/img/app/app-29-compartilhar-enviar.png' | relative_url }})

![Bloco Enviar o link por e-mail ao cliente com dois destinatários marcados, a mensagem e o botão Revisar e enviar]({{ '/assets/img/app/app-102-compartilhar-enviar-com-destinatarios.png' | relative_url }})

A primeira captura mostra o estado de um cliente sem destinatários; esta, o de um cliente com a lista cadastrada.

1. **Confira a lista.** Cada destinatário aparece com a caixa **marcada**. **Desmarque** quem não deve receber **neste** envio (o cadastro não muda).
2. **Escreva uma mensagem, se quiser.** O campo **Mensagem (opcional)** é um recado curto que aparece no e-mail, antes do botão **Abrir o relatório**.
3. Clique em **Revisar e enviar**. A janela de confirmação diz **quantos destinatários** e **quais** vão receber, e repete a mensagem.
4. Confirme em **Enviar para N**.
5. O **resultado vem por pessoa**: **Enviado**, **Recusado** (o servidor de e-mail não aceitou aquele endereço) ou **Falhou** (erro no envio, com o motivo ao lado). Cada pessoa recebe **um e-mail só dela**, que a chama pelo nome e traz o botão com o link. O assunto é **"Nome do cliente: relatório de Mês/Ano"**.
6. Tudo fica no **registro "Envios deste período"**: quando, quem enviou e o resultado de cada destinatário. Para tentar de novo com quem falhou ou foi recusado, use **Reenviar** na linha do registro: ele remarca os mesmos destinatários e a mesma mensagem, e você confirma de novo.

- **Por que usar:** o envio por aqui sai com o visual do SocialReport, vai só a quem está na lista do cliente e deixa o registro de quem recebeu e quando. Link colado em mensagem avulsa não deixa rastro.
- **Só com o relatório emitido e o link ativo.** Num relatório que não foi emitido, o bloco diz que o envio fica disponível depois de emitir, e o sistema recusa o envio mesmo que se tente por outro caminho. O bloco avisa "Este relatório ainda não tem link público ativo" quando falta o link: salve o relatório ou gere o link antes. Sem destinatários cadastrados, o bloco diz onde cadastrá-los.
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
- [ ] Período criado, com o ciclo certo (sem planilha, se o cliente tem as redes ligadas).
- [ ] Publicações no mês: planilhas importadas ou leitura das redes feita; lista de recusadas lida; mês com ao menos uma publicação no ciclo, senão não emite.
- [ ] Mês criado pelo sistema (selo "Criado automaticamente"): painel conferido e fontes com falha lidas de novo.
- [ ] Seguidores de cada rede informados no fim do mês (sem o aviso da revisão); zeros de alcance verificados.
- [ ] Posts fora da curva marcados.
- [ ] Categorias consistentes.
- [ ] Dados do site atualizados; avisos do analista lidos; links marcados.
- [ ] Cursos (quando o cliente tem): dados atualizados, campanhas dos posts ligadas, análise do caminho lida.
- [ ] Clipping revisado (ou sem clipping, de propósito).
- [ ] Análise da IA lida, corrigida e salva.
- [ ] Capa e imagens conferidas.
- [ ] Relatório percorrido slide a slide antes de emitir.
- [ ] Rodapé com a data das leituras conferido (e, num mês emitido que mudou, relatório reemitido ou cliente avisado).
- [ ] Relatório sem o selo "Mês em andamento" (ou o cliente avisado de que é parcial).
- [ ] No fim de trimestre, semestre ou ano: [consolidado]({{ '/mes-do-analista/consolidado/' | relative_url }}) criado, com a prévia de cobertura lida e os meses fechados antes.
- [ ] Relatório emitido aparece no [Portfólio]({{ '/mes-do-analista/portfolio/' | relative_url }}) do cliente; o link do portfólio está só com quem deve vê-lo.
- [ ] Link enviado só a quem deve (de preferência pelo bloco de e-mail do Compartilhar, que deixa registro); PDF conferido.

Continue em [Boas práticas]({{ '/boas-praticas/' | relative_url }}) para os hábitos que evitam retrabalho, ou em [Perguntas frequentes]({{ '/perguntas-frequentes/' | relative_url }}) para as dúvidas mais comuns.

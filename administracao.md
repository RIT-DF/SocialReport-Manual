---
title: "6. Administração"
nav_order: 7
has_children: true
permalink: /administracao/
---

# 6. Administração

Esta parte é só para o **super-administrador**: a pessoa que cuida de quem entra no sistema, de quais clientes existem e de como o sistema conversa com a inteligência artificial, com o Matomo, com a Meta (Instagram e Facebook), com o YouTube e com o LinkedIn. As telas daqui só aparecem para esse papel; o analista não as vê.

Tudo o que o sistema guarda de sensível (**chaves de IA, tokens do Matomo, senha de e-mail, segredos e chaves da Meta, do YouTube e do LinkedIn**) fica **só no servidor**. O navegador nunca recebe esses valores de volta: a tela mostra, no máximo, o **final** do que está guardado. Por isso, **se você perder uma chave, não há como "ver" a que está guardada**: é preciso gerar outra no provedor e digitá-la de novo.

## Os papéis

| Papel | O que faz |
|---|---|
| **Super-Admin** | tudo o que o analista faz, mais as configurações do sistema, o cadastro de clientes, a ligação do site, do Instagram e do Facebook, do YouTube e do LinkedIn de cada cliente e o convite de pessoas |
| **Analista** | monta os relatórios: importa, confere, revisa, emite e compartilha (veja a [parte 3]({{ '/mes-do-analista/' | relative_url }})) |

O papel de super-administrador é **decidido pelo servidor**, e não pela tela: ninguém vira super-admin só por mexer no navegador.

## Pessoas e papéis: convidar quem entra

**Por que importa.** O sistema guarda dados de clientes e dá acesso a relatórios. Por isso **ninguém cria conta sozinho**: o acesso é liberado por convite. Convidar só quem precisa, com o papel mínimo, é a primeira linha de proteção.

Em **Configurações do Sistema**, abra **Pessoas e Papéis**.

![Tela Pessoas e Papéis, com o aviso de cadastro somente por convite e a lista de usuários com papel e status]({{ '/assets/img/app/app-21-pessoas.png' | relative_url }})

**Convidar**

1. Clique em **+ Convidar Usuário**.
2. Informe o **Nome Completo**, o **E-mail** e o **Papel de Acesso**.
3. A pessoa recebe um e-mail e define a **própria senha** pelo link recebido.

> O **login com Google** também só funciona para e-mails **já convidados**. Quem não foi convidado não entra, nem por esse caminho.
{: .note }

**Gerir quem já está**

A lista mostra o usuário, o e-mail, o **papel**, o **status** (ativo ou revogado) e as ações de cada linha: **Tornar Analista** ou **Tornar Super-Admin**, **revogar/restaurar o acesso** e **remover**. Há também seleção de várias pessoas de uma vez. **Revogar** e **remover** cortam o acesso na hora: a pessoa sai da sessão e vê "Seu acesso foi removido pelo administrador do sistema". Revogar guarda a pessoa na lista, para restaurar depois; remover tira da lista.

> **Dicas.**
> - Dê o papel de **Analista** por padrão. Super-Admin só para quem de fato configura o sistema.
> - Quando alguém sai da equipe, **revogue o acesso** no mesmo dia. Revogar bloqueia a entrada sem apagar o histórico da pessoa. **A conta é excluída 90 dias depois** (veja [Retenção de dados](#retenção-de-dados-o-que-é-excluído-e-quando)); restaurar o acesso antes disso cancela a exclusão.
> - Você não consegue revogar nem remover a si mesmo (os botões da sua própria linha ficam desabilitados). Peça a outro super-administrador.
{: .tip }

**Quando dá errado**

- **O convite não chegou.** Confira o **Servidor SMTP** (mais abaixo). Sem ele, nenhum e-mail do sistema sai.
- **A pessoa diz que "não tem acesso".** Verifique o status na lista: se estiver **revogado**, restaure.

## Clientes e marcas

**Por que importa.** O cliente é a unidade do sistema: cada relatório, planilha, capa e ligação com o site pertence a um cliente. Um cadastro bem-feito (logotipo, cores, categorias, termos de imprensa) economiza retrabalho em todo mês.

Em **Clientes & Marcas**, cada cliente aparece como um cartão, com a paleta de cores, os canais contratados e os botões **Selecionar Cliente** (torna-o o cliente ativo) e **Ver / Editar**. **Novo Cliente** cria outro.

![Lista de clientes, com a paleta, os canais contratados e os botões de selecionar e editar]({{ '/assets/img/app/app-15-clientes.png' | relative_url }})

Ao editar, o cadastro tem estas partes:

- **Marca:** nome, endereço curto (o "slug", usado em endereços e em nomes de arquivo), logotipo e **cores** do cliente. Com elas, o relatório se veste com a identidade do cliente. **As cores são validadas**: só valem códigos como `#0F4855` (ou `#0F4`), com ou sem o `#`. Um valor inválido é recusado com mensagem na tela, em vez de quebrar o relatório. Um cliente antigo que já tinha cor inválida continua abrindo (o relatório usa a cor padrão no lugar), mas a tela obriga a corrigir quando você for editar as cores.
- **Modelo da capa do relatório:** **Clássico** (fundo escuro), **Faixa de marca** (metade da capa na cor do cliente, com logotipo grande) ou **Com foto** (imagem de fundo clara e leve).
- **Imagem da capa:** **foto automática do post** de maior destaque, **sem foto** (a capa usa a faixa de marca) ou **imagem gerada por IA** (ilustração abstrata, sem pessoas e sem texto; exige OpenAI ou Gemini configurados). Em qualquer escolha, o analista pode enviar uma imagem própria na revisão de cada relatório. **Vídeo do YouTube nunca é escolhido como foto automática:** o sistema não busca imagem na página do YouTube. Se o post de maior destaque é um vídeo, a capa automática usa outra publicação ou a faixa de marca.
- **Destinatários do relatório:** quem recebe o link do relatório por e-mail, pelo botão **Compartilhar** (veja abaixo).
- **Categorias editoriais** do cliente (separadas por vírgula).
- **Canais contratados** (Instagram, Facebook, LinkedIn, TikTok, YouTube).
- **Marcos históricos anteriores** (opcional): totais de meses passados (por exemplo, seguidores) que ligam os gráficos de tendência e o comparativo desde o primeiro relatório. Também alimentam a tela [Indicadores (BI)]({{ '/mes-do-analista/indicadores/' | relative_url }}), onde esses meses aparecem como **marco histórico (menos detalhado)**. Cadastre os totais com o cuidado que daria a um relatório: um marco errado entra nas somas e nas comparações.
- **Plataforma de cursos (Moodle):** o acesso ao Moodle do cliente e o site da plataforma no Matomo (veja abaixo).
- **Redes sociais (Meta):** a ligação do Instagram e do Facebook do cliente, para o analista poder usar **Ler da Meta** (veja [Ligar o Instagram e o Facebook]({{ '/administracao/meta/' | relative_url }})).
- **YouTube e LinkedIn:** a ligação do canal e da Página do cliente, para o analista poder usar **Ler do YouTube** e **Ler do LinkedIn** (veja [Ligar o YouTube e o LinkedIn]({{ '/administracao/youtube-linkedin/' | relative_url }}); cada rede só funciona depois que o app da RIT for aprovado por ela).
- **Fim do contrato:** o campo **Contrato encerrado em** (veja abaixo).
- **Site:** a ligação com o Matomo (veja a [parte 5]({{ '/site-e-plugin/' | relative_url }})).
- **Monitoramento de imprensa e clipping:** os termos da varredura.

![Cadastro do cliente: modelo de capa, imagem da capa, categorias editoriais e canais contratados]({{ '/assets/img/app/app-16-cliente-capa.png' | relative_url }})

> **A janela de edição.** No computador, a janela **Editar Cliente** é larga, com as seções em duas colunas (marca e capa à esquerda; destinatários, site e cursos à direita). No tablet e no celular, as seções ficam em uma coluna.
{: .note }

**Destinatários do relatório.** Na seção **Destinatários do relatório**, clique em **Adicionar** e preencha **Nome** e **E-mail** de cada pessoa do cliente que deve receber o link (até **20**). Use o ícone da lixeira para tirar alguém. O cadastro só salva se todos os e-mails forem válidos (a linha com problema mostra **"E-mail inválido."**) e sem repetição.

![Seção Destinatários do relatório, com duas pessoas cadastradas, cada uma com nome e e-mail]({{ '/assets/img/app/app-28-destinatarios.png' | relative_url }})

- **Por que cadastrar:** o envio do link pelo sistema só vai a quem está nesta lista. Isso evita mandar o relatório de um cliente para o endereço errado ou digitado na pressa, e deixa o histórico de quem recebeu.
- **Dado pessoal:** nome e e-mail de quem recebe são dados pessoais. Cadastre só quem de fato precisa do relatório e tire quem saiu da organização do cliente.
- **Sem destinatários**, o botão de enviar em **Compartilhar** fica indisponível e avisa onde cadastrar.

**Acesso ao Moodle do cliente (só o super-admin).** Cada cliente tem o **seu** acesso ao Moodle, porque cada um usa um Moodle diferente. Ele fica no cadastro do cliente, na seção **Plataforma de cursos**, no bloco **Acesso ao Moodle**. É dele que o capítulo **Cursos** do relatório tira o número de inscrições e de conclusões. O sistema nunca lê nome, e-mail ou nota de aluno: só números somados.

O bloco mostra, no alto, como o Moodle está conectado: **Conectado pelo complemento** (com a versão do complemento), **Conectado manualmente** ou **Não conectado**. Há dois jeitos de conectar. O primeiro é o recomendado.

**Jeito 1: pelo complemento do Moodle (recomendado).** O complemento "SocialReport" é uma pequena peça que se instala no Moodle do cliente. Ela soma as inscrições dentro do próprio Moodle e entrega só os totais. Quem instala é o administrador do Moodle (se o Moodle do cliente não deixa instalar complementos, use o jeito 2). O passo a passo:

1. **Instale (ou atualize) o complemento no Moodle do cliente.** No cadastro do cliente, no bloco **Acesso ao Moodle**, clique em **Baixar o complemento** (a versão aparece no botão; a atual é a **1.1.1**). O administrador do Moodle vai em **Administração do site > Plugins > Instalar plugins**, envia o arquivo baixado (não precisa descompactar) e conclui a instalação. **Quem já tem o 1.0.0 instalado precisa atualizar**: envie o arquivo novo do mesmo jeito, e o Moodle faz a troca. Só a partir da versão 1.1.0 o complemento serve o rastreador pelo próprio Moodle (passo 5); com a 1.0.0 o rastreador continua funcionando, mas ainda sujeito a bloqueadores de anúncios.
2. **Gere o código de conexão.** No Moodle, em **Administração do site > Plugins > Plugins locais > Conexão com o SocialReport**, clique em **Gerar o código de conexão**. A página mostra um código comprido, que começa com `srmoodle1.`. Clique em **Copiar**. **Ele aparece só desta vez**: se perder, gere outro (o anterior deixa de funcionar).
3. **Cole o código no SocialReport.** No cadastro do cliente, no bloco **Acesso ao Moodle**, cole o código no campo **Código de conexão** e clique em **Conectar com o código**. O campo se esvazia e passa a mostrar só o final da chave guardada. O código leva o endereço do Moodle e a chave; nada disso volta a aparecer na tela.
4. **Confira.** Clique em **Testar o complemento**. O sistema mostra a versão do complemento instalada e se o rastreador (passo seguinte) está funcionando.
5. **Instale o rastreador de visitas (para o slide "De onde vêm as inscrições").** O Moodle não sabe de onde o visitante veio; quem sabe é o Matomo. No bloco, clique em **Copiar código do rastreador**. Se o cliente ainda não tem site para a plataforma de cursos no Matomo, **ele é criado sozinho** nesse clique (com o nome **"[cliente] - Cursos"**). Isso exige o **token de administração do Matomo** nas configurações do sistema (aba **Matomo**); sem ele, a mensagem na tela orienta a configurá-lo ou a ligar o site à mão, na seção **Site** do cadastro. Depois, na mesma página do complemento no Moodle, cole esse código no campo **Código do rastreador** e clique em **Salvar e ligar**. O rastreador não usa cookies, respeita quem pediu para não ser rastreado e não mede os administradores do site. **Desde a versão 1.1.0 do complemento, o rastreador é servido pelo próprio endereço do Moodle**: o navegador do visitante não fala com o Matomo, e o servidor do Moodle repassa cada visita a ele. Assim, **bloqueadores de anúncios não escondem as visitas** (antes, quem usava um deles não era contado). O código do rastreador não é segredo: leva só o endereço do Matomo e o número do site.
   **Token de escrita do Matomo (opcional).** Na mesma página do complemento há o campo **Token de escrita do Matomo (opcional)**. Ele serve só para o Matomo receber o **IP real** de cada visitante: sem ele, o Matomo vê as visitas vindas do endereço do servidor do Moodle (o IP real segue num cabeçalho). **Deixar o campo vazio é o normal**, e as visitas são contadas do mesmo jeito. Se usar, use um token com o mínimo de direitos (só registrar visitas); ele fica só no servidor do Moodle e nunca é mostrado de novo (a página diz apenas **Token salvo** ou **Sem token**, e há o botão **Remover o token**).
6. **Volte ao SocialReport e clique em Testar o complemento de novo** (depois de algumas visitas ao Moodle). O estado do rastreador pode ser:
   - **instalado e enviando visitas**: tudo certo;
   - **instalado, mas ainda sem visitas** nos últimos 7 dias: espere alguém acessar o Moodle e teste de novo;
   - **não instalado** ou **desligado**: falta colar o código ou ligar na página do complemento;
   - **aponta para outro site**: o código colado é de outro cliente; copie de novo o código deste cliente.

**Jeito 2: manual (para o Moodle que não aceita instalar complemento).** Abra a parte **Configuração manual** do mesmo bloco e preencha:

- **Endereço do Moodle do cliente**, por exemplo `https://cursos.exemplo.org.br` (em produção precisa começar com `https://`);
- **Id do relatório**: o número do relatório personalizado que o administrador do Moodle criou para o SocialReport (sem coluna de pessoa);
- **Token do Moodle**: a chave que o Moodle gera para essa leitura. Cole-o direto no campo; nunca o envie por e-mail ou conversa.

Depois, clique em **Testar conexão** (mostra se o Moodle respondeu, quantas linhas o relatório tem e as colunas conferidas, nunca uma linha de aluno) e em **Salvar acesso**. Nesse jeito, o slide de origem das inscrições depende de o rastreador do Matomo já estar nas páginas do Moodle por outro meio.

**Vale para os dois jeitos:**

- **Os números do relatório são os mesmos** nos dois jeitos, para os mesmos dados.
- **A chave nunca volta para a tela.** Depois de salva, o campo mostra só o final dela. Ninguém, nem o super-admin, vê a chave inteira depois de salva.
- **Quem não é super-admin** vê apenas se o Moodle do cliente está **conectado** ou **não conectado**.
- **Trocar de jeito:** colar um código de conexão passa o cliente para o jeito 1 e troca a chave guardada. Para voltar ao manual, abra a configuração manual e digite o token do relatório (o guardado é o do complemento e não serve ao relatório).
- **Remover acesso** apaga o endereço e a chave daquele cliente do servidor; o capítulo **Cursos** deixa de buscar números do Moodle.
- **Cliente com endereço de Moodle e sem acesso configurado:** ao buscar os dados dos cursos, a revisão avisa "Acesso ao Moodle deste cliente não configurado", e o relatório continua sendo montado, sem o capítulo Cursos.
- **Depois de restaurar uma cópia de segurança**, a chave de cada cliente precisa ser colada de novo (a cópia não leva segredos): no jeito 1, gere outro código de conexão no Moodle e cole.
- **Clientes que já estavam conectados manualmente** (como a RIT) continuam funcionando do mesmo jeito; mudar para o complemento é uma escolha, cliente a cliente.

**Fim do contrato (só o super-admin).** O campo **Contrato encerrado em** aparece ao **editar** um cliente. Para o analista ele é só de leitura. Deixe em branco enquanto o contrato estiver em vigor: **sem a data, nada é excluído, nunca**. O sistema não deduz o fim de um contrato.

- **Ao preencher a data e salvar**, o sistema pede **confirmação** e diz a partir de quando os dados poderão ser excluídos (a data do encerramento mais 30 dias). Passado esse prazo, e depois do aviso de 7 dias (veja [Retenção de dados](#retenção-de-dados-o-que-é-excluído-e-quando)), saem **sem volta**: o cadastro, os relatórios, as planilhas, as capas, os destinatários e o registro de envios do cliente. Antes disso, **peça ao cliente uma cópia** do que ele quiser guardar.
- **Para cancelar**, abra o cadastro e clique em **Contrato em vigor (apagar a data)**. Apagar a data não pede confirmação, porque é o lado seguro.
- A data não pode ser futura.

> **Dica: capas de escolas.** Para escolas e organizações que atendem crianças, escolha **Sem foto**. O rosto de uma criança nunca deve aparecer num relatório sem autorização de uso de imagem.
{: .tip }

**Clipping: como evitar homônimos.** Na seção de imprensa, o **nome completo** (três palavras ou mais) basta para a busca. **Siglas e nomes curtos só entram junto de um termo de contexto.** Cadastre também **termos para ignorar**, para afastar homônimos (a sigla de uma companhia de energia, por exemplo), e **veículos prioritários**, que são consultados primeiro sem impedir a busca em outras fontes.

> **Atenção: excluir um cliente.** O botão **Excluir Cliente** apaga, **sem volta**, o cadastro e tudo o que é do cliente: relatórios, planilhas, capas, destinatários, registro de envios e códigos de conexão. A confirmação diz **quantos relatórios saem**. Os links públicos desses relatórios deixam de abrir: avise quem os recebia e, antes, peça ao cliente uma cópia do que ele quiser guardar. O sistema só recusa excluir o **último cliente**.
{: .warning }

## Inteligência artificial: provedores e chaves

**Por que importa.** A análise do relatório, a classificação de planilhas diferentes, a imagem da capa e o texto do site dependem da IA. Se ela falha, o analista fica sem a análise. Por isso o sistema trabalha com **três provedores em fila**: se o primeiro falha, tenta o segundo, e assim por diante.

Em **Configurações do Sistema**, abra **Provedores de IA**.

![Tela Provedores de IA, com a fila de provedores, a chave de cada um e o modelo escolhido]({{ '/assets/img/app/app-19-ia.png' | relative_url }})

Para cada provedor (**OpenAI ChatGPT**, **Google Gemini**, **Anthropic Claude**):

- **Ativo na Cadeia:** marque para que ele entre na fila.
- **Posição na fila (1º, 2º, 3º):** as setas mudam a ordem. O primeiro é o preferido, e os outros são o plano B.
- **Chave de API:** cole a chave do provedor. Uma chave já guardada aparece só como **"Chave guardada" com o final dela**: para trocar, digite a nova; **deixar o campo vazio mantém a que está guardada**. **Remover a chave guardada** só vale quando você clicar em **Salvar Provedores de IA**.
- **Testar:** verifica a chave na hora e mostra se responde (e a latência).
- **Modelo:** a lista vem do próprio provedor. **Atualizar** busca a lista de novo.

Depois de mexer, clique em **Salvar Provedores de IA**.

> **Atenção: chave é segredo.** Nunca envie a chave por e-mail ou mensagem aberta. O sistema não a mostra de volta, mas quem a tiver pode usar o crédito do provedor. Se uma chave vazou, **revogue-a no provedor** e cadastre outra aqui.
{: .warning }

> **Dicas.**
> - Configure **pelo menos dois provedores**. Com um só, uma queda dele derruba a análise de todos os clientes.
> - A **imagem da capa por IA** só funciona com **OpenAI ou Gemini**.
> - Há um **limite de chamadas de IA por usuário por minuto**. Passou dele, o sistema recusa novas chamadas por um instante: espere e tente de novo.
> - Escolha modelos adequados ao uso: modelos de última geração têm custo maior por relatório.
{: .tip }

**Quando dá errado**

- **"Falha ao acionar IA" na revisão.** Veja se há provedor ativo com chave válida e crédito. Use **Testar** em cada um.
- **O teste passa, mas a análise vem fraca.** Troque o modelo ou a ordem da fila.

## Matomo: o capítulo do site

**Por que importa.** O capítulo do site lê as visitas do **Matomo**. Se ele não está configurado, a seção Site do cadastro diz "Matomo não configurado no servidor" e nada do capítulo aparece. (Nada quebra: o relatório sai sem o capítulo.)

Em **Configurações do Sistema**, abra **Matomo**.

![Tela de configuração do Matomo, com o endereço, o token de leitura, o token de administração e os limites]({{ '/assets/img/app/app-20-matomo.png' | relative_url }})

| Campo | Para que serve |
|---|---|
| **Endereço do Matomo** | o endereço do Matomo (um só para todos os clientes) |
| **Token de leitura** | de um usuário **só de visualização**. **Sem ele, o capítulo do site não funciona.** É o que o sistema usa para ler os números |
| **Token de administração (opcional)** | de **superusuário**. Liga a **conexão automática pelo código** (parte 5). Sem ele, o botão "Gerar código de conexão do site" fica desabilitado |
| **Modelo do e-mail dos usuários criados** | o e-mail do usuário que o sistema cria no Matomo para cada site. `{slug}` vira o nome do cliente (padrão `suporte+{slug}@...`) |
| **Limite de tráfego de fora do Brasil (%)** | acima dele, a revisão avisa o analista sobre possíveis robôs. Padrão: 30 |

**Licença do V3RAnalytics.** Logo abaixo, o quadro **Licença do V3RAnalytics** guarda a licença **desta instalação**, a mesma para todos os sites de clientes. Cole a licença no campo e clique em **Salvar licença**: como os tokens, ela fica só no servidor e a tela mostra apenas o final. O plugin a recebe sozinho quando um site é conectado pelo código de conexão. **Sem licença cadastrada, o plugin funciona, mas não se atualiza sozinho** (veja [Site e plugin]({{ '/site-e-plugin/' | relative_url }})). A licença **não entra na cópia de segurança**: recadastre-a depois de restaurar.

![Quadro Licença do V3RAnalytics, com o campo da licença e o botão Salvar licença]({{ '/assets/img/app/app-27-licenca-v3ranalytics.png' | relative_url }})

**Testar conexão.** Cada token tem o seu botão. Ele mostra **quais sites aquele token enxerga**, se tem **acesso de escrita** e se é de **superusuário**, **sem alterar nada** no Matomo. A tela avisa quando o token de leitura **pode mais do que ler** e quando o de administração **não é de superusuário**.

Depois de mexer, clique em **Salvar Matomo**. **Salvar sem digitar um token mantém o que já está guardado.** **Remover** exige uma ação explícita.

> **Atenção: dois tokens, dois poderes.** O **token de leitura** deve ser de um usuário que só visualiza: se vazar, no máximo alguém vê números. O **token de administração** pode criar sites e usuários no Matomo: nunca use o de administração como se fosse o de leitura. Mantê-los separados é o que limita o estrago de um vazamento.
{: .warning }

**Quando dá errado**

- **Testar conexão não lista nenhum site.** O token não tem acesso aos sites, ou o endereço está errado.
- **O plugin não se atualiza.** Falta a **licença do V3RAnalytics** neste quadro.
- **O capítulo do site some de todos os relatórios.** Confira se o Matomo está no ar e se o token de leitura continua válido.
- **A conexão automática dá erro ao gerar o código.** Falta o token de administração, ou ele não é de superusuário.

## Organização: o nome e o site no rodapé

**Por que importa.** Todo slide do relatório termina com o nome e o site da **organização que emite os relatórios** (a agência, a associação, a equipe). É a assinatura do trabalho, e o que o cliente vê em cada página.

Em **Configurações do Sistema**, abra **Organização**.

![Tela Organização, com o nome, o site, o logotipo e as cores da organização que emite os relatórios]({{ '/assets/img/app/app-18-org.png' | relative_url }})

- **Nome da Organização** e **Site da Organização:** aparecem no **rodapé de todos os slides**, junto da numeração das páginas.
- **URL do Logotipo da Organização:** o logotipo é sempre aplicado sobre fundo branco, para ler bem.
- **Cor Primária** e **Cor de Destaque Institucional:** as cores da organização.
- **Salvar Organização** grava.

> **Atenção.** O nome e o site daqui aparecem no rodapé dos slides de **todos os clientes**. Depois de salvar, abra um relatório e confira o rodapé antes de avisar a equipe, principalmente se o nome ou o site mudaram.
{: .warning }

## Cópias de segurança

As cópias do banco de dados do sistema têm página própria: [Cópias de segurança]({{ '/copias-de-seguranca/' | relative_url }}). Leia antes de a primeira cópia ser feita: a **senha** das cópias é o ponto que não tem volta, e a cópia **não leva** as chaves, senhas e tokens (nem a licença do V3RAnalytics): guarde-os num cofre para recadastrar depois de restaurar.

## Retenção de dados: o que é excluído e quando

A Política de Privacidade promete prazos de guarda. Uma **rotina diária** do sistema os cumpre, na aba **Retenção de dados** das configurações do sistema (só super-admin):

| O que | Quando sai |
|---|---|
| Conta de quem saiu da equipe (acesso, foto do perfil, e-mail das sugestões enviadas) | **90 dias** depois da saída. Saída é revogar o acesso ou remover a pessoa da lista |
| Dados do cliente | **30 dias** depois da data de **Contrato encerrado em** |
| Registros de acesso (tentativas de conexão de site e entradas no login) | **6 meses** |
| Dados do YouTube lidos da API (vídeos, números, inscritos, capa copiada de um vídeo), em todos os relatórios do cliente, inclusive os emitidos | **5 dias** depois de **desligar** o canal; **30 dias** depois de o Google encerrar a autorização. Religar o mesmo canal antes do prazo cancela. É outra rotina, com a própria faixa de avisos (veja [O quadro de avisos dos dados do YouTube]({{ '/administracao/youtube-linkedin/#o-quadro-de-avisos-dos-dados-do-youtube' | relative_url }})) |
| Registro do aceite da política e dos Termos | **5 anos** depois da exclusão da conta da pessoa |

**O aviso de 7 dias.** Nada é excluído de surpresa. Quando faltam 7 dias para o prazo de um cliente ou de uma conta, o super-admin vê uma **faixa amarela** no topo do sistema e recebe um **e-mail** com a lista do que vai sair e a partir de quando. **Nada sai antes de 7 dias do aviso**, mesmo que o prazo já tenha vencido (por exemplo, um cliente com a data de encerramento antiga).

**Como adiar ou cancelar:** desmarque na origem. Para um cliente, apague a data de **Contrato encerrado em**. Para uma conta, **restaure o acesso** da pessoa em Pessoas e Papéis. A rotina confere de novo no momento de excluir, então o que você desmarcar até lá fica.

**O modo simulação (ligado de fábrica).** Na primeira versão a rotina **só simula**: faz as contas, manda o aviso e registra o que apagaria, mas **não apaga nada**. É um período para você conferir, no histórico da aba, se as contagens são as esperadas. Quando estiver seguro, desmarque **Modo simulação** e salve (o sistema pede confirmação). O botão **Simular agora** roda uma simulação na hora e nunca apaga, mesmo com a simulação desligada. Se quem opera o servidor travar a simulação, a tela avisa e não deixa desligar.

**O histórico** mostra cada execução (quando, se foi simulação ou exclusão real, se terminou bem ou com falha) e **só contagens**: nunca nome nem e-mail. Uma execução "Com falha" quer dizer que algo não pôde ser feito (por exemplo, o e-mail de aviso não saiu); nesse caso nada é excluído até o aviso chegar.

> **Excluir um cliente com o YouTube ligado retira a autorização no Google.** Vale para a exclusão à mão e para a do fim do contrato: o sistema revoga o acesso do canal **antes** de apagar. Se o Google não responder, o cliente é apagado do mesmo jeito, e a tela (ou, na rotina, o resumo da execução, só com a contagem) avisa que a autorização pode continuar lá, com o link para retirá-la na conta Google. Não ignore o aviso. O LinkedIn e a Meta seguem sem revogar. Veja [Ligar o YouTube e o LinkedIn]({{ '/administracao/youtube-linkedin/' | relative_url }}).
{: .important }

> **O que a rotina não faz.** Ela não reescreve as **cópias de segurança** já feitas: o que foi excluído continua nelas até a cópia ser apagada pela política de backup. Um cliente excluído à mão (botão **Excluir Cliente**) sai na hora, pelo mesmo caminho da rotina, sem o aviso de 7 dias.
{: .note }

## E-mail e login com Google

Duas outras abas das configurações merecem uma lembrança:

- **Servidor SMTP:** o servidor que envia os e-mails do sistema (convites, recuperação de acesso, avisos de feedback, cópias de segurança e o envio do link do relatório ao cliente). Todos saem com o mesmo visual: logotipo e cores do SocialReport, o nome da organização (da aba **Organização**) e links para o manual, a privacidade e os termos no rodapé. Informe **servidor, porta, usuário, senha, e-mail remetente** e a **segurança da conexão** (STARTTLS na porta 587, SSL/TLS na 465, ou nenhuma na 25), e use **Testar Envio de E-mail** antes de salvar. Sem SMTP funcionando, convites não chegam.
- **Autenticação Google:** permite o login pela conta Google. A tela mostra o endereço de redirecionamento que precisa ser cadastrado, **exatamente igual**, nas credenciais do Google Cloud (senão aparece o erro `redirect_uri_mismatch`). Depois de salvar as credenciais, pode ser necessário **recriar o serviço de autenticação** no servidor para que ele leia a configuração nova; peça a quem opera o servidor.

## Checklist do super-administrador

- [ ] Só quem precisa tem acesso, com o papel mínimo; ex-membros estão revogados.
- [ ] Pelo menos dois provedores de IA ativos, com chaves testadas.
- [ ] Matomo: endereço, token de leitura (só de visualização) e, se for usar o código de conexão, token de administração.
- [ ] Meta (se for usar a leitura do Instagram e do Facebook): app configurado e testado na aba **Meta** e clientes ligados (veja [Ligar o Instagram e o Facebook]({{ '/administracao/meta/' | relative_url }})).
- [ ] YouTube e LinkedIn (quando o app da RIT for aprovado pela rede): app configurado e testado nas abas **YouTube** e **LinkedIn** e clientes ligados (veja [Ligar o YouTube e o LinkedIn]({{ '/administracao/youtube-linkedin/' | relative_url }})).
- [ ] SMTP testado: um convite de teste chega.
- [ ] Licença do V3RAnalytics cadastrada na aba **Matomo** (sem ela, os plugins não se atualizam sozinhos).
- [ ] Segredos (chaves de IA, senha do e-mail, tokens, licença, segredos dos apps da Meta, do YouTube e do LinkedIn) guardados num cofre, porque a cópia de segurança não os leva.
- [ ] Organização: nome e site conferidos no rodapé de um relatório.
- [ ] Cópias de segurança configuradas, com a senha guardada num cofre e **provada** (botão **Provar a senha**), e um teste de restauração feito (veja [Cópias de segurança]({{ '/copias-de-seguranca/' | relative_url }})).
- [ ] Retenção de dados: simulação conferida no histórico antes de ser desligada; cliente que encerrou o contrato com a data preenchida; ex-membros revogados (a conta sai em 90 dias).
- [ ] Cada cliente com logotipo, cores, categorias e termos de imprensa preenchidos; escolas com **Sem foto**.

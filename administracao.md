---
title: "6. Administração"
nav_order: 7
has_children: true
permalink: /administracao/
---

# 6. Administração

Esta parte é só para o **super-administrador**: a pessoa que cuida de quem entra no sistema, de quais clientes existem e de como o sistema conversa com a inteligência artificial e com o Matomo. As telas daqui só aparecem para esse papel; o analista não as vê.

Tudo o que o sistema guarda de sensível (**chaves de IA, tokens do Matomo, senha de e-mail**) fica **só no servidor**. O navegador nunca recebe esses valores de volta: a tela mostra, no máximo, o **final** do que está guardado. Por isso, **se você perder uma chave, não há como "ver" a que está guardada**: é preciso gerar outra no provedor e digitá-la de novo.

## Os papéis

| Papel | O que faz |
|---|---|
| **Super-Admin** | tudo o que o analista faz, mais as configurações do sistema, o cadastro de clientes, a ligação do site de cada cliente e o convite de pessoas |
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

A lista mostra o usuário, o e-mail, o **papel**, o **status** (ativo ou revogado) e as ações de cada linha: **Tornar Analista** ou **Tornar Super-Admin**, **revogar/restaurar o acesso** e **remover**. Há também seleção de várias pessoas de uma vez.

> **Dicas.**
> - Dê o papel de **Analista** por padrão. Super-Admin só para quem de fato configura o sistema.
> - Quando alguém sai da equipe, **revogue o acesso** no mesmo dia. Revogar bloqueia a entrada sem apagar o histórico da pessoa.
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

- **Marca:** nome, endereço curto (o "slug", usado em endereços e em nomes de arquivo), logotipo e **cores** do cliente. Com elas, o relatório se veste com a identidade do cliente.
- **Modelo da capa do relatório:** **Clássico** (fundo escuro), **Faixa de marca** (metade da capa na cor do cliente, com logotipo grande) ou **Com foto** (imagem de fundo clara e leve).
- **Imagem da capa:** **foto automática do post** de maior destaque, **sem foto** (a capa usa a faixa de marca) ou **imagem gerada por IA** (ilustração abstrata, sem pessoas e sem texto; exige OpenAI ou Gemini configurados). Em qualquer escolha, o analista pode enviar uma imagem própria na revisão de cada relatório.
- **Categorias editoriais** do cliente (separadas por vírgula).
- **Canais contratados** (Instagram, Facebook, LinkedIn, TikTok, YouTube).
- **Marcos históricos anteriores** (opcional): totais de meses passados (por exemplo, seguidores) que ligam os gráficos de tendência e o comparativo desde o primeiro relatório.
- **Site:** a ligação com o Matomo (veja a [parte 5]({{ '/site-e-plugin/' | relative_url }})).
- **Monitoramento de imprensa e clipping:** os termos da varredura.

![Cadastro do cliente: modelo de capa, imagem da capa, categorias editoriais e canais contratados]({{ '/assets/img/app/app-16-cliente-capa.png' | relative_url }})

> **Dica: capas de escolas.** Para escolas e organizações que atendem crianças, escolha **Sem foto**. O rosto de uma criança nunca deve aparecer num relatório sem autorização de uso de imagem.
{: .tip }

**Clipping: como evitar homônimos.** Na seção de imprensa, o **nome completo** (três palavras ou mais) basta para a busca. **Siglas e nomes curtos só entram junto de um termo de contexto.** Cadastre também **termos para ignorar**, para afastar homônimos (a sigla de uma companhia de energia, por exemplo), e **veículos prioritários**, que são consultados primeiro sem impedir a busca em outras fontes.

> **Atenção: excluir um cliente.** O botão **Excluir Cliente** remove o cadastro do servidor. O sistema **recusa** a exclusão de um cliente que **já tem relatórios** (exclua os períodos antes, um a um) e do **último cliente** do sistema. Excluir os períodos apaga as planilhas e os números, e os links públicos deles deixam de abrir: avise quem os recebia.
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

**Testar conexão.** Cada token tem o seu botão. Ele mostra **quais sites aquele token enxerga**, se tem **acesso de escrita** e se é de **superusuário**, **sem alterar nada** no Matomo. A tela avisa quando o token de leitura **pode mais do que ler** e quando o de administração **não é de superusuário**.

Depois de mexer, clique em **Salvar Matomo**. **Salvar sem digitar um token mantém o que já está guardado.** **Remover** exige uma ação explícita.

> **Atenção: dois tokens, dois poderes.** O **token de leitura** deve ser de um usuário que só visualiza: se vazar, no máximo alguém vê números. O **token de administração** pode criar sites e usuários no Matomo: nunca use o de administração como se fosse o de leitura. Mantê-los separados é o que limita o estrago de um vazamento.
{: .warning }

**Quando dá errado**

- **Testar conexão não lista nenhum site.** O token não tem acesso aos sites, ou o endereço está errado.
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

As cópias do banco de dados do sistema têm página própria: [Cópias de segurança]({{ '/copias-de-seguranca/' | relative_url }}). Leia antes de a primeira cópia ser feita: a **senha** das cópias é o ponto que não tem volta.

## E-mail e login com Google

Duas outras abas das configurações merecem uma lembrança:

- **Servidor SMTP:** o servidor que envia os e-mails do sistema (convites, recuperação de acesso, avisos de feedback). Informe **servidor, porta, usuário, senha, e-mail remetente** e a **segurança da conexão** (STARTTLS na porta 587, SSL/TLS na 465, ou nenhuma na 25), e use **Testar Envio de E-mail** antes de salvar. Sem SMTP funcionando, convites não chegam.
- **Autenticação Google:** permite o login pela conta Google. A tela mostra o endereço de redirecionamento que precisa ser cadastrado, **exatamente igual**, nas credenciais do Google Cloud (senão aparece o erro `redirect_uri_mismatch`). Depois de salvar as credenciais, pode ser necessário **recriar o serviço de autenticação** no servidor para que ele leia a configuração nova; peça a quem opera o servidor.

## Checklist do super-administrador

- [ ] Só quem precisa tem acesso, com o papel mínimo; ex-membros estão revogados.
- [ ] Pelo menos dois provedores de IA ativos, com chaves testadas.
- [ ] Matomo: endereço, token de leitura (só de visualização) e, se for usar o código de conexão, token de administração.
- [ ] SMTP testado: um convite de teste chega.
- [ ] Organização: nome e site conferidos no rodapé de um relatório.
- [ ] Cópias de segurança configuradas, com a senha guardada num cofre, e um teste de restauração feito (veja [Cópias de segurança]({{ '/copias-de-seguranca/' | relative_url }})).
- [ ] Cada cliente com logotipo, cores, categorias e termos de imprensa preenchidos; escolas com **Sem foto**.

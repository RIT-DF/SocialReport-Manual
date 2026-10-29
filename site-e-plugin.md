---
title: "5. O site do cliente e o plugin V3RAnalytics"
nav_order: 6
has_children: true
permalink: /site-e-plugin/
---

# 5. O site do cliente e o plugin V3RAnalytics

Esta parte é para quem **liga o site de um cliente ao relatório**: o super-administrador do SocialReport e quem cuida do site da organização (o administrador do WordPress). Ela explica por que vale a pena, como fazer a ligação, o que o plugin faz sozinho e, principalmente, por que a **marcação dos links** decide a qualidade do capítulo do site.

## Por que ligar o site

Sem o site, o relatório termina nas curtidas. Ele diz que a publicação foi vista e que alguém reagiu, e para aí. A pergunta que todo cliente faz ("isso traz resultado?") fica sem resposta, porque o resultado acontece **fora** da rede: alguém se inscreve como voluntário, faz uma doação, pede um contato.

Com o site ligado, o relatório ganha o capítulo do site e passa a seguir o caminho completo: **publicação, visita ao site, ação concluída**. É o que permite dizer, em número, que "o Instagram alcançou 12 mil pessoas, levou 340 ao site e 18 se inscreveram". Veja como o cliente lê isso em [O site]({{ '/como-ler-o-relatorio/site/' | relative_url }}).

> **E enquanto o site não está ligado?** O relatório sai normalmente, **sem o capítulo do site** e sem nenhuma página vazia. Nada quebra. Só falta a metade que mostra o resultado.
{: .note }

## As três peças

| Peça | O que é | Quem cuida |
|---|---|---|
| **Matomo** | o sistema que registra e guarda as visitas dos sites. É um só, para todos os clientes; cada cliente é um site dentro dele | super-administrador (veja a [parte 6]({{ '/administracao/' | relative_url }})) |
| **V3RAnalytics** | o plugin do WordPress que **mede as visitas sem cookies**, cria as metas de conversão e gera os links marcados | administrador do site da organização |
| **SocialReport** | lê os números do Matomo (só lê) e monta o capítulo do site no relatório | a equipe e o super-administrador |

O SocialReport **só lê** o Matomo. Quem escreve nele é o plugin, que manda as visitas. O relatório traz apenas **números agregados**: nenhum visitante individual, endereço de IP ou dado de formulário.

## Como ligar o site a um cliente

Há dois caminhos. Os dois acontecem no **cadastro do cliente**, na seção **Site**, e **só o super-administrador** pode usá-los.

![Seção Site do cadastro do cliente, com a lista de sites do Matomo, o botão de gerar código e o estado da conexão]({{ '/assets/img/app/app-17-cliente-site.png' | relative_url }})

### Caminho 1: escolher o site numa lista

Use quando o site **já existe no Matomo** (já foi criado antes, por exemplo).

1. Abra **Clientes & Marcas** e clique em **Ver / Editar** no cliente.
2. Role até a seção **Site**.
3. Em **Site no Matomo**, escolha o site do cliente na lista.
4. Clique em **Salvar Alterações**.

Escolher **Nenhum** desfaz a ligação.

### Caminho 2: o código de conexão (recomendado)

Use para um site **novo**, que ainda não está no Matomo. O código faz tudo sozinho, e quem cuida do site não precisa mexer no Matomo.

**No SocialReport (super-administrador)**

1. No cadastro do cliente, seção **Site**, clique em **Gerar código de conexão do site**.
2. **Copie o código na hora.** Ele aparece **uma única vez**, vale por **24 horas** e é de **uso único**. Gerar outro invalida o anterior que não foi usado.
3. Envie o código a quem cuida do site, por um canal seguro.

A tela mostra o estado da conexão: **aguardando** (com a validade), **conectado** (em que dia e a qual site) ou **vencido** (gere outro).

> **Se o botão está desabilitado**, a tela diz "Conexão automática não configurada no servidor". Falta o token de administração do Matomo, que o super-administrador cadastra em Configurações do Sistema (veja a [parte 6]({{ '/administracao/' | relative_url }})). Enquanto isso, use o caminho 1.
{: .note }

**No WordPress do cliente (administrador do site)**

1. Instale e ative o plugin **V3RAnalytics** (veja a seção a seguir).
2. No menu do WordPress, abra **V3RAnalytics** e a tela **Conexão**.
3. Em **Conectar com Código SocialReport (Recomendado)**, cole o código no campo **Código de Conexão**.
4. Clique em **Conectar e Configurar Metas**.

O plugin avisa quando conecta. Em seguida, o SocialReport faz o resto: cria o site no Matomo (com comércio eletrônico, se houver loja; fuso de São Paulo; moeda real) **ou reaproveita** o que já existe com o mesmo endereço; cria um usuário **só para aquele site**; liga o site ao cliente; e devolve tudo ao plugin. **Reconectar o mesmo site não cria um segundo site nem um segundo usuário.**

**O que o plugin responde quando algo dá errado** (a mensagem vem em português na própria tela do plugin):

| Situação | O que significa | O que fazer |
|---|---|---|
| código **mal digitado** | o código tem um formato que não existe | copie de novo, sem espaços |
| código **inexistente ou já usado** | o código não está mais valendo | peça um novo |
| código de **outro site** | o código foi gerado para outro cliente | confira se está no WordPress certo |
| código **vencido** | passaram as 24 horas | peça um novo |
| **muitas tentativas** | houve vários erros seguidos | espere um pouco e tente de novo com o código certo |

**A licença do plugin vem junto.** Se o super-administrador cadastrou a **licença do V3RAnalytics** em **Configurações do Sistema > Matomo** (veja a [parte 6]({{ '/administracao/' | relative_url }})), o SocialReport a entrega ao plugin na mesma conexão, e o plugin avisa **"Licença do V3RAnalytics ativada automaticamente"**. Quem cuida do site não precisa colar nada.

![Quadro Licença do V3RAnalytics nas configurações do Matomo, com o campo da licença e o botão Salvar licença]({{ '/assets/img/app/app-27-licenca-v3ranalytics.png' | relative_url }})

- **Por que importa:** a licença é o que permite ao plugin **se atualizar sozinho** no WordPress. Sem licença, o plugin **conecta e mede normalmente**, mas as atualizações ficam por conta de quem cuida do site (baixar e instalar o arquivo novo à mão). Num site esquecido, isso significa um plugin parado numa versão antiga.
- **Como saber:** no cadastro do cliente, seção **Site**, o estado diz **"Sem licença do V3RAnalytics: o plugin não se atualiza sozinho."** quando a instância não tem licença cadastrada.
- **Se a licença foi cadastrada depois da conexão:** o site já conectado não a recebe sozinho. Conecte de novo pelo código (gere outro) ou, como alternativa, cole a chave no WordPress, em **Configurações > Licença do V3RAnalytics**.
- **Se a ativação falhar** na conexão, o plugin diz que a conexão foi feita mas a licença não pôde ser ativada e mostra o motivo. A medição não é afetada; cole a chave à mão na tela de licença do plugin.
- **A licença não entra na cópia de segurança.** Depois de restaurar o sistema, cadastre-a de novo (veja [Cópias de segurança]({{ '/copias-de-seguranca/' | relative_url }})).

> **Segurança do código.** O código não fica guardado no SocialReport, só um resumo dele, e há limite de tentativas. Trate-o como uma senha de uso único: não o poste em grupo de mensagens aberto.
{: .warning }

> **Conexão manual (avançado).** O plugin também tem a opção **Conectar Manualmente (Avançado)**, recolhida, em que o administrador informa o endereço do Matomo, o número do site e o token, ou os define no `wp-config.php`. Serve quando o código de conexão não é possível. O caminho recomendado é o do código.
{: .tip }

## Instalar o plugin V3RAnalytics

O **V3RAnalytics é gratuito** e distribuído pela V3RTECH, desenvolvedora do SocialReport. Ele é um plugin comum do WordPress.

> **Onde baixar.** O link de download estará disponível **no cadastro do cliente**, junto da conexão do site. Essa função está **em preparação**. Até lá, peça o arquivo à equipe que administra o seu SocialReport.
{: .note }

**Passo a passo, no WordPress**

1. No painel do WordPress, abra **Plugins > Adicionar novo > Enviar plugin**.
2. Escolha o arquivo do plugin e clique em **Instalar agora**.
3. Clique em **Ativar**.
4. Abra o menu **V3RAnalytics** e faça a conexão, como descrito acima.

**O que o plugin faz a partir daí, sem você pedir**

- **Mede as visitas sem cookies**, injetando o código de medição do Matomo.
- **Cria as metas de conversão**: envio de formulário (os formulários do site), clique no WhatsApp, clique em e-mail, clique em telefone e página de agradecimento. É o que o botão **Conectar e Configurar Metas** faz em um clique.
- **Registra a loja**, quando há WooCommerce: produto visto, carrinho e pedido. É o que alimenta a página de receitas do relatório.
- **Gera os links marcados** para as redes sociais (veja a próxima seção).
- **Avisa se já existe outro código de medição** no site (outro plugin de Matomo, por exemplo). Nesse caso, o V3RAnalytics **suspende a própria injeção** para não contar cada visita duas vezes, e mostra o alerta.

> **Atenção.** Duas medições no mesmo site contam cada visita duas vezes e inflam todos os números do relatório. Se o aviso de código duplicado aparecer, resolva-o antes de emitir o primeiro relatório do cliente.
{: .warning }

> **Sem o V3RAnalytics.** Um site pode ser medido só pelo plugin oficial do Matomo. A medição básica funciona, mas sem as metas criadas sozinhas, sem o registro da loja e sem o gerador de links.
{: .note }

## Metas criadas sozinhas

Uma **meta** é uma ação que a organização quer que as pessoas façam no site. O relatório conta cada meta como uma **conversão**. O plugin cria as mais comuns:

| Meta | Quando conta |
|---|---|
| Formulário enviado | a pessoa envia um formulário do site (voluntário, contato, proposta...) |
| Clique no WhatsApp | a pessoa clica no botão ou link do WhatsApp |
| Clique em e-mail | a pessoa clica num endereço de e-mail |
| Clique em telefone | a pessoa clica num número de telefone |
| Página de agradecimento | a pessoa chega à página que agradece depois de uma ação |

Cada meta aparece separada na página **Conversões** do relatório, com o número e a porcentagem das visitas. Um clique no WhatsApp mostra **interesse**, não que a conversa aconteceu (veja [Conversões]({{ '/como-ler-o-relatorio/site/' | relative_url }})).

## Links marcados: o que decide a qualidade do relatório

**Por que importa.** O relatório só sabe de **onde** veio uma visita quando o link tem uma "etiqueta" dizendo isso. Sem a etiqueta, o aplicativo de uma rede social muitas vezes não avisa de onde o clique saiu, e a visita aparece como **acesso direto**. Resultado: o relatório diz que as redes trouxeram pouco, quando trouxeram muito.

O capítulo do site depende disso em três lugares:

- **De onde vêm as visitas:** só mostra as redes de verdade quando os links estão marcados.
- **Das redes ao site:** só liga a publicação ao número de visitas pelo link marcado.
- **Melhores publicações:** o "levou N visitas ao site" só aparece quando a publicação está ligada a uma campanha.

A **revisão** do relatório mostra, para o analista, a **cobertura de links marcados**: "0% das visitas das redes vieram por link marcado (0 de 1)". É um lembrete para a equipe marcar os links, e não entra no relatório.

**Como gerar um link marcado**

1. No WordPress, abra o **V3RAnalytics** e a tela **Gerador de Links para Redes Sociais e Campanhas**. O plugin também oferece o gerador no editor de cada página ou post e na lista de posts.
2. Em **URL da Página de Destino**, informe a página para onde a pessoa vai.
3. Dê um **Nome da Campanha**.
4. Escolha a rede (Instagram, Facebook, LinkedIn, WhatsApp, X ou e-mail), e o plugin monta o link.
5. Clique em **Copiar** e use esse link na publicação ou na biografia.

**Regras que fazem o relatório funcionar**

1. **Todo link da publicação para o site é marcado**, sem exceção. Uma publicação com link comum é uma visita que o relatório não vai conseguir atribuir.
2. **Um objetivo por campanha**, apontando para a **página específica** daquele objetivo (a de voluntariado, a de doação), e não para a página inicial.
3. **O nome da campanha igual ao título da publicação** liga os dois sozinhos no relatório. Se o nome for outro, a ligação é feita à mão na revisão.
4. **Use sempre o mesmo nome para a mesma campanha.** "campanha-natal" e "campanha_natal" viram duas campanhas.

> **Exemplo.** A organização publica no Instagram a "Semana das Crianças" com o link marcado da campanha com o mesmo nome. No relatório, o cartão da publicação diz "levou 12 visitas ao site", e a página Das Redes ao Site mostra quantas dessas visitas se inscreveram. Se o link fosse comum, as 12 visitas apareceriam como acesso direto e a publicação ficaria sem crédito.
{: .tip }

> **Uma campanha, vários posts.** Quando as publicações de uma campanha dividem o mesmo link, o número de visitas é **da campanha**, e o cartão avisa "dividida entre 5 posts". Para saber qual publicação trouxe mais, use um link diferente em cada.
{: .note }

## Depois de ligar: conferir

1. No cadastro do cliente, o estado deve dizer **"Conectado em DD/MM ao site..."**.
2. Na **revisão** do relatório do mês, clique em **Atualizar dados do site** e confira se os números aparecem.
3. **No primeiro mês**, é normal o relatório mostrar **"Medição desde DD/MM"**, porque a coleta só começou quando o plugin foi conectado, e não compara com o mês anterior. Avise o cliente. Veja [Medição desde]({{ '/conceitos/' | relative_url }}).

**Quando dá errado**

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| a revisão diz "Matomo não configurado no servidor" | o super-administrador ainda não cadastrou o endereço e o token de leitura | veja a [parte 6]({{ '/administracao/' | relative_url }}) |
| a lista "Site no Matomo" vem vazia ou dá erro | o token de leitura não enxerga nenhum site, ou o Matomo está fora do ar | use **Testar conexão** nas configurações do Matomo |
| a revisão diz que o site "não registrou visitas" | o plugin não está medindo (ou o site não teve visitas) | confira o plugin ativo e o aviso de código duplicado |
| números muito acima do esperado | duas medições no mesmo site, ou tráfego de robôs | veja o aviso de código duplicado e o aviso de tráfego de fora do Brasil |
| o plugin diz que a licença não pôde ser ativada | a licença cadastrada é inválida ou já está em uso fora do limite | confira a licença com a V3RTECH e cole a chave à mão em **Configurações > Licença do V3RAnalytics** no WordPress |
| conexão por código não funciona | código vencido, usado ou de outro site | gere um novo código |

Dúvidas comuns sobre o plugin estão em [Perguntas frequentes]({{ '/perguntas-frequentes/' | relative_url }}).

O que mudou em cada versão do plugin está em [Novidades do V3RAnalytics]({{ '/site-e-plugin/novidades/' | relative_url }}).

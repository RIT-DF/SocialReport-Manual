---
title: Ligar o YouTube e o LinkedIn
parent: "6. Administração"
nav_order: 3
permalink: /administracao/youtube-linkedin/
---

# Ligar o YouTube e o LinkedIn

Esta página é só para o **super-administrador**. Ela explica como deixar o sistema pronto para **ler os números do YouTube e do LinkedIn direto das contas do cliente**, como ligar cada cliente, o que significa cada estado da ligação e o que fazer quando ela para. Quem usa a leitura no dia a dia, o analista, tem a [sua página]({{ '/mes-do-analista/ler-do-youtube-e-linkedin/' | relative_url }}).

O caminho é o mesmo da [ligação com a Meta]({{ '/administracao/meta/' | relative_url }}) (Instagram e Facebook): um app da RIT em cada rede, o login de uma pessoa, a escolha do canal ou da Página, o teste. Esta página mostra o que muda em cada rede.

As telas desta página vêm de uma organização fictícia, o **Instituto Horizonte**, e de simulações do YouTube e do LinkedIn. Nomes, @ e números são inventados.

> **Cada rede só funciona depois que o app da RIT for aprovado por ela.** Quem aprova é a própria rede: o Google, para o YouTube, e o LinkedIn, para o LinkedIn. Enquanto o app não está aprovado, a rede só deixa entrar quem tem função no app e pode limitar ou derrubar a ligação depois de poucos dias. Na data em que esta página foi escrita (30/10/2026), o app do **LinkedIn estava em análise**. Tudo o que está aqui (as abas, a ligação, a leitura) já está no sistema, mas **só ligue clientes de verdade depois da aprovação** e, até lá, continue com as planilhas. O campo **Estado do app na rede** da aba (**Em teste**, **Aguardando aprovação**, **Aprovado**) é só um lembrete para a equipe: ele não libera nem bloqueia nada.
{: .important }

## Por que ligar um cliente

Sem a ligação, todo mês alguém exporta a planilha do canal ou da Página, confere se é a do cliente certo e do período certo, e importa. O YouTube e o LinkedIn não têm um relatório único que traga tudo de uma vez, então é um trabalho repetido, e é nele que se erra.

Com a ligação, o analista clica em **Ler do YouTube** (ou **Ler do LinkedIn**) na página do mês, e o sistema traz as publicações do ciclo com os números de cada uma, no mesmo formato da planilha, mais o número de **inscritos** (YouTube) ou **seguidores** (LinkedIn) do fim do mês. **A planilha continua valendo**: ela segue sendo o caminho para o TikTok, para o cliente que você ainda não ligou e para o que a leitura não alcança.

**Exemplo.** No fechamento de outubro, a analista do **Instituto Horizonte** abre o mês e clica em **Ler do YouTube**. Em segundos entram 5 vídeos, com visualizações, curtidas, comentários, compartilhamentos e retenção, e o sistema oferece o número de inscritos do fim do mês. Um vídeo que ainda estava privado ficou de fora, e o aviso da leitura disse isso. Ela não exportou nada do YouTube Studio.

## O que a ligação faz, e o que não faz

- **Só lê.** O sistema não publica, não responde, não apaga e não mexe em anúncios. As permissões que ele pede são todas de leitura. **A permissão de receita do YouTube nunca é pedida**: o sistema não vê quanto o canal ganha.
- **Lê números, não pessoas.** Entram as publicações (título ou texto, data, formato e link) com os números de cada uma. Curtidas e comentários entram só como **contagem**: o sistema não lê quem viu, quem curtiu, quem comentou, nem a lista de inscritos ou de seguidores, nem mensagens. A [Política de Privacidade]({{ '/privacidade/' | relative_url }}) detalha isso.
- **Guarda, de sensível, duas coisas por cliente:** a chave de acesso à conta (cifrada e só no servidor) e uma fotografia diária da contagem de inscritos ou seguidores (um número por dia, sem pessoas). O nome do canal ou da Página aparece na tela e não é segredo.
- **Só o que é público ou da conta ligada.** No YouTube, vídeos **privados, não listados ou agendados** ficam de fora. No LinkedIn, só entram as publicações **orgânicas** da Página (o anúncio patrocinado fica de fora) e só os últimos 12 meses, que é o que o LinkedIn guarda.

As permissões que cada rede mostra na hora do login, e para que servem:

| Rede | Permissão (nome técnico) | Para que o sistema a usa |
|---|---|---|
| YouTube | `youtube.readonly` | ler o canal, a lista de vídeos e os números de cada vídeo (visualizações, curtidas, comentários) |
| YouTube | `yt-analytics.readonly` | ler do YouTube Analytics os compartilhamentos, a retenção e os inscritos ganhos e perdidos |
| LinkedIn | `r_organization_social` | ler as publicações da Página e as estatísticas delas |
| LinkedIn | `r_organization_admin` | descobrir quais Páginas a pessoa administra e ler as estatísticas da Página |

**Nenhuma permite escrever.** A mesma regra da Meta vale aqui: se faltar alguma, a ligação é recusada. Se a rede conceder **permissões a mais** (veja [abaixo](#permissões-de-publicar-vindas-de-outra-automação)), a ligação vale e o sistema não as usa.

O app do LinkedIn tem uma opção na aba, **Usar rw_organization_admin**, que troca a permissão de administração pela versão que também escreve. Ela existe só para o caso de a rede não conceder a de leitura ao app. Deixe **desmarcada**, salvo orientação da equipe técnica. Mesmo marcada, o sistema só lê.

## O que você precisa ter antes

1. **O app da RIT em cada rede**, criado uma vez por quem administra a conta de desenvolvedor da RIT naquela rede. É dele que saem o identificador e o segredo que você cola na tela, e é nele que se cadastra o endereço de retorno.
   - **YouTube:** um **cliente OAuth** no Google Cloud, num projeto com a **YouTube Data API** e a **YouTube Analytics API** ligadas e a tela de consentimento configurada. Ele deve ser **exclusivo do SocialReport**: não reaproveite o cliente do login com Google do sistema (aba **Autenticação Google**). A aba lembra disso. Os dois têm permissões e prazos de aprovação diferentes, e assim mexer em um não derruba o outro.
   - **LinkedIn:** um app no portal de desenvolvedores do LinkedIn, com o produto de gerenciamento de Páginas (a **Community Management API**) liberado para ele. É esse acesso que o LinkedIn analisa.
2. **Uma pessoa da equipe com acesso ao canal ou à Página do cliente.** É o **login dela** que liga o cliente.
   - **YouTube:** uma **conta Google** que seja proprietária ou gerente da **Conta de Marca** do canal do cliente. O canal de uma organização normalmente pertence a uma Conta de Marca: uma identidade do canal, separada do e-mail pessoal de quem o cuida, com as pessoas autorizadas listadas nela. Se a pessoa da RIT ainda não está nessa lista, o cliente precisa acrescentá-la antes. Depois do login, o Google pergunta **qual conta ou canal usar**: escolha o **canal do cliente**, e não o canal pessoal da pessoa.
   - **LinkedIn:** o **perfil do LinkedIn** da pessoa precisa ser **administrador** da Página do cliente (o papel mais alto, de "super administrador"), com a função **aprovada**: convite pendente não vale. Ser só "analista" da Página não basta: a Página nem aparece na lista.
3. **Essa pessoa precisa ter função no app da rede** enquanto o app não passa pela aprovação (testador no Google, membro no LinkedIn). Sem a função, a rede recusa o login.
4. **O cliente salvo no sistema.** A seção só liga um cliente que já existe: num cliente novo ainda não salvo, ela diz "Salve o cliente para ligar o YouTube." (ou LinkedIn).

> **A rede exige páginas públicas.** Ao cadastrar o app, o Google e o LinkedIn pedem o endereço da política de privacidade, e o Google exige que ela declare o uso limitado dos dados das APIs dele (a Política de Privacidade do SocialReport traz essa declaração). Use o [texto de Privacidade]({{ '/privacidade/' | relative_url }}) e a [seção 13 dele, "Como pedir a exclusão dos dados das ligações"]({{ '/privacidade/#exclusao-de-dados' | relative_url }}): são os endereços públicos deste manual.
{: .note }

## Passo a passo

### 1. Configurar o app da RIT, uma vez por rede

Em **Configurações do Sistema**, abra a aba **YouTube** (ou **LinkedIn**).

![Aba YouTube das configurações do sistema, com a URI de retorno, o ID do cliente OAuth, o segredo guardado, o estado do app e o botão Testar o app guardado]({{ '/assets/img/app/app-78-youtube-aba-configuracao.png' | relative_url }})

1. Clique em **Copiar**, ao lado de **URI de retorno (cole no app do YouTube)**. É o endereço para onde a rede devolve o navegador depois do login. **É a mesma para todas as redes**: o sistema reconhece a rede de cada login sozinho, então você cadastra o mesmo endereço no app do Google e no do LinkedIn.
2. No app da rede, cole-o na lista de endereços de redirecionamento autorizados (no Google, no cliente OAuth; no LinkedIn, na aba de autenticação do app). A rede muda nomes e posições de botões de tempos em tempos: se não achar um deles, procure pelo nome do campo, não pelo lugar.
3. De volta ao SocialReport, preencha o identificador e o segredo do app:

   | Rede | Campos da aba | Como é o valor |
   |---|---|---|
   | YouTube | **ID do cliente OAuth** e **Segredo do cliente** | o ID termina em `.apps.googleusercontent.com`; o segredo começa com `GOCSPX-` |
   | LinkedIn | **Client ID**, **Client Secret** e **LinkedIn-Version** | o Client ID tem só letras e números; a versão tem o formato AAAAMM (por exemplo, `202609`) |

4. Escolha, se quiser, o **Estado do app na rede (lembrete)**.
5. Clique em **Salvar YouTube** (ou **Salvar LinkedIn**). A tela diz **"App do YouTube salvo."** Valor fora do formato é recusado com a explicação do formato (por exemplo, "O segredo do cliente do Google começa com GOCSPX-.").
6. Clique em **Testar o app guardado**. Se estiver tudo certo, aparece **"O YouTube aceitou o identificador e o segredo do app."** O teste usa o que está **guardado**, e não o que você digitou e ainda não salvou: por isso o botão fica apagado até haver um segredo guardado. As respostas de erro mais comuns são **"A URI de retorno não está cadastrada no app do YouTube."** (volte ao passo 2) e **"O YouTube recusou o identificador ou o segredo do app."** (confira o que colou).

![Aba LinkedIn das configurações do sistema, com a URI de retorno, o Client ID, o Client Secret guardado, a LinkedIn-Version, o estado do app e a opção rw_organization_admin]({{ '/assets/img/app/app-79-linkedin-aba-configuracao.png' | relative_url }})

**A versão do LinkedIn envelhece.** O LinkedIn publica uma versão nova da API de tempos em tempos e **retira as antigas depois de cerca de um ano**. Com a versão configurada passando de **10 meses**, a aba mostra um aviso amarelo, do tipo **"A versão 202510 da API do LinkedIn tem 13 meses e sai do ar por volta de 12: troque a LinkedIn-Version nas configurações (a mais nova publicada)."** Troque e salve. Se a versão for retirada de vez, a leitura passa a falhar com a mensagem pedindo a troca.

**Sobre o segredo.** Como as chaves de IA, os tokens do Matomo e o segredo da Meta, ele fica **só no servidor, cifrado**. A tela mostra apenas o final (**"Segredo guardado ••••efgh. Digite só para trocar."**). **Salvar sem digitar nada mantém o segredo guardado.** Para trocá-lo, digite o novo e salve. **Remover** apaga o segredo guardado, mas só vale quando você clica em **Salvar**. **Desfazer** cancela a remoção. Se a chave do servidor mudar, a aba avisa **"A chave do servidor mudou e o segredo guardado não abre mais. Cole o segredo do app de novo e salve."** (mesmo caso da [Meta]({{ '/administracao/meta/' | relative_url }}#se-a-chave-do-servidor-mudar)).

### 2. Ligar um cliente

Em **Clientes & Marcas**, abra o cliente em **Ver / Editar**. Abaixo de **Redes sociais (Meta)** estão as seções **YouTube** e **LinkedIn**, uma para cada rede.

![Seção YouTube de um cliente ainda sem ligação, com o aviso YouTube não ligado e o botão Ligar YouTube]({{ '/assets/img/app/app-80-youtube-cliente-desligado.png' | relative_url }})

1. **Combine com quem fará o login.** Ela precisa fazer o login **no mesmo navegador em que você clicará em Ligar** (a rede devolve o login ao navegador que o iniciou) e ter a conta que administra o canal ou a Página do cliente. Pode ser você mesmo, se a conta for sua.
2. Clique em **Ligar YouTube** (ou **Ligar LinkedIn**). A aba **vai para a rede**, na mesma janela, sem abrir outra.
3. Na rede, a pessoa entra com a **própria** conta (o SocialReport nunca vê a senha dela) e **autoriza todas as permissões pedidas**. No Google, **escolha o canal do cliente** quando ele perguntar qual conta usar, e **deixe marcadas as duas permissões**: desmarcar uma faz a ligação ser recusada.
4. A rede devolve ao SocialReport, que reabre o cadastro do cliente **já rolado até uma caixa destacada em amarelo**, com o título **"Falta um passo: confirme o canal"** (no LinkedIn, **"confirme a Página"**). O YouTube mostra o canal da conta escolhida; o LinkedIn lista as Páginas que a pessoa administra.

   ![Caixa amarela Falta um passo: confirme o canal, com o canal Instituto Horizonte marcado e o botão Ligar este canal]({{ '/assets/img/app/app-81-youtube-escolher-canal.png' | relative_url }})

5. Marque o canal ou a Página certa e clique em **Ligar este canal** (no LinkedIn, o botão se chama **Ligar esta Página**). **É esse clique que grava a ligação**: voltar do login ainda não liga nada, e o aviso "Falta um passo" continua ali até você confirmar. A tela diz **"Ligação gravada."** e mostra o estado, o nome do canal ou da Página, quem ligou e quando, até quando vale e a **máscara** da chave (só o final).

   ![Ligação gravada no YouTube: estado em dia, canal, quem ligou, validade, última verificação e a chave mascarada, com os botões Religar, Testar e Desligar]({{ '/assets/img/app/app-82-youtube-cliente-ligado.png' | relative_url }})

6. Clique em **Testar** para ter certeza de que a leitura funciona. Aparece **"Teste ok."** ou **"O teste falhou."**, com o motivo.

**Tempo.** O login na rede tem **10 minutos** para ser concluído, e a escolha do canal ou da Página, **15** depois disso. Passou do prazo, é só clicar em **Ligar** de novo.

**No LinkedIn**, o caminho é o mesmo, com a lista das Páginas que a pessoa administra:

![Seção LinkedIn de um cliente ainda sem ligação, com o aviso LinkedIn não ligado e o botão Ligar LinkedIn]({{ '/assets/img/app/app-85-linkedin-cliente-desligado.png' | relative_url }})

![Caixa amarela Falta um passo: confirme a Página, com a Página Instituto Horizonte marcada e o botão Ligar esta Página]({{ '/assets/img/app/app-86-linkedin-escolher-pagina.png' | relative_url }})

![Ligação gravada no LinkedIn: estado em dia, Página, quem ligou, validade de 60 dias, última verificação e a chave mascarada]({{ '/assets/img/app/app-87-linkedin-cliente-ligado.png' | relative_url }})

**O que muda de uma rede para a outra**

| | YouTube | LinkedIn |
|---|---|---|
| **Quem se escolhe** | o canal da conta Google usada (a Conta de Marca do cliente) | a Página, entre as que o perfil administra |
| **Validade** | a tela mostra **"válido até —"**: o Google não informa data. A ligação segue enquanto a pessoa não retirar a permissão, não perder o acesso ao canal e o app estiver aprovado | **cerca de 60 dias**, e a tela mostra a data. O LinkedIn só renova sozinho para apps aprovados como parceiros: sem isso, a ligação **vence** e precisa ser refeita com **Religar** |
| **Aviso de vencimento** | não há data, então não há aviso de vencimento. O sistema avisa quando o Google recusa o acesso | selo amarelo e faixa no painel **14 dias antes** da data |

**O que a lista de canais e Páginas pode mostrar:**

- **"já ligado a: …"** (com o nome de outro cliente): o mesmo canal ou a mesma Página já está ligado a outro cliente. O sistema **não bloqueia**, só avisa. **Cuidado:** os dois relatórios passarão a ter os mesmos números. Se foi engano, escolha outro.
- **Conta sem canal (YouTube) ou sem Página administrada (LinkedIn):** a rede não devolve nada para escolher, e a tela diz o motivo (veja [Quando dá errado](#quando-dá-errado)).

> **Quem faz o login é a conta de uma pessoa.** A chave que o sistema guarda nasce do login dela. Se essa pessoa sair da Conta de Marca ou da Página, trocar a senha ou retirar o acesso do app, **a ligação que ela fez para** (veja [os estados](#os-estados-da-ligação)). Prefira que quem liga seja alguém que vai continuar na equipe, e **anote quem ligou**: a tela mostra "Ligado por …".
{: .warning }

### 3. Testar, religar e desligar

**Testar.** Pede à rede uma verificação do acesso e confere se o login ainda alcança **o mesmo** canal ou Página da ligação. O resultado aparece em cima, e o estado se atualiza.

**Religar.** É o mesmo caminho de **Ligar**: a aba vai à rede e volta. Se o canal ou a Página do cliente continua entre os do login, **não há o que escolher**: o sistema grava a ligação sozinho e a tela diz **"Ligação renovada."**, sem a caixa amarela. Se ele não aparece mais entre os do login (a conta perdeu o acesso, por exemplo), a escolha volta a ser pedida. Use **Religar** quando o estado pedir ou quando a ligação estiver vencendo.

![Seção YouTube depois de religar: a mensagem Ligação renovada e o estado em dia, sem caixa de escolha]({{ '/assets/img/app/app-84-youtube-ligacao-renovada.png' | relative_url }})

**Desligar.** O botão pede confirmação. No LinkedIn: **"Desligar o LinkedIn deste cliente? As leituras automáticas param."** No YouTube: **"Desligar o YouTube deste cliente? As leituras automáticas param e a autorização também será retirada no Google."**

![Confirmação do desligamento: Desligar o LinkedIn deste cliente? As leituras automáticas param, com os botões Desligar e Cancelar]({{ '/assets/img/app/app-88-linkedin-desligar-confirmar.png' | relative_url }})

Desligar apaga **neste sistema** a ligação e a chave do cliente. Os números que já foram lidos continuam nos relatórios, e as planilhas continuam valendo. O que muda de uma rede para a outra:

> **No YouTube, desligar também retira a autorização no Google.** O sistema revoga o acesso que o canal deu ao app e depois apaga a ligação. A mensagem diz: **"Ligação desfeita e autorização retirada no Google."** O mesmo vale quando você **exclui o cliente**, e quando o cliente é excluído pelo fim do contrato. Se a mesma conta do Google tiver sido usada para ligar outros clientes, o Google pode encerrar a autorização deles também; nesse caso o outro cliente passa a pedir **Religar**.
>
> **Se o Google não responder**, a ligação é apagada aqui do mesmo jeito, e a mensagem avisa em vermelho: **"não foi possível retirar a autorização no Google: ela pode continuar ativa lá"**, com o link <https://security.google.com/settings/security/permissions>, onde você remove o acesso do SocialReport na mão. Não ignore esse aviso: enquanto a autorização continuar lá, o Google ainda considera o app autorizado.
{: .important }

> **No LinkedIn, desligar não revoga a permissão na rede.** A mensagem diz: **"Ligação desfeita neste sistema. (A autorização no LinkedIn continua, porque pode valer para outros clientes.)"** A pessoa que fez o login autorizou o app **uma vez**, e essa autorização pode ser a mesma de outros clientes dela. Revogá-la na rede cortaria todos de uma vez, por isso o sistema não faz isso por você. Quem quiser retirar a permissão do lado do LinkedIn (por exemplo, quando a pessoa sai da equipe) faz isso em **Configurações > Dados > Aplicativos permitidos**, sabendo que **todas** as ligações dela caem. O passo a passo público está na [Política de Privacidade, seção 13]({{ '/privacidade/#exclusao-de-dados' | relative_url }}).
{: .important }

## Os estados da ligação

O estado aparece num **selo colorido** no cadastro do cliente (verde, amarelo, vermelho ou cinza). O analista vê o mesmo estado, com o texto adequado a ele ("peça ao administrador para religar"), no bloco **Ler do YouTube** ou **Ler do LinkedIn** da página do mês.

| O selo diz | O que significa | O que fazer |
|---|---|---|
| **YouTube ligado (canal "…").** / **LinkedIn ligado (Página "…").** (verde) | Tudo certo | Nada |
| **… A ligação vence em dd/mm: clique em Religar.** (amarelo) | Faltam **menos de 14 dias** para a validade (na prática, o LinkedIn). Ela ainda lê | Clique em **Religar** antes da data. Além do selo, o painel mostra a faixa de aviso (abaixo) |
| **Ligação com o YouTube expirada: clique em Religar.** (vermelho) | A validade chegou ao fim, ou a rede passou a recusar a chave (a pessoa trocou a senha, retirou o app da conta, saiu do canal, ou o app ainda em teste perdeu o acesso). **A leitura está parada**: o analista vê **Ler do YouTube** apagado | **Religar**, com a conta de quem administra o canal ou a Página |
| **A conta do YouTube perdeu a permissão de leitura: clique em Religar.** (vermelho) | A conta que ligou perdeu a função, ou o login agora alcança **outro** canal, ou alguma permissão pedida deixou de valer | **Religar**, marcando todas as permissões. Se a conta perdeu o acesso, use a de outra pessoa que o tenha |
| **A chave do servidor mudou; religue a conta.** (vermelho) | A chave que cifra os acessos mudou, e o que está guardado não abre mais | Cole o segredo do app de novo na aba da rede (se ela também avisar) e use **Religar** em cada cliente. Para o analista, a mensagem é "A ligação precisa ser refeita; peça ao administrador." |
| **YouTube (canal "…"): precisa religar (a cópia de segurança não guarda o acesso).** (vermelho) | O sistema foi **restaurado de uma cópia de segurança**, que não leva as chaves | **Religar**, cliente a cliente |
| **YouTube não ligado.** / **LinkedIn não ligado.** (cinza) | O cliente nunca foi ligado a essa rede, ou foi desligado | **Ligar YouTube** (ou LinkedIn), se quiser a leitura |

![Selo amarelo LinkedIn ligado. A ligação vence em 14/11: clique em Religar, num cliente cuja validade está no fim]({{ '/assets/img/app/app-90-linkedin-cliente-renovar-em-breve.png' | relative_url }})

![Selo vermelho Ligação com o YouTube expirada: clique em Religar, com as datas da ligação e os botões Religar, Testar e Desligar]({{ '/assets/img/app/app-89-youtube-cliente-expirada.png' | relative_url }})

**Quando o sistema confere.** Uma vez por dia, a partir das 23h de Brasília, o servidor confere cada ligação, renova o acesso (o que também evita que ele caia por falta de uso) e tira a **fotografia da contagem de inscritos ou seguidores**. É essa fotografia que dá, mais tarde, o número do **último dia do mês**. Ela só passa a existir **a partir do dia em que o cliente é ligado**: se você quer o número exato do fim de outubro, ligue o cliente **antes** do fim de outubro.

**A faixa de aviso no painel.** Quando alguma ligação do YouTube ou do LinkedIn precisa de atenção, o super-administrador vê uma **faixa amarela** no alto do sistema, com o nome dos clientes e da rede, e o botão **Ver clientes**. Sem nada a avisar, a faixa não aparece, e **o analista nunca a vê**. (A faixa da Meta é separada e aparece ao mesmo tempo, se for o caso.)

![Faixa amarela no alto do sistema: Leitura automática parada para Instituto Horizonte (YouTube): religue no cadastro do cliente. A ligação vence em breve para Escola Girassol (LinkedIn)]({{ '/assets/img/app/app-97-redes-faixa-painel.png' | relative_url }})

> **Dica: confira a faixa e religue antes de o analista precisar.** Ligação que vence ou cai no meio do fechamento do mês é a forma mais cara de descobrir que ela vence. Religar é um clique e um login, e no LinkedIn a faixa avisa com 14 dias de folga.
{: .tip }

## Permissões de publicar vindas de outra automação

**Por que importa.** A RIT pode usar o mesmo app da rede para ler (o SocialReport) e para outra automação que publica. Quando a pessoa que faz o login já autorizou esse app a publicar, a rede devolve essa autorização junto, mesmo que o SocialReport não a tenha pedido. A ligação **vale**, e o cadastro do cliente mostra uma nota:

![Seção YouTube de um cliente ligado, com a nota de que a ligação também tem permissões de publicar, concedidas para outra automação, e de que o SocialReport só lê]({{ '/assets/img/app/app-83-youtube-escopos-a-mais.png' | relative_url }})

**O que a nota quer dizer.** Que a autorização que a rede guardou para aquele login é maior do que a que o SocialReport usa. O SocialReport **só lê**: nenhuma chamada dele publica, responde ou apaga. E ele **nunca revoga** a autorização a mais enquanto o cliente está ligado, porque revogar a de publicar derrubaria a outra automação (no Google, derrubaria a concessão inteira do app). A exceção é **desligar o YouTube**: aí o sistema revoga a autorização do canal no Google, e isso vale para a concessão inteira daquele login, inclusive a parte a mais. A nota é informativa e não bloqueia nada. Se a permissão a mais não for mais necessária, quem a retira é a pessoa, na conta dela, na lista de apps com acesso.

## Quando dá errado

A rede devolve o navegador ao sistema com um motivo quando a ligação não se completa. A mensagem aparece no cadastro do cliente (ou na tela de clientes, se o login não chegou a identificar o cliente). Onde aparece "YouTube", leia também "LinkedIn", com o nome da rede usada.

| Mensagem | O que quer dizer | O que fazer |
|---|---|---|
| **Faltou autorizar: …. Clique em "Ligar" e marque todas as permissões pedidas.** | A pessoa desmarcou alguma permissão na tela da rede | Clique em **Ligar** e deixe **todas** marcadas |
| **Login do YouTube cancelado: nada foi ligado.** | A pessoa fechou ou cancelou a tela da rede | Clique em **Ligar** de novo |
| **A conta usada não administra nenhum canal. Entre com uma conta que administre o canal do cliente.** (no LinkedIn: **A conta usada não administra nenhuma Página. Entre com uma conta que administre a Página do cliente.**) | A conta Google não tem canal, ou o canal é de uma Conta de Marca em que ela não está. No LinkedIn, o perfil não é administrador de nenhuma Página | Entre com a conta certa. No YouTube, confira se a pessoa está na lista da Conta de Marca; no LinkedIn, se o papel é de administrador e está aprovado |
| **O login demorou mais de 10 minutos e venceu.** | Passou do prazo | **Ligar** de novo, mais rápido |
| **O login voltou em outro navegador ou aba. Comece de novo neste navegador.** | O login precisa terminar no navegador em que começou | Faça tudo na mesma janela |
| **Este retorno do login já foi usado.** / **O login não pôde ser concluído (o link é inválido).** | Voltar pela seta do navegador, ou abrir um link de retorno antigo | **Ligar** de novo, sem usar o histórico do navegador |
| **O YouTube devolveu um acesso que não vale. Tente ligar de novo.** | A rede devolveu um acesso que o sistema não aceita | Tente de novo; se repetir, leve ao suporte |
| **O YouTube não devolveu o acesso de longo prazo. Remova o acesso do app na sua conta e ligue de novo.** | A rede não entregou a chave de renovação, e sem ela a ligação duraria cerca de uma hora | Na conta Google da pessoa, retire o acesso do app, e ligue de novo |
| **O app do YouTube não está configurado (configurações do sistema, aba YouTube).** | Falta o identificador ou o segredo | Faça o passo 1 |
| **A leitura automática do YouTube não está disponível agora. Tente mais tarde.** | A rede não respondeu como o esperado: pode estar fora do ar, ou o identificador ou o segredo do app estar errado | Use **Testar o app guardado** na aba da rede para separar os dois casos. Se o app está certo, tente mais tarde |
| **O YouTube recusou o login.** / **A ligação do YouTube não foi concluída. Tente de novo; se continuar, avise o suporte.** | A rede recusou por um motivo que o sistema não classifica | Tente de novo mais tarde. Se repetir, leve o dia, o cliente e a rede ao suporte |
| **Esta conta não estava entre as do login.** / **Esta escolha já foi confirmada.** / **Escolha de conta não encontrada ou vencida. Ligue de novo.** (ao clicar em **Ligar este canal** ou **Ligar esta Página**) | A escolha venceu, foi feita duas vezes ou veio de outra janela | **Ligar** de novo e confirmar uma vez só |

> **O login que a rede recusa antes de ver o sistema.** Se o erro for da própria rede (uma página do Google ou do LinkedIn, e não do SocialReport), o app provavelmente não aceita aquela pessoa (ela não tem função no app, ou o app ainda não foi aprovado) ou o endereço de retorno colado no app **não é exatamente** o da aba.
{: .note }

## Checklist do super-administrador

- [ ] App da RIT **aprovado** pela rede (ou, enquanto não, nenhum cliente de verdade ligado e as planilhas em uso).
- [ ] Abas **YouTube** e **LinkedIn**: identificador e segredo salvos, **Testar o app guardado** mostrando que a rede aceitou. No YouTube, um cliente OAuth **só do SocialReport**.
- [ ] **LinkedIn-Version** com menos de 10 meses (sem o aviso amarelo da aba).
- [ ] Cada cliente ligado por uma conta **que vai continuar na equipe**, com **Testar** feito. No YouTube, o canal escolhido é o **do cliente**, e não o pessoal.
- [ ] Clientes ligados **antes** do primeiro fim de mês que se quer medir (a fotografia de inscritos e seguidores começa no dia da ligação).
- [ ] LinkedIn: uma rotina de religar a cada dois meses, ou a faixa do painel olhada ao abrir o sistema.
- [ ] Guardado em cofre, fora do sistema: o **segredo do app de cada rede**. A cópia de segurança **não os leva**, e a ligação de cada cliente também **não entra na cópia**: depois de restaurar, cada cliente precisa ser religado.

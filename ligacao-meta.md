---
title: Ligar o Instagram e o Facebook (Meta)
parent: "6. Administração"
nav_order: 2
permalink: /administracao/meta/
---

# Ligar o Instagram e o Facebook (Meta)

Esta página é só para o **super-administrador**. Ela explica como deixar o sistema pronto para **ler os números do Instagram e do Facebook direto da Meta**, como ligar cada cliente, o que significa cada estado da ligação e o que fazer quando ela para. Quem usa a leitura no dia a dia, o analista, tem a [sua página]({{ '/mes-do-analista/ler-da-meta/' | relative_url }}).

As telas desta página vêm de uma organização fictícia, o **Instituto Horizonte**, e de uma simulação da Meta. Nomes, @ e números são inventados.

## Por que ligar um cliente

Sem a ligação, todo mês alguém exporta a planilha de cada rede, confere se é a do cliente certo, se é o período certo, e importa. É trabalho repetido, e é nele que se erra: planilha de outro cliente, de outro mês, seguidores esquecidos.

Com a ligação, o analista clica em **Ler da Meta** na página do mês, e o sistema traz as publicações do mês, com alcance, visualizações e interações, no mesmo formato da planilha, mais o número de seguidores do fim do mês. **A planilha continua valendo**: ela segue sendo o caminho para os Stories, para o LinkedIn, o TikTok e o YouTube, e para qualquer cliente que você ainda não ligou. A ligação é uma segunda fonte, que o analista escolhe mês a mês.

**Exemplo.** No fechamento de outubro, a analista do **Instituto Horizonte** abre o mês e clica em **Ler da Meta**. Em segundos entram 6 publicações do Instagram e 4 do Facebook, com os números de cada uma, e o número de seguidores de 31 de outubro, porque o cliente foi ligado em setembro e o sistema já vinha anotando a contagem todo dia. Ela não precisou exportar as planilhas das duas redes. O Story da campanha de outubro ela traz pela planilha, porque a leitura não o alcança.

## O que a ligação faz, e o que não faz

- **Só lê.** O sistema não publica, não responde, não apaga e não mexe em anúncios. As permissões que ele pede são todas de leitura, e a tela da Meta mostra a lista a quem autoriza.
- **Lê números, não pessoas.** Entram as publicações da conta (legenda, data, formato e link) com os números de cada uma, o alcance da conta e a contagem de seguidores. Curtidas e comentários entram só como **contagem**: o sistema não lê quem curtiu, quem comentou, nem a lista de seguidores, nem mensagens. A [Política de Privacidade]({{ '/privacidade/' | relative_url }}) detalha isso.
- **Guarda, de sensível, duas coisas por cliente:** uma chave de acesso à Página, cifrada e só no servidor, e uma fotografia diária da contagem de seguidores (um número por dia, sem pessoas). O nome da Página e o @ do Instagram aparecem na tela e não são segredo.
- **Não lê Stories**, porque a Meta só os mostra por 24 horas. O Story do mês continua vindo pela planilha.

As cinco permissões que a Meta mostra na hora do login, e para que servem:

| Permissão (nome que a Meta mostra) | Para que o sistema a usa |
|---|---|
| `pages_show_list` | listar as Páginas que a pessoa que fez o login administra, para você escolher a do cliente |
| `pages_read_engagement` | ler as publicações da Página, as reações, os comentários (contados) e o número de seguidores |
| `read_insights` | ler as estatísticas da Página e das publicações (alcance e visualizações) |
| `instagram_basic` | achar a conta profissional do Instagram ligada à Página e ler a lista de publicações |
| `instagram_manage_insights` | ler as estatísticas das publicações do Instagram e da conta |

Apesar do nome de uma delas ter "manage", **nenhuma permite escrever**. O sistema recusa a ligação se a Meta conceder **qualquer permissão além dessas** (a única exceção é o acesso ao portfólio empresarial, quando você o liga na aba **Meta**; veja [Quando dá errado](#quando-dá-errado)).

## O que você precisa ter antes

1. **O app da RIT na Meta**, criado uma vez por quem administra a conta de desenvolvedor da Meta. É dele que saem o **identificador** e o **segredo** que você cola na tela, e é nele que se cadastra o endereço de retorno (próxima seção).
2. **Uma pessoa da equipe com acesso à Página do cliente.** É o **login dela** que liga o cliente. Ela precisa administrar a Página do Facebook do cliente (diretamente ou por uma função no portfólio empresarial do cliente) e ter, nessa Página, a permissão de **ver as informações** (as estatísticas). O Instagram do cliente precisa ser uma conta **profissional** ligada a essa Página.
3. **Essa pessoa precisa ter função no app da Meta** (administrador, desenvolvedor ou testador), enquanto o app não passa pela revisão da própria Meta. Sem a função, a Meta recusa o login.
4. **O cliente salvo no sistema.** A seção de redes sociais só liga um cliente que já existe: num cliente novo ainda não salvo, ela diz "Salve o cliente para ligar o Instagram e o Facebook."

> **A Meta exige duas páginas públicas.** Ao cadastrar o app, a Meta pede o endereço da política de privacidade e o endereço de instruções de exclusão de dados. Use o [texto de Privacidade]({{ '/privacidade/' | relative_url }}) e a [seção 13 dele, "Como pedir a exclusão dos dados da ligação com a Meta"]({{ '/privacidade/#exclusao-de-dados' | relative_url }}): são os endereços públicos deste manual.
{: .note }

## Passo a passo

### 1. Configurar o app da RIT, uma vez

Em **Configurações do Sistema**, abra a aba **Meta**.

![Aba Meta das configurações do sistema, com a URI de retorno, o identificador e o segredo do app, a versão da API, o config_id opcional e o botão Testar o app guardado]({{ '/assets/img/app/app-61-meta-aba-configuracao.png' | relative_url }})

1. Clique em **Copiar**, ao lado de **URI de retorno (cole no app da Meta)**. Esse é o endereço para onde a Meta devolve o navegador depois do login.
2. No painel do app, na Meta, cole-o em **URIs de redirecionamento do OAuth válidos** (dentro do produto **Login do Facebook**). Ligue também o **modo estrito** e a opção **Exigir segredo do app**. A Meta muda os nomes e a posição dos botões do painel de tempos em tempos: se não achar um deles, procure pelo nome do campo, não pelo lugar.
3. De volta ao SocialReport, preencha o **Identificador do app** (só números) e o **Segredo do app**.
4. Clique em **Salvar Meta**. A tela diz **"App da Meta salvo."**
5. Clique em **Testar o app guardado**. Se estiver tudo certo, aparece **"App ok:"** e o nome do app. O teste usa o que está **guardado**, e não o que você digitou e ainda não salvou: por isso o botão fica apagado até haver um segredo guardado.

Os outros campos quase nunca mudam:

| Campo | Para que serve | Quando mexer |
|---|---|---|
| **Versão da API** | a versão da Meta com a qual o sistema conversa (por exemplo, `v24.0`) | só quando a equipe técnica orientar. A Meta aposenta versões antigas |
| **config_id (opcional)** | usado só se o app da Meta usar o **Login do Facebook para Empresas** | deixe vazio, salvo orientação da equipe técnica |
| **Pedir também o acesso ao portfólio empresarial** | acrescenta a permissão de portfólio ao login | só se, ao ligar um cliente, as Páginas do portfólio do cliente **não aparecerem** na lista |

**Sobre o segredo.** Como as chaves de IA e os tokens do Matomo, ele fica **só no servidor, cifrado**. A tela mostra apenas o final (**"Segredo guardado ••••0008. Digite só para trocar."**). **Salvar sem digitar nada mantém o segredo guardado.** Para trocá-lo, digite o novo e salve. O botão **Remover** apaga o segredo guardado, mas só vale quando você clica em **Salvar Meta**. **Desfazer** cancela a remoção.

#### A chave do cofre

Se a aba mostrar este aviso amarelo, **não o deixe para depois**:

![Aviso amarelo: Defina a chave própria do cofre (SOCIALREPORT_COFRE_CHAVE) e guarde uma cópia no cofre da V3RTECH]({{ '/assets/img/app/app-62-meta-aviso-cofre.png' | relative_url }})

**Por que importa.** O segredo do app e a chave de acesso de cada cliente ficam cifrados no servidor. Para cifrar, o servidor usa uma **chave**. Se a **chave própria do cofre** (a variável `SOCIALREPORT_COFRE_CHAVE`, de quem opera o servidor) não estiver definida, o servidor usa, no lugar, outro segredo dele, o que protege o login do sistema. Se um dia esse segredo for trocado, **tudo o que está cifrado deixa de abrir**, e você terá de religar **todos os clientes**, um a um.

**O que fazer.** Peça a quem opera o servidor para definir a chave própria e **guardar uma cópia dela no cofre da V3RTECH**: a chave que existe em um só lugar já está perdida, só não se sabe quando. A cópia de segurança do sistema **não leva** essa chave nem os segredos da Meta. Sem aviso, a chave própria está definida, e a tela não mostra nada.

Se a chave do servidor mudar mesmo assim, a aba avisa: **"A chave do servidor mudou e o segredo guardado não abre mais. Cole o segredo do app de novo e salve."** Faça isso primeiro; depois religue os clientes (veja [chave trocada](#os-estados-da-ligação)).

### 2. Ligar um cliente

Em **Clientes & Marcas**, abra o cliente em **Ver / Editar** e role até a seção **Redes sociais (Meta)**.

![Seção Redes sociais (Meta) de um cliente ainda sem ligação, com o aviso Instagram e Facebook não ligados e o botão Ligar Instagram e Facebook]({{ '/assets/img/app/app-63-meta-cliente-desligado.png' | relative_url }})

1. **Combine com quem fará o login.** Ela precisa fazer o login **no mesmo navegador em que você clicará em Ligar** (a Meta devolve o login ao navegador que o iniciou) e ter a conta que administra a Página do cliente. Pode ser você mesmo, se a conta for sua.
2. Clique em **Ligar Instagram e Facebook**. A aba **vai para a Meta**, na mesma janela, sem abrir outra.
3. Na Meta, a pessoa entra com a **própria** conta (o SocialReport nunca vê a senha dela) e **autoriza todas as permissões pedidas**. Desmarcar uma delas faz a ligação ser recusada.
4. A Meta devolve ao SocialReport, que abre o cadastro do cliente com **"Escolha a Página do cliente:"**. A lista mostra, para cada Página, o nome, o Instagram ligado a ela (**@** e quantidade de seguidores) ou **"sem Instagram ligado"**.

   ![Escolha da Página do cliente: três Páginas, uma com Instagram, uma sem Instagram ligado e uma desabilitada por falta de permissão]({{ '/assets/img/app/app-64-meta-escolher-pagina.png' | relative_url }})

5. Marque a Página certa e clique em **Ligar esta Página**. A tela confirma **"Ligação gravada."** e mostra o estado, a Página, o @ do Instagram, quem ligou e quando, até quando vale e a **máscara** da chave (só o final).

   ![Ligação gravada: estado em dia, Página, @ do Instagram, quem ligou, validade, última verificação e a chave mascarada, com os botões Renovar ligação, Testar e Desligar]({{ '/assets/img/app/app-65-meta-cliente-ligado.png' | relative_url }})

6. Clique em **Testar** (próxima seção) para ter certeza de que a leitura funciona.

**Tempo.** O login na Meta tem **10 minutos** para ser concluído, e a escolha da Página, **15** depois disso. Passou do prazo, é só clicar em **Ligar** de novo.

**O que a lista de Páginas pode mostrar:**

- **"sua conta não tem permissão de ver as informações desta Página"** (linha apagada, que não dá para marcar): a pessoa que fez o login não tem, nessa Página, a permissão de ver estatísticas. Sem ela não há números. Peça ao administrador da Página que a conceda, ou refaça o login com outra conta.
- **"já ligada a: …"** (com o código de outro cliente): a mesma Página já está ligada a outro cliente. O sistema **não bloqueia**, só avisa. **Cuidado:** os dois relatórios passarão a ter os mesmos números. Se foi engano, escolha outra Página.
- **"sem Instagram ligado":** a Página existe, mas não tem conta profissional do Instagram ligada a ela. Pode ligar assim mesmo: só o **Facebook** será lido, e o analista vê **"Facebook ligado (a Página não tem Instagram ligado)"**. O Instagram continua vindo pela planilha. Quando o Instagram for ligado à Página, na Meta, clique em **Renovar ligação** para o sistema passar a enxergá-lo.

> **Quem faz o login é a conta de uma pessoa.** A chave que o sistema guarda é a da **Página**, mas ela nasce do login dessa pessoa. Se essa pessoa sair da Página, trocar a senha ou remover o app da conta dela, **as ligações que ela fez param** (veja [os estados](#os-estados-da-ligação)). Prefira que quem liga seja alguém que vai continuar na equipe, e **anote quem ligou**: a tela mostra "Ligada por …".
{: .warning }

### 3. Testar, renovar e desligar

**Testar.** O botão **Testar** pede à Meta uma verificação da chave e uma leitura de um item. O resultado aparece em cima, como **"Teste ok."** ou **"O teste falhou."** com o motivo, e o estado da ligação se atualiza.

![Ligação testada: a tela mostra Teste ok no alto e a data da última verificação atualizada]({{ '/assets/img/app/app-66-meta-cliente-testado.png' | relative_url }})

**Renovar ligação.** É o mesmo caminho de **Ligar**, mas já com a Página do cliente pré-escolhida. Use-o quando o estado pedir, quando a ligação estiver vencendo ou quando o Instagram passar a existir na Página.

**Desligar.** O botão pede confirmação: **"Desligar a Página deste cliente? As leituras automáticas param."**

![Confirmação do desligamento: Desligar a Página deste cliente? As leituras automáticas param, com os botões Desligar e Cancelar]({{ '/assets/img/app/app-67-meta-desligar-confirmar.png' | relative_url }})

Desligar apaga **neste sistema** a ligação e a chave do cliente. Os números que já foram lidos continuam nos relatórios, e as planilhas continuam valendo. Atenção ao que o desligamento **não** faz:

> **Desligar não revoga a permissão na Meta.** A mensagem diz: **"Ligação desfeita neste sistema. (A autorização na Meta continua, porque vale para os outros clientes.)"** A pessoa que fez o login autorizou o app **uma vez**, e essa autorização é a mesma de todos os clientes que ela ligou. Revogá-la na Meta cortaria todos de uma vez, por isso o sistema não faz isso por você. Quem quiser retirar a permissão do lado da Meta (por exemplo, quando a pessoa sai da equipe) faz isso nas configurações da própria conta do Facebook, em **Integrações de negócios**, sabendo que **todas** as ligações dela caem. O passo a passo público está na [Política de Privacidade, seção 13]({{ '/privacidade/#exclusao-de-dados' | relative_url }}).
{: .important }

## Os estados da ligação

O estado aparece num **selo colorido** no cadastro do cliente (verde, amarelo ou vermelho). O analista vê o mesmo estado, com o texto adequado a ele ("peça ao administrador para renovar"), no bloco **Ler da Meta** da página do mês.

| O selo diz | O que significa | O que fazer |
|---|---|---|
| **Instagram e Facebook ligados.** (verde) | Tudo certo. Pode ser **"Facebook ligado (a Página não tem Instagram ligado)"** | Nada |
| **… A ligação vence em dd/mm: clique em Renovar ligação.** (amarelo) | Faltam **menos de 14 dias** para a validade que a Meta deu à ligação. Ela ainda lê | Clique em **Renovar ligação** antes da data. Além do selo, o painel mostra a faixa de aviso (abaixo) |
| **Ligação expirada: clique em Renovar ligação.** (vermelho) | A validade chegou ao fim, ou a Meta passou a recusar a chave (a pessoa trocou a senha, tirou o app da conta ou saiu da Página). **A leitura está parada**: o analista vê **Ler da Meta** apagado | **Renovar ligação**, com a conta de quem administra a Página |
| **A conta da Meta perdeu a permissão de leitura: clique em Renovar ligação.** (vermelho) | A conta que ligou perdeu a função na Página, ou alguma permissão pedida deixou de valer, ou a Meta concedeu uma a mais | **Renovar ligação**, marcando todas as permissões pedidas e nenhuma a mais. Se a conta perdeu o acesso à Página, use a de outra pessoa que o tenha |
| **A chave do servidor mudou; religue a conta.** (vermelho) | A chave que cifra os acessos mudou, e a chave guardada não abre mais | Cole o segredo do app de novo na aba **Meta** (se ela também avisar) e use **Renovar ligação** em cada cliente. Para o analista, a mensagem é "A ligação precisa ser refeita; peça ao administrador." |
| **Ligada à Página "…": precisa religar (a cópia de segurança não guarda o acesso).** (vermelho) | O sistema foi **restaurado de uma cópia de segurança**, que não leva as chaves | **Renovar ligação**, cliente a cliente |
| **Instagram e Facebook não ligados.** (vermelho) | O cliente nunca foi ligado, ou foi desligado | **Ligar Instagram e Facebook**, se quiser a leitura |

![Selo amarelo Instagram e Facebook ligados. A ligação vence em 10/11: clique em Renovar ligação, num cliente cuja validade está no fim]({{ '/assets/img/app/app-68-meta-cliente-renovar-em-breve.png' | relative_url }})

![Selo vermelho Ligação expirada: clique em Renovar ligação, com a Página, o @ do Instagram e as datas da ligação]({{ '/assets/img/app/app-69-meta-cliente-expirada.png' | relative_url }})

**Quando o sistema confere.** Uma vez por dia, a partir das 23h de Brasília, o servidor confere cada ligação e tira a **fotografia da contagem de seguidores** de cada conta. É essa fotografia que dá, mais tarde, o **número de seguidores do último dia do mês**. Ela só passa a existir **a partir do dia em que o cliente é ligado**: se você quer o número exato do fim de outubro, ligue o cliente **antes** do fim de outubro. Uma conferência que dá "limite de uso da Meta" não muda o estado; o sistema tenta de novo no dia seguinte.

**A faixa de aviso no painel.** Quando alguma ligação precisa de atenção, o super-administrador vê uma **faixa amarela** no alto do sistema, com o nome dos clientes, e o botão **Ver clientes**. Sem nada a avisar, a faixa não aparece, e **o analista nunca a vê**.

![Faixa amarela no alto do sistema: Leitura do Instagram e do Facebook parada para Instituto Horizonte: renove a ligação no cadastro do cliente. A ligação com a Meta vence em breve para Escola Girassol]({{ '/assets/img/app/app-77-meta-faixa-painel.png' | relative_url }})

> **Dica: confira a faixa e renove antes de o analista precisar.** Ligação que vence no meio do fechamento do mês é a forma mais cara de descobrir que ela vence. Renovar é um clique e um login, e a faixa avisa com 14 dias de folga.
{: .tip }

## Quando dá errado

A Meta devolve o navegador ao sistema com um motivo quando a ligação não se completa. A mensagem aparece no cadastro do cliente (ou na tela de clientes, se o login não chegou a identificar o cliente).

![Mensagem de erro: A Meta concedeu permissões além das pedidas (pages_manage_posts, ads_management): o sistema só lê e não aceita acesso a mais]({{ '/assets/img/app/app-70-meta-permissao-a-mais.png' | relative_url }})

| Mensagem | O que quer dizer | O que fazer |
|---|---|---|
| **A Meta concedeu permissões além das pedidas (…): o sistema só lê e não aceita acesso a mais.** | Na conta de quem fez o login, a Meta costuma lembrar permissões de uma autorização anterior (de publicar, por exemplo). O sistema recusa de propósito: quem só precisa ler não deve ter a chave que também escreve | Na conta do Facebook de quem fez o login, procure o app em **Integrações de negócios** e retire **apenas as permissões listadas** na mensagem. Clique em **Ligar** de novo. **Não remova o app inteiro**: isso derruba as ligações de todos os clientes dessa pessoa |
| **Na Meta, faltou autorizar: …** | A pessoa desmarcou alguma permissão na tela da Meta | Clique em **Ligar** e deixe **todas** marcadas |
| **Login da Meta cancelado: nada foi ligado.** | A pessoa fechou ou cancelou a tela da Meta | Clique em **Ligar** de novo |
| **A conta da Meta usada não administra nenhuma Página. Entre com uma conta que administre a Página do cliente.** | A conta usada não tem Página, ou a Página é de um portfólio empresarial e a Meta não a listou | Use a conta certa. Se a Página é do portfólio do cliente e a conta certa já tem acesso, marque **Pedir também o acesso ao portfólio empresarial** na aba **Meta** e tente de novo |
| **O login da Meta demorou mais de 10 minutos e venceu.** | Passou do prazo | **Ligar** de novo, mais rápido |
| **O login da Meta voltou em outro navegador ou aba. Comece de novo neste navegador.** | O login precisa terminar no navegador em que começou | Faça tudo na mesma janela |
| **Este retorno do login da Meta já foi usado.** / **O login da Meta não pôde ser concluído (o link é inválido).** | Voltar pela seta do navegador, ou abrir um link de retorno antigo | **Ligar** de novo, sem usar o histórico do navegador |
| **A Meta devolveu um acesso de outro app.** | O identificador na aba **Meta** não é o do app em que a pessoa fez o login | Confira o **Identificador do app** |
| **O app da Meta não está configurado (configurações do sistema, aba Meta).** | Falta o identificador ou o segredo | Faça o passo 1 |
| **Sua conta não tem a permissão de análise ("Ver informações") nesta Página: sem ela não há números.** (ao clicar em **Ligar esta Página**) | A conta não pode ver as estatísticas da Página escolhida | Peça a permissão ao administrador da Página, ou use outra conta |
| **A ligação com a Meta não foi concluída. Tente de novo; se continuar, avise o suporte.** | A Meta ficou fora do ar ou recusou por um motivo que o sistema não classifica | Tente de novo mais tarde. Se repetir, leve o dia e o cliente ao suporte |

> **O login que a Meta recusa antes de ver o sistema.** Se o erro for da própria Meta (uma página da Meta, e não do SocialReport), o app provavelmente não aceita aquele usuário: confira a **função no app** (pré-requisito 3) e se o endereço de retorno colado no app é **exatamente** o da aba.
{: .note }

## Checklist do super-administrador

- [ ] Aba **Meta**: identificador e segredo salvos, **Testar o app guardado** mostrando "App ok".
- [ ] Sem o aviso amarelo da **chave do cofre**, e uma cópia dessa chave no cofre da V3RTECH.
- [ ] Cada cliente que usa a leitura ligado por uma conta **que vai continuar na equipe**, com **Testar** feito.
- [ ] Clientes ligados **antes** do primeiro fim de mês que se quer medir (a fotografia de seguidores começa no dia da ligação).
- [ ] Faixa de aviso do painel olhada ao abrir o sistema; ligações a vencer renovadas.
- [ ] Guardado em cofre, fora do sistema: o **segredo do app da Meta**. A cópia de segurança **não o leva**, e a ligação de cada cliente também **não entra na cópia**: depois de restaurar, cada cliente precisa ser religado.

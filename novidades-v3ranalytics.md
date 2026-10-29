---
title: Novidades do V3RAnalytics
parent: 5. O site do cliente e o plugin V3RAnalytics
nav_order: 1
permalink: /site-e-plugin/novidades/
---
{% comment %}
  Gerado por V3RAnalytics/Projeto/bin/gerar-novidades.mjs a partir do CHANGELOG do plugin.
  Não edite à mão: a próxima publicação do plugin sobrescreve.
{% endcomment %}

# Novidades do V3RAnalytics

O que mudou em cada versão do plugin **V3RAnalytics**, escrito para quem cuida do site. Para instalar ou atualizar, veja [O site do cliente e o plugin]({{ '/site-e-plugin/' | relative_url }}). A última versão está sempre em [github.com/V3RTECH-DF/V3RAnalytics-Releases](https://github.com/V3RTECH-DF/V3RAnalytics-Releases/releases/latest).

## Versão 0.3.0 (29 de outubro de 2026)

### Adicionado
- **Licença entregue pela conexão por código**: quando o SocialReport tem a licença do plugin cadastrada, ela é ativada sozinha na hora de conectar o site por código, e a tela de conexão avisa que foi ativada. Se a ativação falhar, o site continua conectado e a tela mostra o motivo, com o caminho para colar a chave à mão. Sem licença na conexão, nada muda; a tela "Licença do V3RAnalytics" continua aceitando a chave colada.

## Versão 0.2.0 (28 de outubro de 2026)

Primeira versão estável (deixa de ser pré-lançamento).

### Adicionado
- **Medição pelo próprio endereço do site**: as visitas passam pelo seu próprio site, e o navegador do visitante deixa de falar com o servidor de medição da V3RTECH. Assim, bloqueadores de anúncio deixam de barrar a medição. Já vem ligada; para desligar, vá em Configurações, "Medir pelo próprio endereço do site".
  - O endereço do visitante e o navegador dele chegam ao servidor de medição (que anonimiza o endereço, como antes). Se o seu site fica atrás de uma CDN ou proxy (como a Cloudflare), informe em Configurações, "Proxies confiáveis", de quais o plugin pode confiar (as faixas da Cloudflare já vêm prontas). Sem a lista, o plugin ignora esses cabeçalhos, para ninguém conseguir forjar o endereço.
  - Respeito ao visitante: quem usa "não me rastreie" ou o Global Privacy Control não é medido.
  - Página "não quero ser medido": use o atalho `[v3ranalytics_optout]` ou o bloco "Não quero ser medido (V3RAnalytics)". A escolha fica no navegador do visitante, sem cookie.
  - Compatível com cache de página, metas, formulários e comércio eletrônico já configurados.
- **Atualização automática**: o plugin passa a se atualizar pelo canal da V3RTECH, com a tela "Licença do V3RAnalytics" em Configurações. Sem licença ativa, o plugin funciona normalmente e só não recebe atualização automática.
- **Download com link fixo**: a última versão fica sempre em `https://github.com/V3RTECH-DF/V3RAnalytics-Releases/releases/latest/download/v3ranalytics.zip`.

### Corrigido
- **Erro na conexão por código**: o plugin passa a mostrar o motivo que o SocialReport informa (por exemplo, código vencido ou já usado), em vez de um texto genérico igual para situações diferentes.

## Versão 0.1.3 (28 de outubro de 2026)

### Corrigido
- **Token de administrador ou superusuário aparecia como "só lê"**: o teste de conexão e o aviso do painel diziam que o token não conseguia criar metas, mesmo ele sendo de administrador ou superusuário do Matomo. Agora esses tokens são aceitos.

## Versão 0.1.2 (28 de outubro de 2026)

### Corrigido
- **Caixas de marcar e botões de opção sumiam** em algumas telas do plugin; agora aparecem normalmente.
- **Teste de conexão mais preciso**: diferencia site que não existe, token que não vale e token que só lê.
- **Downloads e links externos voltam a ser medidos**: a medição automática só deixa de contar os links de e-mail, telefone e WhatsApp (que já são contados como contato). Antes, qualquer link clicado era ignorado.
- **Cliques em WhatsApp, e-mail e telefone**: o evento passa a ter sempre o nome do tipo, e a meta correspondente passa a contar.
- **Formulários**: o envio de formulários do WPForms e do Elementor passa a ser registrado corretamente; Forminator, Gravity Forms e Contact Form 7 foram conferidos.
- **Desativar uma meta**: o navegador e a tela de Conversões mostram o mesmo estado, mesmo com o Matomo fora do ar.
- **Renomear uma meta** funciona.
- **Aviso de outro código de medição no site**: passa a ser verificado uma vez por dia, ao testar a conexão e ao abrir o painel.
- **"+ Criar Meta" da página de agradecimento**: já traz nome, tipo e identificador sugeridos, encontra páginas "obrigado" e "agradecimento", e os nomes sugeridos cabem no limite de 50 caracteres do Matomo.
- **Desinstalação** apaga todas as configurações do plugin (antes sobravam algumas).
- **Tabela de metas em tela média** (tablet) vira cartões; a coluna Ações não é mais cortada.
- **Carrinho da loja** passa a enviar a categoria dos produtos, inclusive de variações.

## Versão 0.1.1 (28 de outubro de 2026)

### Corrigido
- **Teste de conexão com o Matomo**: mensagens claras em português para os quatro problemas ("o endereço não responde", "o token não vale", "o token não tem acesso a este site" e "o token só lê e não consegue criar metas"). O resultado mostra o nome e o endereço do site no Matomo, avisa se o domínio não bate e se o comércio eletrônico está desligado no Matomo. A tela de Conexão explica qual token usar: de um usuário do Matomo com permissão só naquele site (escrita, para criar metas, sem ser superusuário).
- **Segurança**: o token deixa de aparecer em endereços e registros do servidor; vai só no corpo das chamadas.
- **Visitantes do site não esperam mais por verificações**: a procura por outro código de medição não roda mais enquanto o visitante navega; acontece só no teste de conexão, no painel do WordPress e uma vez por dia.
- **Outro código de medição no site**: por padrão o plugin suspende o próprio para não contar cada visita duas vezes; a opção "Injetar código mesmo com concorrente detectado" muda isso. Nova opção "Ligar e desligar o rastreamento", com texto explicativo.
- **Privacidade nos contatos**: cliques em WhatsApp, e-mail e telefone não enviam número, endereço nem link, só o tipo. Formulários do Forminator passam a ser medidos.
- **Metas e conversões**: saem as metas genéricas de formulário e a de pedidos do WooCommerce (a loja já é medida pelo comércio eletrônico). Excluir uma meta a remove primeiro no Matomo, e se o Matomo recusar o plugin mostra o erro. Meta apagada direto no Matomo aparece como "Ausente no Matomo", com botão "Recriar". Há ações em lote (ativar, desativar, excluir) com confirmação que diz quantos itens serão afetados, renomear meta, conversões dos últimos 30 dias, sugestão de páginas de agradecimento e telas adaptadas a partir de 375 px.
- **Loja WooCommerce**: o carrinho é limpo antes de enviar os itens novos e leva a categoria; carrinho vazio no carregamento é ignorado; esvaziar o carrinho atualiza uma vez; a página de pedido recebido não carrega o script do carrinho; o pedido só é marcado como medido depois que o navegador de fato o enviou.
- **Links de campanha**: só parâmetros `utm_*`, e o modelo de e-mail usa origem "email" e meio "social". O campo de campanha é editável, e os botões de copiar se atualizam na hora, no editor de posts e em lote na lista de posts e páginas.
- **Painel**: se o Matomo estiver fora do ar, mostra "o Matomo não respondeu às HH:MM" em vez de zeros inventados; mostra data e hora da última visita registrada e reúne os alertas (outro código de medição, domínio diferente, permissão, sem visitas há 48 horas).
- **Integração com o SocialReport**: a tela mostra "Conectado ao cliente" com o nome.

## Versão 0.1.0 (28 de outubro de 2026)

### Adicionado
- **Base do plugin**: menu V3RAnalytics no WordPress, painel de administração e compatibilidade com o WooCommerce.
- **Conexão com o Matomo e com o SocialReport**: conexão em um clique por código gerado no SocialReport, ou preenchendo endereço, número do site e token. O token nunca é exibido por inteiro. O teste de conexão explica em português o que deu errado (endereço que não responde, endereço que não é Matomo, token inválido, site não encontrado) e confere se o domínio bate.
- **Medição com privacidade**: mede visitas sem cookies, com tempo ativo na página, links e downloads. Dá para excluir da medição os usuários logados por papel, e páginas que ficam sem o rastreador não são guardadas em cache. Avisa quando há outro plugin de medição (como o do Matomo) no mesmo site.
- **Metas e conversões**: cria metas recomendadas para Contact Form 7, Forminator, WPForms, Elementor Forms, Gravity Forms e links de WhatsApp, e-mail e telefone, sem enviar dado pessoal. Distingue desativar uma meta de removê-la no Matomo e avisa antes de desinstalar.
- **Comércio eletrônico (WooCommerce)**: mede produtos e categorias vistos, carrinho e pedidos (inclusive pedidos pendentes de PIX e boleto), sem contar duas vezes o pedido quando a página é recarregada.
- **Divulgação**: gerador de links de campanha com modelos prontos para redes sociais, no editor de posts e na lista de posts.
- **Painel de estado**: situação da medição, resumo de visitas dos últimos 7 dias e alertas (outro código de medição, sem visitas há 48 horas).
- **Desinstalação limpa**: remove as configurações do plugin sem chamar o Matomo.

---
title: Portfólio
parent: "3. O mês do analista"
nav_order: 2
permalink: /mes-do-analista/portfolio/
---

# Portfólio

Esta página é para quem **produz** o relatório. A tela **Portfólio** fica no menu, logo abaixo de **Períodos & Emissão**, e reúne em um lugar **os relatórios já emitidos** do cliente ativo. Dela você tira dois proveitos: ver e copiar os links de vários relatórios de uma vez, e oferecer ao cliente **um link só** que abre a página com todos eles.

As telas vêm de uma organização fictícia, a **Associação Modelo Aurora**, com dados inventados.

## Por que usar

Sem o portfólio, o cliente recebe um link por mês, cada um no seu e-mail. Meses depois, ninguém acha o de junho: pede à equipe, que procura, reenvia, e às vezes manda o link errado. Com o portfólio, o cliente guarda **um endereço** e, a cada relatório que você emite, ele aparece lá sozinho. Para a equipe, a tela vira o painel de controle dos links: quais relatórios o cliente já tem, e como fechar o acesso a um deles quando for preciso.

## O que entra no portfólio

- **Só relatórios emitidos.** Rascunho e validado ficam de fora, de propósito: o cliente não vê trabalho em andamento. Quando você emite um relatório, ele entra na lista; se o período for excluído, sai.
- **Mensais e consolidados** (aquele que cobre vários meses, como o de um trimestre). O cartão diz **Mensal** ou **Consolidado**.
- **O mais recente primeiro.**
- **A capa do cartão.** Se o cliente usa o modelo de capa **Com foto** e o relatório tem imagem publicável, o cartão mostra a capa. Em qualquer outro caso, mostra uma **miniatura** desenhada com as cores do cliente e o logotipo (ou as iniciais do nome). Isso não é defeito: veja o modelo da capa no cadastro do cliente, na [parte 6]({{ '/administracao/' | relative_url }}).

## Passo a passo

### 1. Abra a tela

Confira o **cliente ativo** e clique em **Portfólio** no menu. A página tem dois blocos: o **Link público do portfólio**, em cima, e a grade dos **relatórios emitidos**, embaixo. Sem nenhum relatório emitido, a tela diz "Nenhum relatório emitido ainda. Só os relatórios com status emitido entram no portfólio."

![Tela Portfólio com o link público ativo, os botões Copiar, Gerar de novo e Desligar, o aviso sobre os links dos relatórios e a grade de relatórios emitidos]({{ '/assets/img/app/app-38-portfolio.png' | relative_url }})

### 2. Use os botões de cada relatório

Cada cartão tem quatro ações:

- **Abrir link**: abre o relatório como o cliente o vê, numa nova aba.
- **Copiar link**: copia o endereço do relatório.
- **Revisão**: abre a revisão daquele mês na área de trabalho, para você ajustar.
- **Novo link**: gera um novo endereço para esse relatório. O atual **deixa de abrir na hora**, mesmo para quem já o recebeu.

### 3. Trabalhe em lote

Marque a caixa dos relatórios (ou **Selecionar todos**) e use a barra que aparece:

- **Copiar links**: copia uma linha por relatório, com o período e o endereço, prontas para colar numa mensagem. A ordem é a da tela, e não a da marcação.
- **Gerar novo link**: troca o endereço de todos os marcados. A confirmação **diz quantos relatórios** serão afetados. Ao terminar, o resultado separa os concluídos, os recusados e os que falharam.

![Dois relatórios marcados e a barra com Copiar links e Gerar novo link]({{ '/assets/img/app/app-39-portfolio-lote.png' | relative_url }})

### 4. Gere o link público do portfólio

O bloco **Link público do portfólio** mostra o estado, **Ativo** ou **Desligado**.

- Sem link: clique em **Gerar link**. Não pede confirmação, porque nada deixa de funcionar.
- Com link: **Copiar** copia o endereço; **Gerar de novo** troca o endereço; **Desligar** o fecha.

Entregue ao cliente o endereço copiado, por e-mail ou mensagem. O envio de e-mail do sistema é do **relatório** (botão Compartilhar), e não do portfólio.

### 5. Gerar de novo ou desligar: a opção dos relatórios

**Gerar de novo** e **Desligar** pedem confirmação, e a janela traz a opção **Também gerar novos links para os N relatórios do portfólio (os links antigos param de abrir)**, **desmarcada** por padrão.

![Janela Desligar o link do portfólio, com a opção Também gerar novos links para os 3 relatórios marcada e os botões Cancelar e Desligar]({{ '/assets/img/app/app-40-portfolio-desligar.png' | relative_url }})

Para decidir, entenda a diferença entre os dois tipos de link:

- O **link do portfólio** abre a página que lista os relatórios.
- O **link de cada relatório** abre aquele relatório, e continua valendo **sozinho**. Quem abriu um relatório pelo portfólio passou a ter o endereço dele.

Por isso, **desligar o portfólio sozinho não desliga os links dos relatórios** que quem recebeu já tem. A tela deixa o aviso fixo no bloco do link. Para fechar tudo de uma vez, marque a opção: o sistema desliga (ou renova) o portfólio e depois **troca o endereço de cada relatório**. O resultado aparece em seguida, dizendo quantos foram trocados; se algum falhar, a lista mostra quais.

> **Marcar a opção quebra os endereços antigos em todo lugar.** Os e-mails que você já enviou, as mensagens e o **código de incorporação** de qualquer relatório que esteja numa página do site do cliente deixam de funcionar até serem trocados. Marque só quando o objetivo é realmente fechar o acesso.
{: .warning }

## O que o cliente vê

Quem recebe o link do portfólio abre uma página **só de leitura**, sem login, com o nome e as cores do cliente e um cartão por relatório emitido. Clicar no cartão abre o relatório. A página **não aparece em buscadores**, e não tem seleção nem botões de ação.

![Página pública do portfólio, com o nome do cliente no alto e os cartões dos relatórios emitidos]({{ '/assets/img/app/app-41-portfolio-publico.png' | relative_url }})

Quando alguém abre um link que foi desligado ou trocado, vê "Portfólio não encontrado". Quando o link vale, mas ainda não há relatório emitido, vê "Nenhum relatório publicado ainda."

## Exemplo: o cliente perdeu o acesso de um parceiro

A Associação Modelo Aurora encerrou a parceria com uma consultoria que recebia os relatórios. A diretora pede que a consultoria deixe de ver. Você pensa em dois caminhos:

1. **Desligar** o portfólio. A consultoria deixa de achar a lista, mas ainda abre cada relatório pelo link que guardou.
2. **Desligar** com a opção **Também gerar novos links para os 3 relatórios** marcada. A consultoria perde tudo. Em contrapartida, os links que a própria diretoria guardou também param.

Você escolhe o segundo, depois **gera um novo link do portfólio** e o envia à diretora, para que ela volte a ter um endereço que abre.

## Dicas e armadilhas

- **Gere link novo por motivo, e não por rotina.** Cada troca invalida e-mails já enviados e embutidos em páginas. Faça quando o link foi parar onde não devia, quando alguém deixou de ser parceiro, ou quando um relatório com erro já circulou.
- **Depois de trocar, avise e reenvie.** Quem tinha o link antigo agora vê "não encontrado". Reenvie o novo e, se o relatório está embutido no site, troque o código lá.
- **Desligar o portfólio não é o mesmo que fechar os relatórios.** Releia a seção anterior antes de dizer ao cliente que "ninguém mais vê".
- **Confira se o relatório que você acabou de emitir apareceu.** Se não aparece, o status dele não é **emitido**: abra o período e confira.
- **A capa é do cliente, e não do relatório.** Se todas as capas viraram miniatura, olhe o **modelo da capa** do cliente antes de mexer relatório por relatório.
- **Cuidado com o link do portfólio em lugar público.** Quem o tem vê todos os relatórios emitidos de todos os meses, e não só o último. Envie a quem deve ver.

## Quando dá errado

| O que você vê | O que significa | O que fazer |
|---|---|---|
| "Escolha um cliente para ver o portfólio." | não há cliente ativo | escolha um no seletor do alto da tela |
| Mensagem em vermelho no lugar do conteúdo | a tela não conseguiu ler o portfólio | recarregue; persistindo, avise o suporte técnico |
| "Nenhum relatório emitido ainda." | nenhum período do cliente está emitido | emita o relatório do mês (veja a [tarefa 11]({{ '/mes-do-analista/#11-salvar-e-emitir-o-relatório' | relative_url }})) |
| "Não foi possível copiar." ou "Não foi possível copiar: selecione o link e copie à mão." | o navegador bloqueou o acesso à área de transferência | clique no campo com o endereço do portfólio, que o seleciona, e copie com o teclado; para um relatório, use **Abrir link** e copie da barra de endereço |
| Resultado do lote com itens que **falharam** | a troca de alguns links não foi concluída | leia os motivos listados; repita só para os que falharam |
| Cliente diz "Portfólio não encontrado" | o link foi desligado ou trocado | gere um novo e envie |

## Limites do papel

O **analista** e o **super-administrador** veem a tela e podem gerar, trocar e desligar links. Não existe papel só de leitura, e é por isso que a tela pede confirmação antes de tudo que invalida um endereço. Quem não tem conta no sistema, como o cliente, só abre os links que recebe.

Veja também: [Compartilhar o link e gerar o PDF]({{ '/mes-do-analista/#12-compartilhar-o-link-e-gerar-o-pdf' | relative_url }}), [Indicadores (BI)]({{ '/mes-do-analista/indicadores/' | relative_url }}) e o [Glossário]({{ '/glossario/' | relative_url }}).

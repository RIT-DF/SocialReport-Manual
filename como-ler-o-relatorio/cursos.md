---
title: Os cursos
parent: 4. Como ler o seu relatório
nav_order: 4
permalink: /como-ler-o-relatorio/cursos/
---

# Os cursos: as redes trouxeram gente para aprender?

Este capítulo só existe para organizações que têm uma **plataforma de cursos** (Moodle) ligada ao SocialReport, e só aparece no mês em que houve inscrição ou conclusão. Ele vem depois do capítulo do site. A pergunta de fundo é a mesma do site, com um destino diferente: **a atenção que as redes conquistam vira gente se inscrevendo e concluindo cursos?**

O caminho que o relatório acompanha é: **publicação → visita à plataforma → página de inscrição → inscrição → conclusão**.

> **O que o relatório nunca mostra.** Nome, e-mail ou nota de aluno. O Moodle entrega só números somados, e o Matomo só conta visitas, sem saber quem é cada pessoa.
{: .note }

## Os slides do capítulo

**Visão dos Cursos.** Os números do ciclo: inscrições, conclusões, taxa de conclusão, quantos cursos tiveram inscrição, quantos são novos e quantos ficaram sem inscrição. Cada número vem com a variação frente ao mesmo mês do ano anterior, quando há base.

**Cursos do Mês.** Uma linha por curso: inscrições, conclusões, taxa de conclusão e inscritos ativos. A taxa é **acumulada** (conclusões de toda a vida do curso sobre as inscrições com conclusão já registrada); quando o curso tem menos de 5 inscrições, o relatório mostra "N de M" em vez de um percentual, porque percentual de base pequena engana.

**De onde vêm as inscrições.** As visitas à página de inscrição, por origem (redes sociais, acesso direto, busca, outros sites, campanhas), e as redes sociais separadas. Quando o Moodle está ligado, cada origem recebe uma **estimativa** de inscrições, repartindo as inscrições pela proporção das visitas. É estimativa porque o Matomo não conhece o aluno e o Moodle não conhece a origem.

**Do post ao curso.** O slide que liga as redes aos cursos. Aparece **só quando há dado**: visitas à plataforma vindas das redes, de campanhas ou de outros sites. Ele tem cinco partes:

1. **Por rede: alcance, visitas e página de inscrição.** Para cada rede, quantas pessoas a publicação alcançou, quantas visitas à plataforma vieram dela e quantas chegaram à página de inscrição (e, com Moodle, uma estimativa de inscrições).
2. **Por curso: página, inscrição e conclusão.** Para cada curso, as visitas à página dele, as inscrições, a taxa de **visita para inscrição** e as conclusões. A página é reconhecida pelo **título do curso**, e as inscrições e conclusões vêm do Moodle.
3. **Posts que mais levaram aos cursos.** Os posts ligados a uma campanha dos cursos, com o número de pessoas que a campanha levou. Quando vários posts dividem a campanha, o cartão diz "dividida entre N posts".
4. **Sites de origem.** A linha **"Também levaram gente à plataforma"** cita os outros sites que enviaram visitas (por exemplo, o site da própria organização).
5. **O texto da análise**, escrito pela IA e revisado pela equipe, que explica o caminho em palavras.

**Linha do tempo das inscrições.** As inscrições dia a dia, com marcas nos dias de publicação.

Nos **Top Posts**, o cartão do post ligado a uma campanha dos cursos traz **"Levou N pessoas aos cursos (campanha ...)"**.

**Por que importa:** o capítulo mostra onde o trabalho nas redes compensa. Uma rede com muito alcance e nenhuma visita à plataforma conta uma história; uma com pouco alcance e muitas inscrições conta outra. É isso que decide para onde vai o esforço do mês seguinte, e quais posts viram modelo.

**Exemplo.** No slide, o Instagram alcançou 31.140 pessoas e levou 410 visitas à plataforma; 52 chegaram à página de inscrição, o que dá cerca de 11 inscrições estimadas. O LinkedIn, com alcance menor, levou 140 visitas e 21 à página de inscrição. Pelo alcance, o Instagram "ganha"; pela proporção de visitas que chegam à inscrição, o LinkedIn vai melhor, e vale perguntar por quê.

*Captura pendente: o slide "Do post ao curso". As capturas de relatório precisam de um relatório com dados anonimizados de cursos, e o ambiente de teste disponível usa dados reais de um cliente.*

> **Leituras erradas comuns**
>
> - **"Levou 160 pessoas, então 160 se inscreveram."** Não. Levou 160 **visitas** à plataforma. Quantas se inscreveram é outra linha, e a inscrição por rede é estimativa.
> - **"O número é exato."** É um **piso**: quem usa bloqueador de anúncios não é contado, então as visitas reais são iguais ou maiores. Desde a versão 1.1.0 do complemento do Moodle, o rastreador é servido pelo próprio Moodle, o que reduz esse efeito, mas não o elimina.
> - **"O post X trouxe mais gente que o post Y."** Só vale se os dois estiverem ligados a campanhas **diferentes**. Posts que dividem o mesmo link dividem o mesmo número.
> - **"Sem visita das redes, as redes não funcionam."** Se os links das publicações não foram marcados como campanha, a visita aparece como "acesso direto". Veja [De onde vêm as visitas]({{ '/como-ler-o-relatorio/site/' | relative_url }}).
{: .warning }

## Quando o capítulo não aparece, ou aparece pela metade

- **Sem o capítulo:** o Moodle não está ligado, não houve inscrição nem conclusão no ciclo, ou os dados dos cursos não foram buscados.
- **Sem o slide "Do post ao curso":** não houve visita à plataforma vinda das redes, de campanhas ou de outros sites, ou o relatório foi salvo antes da versão 1.30.0 e a equipe ainda não atualizou os dados dos cursos. Peça à equipe para clicar em **Atualizar dados dos cursos** na revisão.
- **"Mês em andamento":** as comparações são parciais, como no resto do relatório.

Quem monta o relatório encontra o passo a passo na [tarefa 7b do mês do analista]({{ '/mes-do-analista/' | relative_url }}).

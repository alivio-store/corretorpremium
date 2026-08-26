# Massageador de Pescoço e Ombros 8 Pontos — Landing Page (formato PDP)

Landing page de vendas para o Massageador de Pescoço e Ombros 8 Pontos (com
aquecimento em 2 níveis, 42°C/45°C), no mesmo formato "PDP" (página de
produto de e-commerce) usado em `/medidor-pressao/`. Arquivo único
(`index.html`), sem dependências externas.

## Imagens

As fotos reais do produto que você mostrou no chat (a ficha técnica com o
produto verde-musgo em formato de mão, a foto do aquecimento no pescoço
com 42°C/45°C, a foto de uso no ombro com a correia de couro, e a miniatura
do produto) **não estavam disponíveis como arquivo** para eu incluir no
repositório — só apareceram como imagens na conversa. Por isso, a pasta
`img/` tem 4 ilustrações em SVG como placeholder, no mesmo estilo visual
do produto (verde-musgo, dedos de silicone, aquecimento):

- `img/hero.svg` — ilustração do produto (foto principal da PDP, descrição,
  seção "Como usar" passo 2, galeria)
- `img/calor.svg` — ilustração do aquecimento nos dois lados do pescoço,
  com "42°C" / "45°C" (seção de diferencial, "Como usar" passo 3, galeria)
- `img/uso.svg` — ilustração do produto encaixado no pescoço/ombros
  ("Como usar" passo 1, galeria)
- `img/detalhe.svg` — ilustração de detalhe do silicone (galeria)

**Para trocar pelas fotos reais:** salve os arquivos em `img/` (ex.:
`produto-hero.jpg`, `produto-calor.jpg`, `produto-uso.jpg`,
`produto-detalhe.jpg`) e troque cada `src="img/xxx.svg"` correspondente no
`index.html` — são usados em 4 lugares: galeria da PDP (com miniaturas
clicáveis), seção de diferencial (aquecimento), "Como usar" e galeria de
fotos no final da página.

## O que fazer antes de publicar

1. **Preço e link de checkout** — os valores em `.pdp-total-box`
   (de **R$ 297,90** por **R$ 137,90**, 12x sem juros de R$ 11,49, ou
   R$ 131,00 no Pix) são **EXEMPLO**. Edite para os valores reais. O botão
   de compra (`#pdp-buy-btn`) e o botão da barra fixa mobile (`.mobile-bar`)
   estão com `href="#"` — troque pelo link real do seu checkout (Yampi,
   Shopify, Kiwify, WhatsApp etc.) nos dois lugares.

2. **Depoimentos** — os depoimentos em `#depoimentos`, a prova social logo
   após a seção de aquecimento, e a contagem de clientes satisfeitos são
   **placeholders de exemplo**. Substitua por avaliações reais de clientes
   (com autorização deles) antes de publicar — procure o comentário
   "DEPOIMENTOS (placeholders...)". Ajuste também o `data-target` do
   contador de clientes satisfeitos para o valor real.

3. **Ficha técnica** — a seção "Especificações do produto" já usa os dados
   reais que você mostrou (entrada 5V, ABS + Silicone, bateria 2.000 mAh,
   10W, 760g/1.100g, embalagem 200×170×142mm, cor Verde Musgo). Confira se
   batem com o fornecedor final antes de publicar.

4. **Segurança/contraindicações** — o aviso no rodapé e no FAQ (gestantes,
   marca-passo, feridas abertas, sensibilidade na pele) é um texto de
   cautela padrão. Revise com a ficha técnica real do fornecedor e, se
   necessário, com um profissional, antes de publicar — é um produto que
   aquece e faz pressão no corpo.

5. **Notificação de pedido** ("Fulano acabou de comprar") — vem
   **desativada por padrão** (`ENABLE_ORDER_TOAST = false` no `<script>`
   final), porque este produto ainda não tem pedidos reais. Só ative depois
   de preencher a lista `pessoas` com primeiros nomes e cidades reais de
   clientes.

6. **Analytics / Pixel** — já ativos no `<head>`, reaproveitando os mesmos
   IDs dos demais produtos da Alívio (GA4 `G-7SRPE880LX` e Meta Pixel
   `1734988077420170`), seguindo o padrão já usado em `/medidor-pressao/`.
   As conversões de todos os produtos ficam misturadas na mesma conta de
   Analytics/Ads — se no futuro quiser separar os dados por produto, crie
   uma propriedade/pixel próprios e troque os IDs no `<head>`.

7. **Contato** — no rodapé, troque o e-mail de contato se for diferente de
   `contato@alivio.store`.

8. **Vídeos (opcional)** — esta página não tem seção de depoimentos em
   vídeo (o produto ainda não tem vídeos reais). Se quiser adicionar,
   siga o padrão de `/medidor-pressao/` (seção `.video-testimonials`, CSS
   já documentado lá) criando uma pasta `videos/` aqui dentro.

## Estrutura da página

Topbar promocional → Header fixo → Breadcrumb → PDP (galeria de fotos +
preço + botão de compra) → Descrição do produto → Diferencial (aquecimento
42°C/45°C) → prova social (mini) → Dores (agitação) → Benefícios → Como
usar (3 passos) → Seção educativa → Galeria → Sem alívio x com alívio →
Garantia de 30 dias → Especificações técnicas → FAQ → CTA final →
Depoimentos (completo, com paginação) → Rodapé → barra fixa de compra no
mobile → notificação de pedido (desativada).

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

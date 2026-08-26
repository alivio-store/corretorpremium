# Massageador de Pescoço e Ombros 8 Pontos — Landing Page (formato PDP)

Landing page de vendas para o Massageador de Pescoço e Ombros 8 Pontos (com
aquecimento em 2 níveis, 42°C/45°C), no mesmo formato "PDP" (página de
produto de e-commerce) usado em `/medidor-pressao/`. Arquivo único
(`index.html`), sem dependências externas.

## Imagens

A página já usa as 6 fotos reais do produto que você enviou, em `img/`,
com nomes descritivos:

- `img/produto-hero.jpg` — foto isolada do produto (foto principal da PDP,
  "Como usar" passo 2, seção galeria)
- `img/produto-calor.webp` — foto do aquecimento nos dois lados do pescoço,
  com "42°C" / "45°C" (seção de diferencial, "Como usar" passo 3, galeria)
- `img/produto-uso.webp` — foto de uso no sofá, com a correia no
  pescoço/ombro ("Como usar" passo 1, galeria)
- `img/produto-detalhe.webp` — foto de perto do silicone grau alimentício
  (galeria)
- `img/produto-beneficios.webp` — foto de uso com os 3 selos de benefício
  (simulação de massagem manual, suave ao toque, leve e fácil de
  transportar) — seção educativa "Entenda o problema"
- `img/produto-especificacoes.webp` — infográfico oficial com a ficha
  técnica do fornecedor — seção "Especificações do produto", acima da
  tabela

As 4 ilustrações SVG placeholder que existiam antes (`hero.svg`,
`calor.svg`, `uso.svg`, `detalhe.svg`) foram removidas do repositório.

## O que fazer antes de publicar

1. **Preço e link de checkout** — o preço de venda já é o valor real
   informado: **R$ 169,90** (12x sem juros de R$ 14,16, ou R$ 161,40 no
   Pix). O "de **R$ 297,90**" (preço "antes do desconto") ainda é
   **EXEMPLO** — confirme o valor real antes de publicar. O botão de
   compra (`#pdp-buy-btn`) e o botão da barra fixa mobile (`.mobile-bar`)
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
preço + botão de compra) → Diferencial (aquecimento
42°C/45°C) → prova social (mini) → Dores (agitação) → Benefícios → Como
usar (3 passos) → Seção educativa → Galeria → Sem alívio x com alívio →
Garantia de 30 dias → Especificações técnicas → FAQ → CTA final →
Depoimentos (completo, com paginação) → Rodapé → barra fixa de compra no
mobile → notificação de pedido (desativada).

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

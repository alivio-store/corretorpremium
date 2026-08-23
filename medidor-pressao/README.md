# Medidor de Pressão Digital 2026 — Landing Page (formato PDP)

Landing page de vendas para o Medidor de Pressão Digital 2026 (medidor de
**pulso**, tela touch, voz guiada em português), no mesmo formato "versão B"
(estilo página de produto de e-commerce) usado em `/teste-b/` do Corretor
Premium. Arquivo único (`index.html`), sem dependências externas.

## Imagens

As 7 fotos/artes reais do produto já estão em `img/`, com nomes
descritivos, e já são usadas na página:

- `produto-hero.png` — foto do produto (usada como foto principal da PDP,
  na seção educativa, na notificação de pedido)
- `produto-uso-pulso.png` — no pulso, com seta "360°"
- `produto-tela-touch.webp` — dedo tocando a tela (touch screen)
- `produto-bateria.webp` — carregamento USB-C, "+200 utilizações por carga"
- `produto-voz-pt.png` — bandeira do Brasil + "transmissão de voz em
  português"
- `produto-caixa-conteudo.webp` — flatlay com tudo que vem na caixa
- `produto-como-usar.png` — infográfico "medição em 3 etapas" (ainda **não**
  está em uso em nenhuma seção da página — fica disponível caso queira
  incluir em algum lugar, por exemplo substituindo as 3 fotos individuais
  da seção "Como usar")

**Ainda faltam** (opcionais, a página funciona sem eles):
- Um vídeo do produto em uso, para a `pdp-main-img` no topo (hoje mostra
  `produto-hero.png` como foto estática). Se enviar um vídeo, salve em
  `videos/hero-produto.mp4` e troque o `<img>` dentro de `#pdp-main-media`
  de volta por um `<video autoplay muted loop playsinline poster="...">`
  (veja o padrão em `/teste-b/index.html` do Corretor Premium).
- Vídeos de depoimentos de clientes — a seção `.video-testimonials` foi
  removida por enquanto (comentário no HTML mostra onde recolocar).

## O que fazer antes de publicar

1. **Preço e link de checkout** — já preenchidos com dados reais: de
   **R$ 390,00** por **R$ 159,90** (12x sem juros de R$ 13,33, ou
   R$ 151,91 no Pix), botão de compra apontando para
   `https://alivio3.pay.yampi.com.br/r/O4H1HQA1NI`. Esse preço/link aparece
   em 2 lugares — atualize os dois se mudar: a caixa de preço da PDP
   (`.pdp-total-box` + `#pdp-buy-btn`) e a barra fixa mobile (`.mobile-bar`).

2. **Depoimentos** — os depoimentos em `#depoimentos`, a prova social logo
   após o bloco "Fala o resultado em voz alta", e a contagem de clientes
   satisfeitos são **placeholders de exemplo**. Substitua por avaliações
   reais de clientes (com autorização deles) antes de publicar — procure o
   comentário `DEPOIMENTOS (placeholders...)`. Ajuste também o
   `data-target` do contador de clientes satisfeitos para o valor real.

3. **Brinde** — não incluído (não havia brinde/foto confirmados). Se for
   oferecer um brinde, a seção `.brinde` (CSS já pronto) foi removida do
   HTML — o comentário `<!-- BRINDE: removida por enquanto ... -->` mostra
   onde recolocar, seguindo o padrão de `/teste-b/`.

4. **Notificação de pedido** ("Fulano acabou de comprar") — vem
   **desativada por padrão** (`ENABLE_ORDER_TOAST = false` no `<script>`
   final), porque este produto ainda não tem pedidos reais. Só ative depois
   de preencher a lista `pessoas` com primeiros nomes e cidades reais de
   clientes.

5. **Analytics / Pixel** — os blocos de Google Analytics (GA4) e Meta Pixel
   estão comentados no `<head>`. Crie uma propriedade/pixel próprios para
   este produto (não reaproveite os IDs do Corretor Premium) e descomente
   com os IDs corretos.

6. **Contato** — no rodapé, troque o e-mail de contato se for diferente de
   `contato@alivio.store`.

## Estrutura da página

Topbar promocional → Header fixo → Breadcrumb → PDP (galeria de fotos +
preço + botão de compra) → Descrição do produto → "Fala o resultado em
português" → prova social (mini) → Dores (agitação) → Benefícios → Como
usar (3 passos) → Seção educativa → Galeria → Sem controle x Com controle →
Garantia de 90 dias → FAQ → CTA final → Depoimentos (completo, com
paginação) → Rodapé → barra fixa de compra no mobile → notificação de
pedido (desativada).

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

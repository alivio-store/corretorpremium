# Medidor de Pressão Digital 2026 — Landing Page (formato PDP)

Landing page de vendas para o Medidor de Pressão Digital 2026, no mesmo
formato "versão B" (estilo página de produto de e-commerce) usado em
`/teste-b/` do Corretor Premium. Arquivo único (`index.html`), sem
dependências externas.

## O que fazer antes de publicar

1. **Fotos e vídeos reais do produto**
   Salve os arquivos com estes nomes exatos dentro desta pasta, em `img/` e
   `videos/` (os caminhos já estão certos no `index.html`):

   `img/`
   - `produto-hero.jpg` — foto principal (usada como pôster do vídeo, no card
     do preço e na notificação de pedido)
   - `produto-uso-1.jpg` — foto de uso (colocando o manguito)
   - `produto-uso-2.jpg` — foto de uso (medindo)
   - `produto-tela.jpg` — foto do visor/display mostrando um resultado
   - `produto-caixa.jpg` — foto da embalagem
   - `endosso-profissional.jpg` — foto do bloco de autoridade/confiança
     (apague a seção `.endorsement` no HTML se não tiver essa foto/parceria)
   - `especialista-pressao.jpg` — foto da seção educativa "Por que acompanhar
     a pressão"
   - `brinde-termometro.jpg` — foto do brinde (apague a seção `.brinde` no
     HTML se não houver brinde, ou troque pela foto do brinde real)
   - `video-poster-1.jpg` a `video-poster-5.jpg` — capas dos vídeos de
     depoimento (opcional)

   `videos/`
   - `hero-produto.mp4` (e opcionalmente `.webm`) — vídeo do produto em uso,
     autoplay no topo da página
   - `depoimento-1.mp4` a `depoimento-5.mp4` — vídeos de clientes (opcional;
     apague a seção `.video-testimonials` se não tiver ainda)

   Se preferir nomes diferentes, é só trocar nos atributos `src`/`poster`/
   `data-img` do `index.html`.

2. **Preços e link de checkout**
   Os valores em `#comprar` (`R$ 129,90`, `R$ 219,90`, `R$ 289,90`, os
   parcelamentos e o desconto no Pix) são **exemplos**. Troque pelos valores
   reais e pelo link de cada variação (`data-link="#"` nos 3
   `<label class="pdp-size-option">` e o `href="#"` do botão principal
   `#pdp-buy-btn`) pelo link real de checkout (Yampi, etc.) — procure o
   comentário `PREÇOS DE EXEMPLO`.

3. **Depoimentos**
   Os depoimentos em `#depoimentos`, na prova social logo após o bloco de
   autoridade, e os vídeos de depoimento são **placeholders de exemplo**.
   Substitua por avaliações reais de clientes (com autorização deles) antes
   de publicar — procure o comentário `DEPOIMENTOS (placeholders...)`. Ajuste
   também o número em `data-target` do contador de clientes satisfeitos para
   o valor real.

4. **Notificação de pedido ("Fulano acabou de comprar")**
   Vem **desativada por padrão** (`ENABLE_ORDER_TOAST = false` no `<script>`
   final), porque este produto ainda não tem pedidos reais. Só ative depois
   de preencher a lista `pessoas` com primeiros nomes e cidades reais de
   clientes.

5. **Analytics / Pixel**
   Os blocos de Google Analytics (GA4) e Meta Pixel estão comentados no
   `<head>`. Crie uma propriedade/pixel próprios para este produto (não
   reaproveite os IDs do Corretor Premium) e descomente com os IDs corretos.

6. **Contato**
   No rodapé, troque o e-mail de contato se for diferente de
   `contato@alivio.store`.

## Estrutura da página

Topbar promocional → Header fixo → Breadcrumb → PDP (galeria + seleção de
quantidade/kit + preço + botão de compra) → Descrição do produto → bloco de
autoridade/confiança → prova social (mini) → depoimentos em vídeo → Dores
(agitação) → Benefícios → Como usar → Seção educativa → Galeria → Sem
controle x Com controle → Garantia de 90 dias → Brinde (opcional) → FAQ →
CTA final → Depoimentos (completo, com paginação) → Rodapé → barra fixa de
compra no mobile → notificação de pedido (desativada).

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

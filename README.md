# Corretor Premium — Landing Page

Landing page de vendas para o corretor de postura, em um único arquivo (`index.html`), sem dependências externas — pode ser hospedada em qualquer lugar (GitHub Pages, Hostinger, Vercel, Shopify "página customizada", etc.).

## O que fazer antes de publicar

1. **Fotos reais do produto**
   O hero e outras seções usam uma ilustração em SVG no lugar de foto, porque as imagens que você mostrou no chat não estavam disponíveis como arquivo para eu incluir no repositório. Para trocar pela foto real:
   - Salve suas fotos em uma pasta `img/` (crie no repositório).
   - No `index.html`, procure o comentário `<!-- Ilustração vetorial do produto -->` dentro de `.hero-visual` e troque o bloco `<svg>...</svg>` por `<img src="img/produto-hero.jpg" alt="Corretor de postura Premium">`.
   - Você também pode adicionar uma galeria de fotos (uso, detalhes, tecido) repetindo o mesmo padrão em outras seções.

2. **Preços**
   Os valores em `#comprar` (`R$ 149,90`, `R$ 249,90`, etc.) são **exemplos**. Edite para os valores reais antes de publicar — procure o comentário `Preços de exemplo` na seção `Pricing`.

3. **Depoimentos**
   Os três depoimentos em `#depoimentos` são placeholders de exemplo. Substitua por depoimentos reais de clientes (com autorização deles) antes de publicar — está marcado com comentário `TESTIMONIALS (placeholders...)`.

4. **Botões "Comprar agora"**
   Todos apontam para `#comprar` (âncora da seção de preços) ou `href="#"`. Troque pelo link real do seu checkout (Shopify, Yampi, Kiwify, WhatsApp, etc.) nos elementos `<a class="btn btn-primary" ...>`.

5. **Contato/CNPJ**
   No rodapé, troque `[inserir]` pelo CNPJ real e o e-mail de contato.

## Estrutura da página

Header fixo → Hero → selos de confiança → Dores (agitação) → Benefícios → Como usar → Antes/depois → Depoimentos → Garantia de 30 dias → Preços (3 planos) → FAQ → CTA final → Rodapé → barra fixa de compra no mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

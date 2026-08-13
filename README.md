# Corretor Premium — Landing Page

Landing page de vendas para o corretor de postura, em um único arquivo (`index.html`), sem dependências externas — pode ser hospedada em qualquer lugar (GitHub Pages, Hostinger, Vercel, Shopify "página customizada", etc.).

## Checkout (Yampi)

A loja vende apenas **1 unidade** do produto. O botão "Comprar agora" (no card de preço e na barra fixa mobile) já está ligado ao checkout real da Yampi:

```
https://alivio3.pay.yampi.com.br/r/L9Y2XC14T1
```

Os demais CTAs do site ("Comprar agora"/"Quero minha postura de volta"/"Garantir meu Corretor Premium" no header, hero e CTA final) apontam para `#comprar`, âncora que rola até a seção de preço — de lá o visitante clica no botão que vai para a Yampi.

Se o produto voltar a ter mais de uma opção (kits, variações), reveja a seção `.pricing` em `index.html` para separar os links por variação.

## O que fazer antes de publicar

1. **Fotos reais do produto**
   O hero e outras seções usam uma ilustração em SVG no lugar de foto, porque as imagens que você mostrou no chat não estavam disponíveis como arquivo para eu incluir no repositório. Para trocar pela foto real:
   - Salve suas fotos em uma pasta `img/` (crie no repositório).
   - No `index.html`, procure o comentário `<!-- Ilustração vetorial do produto -->` dentro de `.hero-visual` e troque o bloco `<svg>...</svg>` por `<img src="img/produto-hero.jpg" alt="Corretor de postura Premium">`.
   - Você também pode adicionar uma galeria de fotos (uso, detalhes, tecido) repetindo o mesmo padrão em outras seções.

2. **Preço**
   O valor exibido (`R$ 149,90`) ainda é um **exemplo**. Ele precisa bater exatamente com o preço configurado no produto da Yampi — se forem diferentes, o cliente vê um valor na página e outro no checkout, o que gera desconfiança e carrinho abandonado. Edite nos dois lugares: `.price-new` na seção `Pricing` e no `.mobile-bar` (barra fixa mobile), além do preço "De R$ 249,90" riscado, se aplicável.

3. **Depoimentos**
   Os três depoimentos em `#depoimentos` são placeholders de exemplo. Substitua por depoimentos reais de clientes (com autorização deles) antes de publicar — está marcado com comentário `TESTIMONIALS (placeholders...)`.

4. **Contato/CNPJ**
   No rodapé, troque `[inserir]` pelo CNPJ real e o e-mail de contato.

## Estrutura da página

Header fixo → Hero → selos de confiança → Dores (agitação) → Benefícios → Como usar → Antes/depois → Depoimentos → Garantia de 30 dias → Preços (3 planos) → FAQ → CTA final → Rodapé → barra fixa de compra no mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

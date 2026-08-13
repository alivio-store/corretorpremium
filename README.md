# Corretor Premium — Landing Page

Landing page de vendas para o corretor de postura, em um único arquivo (`index.html`), sem dependências externas — pode ser hospedada em qualquer lugar (GitHub Pages, Hostinger, Vercel, Shopify "página customizada", etc.).

## Checkout (Yampi)

A loja vende apenas **1 unidade** do produto. O botão "Comprar agora" (no card de preço e na barra fixa mobile) já está ligado ao checkout real da Yampi:

```
https://alivio3.pay.yampi.com.br/r/L9Y2XC14T1
```

Os demais CTAs do site ("Comprar agora"/"Quero minha postura de volta"/"Garantir meu Corretor Premium" no header, hero e CTA final) apontam para `#comprar`, âncora que rola até a seção de preço — de lá o visitante clica no botão que vai para a Yampi.

Se o produto voltar a ter mais de uma opção (kits, variações), reveja a seção `.pricing` em `index.html` para separar os links por variação.

## Fotos do produto

As fotos reais já estão na pasta `img/` e em uso no hero e numa galeria ("No dia a dia") logo após a seção "Como usar":
- `img/produto-hero.jpg` — foto principal (produto isolado, fundo branco), usada no hero.
- `img/produto-uso-1.jpg`, `img/produto-uso-2.jpg`, `img/produto-mulher-1.jpg`, `img/produto-mulher-2.jpg` — fotos de uso, exibidas na galeria.

Se quiser trocar alguma, basta substituir o arquivo correspondente em `img/` mantendo o mesmo nome (ou trocar o `src` no `index.html`).

## Depoimentos

A seção `#depoimentos` usa 4 fotos reais de clientes (`img/depoimento-1.jpg` a `depoimento-4.jpg`), enviadas com autorização para uso como propaganda da loja, cada uma com a frase real que a cliente enviou.

## Status

- ✅ Checkout Yampi conectado
- ✅ Fotos reais do produto
- ✅ Depoimentos com fotos e frases reais
- ✅ E-mail de contato
- ✅ Preço da página confirmado como igual ao do checkout Yampi
- CNPJ: decisão do lojista de não exibir no rodapé por enquanto. Vale lembrar que a legislação de e-commerce no Brasil (Decreto 7.962/2013, que regulamenta o CDC) recomenda identificar o CNPJ (ou CPF, se pessoa física) do vendedor no site — não é bloqueante para publicar, mas é algo a reavaliar mais adiante.

## Estrutura da página

Header fixo → Hero → selos de confiança → Dores (agitação) → Benefícios → Como usar → Galeria de fotos → Antes/depois → Depoimentos → Garantia de 30 dias → Preço (1 unidade) → FAQ → CTA final → Rodapé → barra fixa de compra no mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

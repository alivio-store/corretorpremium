# Corretor Premium — Landing Page

Landing page de vendas para o corretor de postura, em um único arquivo (`index.html`), sem dependências externas — pode ser hospedada em qualquer lugar (GitHub Pages, Hostinger, Vercel, Shopify "página customizada", etc.).

## Checkout (Yampi)

O produto tem 3 opções de tamanho, cada uma com seu próprio link de checkout na Yampi (configurados na seção `.pricing` em `index.html`):

| Tamanho | Até | Link |
|---|---|---|
| P/M | 50 kg | `https://alivio3.pay.yampi.com.br/r/C56O44YNEY` |
| G | 70 kg | `https://alivio3.pay.yampi.com.br/r/L9Y2XC14T1` |
| GG | 100 kg | `https://alivio3.pay.yampi.com.br/r/BH24KQUJ93` |

Os demais CTAs do site (header, hero, CTA final, barra fixa mobile) apontam para `#comprar`, âncora que rola até a seção de preço — de lá o visitante escolhe o tamanho e clica no botão correspondente.

⚠️ Preço, desconto e parcelamento exibidos na página precisam bater com o que está configurado nos 3 produtos na Yampi (preço R$129,90, "de" R$433,00 para o desconto de 70% fazer sentido, parcelamento 12x sem juros).

## Fotos do produto

As fotos reais já estão na pasta `img/` e em uso no hero e numa galeria ("No dia a dia") logo após a seção "Como usar":
- `img/produto-hero.jpg` — foto principal (produto isolado, fundo branco), usada no hero.
- `img/produto-uso-1.jpg`, `img/produto-uso-2.jpg`, `img/produto-mulher-1.jpg`, `img/produto-mulher-2.jpg` — fotos de uso, exibidas na galeria.

Se quiser trocar alguma, basta substituir o arquivo correspondente em `img/` mantendo o mesmo nome (ou trocar o `src` no `index.html`).

## Depoimentos

A seção `#depoimentos` usa 4 fotos reais de clientes (`img/depoimento-1.jpg` a `depoimento-4.jpg`), enviadas com autorização para uso como propaganda da loja, cada uma com a frase real que a cliente enviou.

## Entrega estimada dinâmica

O selo "Entrega express em 2 dias" na seção de preço calcula a data automaticamente via JavaScript (hoje + 2 dias corridos, sem pular fim de semana) toda vez que a página carrega — não precisa editar isso manualmente.

## Status

- ✅ Checkout Yampi conectado (3 tamanhos, 3 links)
- ✅ Fotos reais do produto
- ✅ Depoimentos com fotos e frases reais
- ✅ E-mail de contato
- ✅ Meta Pixel instalado
- ✅ Preço R$129,90, desconto de 70% ("de" R$433,00), parcelamento 12x sem juros e garantia de 90 dias — confirmar que tudo bate com o cadastro dos 3 produtos na Yampi
- CNPJ: decisão do lojista de não exibir no rodapé por enquanto. Vale lembrar que a legislação de e-commerce no Brasil (Decreto 7.962/2013, que regulamenta o CDC) recomenda identificar o CNPJ (ou CPF, se pessoa física) do vendedor no site — não é bloqueante para publicar, mas é algo a reavaliar mais adiante.

## Estrutura da página

Header fixo → Hero → selos de confiança → Dores (agitação) → Benefícios → Como usar → Galeria de fotos → Antes/depois → Depoimentos → Garantia de 90 dias → Preço (3 tamanhos) → FAQ → CTA final → Rodapé → barra fixa de compra no mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

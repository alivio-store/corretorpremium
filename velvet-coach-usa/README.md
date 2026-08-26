# Velvet — Landing Page (nicho de relacionamento/EUA)

LP em inglês para um app de coaching de prazer feminino ("Velvet"), no
mesmo estilo "quiz funnel" da oferta de referência (spy), mas em formato de
página única de rolagem (sem lógica de quiz interativo). Arquivo único
(`index.html`), sem dependências externas, sem build — mesma lógica das
outras LPs deste repositório.

## Sobre a URL/domínio (a dúvida original)

Esta pasta **não precisa estar em outro repositório** para ter uma URL
diferente. O domínio final depende de onde você faz o deploy deste
`index.html`, não de onde ele está versionado. Passos:

1. Registre o domínio `.com` novo (não `.com.br`) — ex: Namecheap, GoDaddy.
2. Suba **só esta pasta** (`velvet-coach-usa/`) em qualquer host (Vercel,
   Netlify, Hostinger, etc.) como um site separado, e aponte o domínio novo
   para ele.
3. Se o site atual (`corretorpremium` / `medidor-pressao`) for publicado via
   **GitHub Pages com domínio customizado** (arquivo `CNAME`), essa pasta
   **não pode** usar o mesmo mecanismo para um domínio diferente — nesse
   caso específico, publique-a via Vercel/Netlify/Hostinger (não Pages) ou
   em um repositório à parte dedicado a ela.

## O que fazer antes de publicar (importante)

1. **Nome da marca** — usei "Velvet" como placeholder. Se você já decidiu
   outro nome, troque `Velvet` em todo o arquivo (título, header, footer,
   `og:title`) antes de publicar.

2. **Checkout/preço** — o checkout será pela **Hotmart**. Os 3 planos
   (`$19.99`, `$44.99`, `$69.99`) e os botões "Get My Plan" hoje apontam
   para `href="#"` — troque cada um pelo link real do produto/oferta na
   Hotmart (um link por plano, se forem ofertas separadas) e ajuste os
   preços para os valores reais cadastrados lá — procure o comentário
   `PLACEHOLDER PRICES`. A Hotmart também cuida da nota fiscal/fatura do
   comprador (aparece como "Hotmart" na fatura do cartão), o que já reforça
   sozinho a promessa de "billing discreto" feita no FAQ — não precisa
   configurar nada extra pra isso.

3. **Estatísticas de resultado** (67% / 41% / 55%) são **exemplos**, sem
   base real — marcado com `*` e nota de rodapé. **Não publique números
   fabricados como se fossem dados reais**: troque por pesquisa real com
   os usuários (e cite a fonte) ou remova a seção.

4. **Depoimentos** (`Alex R.`, `Jamie L.`, `Morgan T.`, `Casey B.`) são
   placeholders de exemplo. Substitua por depoimentos reais de clientes
   (com autorização deles) antes de publicar.

5. **App Store / Google Play** — de propósito, a LP **não promete mais**
   presença nas lojas (removi o "1M+ downloads" e os selos de loja): o
   produto (`app/`) é um **PWA** (web app instalável), não um app nativo —
   veja `app/README.md` para o motivo. O selo "4.7 average rating" na hero
   também é placeholder — some junto com os depoimentos reais, ou remova
   se ainda não tiver avaliações reais.

6. **Rodapé / conformidade** — troque `[insert legal entity name and
   address]` e `support@[insert-domain].com` pelos dados reais da empresa
   (nome legal, endereço, e-mail de suporte) — obrigatório para anúncios
   nos EUA (FTC exige identificação do anunciante). Página de Privacy
   Policy / Terms / Refund Policy também precisam existir de verdade antes
   de rodar tráfego pago.

7. **Analytics/Pixel** — **não** reaproveitei o GA4/Meta Pixel usados nas
   outras LPs deste repositório de propósito. Conteúdo adulto/bem-estar
   sexual tem políticas de anúncio mais restritas (Meta, Google Ads); usar
   o mesmo Pixel/conta de outros produtos pode colocar a conta de anúncios
   inteira em risco. Crie uma conta de anúncios e um Pixel/GA4 **dedicados**
   a esta oferta.

8. **Fotos/ilustrações** — a página hoje não usa nenhuma foto (só ícones/
   emojis como placeholder visual, já que ainda não há mídia real). Quando
   tiver fotos/vídeos aprovados para uso, adicione em `img/`.

## O produto em si (`app/`)

O programa de 28 dias vendido aqui é um **PWA** (web app instalável, sem
loja de app) em `app/` — código próprio, sem framework. Veja
[`app/README.md`](app/README.md) para detalhes completos: conteúdo do
programa, como funciona o acesso, limitações de segurança, e **o passo a
passo de como configurar o produto/entrega na Hotmart** apontando para
esse app.

Resumo do fluxo: cliente compra na Hotmart → Hotmart entrega (por e-mail
ou página de obrigado) o link do app + o código de acesso → cliente abre o
link, digita o código, e o app libera. Isso significa que os botões "Get
My Plan" desta LP apontam para o **checkout da Hotmart**, não diretamente
para o app.

## Estrutura da página

Topbar → Header fixo → Hero (com "goal cards" visuais estilo quiz) →
Declaração de marca → Por que é diferente (6 itens) → Estatísticas de
resultado → Antes/depois → Conteúdo do programa → Depoimento em destaque →
Mais depoimentos (3) → FAQ → Preços (3 planos) → Selo de garantia → CTA
final → Rodapé (com aviso 18+ e disclaimer) → barra fixa de compra no
mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

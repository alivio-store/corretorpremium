# Velvet — Landing Page (nicho de relacionamento/EUA)

LP em inglês para um app de coaching de prazer feminino ("Velvet"), no
mesmo estilo "quiz funnel" da oferta de referência (spy), mas em formato de
página única de rolagem (sem lógica de quiz interativo). Arquivo único
(`index.html`), sem dependências externas, sem build — mesma lógica das
outras LPs deste repositório. Visual em fundo branco com ilustração no
hero e faixas escuras de destaque, para ficar mais próximo da oferta de
referência (a v1 era em tema escuro/dark mode, foi trocada a pedido).

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

5. **App Store / Google Play / "1M+ downloads"** — voltaram como elementos
   visuais (a pedido, pra ficar mais parecido com a oferta de referência),
   mas são **decorativos** — não têm link, e o produto (`app/`) é hoje um
   **PWA** (web app instalável), não está nas lojas de verdade. Veja
   `app/README.md` para o motivo de ser PWA. Antes de rodar tráfego pago:
   ou o app já está mesmo nas lojas (aí é só ligar os links de verdade),
   ou remova esses selos — declarar presença de loja/volume de downloads
   falso é propaganda enganosa (FTC nos EUA é rígida nisso). O mesmo vale
   pro "4.7 average rating" e pela seção "As featured in" (logos de
   imprensa fictícios, claramente marcados como placeholder no próprio
   código) — troque por dados reais ou remova antes de publicar de verdade.

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

8. **Fotos** — o `index.html` já espera 4 arquivos dentro de uma pasta
   `img/` (que você cria do lado do `index.html`, dentro de
   `velvet-coach-usa/`), com esses nomes exatos e usados nestes lugares:
   - `img/before.jpg` — casal distante/desconectado → aparece 2x: no card
     "Where you are now" (topo do hero, estilo antes/depois igual à
     referência) e no card "Without Velvet" (seção de comparação)
   - `img/after.jpg` — casal se abraçando → aparece 2x: no card "Where
     you're headed" (topo do hero) e no card "With Velvet" (comparação)
   - `img/hero.jpg` — mulher se alongando → foto da faixa escura de
     declaração de marca (equivalente à faixa "COACH" da oferta original)
   - `img/lifestyle.jpg` — homem sorrindo no sofá → foto do avatar do
     depoimento em destaque (era um círculo com iniciais, agora é a foto)
   Sem essas 4 fotos na pasta `img/`, esses espaços aparecem quebrados
   (ícone de imagem não encontrada) — é só colocar os arquivos com esses
   nomes exatos (pode ser `.jpg`, `.jpeg`, `.png` ou `.webp`, só ajuste a
   extensão no `src=` correspondente se não for `.jpg`).

   ⚠️ **Sobre usar `lifestyle.jpg` como foto do depoimento**: se essa foto
   for um banco de imagens/gerada por IA (não uma foto de um cliente real
   que deu depoimento de verdade), **não publique isso com tráfego pago
   nos EUA sem trocar por um cliente real**. Desde 2024 a FTC (o órgão
   antitruste/consumidor dos EUA) proíbe explicitamente usar foto de uma
   pessoa que não é quem realmente deu aquele depoimento — é tratado como
   propaganda enganosa, ainda mais decorado com "Verified member". Antes
   de rodar anúncio de verdade: ou é foto + depoimento de um cliente real
   (com autorização), ou tire a foto do card e deixe só o texto/iniciais
   como está documentado no item 4 acima.

9. **Sobre a copy** — a estrutura, o tom e os títulos foram inspirados de
   perto na oferta de referência que você mandou (headline, "why unique",
   antes/depois, seções de prova social, garantia), mas o texto foi
   reescrito com palavras próprias em vez de copiado literalmente —
   reaproveitar copy publicitária palavra-por-palavra de outro negócio é
   risco de direitos autorais desnecessário, sem ganho real (o ângulo e a
   estrutura, que é o que converte, foram mantidos).

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

Topbar → Header fixo → Hero (com os cards "Where you are now / Where
you're headed" logo no topo, estilo antes/depois da referência) →
Declaração de marca (faixa escura com foto) → Por que é diferente
(6 itens) → Featured in (placeholder) → Estatísticas de resultado →
Antes/depois (seção completa, com fotos) → Conteúdo do programa →
Depoimento em destaque (com foto) → Mais depoimentos (3) → FAQ → Preços
(3 planos) → Selo de garantia → CTA final → Rodapé (com aviso 18+ e
disclaimer) → barra fixa de compra no
mobile.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

## Atualizando o site já publicado na Netlify (drag-and-drop)

Se você publicou via `app.netlify.com/drop` (arrastando a pasta), **não**
arraste a pasta de novo naquela mesma página — isso cria um site novo e
separado, com outra URL. Pra atualizar o site que já existe (`velveet.
netlify.app`) mantendo a mesma URL:

1. Entre em `app.netlify.com` → abra o site **velveet**
2. Vá na aba **"Deploys"**
3. Lá dentro tem uma área de arrastar-e-soltar própria desse site —
   arraste a pasta `velvet-coach-usa` atualizada ali
4. Aguarde o novo deploy terminar — a URL continua a mesma

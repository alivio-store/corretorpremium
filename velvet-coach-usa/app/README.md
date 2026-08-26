# Velvet — App (PWA do programa de 28 dias)

O produto vendido na LP: um **PWA** (Progressive Web App) com o programa
completo de 28 dias, progresso salvo no aparelho, instalável como app
(ícone na tela, tela cheia, funciona offline depois do primeiro acesso).
Código próprio, sem framework, sem build — só HTML/CSS/JS puro.

## Por que PWA e não app nativo (App Store / Google Play)

Apple e Google têm políticas de conteúdo bem restritivas para apps de
bem-estar sexual — é comum esse tipo de app ser rejeitado, ter a
publicação suspensa, ou exigir revisões demoradas e recorrentes. Um PWA
resolve isso: o "app" é simplesmente uma página web otimizada para
celular, que o usuário adiciona à tela inicial — sem passar por revisão
de loja nenhuma. Se um dia vocês quiserem ir para as lojas oficiais, dá
pra reaproveitar esse mesmo código como base (empacotando com Capacitor/
Cordova, por exemplo) — não é retrabalho do zero.

## Arquivos

- `index.html` — shell do app (tela de acesso + tela do programa)
- `app.js` — toda a lógica (gate de acesso, navegação, progresso)
- `content.js` — **todo o conteúdo do programa** (28 dias, 4 semanas) —
  edite aqui para mudar textos/lições, sem tocar no resto do código
- `manifest.webmanifest` — metadados do PWA (nome, cor, ícone)
- `sw.js` — service worker (cache offline + instalabilidade)
- `icon.svg` — ícone placeholder (ver limitação abaixo)

## Conteúdo do programa

28 dias (4 semanas × 7 dias), cada um com: 1 lição (texto), 3 pontos-chave,
e 1 prática guiada com passos e duração. Temas por semana:

1. **Foundations** — respiração, body scan, tirar pressão de performance
2. **Building Awareness** — sensate focus (técnica reconhecida em terapia
   sexual, criada por Masters & Johnson), mapeamento de preferências
3. **Deepening Practice** — ritmo, comunicação, consentimento contínuo
4. **Integration** — parceiro(a), lidar com bloqueios, plano de manutenção

O conteúdo é **educativo e não-explícito** de propósito (evita linguagem
gráfica) — é um rascunho funcional, não copy final; revise o tom e ajuste
para a voz da marca antes de lançar.

## Acesso (gate) — como funciona e sua limitação

Hoje o "gate" é **só client-side**: existe um código fixo em `app.js`
(`ACCESS_CODE = "VELVET28"`), guardado no dispositivo via `localStorage`
depois que o usuário digita certo uma vez.

**Isso não é segurança de verdade** — qualquer pessoa consegue ler esse
código no código-fonte do arquivo. Serve como um filtro simples contra
compartilhamento casual do link, não contra alguém decidido a burlar.
Para controle de acesso por comprador de verdade, os caminhos são:

- **Mais simples:** confiar na obscuridade do link (URL não-indexada,
  compartilhada só na entrega da Hotmart) + esse código único — suficiente
  pra maioria dos lançamentos pequenos/médios.
- **Mais robusto (trabalho futuro):** um backend leve (ex: Cloudflare
  Worker ou função serverless) que recebe o **webhook da Hotmart** a cada
  compra aprovada, gera um código único por comprador, e valida esse
  código contra o servidor em vez de comparar no próprio JS. Não fiz isso
  agora porque exige infraestrutura extra (backend + banco) — me avise se
  quiser que eu monte isso depois.

**Antes de lançar:** troque `VELVET28` por um código só seu em `app.js`.

## Configurando o produto na Hotmart (passo a passo)

Preciso que você faça isso pelo painel da Hotmart (não tenho acesso à sua
conta), mas aqui vai o roteiro:

1. **Hospede a pasta `app/`** em algum lugar com HTTPS (Vercel, Netlify,
   Hostinger, etc. — pode ser um subdomínio, ex: `app.seudominio.com`).
   PWA exige HTTPS para funcionar direito (service worker e instalação).
2. Na Hotmart, vá em **Produtos → Criar Produto**.
3. Escolha o formato **"Outro formato" / "Área de membros externa"**
   (nomenclatura pode variar) — porque o conteúdo mora fora da Hotmart,
   na URL que você hospedou no passo 1.
4. Cadastre nome, categoria (ex: Saúde e Bem-estar), preço(s) — pode criar
   uma oferta por plano (4/12/24 semanas) igual está na LP.
5. Em **Entrega do produto / Página de obrigado**, configure a mensagem
   pós-compra para incluir:
   - O link do app (`https://SEUDOMINIO/app/`)
   - O código de acesso (`VELVET28`, ou o que você trocar em `app.js`)
6. Pegue o **link de checkout** de cada oferta e cole nos botões "Get My
   Plan" do `index.html` da LP (na pasta acima), no lugar dos `href="#"`.
7. Ative **e-mail de confirmação automático** da Hotmart com o mesmo
   link + código, para o caso do cliente sair da página de obrigado sem
   anotar.

## Testando localmente

```
cd app
python3 -m http.server 8000
```
Abra `http://localhost:8000`, digite `VELVET28` na tela de acesso.
(Service worker só funciona de verdade em HTTPS ou `localhost` — em
`file://` direto ele não registra, mas o resto do app funciona normal.)

## Ícone do app

`icon.svg` é um ícone placeholder simples (círculo com as cores da marca).
Funciona para instalar no Android/Chrome, mas **o iOS não usa ícone SVG de
manifest** para "Adicionar à Tela de Início" — precisa de um PNG real
(180×180 e 512×512, por exemplo) referenciado como
`<link rel="apple-touch-icon">`. Troque isso antes do lançamento oficial —
qualquer ferramenta de geração de ícone PWA resolve.

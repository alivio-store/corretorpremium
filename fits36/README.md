# FitS36 — Consulta rápida de IMC (quiz de personalização)

Página única (`index.html`), sem dependências externas, com a mesma ideia de
interação/personalização usada no WScan — mas aqui aplicada a você mesmo, no
formato de uma "consulta" rápida e gratuita, e sem nenhum dado fictício
sobre terceiros.

## Como funciona o fluxo

1. **Tela 1** — pede nome e idade.
2. **Tela 2** — pede peso (kg) e altura (cm).
3. **Tela 3** — animação de "montando sua consulta" (~4s), com textos que
   trocam sozinhos (`Analisando seus dados...` → `Calculando seu IMC...` →
   `Montando sua recomendação FitS36...`).
4. **Tela 4** — resultado: cumprimenta pelo nome, mostra idade, peso/altura,
   o IMC calculado de verdade (peso ÷ altura²) e a classificação (abaixo do
   peso / peso normal / sobrepeso / obesidade), com uma recomendação
   genérica por faixa de IMC puxando para o FitS36, e um botão de compra.

Nome, idade, peso e altura ficam só na memória do navegador da pessoa —
nada é enviado, salvo ou logado em nenhum servidor. O IMC mostrado é
calculado de verdade a partir do que a pessoa digitou (não é um número
fictício).

## O que fazer antes de publicar

1. **Link de checkout** — o botão final (`#ctaBtn`, "CONHECER O FITS36 →")
   aponta para `#comprar`. Troque pelo link real do checkout (Shopify,
   Yampi, Kiwify, WhatsApp, etc.) ou pela URL da landing page de vendas do
   FitS36, quando você me passar os dados do produto.

2. **Landing page do produto** — este arquivo é só o quiz/consulta. Ainda
   não existe uma landing page de vendas do FitS36 neste repositório. Me
   passe copy, preço, fotos e benefícios reais do produto que eu crio a PDP
   completa (no mesmo padrão de `/medidor-pressao/` e
   `/massageador-pescoco/`) e ligo o botão final desta consulta a ela.

3. **Textos de recomendação** — os 4 textos por faixa de IMC (objeto `RECO`
   no `<script>` final) são propositalmente genéricos e sem alegação de
   efeito terapêutico (para evitar problema com CONAR/Anvisa em produto de
   bem-estar). Ajuste o tom para a voz da marca Always Fit, mas evite
   prometer emagrecimento, cura ou tratamento de doença.

4. **Marca/cores** — usa laranja (`--a:#ff7a1a`) como cor de destaque, só
   como placeholder. Troque pelas cores reais da identidade FitS36/Always
   Fit nas variáveis CSS no topo do `<style>`.

5. **Analytics/Pixel** — já ativos no `<head>`, reaproveitando os mesmos IDs
   dos demais produtos da Alívio (GA4 `G-7SRPE880LX`, Meta Pixel
   `1734988077420170`). Troque se quiser dados separados por produto.

## Reaproveitando para o Pro3 Magnésio (ou outro produto físico)

O fluxo (nome/idade → peso/altura → "processando" → resultado + CTA) foi
feito para ser fácil de duplicar: copie a pasta, troque o texto da marca em
`.brandRow`, o objeto `RECO` com as recomendações e o link do `#ctaBtn`.
Se quiser, no lugar do IMC dá pra trocar por outro cálculo/quiz (ex.: nível
de energia, qualidade do sono) — é só ajustar as perguntas das telas 1 e 2
e a função `fillResult()`.

## Rodando localmente

Basta abrir `index.html` no navegador — não precisa de servidor nem build.

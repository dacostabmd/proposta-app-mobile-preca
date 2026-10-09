# JUSTA — Dossiê do App de Precatórios

Dossiê interativo (one-page) que apresenta o conceito do app de antecipação e investimento em
precatórios: briefing, análise crítica, layouts animados, identidade visual, viabilidade,
rentabilidade, orçamento e projeção de mercado de 5 anos.

Porte em **React 19 + Vite**, sem dependências de UI externas — só HTML/CSS/SVG e um punhado de
hooks próprios para as animações (contadores, reveal no scroll e desenho do gráfico).

## Rodando

```bash
npm i
npm run dev      # ambiente de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em /dist
npm run preview  # serve o build de produção
```

Requer **Node.js 18+** (recomendado 20+).

## Estrutura

```
src/
├── main.jsx                 # ponto de entrada
├── App.jsx                  # composição das seções
├── index.css               # tokens de design + todos os estilos
├── hooks/
│   └── useInView.js         # IntersectionObserver reutilizável
└── components/
    ├── CountUp.jsx          # número que conta de 0 até o alvo ao aparecer
    ├── Reveal.jsx           # anima a entrada de uma seção no scroll
    ├── Hero.jsx             # Folha 00 — certificado animado
    ├── Briefing.jsx         # Folha 01
    ├── Verdict.jsx          # Folha 02 — "concordo?" + 3 ressalvas
    ├── TwoSides.jsx         # Folha 03
    ├── Layouts.jsx          # Folha 04 — mockups do app + console
    ├── DesignSystem.jsx     # Folha 05 — paleta, tipografia, nomes
    ├── Viability.jsx        # Folha 06
    ├── Profitability.jsx    # Folha 07 — waterfall + modelos de receita
    ├── Budget.jsx           # Folha 08
    ├── Projection.jsx       # Folha 09 — gráfico SVG de 5 anos
    └── SiteFooter.jsx       # fechamento
```

## Personalização rápida

- **Cores e tipografia:** tokens no topo de `src/index.css` (`:root`).
- **Fontes:** carregadas via Google Fonts em `index.html` (Spectral + Instrument Sans).
- **Números da projeção:** coordenadas e rótulos em `src/components/Projection.jsx`.
- **Movimento:** todas as animações respeitam `prefers-reduced-motion`.

## Observações

- A identidade visual (nome "JUSTA", paleta, logo) é uma proposta de conceito — troque à vontade.
- Os números de mercado são um **cenário-modelo ilustrativo**, não dados auditados. Valide com
  CNJ (Justiça em Números) e Tesouro Nacional antes de usar para captação.

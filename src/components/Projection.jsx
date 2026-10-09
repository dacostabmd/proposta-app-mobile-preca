import Reveal from './Reveal.jsx';
import { useInView } from '../hooks/useInView.js';

export default function Projection() {
  const [chartRef, chartIn] = useInView({ threshold: 0.25 });

  return (
    <section id="projecao">
      <Reveal className="wrap">
        <div className="folio">Folha 09 — Projeção de mercado (2026 – 2030)</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          Cinco anos, com o pipeline de ofícios como combustível
        </h2>
        <p className="kicker" style={{ marginBottom: '24px' }}>
          Cenário-modelo. O GMV representa o volume de precatórios adquiridos; a receita usa o take
          líquido do modelo FIDC (~10% do GMV, conservador).
        </p>

        <div className={`chart-wrap chart ${chartIn ? 'draw' : ''}`} ref={chartRef}>
          <div className="legend">
            <span>
              <i style={{ background: '#C2A25C' }} />
              GMV adquirido (R$ mi)
            </span>
            <span>
              <i style={{ background: '#5FDDA6' }} />
              Receita líquida (R$ mi)
            </span>
          </div>
          <svg viewBox="0 0 760 380" width="100%" role="img" aria-label="Gráfico de GMV e receita projetados de 2026 a 2030">
            {/* gridlines */}
            <g stroke="rgba(241,236,222,.08)" strokeWidth="1">
              <line x1="60" y1="40" x2="740" y2="40" />
              <line x1="60" y1="120" x2="740" y2="120" />
              <line x1="60" y1="200" x2="740" y2="200" />
              <line x1="60" y1="280" x2="740" y2="280" />
              <line x1="60" y1="320" x2="740" y2="320" />
            </g>
            {/* left axis labels (GMV) */}
            <g fill="#9DB3A9" fontSize="11" fontFamily="Spectral,serif" textAnchor="end">
              <text x="52" y="44">1200</text>
              <text x="52" y="124">900</text>
              <text x="52" y="204">600</text>
              <text x="52" y="284">300</text>
              <text x="52" y="324">0</text>
            </g>
            {/* bars */}
            <g>
              <rect className="gbar" x="92" y="309" width="46" height="11" rx="3" fill="#C2A25C" />
              <rect className="gbar" x="226" y="288" width="46" height="32" rx="3" fill="#C2A25C" />
              <rect className="gbar" x="360" y="240" width="46" height="80" rx="3" fill="#C2A25C" />
              <rect className="gbar" x="494" y="147" width="46" height="173" rx="3" fill="#C2A25C" />
              <rect className="gbar" x="628" y="40" width="46" height="280" rx="3" fill="#C2A25C" />
            </g>
            {/* GMV value labels */}
            <g fill="#E6CB8A" fontSize="12" fontFamily="Spectral,serif" textAnchor="middle">
              <text x="115" y="300">40</text>
              <text x="249" y="279">120</text>
              <text x="383" y="231">300</text>
              <text x="517" y="138">650</text>
              <text x="651" y="31">1.200</text>
            </g>
            {/* revenue line (secondary scale) */}
            <polyline
              className="rline"
              fill="none"
              stroke="#5FDDA6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="115,312 249,296 383,260 517,190 651,80"
            />
            <g fill="#5FDDA6">
              <circle className="rdot" cx="115" cy="312" r="4" />
              <circle className="rdot" cx="249" cy="296" r="4" />
              <circle className="rdot" cx="383" cy="260" r="4" />
              <circle className="rdot" cx="517" cy="190" r="4" />
              <circle className="rdot" cx="651" cy="80" r="4" />
            </g>
            {/* revenue labels */}
            <g fill="#5FDDA6" fontSize="11" fontFamily="Spectral,serif" textAnchor="middle">
              <text x="517" y="180">R$ 65</text>
              <text x="651" y="70">R$ 120</text>
            </g>
            {/* x axis */}
            <line x1="60" y1="320" x2="740" y2="320" stroke="#C2A25C" strokeWidth="1" />
            <g fill="#F1ECDE" fontSize="13" fontFamily="Instrument Sans,sans-serif" textAnchor="middle">
              <text x="115" y="345">2026</text>
              <text x="249" y="345">2027</text>
              <text x="383" y="345">2028</text>
              <text x="517" y="345">2029</text>
              <text x="651" y="345">2030</text>
            </g>
          </svg>
        </div>

        <div className="funnel">
          <div className="fstage">
            <div className="t">TAM — estoque total</div>
            <div className="v">~R$ 190 bi</div>
            <p>Precatórios em aberto no país (federal + estados + municípios). Cresce ~8% a.a.</p>
          </div>
          <div className="fstage">
            <div className="t">SAM — mercado endereçável</div>
            <div className="v">~R$ 28 bi</div>
            <p>Fatia com liquidez e perfil de risco viável para cessão/antecipação.</p>
          </div>
          <div className="fstage">
            <div className="t">SOM — captura em 2030</div>
            <div className="v mint">R$ 1,2 bi</div>
            <p>GMV-alvo da JUSTA, alavancado pelo pipeline de ofícios já retido.</p>
          </div>
        </div>

        <p className="note">
          <b>Sobre os números:</b> são estimativas de cenário, não dados auditados — a base de
          conhecimento vai até jan/2026 e o mercado se move. Antes de usar isso para captar, valide o
          estoque e os prazos nas fontes primárias: <b>CNJ (Justiça em Números)</b>,{' '}
          <b>Tesouro Nacional (STN)</b> e os orçamentos de precatórios da União e dos entes. Dá para
          refazer o gráfico com os números reais de retenção de ofícios.
        </p>
      </Reveal>
    </section>
  );
}

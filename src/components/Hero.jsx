import CountUp from './CountUp.jsx';

export default function Hero() {
  return (
    <>
      <div className="brandbar">
        <div className="wrap">
          <div className="brand">
            <svg className="seal" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="24" cy="24" r="22" fill="none" stroke="#C2A25C" strokeWidth="1" />
              <circle cx="24" cy="24" r="18.5" fill="none" stroke="#C2A25C" strokeWidth=".6" strokeDasharray="1.4 2.2" />
              <circle cx="24" cy="24" r="15" fill="none" stroke="#E6CB8A" strokeWidth=".7" />
              <path
                d="M24 13 v22 M16 18 h16 M18 18 l-3 7 h6z M30 18 l-3 7 h6z"
                fill="none"
                stroke="#5FDDA6"
                strokeWidth="1.3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span>
              JUSTA
              <small>CRÉDITO JUDICIAL</small>
            </span>
          </div>
          <span className="tagpill">Dossiê de conceito · v1</span>
        </div>
      </div>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="folio fade-seq d1">Folha 00 — A premissa</div>
            <h1 className="fade-seq d2">
              Um direito de <em>R$ 100 mil</em> que o governo paga — talvez só em 2030.
            </h1>
            <p className="lede fade-seq d3">
              O credor quer dinheiro <span className="mint">hoje</span>. O investidor quer{' '}
              <span className="brass">rendimento</span> amanhã. O JUSTA é a ponte: um app que vende o
              lado fácil (investir) e uma operação ativa que resolve o lado difícil (comprar o
              precatório).
            </p>
            <div className="hero-cta fade-seq d4">
              <a className="btn" href="#veredito">
                Começar pela análise crítica
              </a>
              <a className="btn ghost" href="#projecao">
                Ver projeção de 5 anos
              </a>
            </div>
          </div>

          <div className="cert fade-seq d5" aria-label="Certificado ilustrativo de precatório">
            <div className="cert-top">
              <div>
                <div className="lbl">PRECATÓRIO · FEDERAL</div>
                <div className="serif" style={{ fontSize: '1.1rem' }}>
                  Ofício requisitório
                </div>
              </div>
              <div className="lbl" style={{ textAlign: 'right' }}>
                Nº 0001/2026
                <br />
                TRF 3ª Região
              </div>
            </div>

            <div className="cert-row">
              <span className="k">Valor de face (corrigido)</span>
              <CountUp className="v face" target={100000} prefix="R$ " delay={700} startImmediately />
            </div>
            <div className="cert-row">
              <span className="k">Deságio na compra (−30%)</span>
              <CountUp className="v cut" target={30000} prefix="− R$ " delay={820} startImmediately />
            </div>
            <div className="cert-row">
              <span className="k">Recebe hoje, à vista</span>
              <CountUp className="v today" target={70000} prefix="R$ " delay={940} startImmediately />
            </div>

            <div className="cert-foot">
              <span className="sage" style={{ fontSize: '.78rem', maxWidth: '16ch' }}>
                Liquidação estimada do ente devedor em ~24 meses
              </span>
              <svg className="stamp" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="30" fill="none" stroke="#5FDDA6" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="24" fill="none" stroke="#5FDDA6" strokeWidth=".8" strokeDasharray="2 3" />
                <path
                  d="M22 33 l7 7 l14 -16"
                  fill="none"
                  stroke="#5FDDA6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import Reveal from './Reveal.jsx';

const swatches = [
  { name: 'Tinta', hex: '#0A2722', role: 'base' },
  { name: 'Latão', hex: '#C2A25C', role: 'valor' },
  { name: 'Menta', hex: '#5FDDA6', role: 'rendimento' },
  { name: 'Osso', hex: '#F1ECDE', role: 'texto' },
  { name: 'Âmbar', hex: '#DE945A', role: 'risco' },
];

export default function DesignSystem() {
  return (
    <section id="design">
      <Reveal className="wrap">
        <div className="folio">Folha 05 — Conceito de design</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          Identidade: a confiança de um certificado, a fluidez de um fintech
        </h2>
        <p className="kicker" style={{ marginBottom: '28px' }}>
          Nenhuma identidade foi anexada, então proponho esta. A ideia-raiz: um precatório é um{' '}
          <b>valor mobiliário impresso</b> — verde-tinta de cédula, latão de selo, verde-menta de
          rendimento. Transmite instituição e antigolpe, sem parecer banco datado.
        </p>

        <div className="swatches">
          {swatches.map((s) => (
            <div className="sw" key={s.name}>
              <div className="chip" style={{ background: s.hex }} />
              <div className="meta">
                <b>{s.name}</b>
                <span>
                  {s.hex} · {s.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="typ">
          <div className="box">
            <div className="big">Spectral</div>
            <p className="muted" style={{ margin: 0 }}>
              Serifada editorial para títulos e números. Dá gravidade de documento e elegância de
              prospecto — onde mora a confiança.
            </p>
          </div>
          <div className="box">
            <div className="big sans">Instrument Sans</div>
            <p className="muted" style={{ margin: 0 }}>
              Sans geométrica-humanista para interface e texto corrido. Moderna, limpa, legível no
              celular — onde mora a usabilidade.
            </p>
          </div>
        </div>

        <h3 className="serif" style={{ fontSize: '1.2rem', margin: '30px 0 10px' }}>
          Nome de trabalho &amp; alternativas
        </h3>
        <div className="names">
          <span className="main">JUSTA</span>
          <span>Credere</span>
          <span>Precato</span>
          <span>Haver</span>
          <span>Antecipa</span>
        </div>
        <p className="note">
          Marca dupla por público: para o credor, <b>“Seu direito, em dinheiro hoje.”</b> Para o
          investidor, <b>“Renda de crédito judicial.”</b> O símbolo funde a balança da justiça com um
          selo/moeda — a mesma lógica do certificado do topo.
        </p>
      </Reveal>
    </section>
  );
}

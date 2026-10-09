import Reveal from './Reveal.jsx';

export default function Verdict() {
  return (
    <section id="veredito">
      <Reveal className="wrap">
        <div className="folio">Folha 02 — Concordo?</div>

        <div className="verdict">
          <svg className="mark" viewBox="0 0 92 92" aria-hidden="true">
            <circle cx="46" cy="46" r="43" fill="none" stroke="#C2A25C" strokeWidth="1.4" />
            <circle cx="46" cy="46" r="36" fill="none" stroke="#C2A25C" strokeWidth=".6" strokeDasharray="1.6 2.6" />
            <path
              d="M30 48 l11 11 l22 -27"
              fill="none"
              stroke="#5FDDA6"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h2>Sim — a tese estrutural está certa.</h2>
            <p className="kicker" style={{ marginTop: '10px' }}>
              O diagnóstico dos dois lados é preciso: o celular é excelente para captar investidor e
              fraco para originar credor. A conclusão — “app como vitrine, compra via robô + equipe” — é
              exatamente como os bons players operam.{' '}
              <b className="brass">Mas há três ressalvas que mudam o plano de negócio.</b>
            </p>
          </div>
        </div>

        <div className="refs">
          <div className="ref">
            <span className="n">Ressalva I</span>
            <h3>O lucro está no deságio, não na comissão</h3>
            <p>
              Comissão de 3–7% é um modelo de corretor — fino e frágil (o credor e o investidor se
              conhecem e te cortam). O dinheiro de verdade está no spread: comprar com deságio e capturar
              a diferença. Isso pode render <span className="brass">2–4×</span> mais por operação.
            </p>
          </div>
          <div className="ref">
            <span className="n">Ressalva II</span>
            <h3>Cota fracionada = valor mobiliário</h3>
            <p>
              Vender “cotas com retorno de IPCA+12%” para o público é oferta de valor mobiliário. O
              caminho limpo é um <span className="brass">FIDC-NP</span> (fundo de direitos creditórios
              não-padronizados) com administrador e custodiante — não um P2P no app. Isso entra no
              orçamento e no cronograma.
            </p>
          </div>
          <div className="ref">
            <span className="n">Ressalva III</span>
            <h3>O risco é o prazo de pagamento</h3>
            <p>
              Federal paga com relativa ordem; estados e municípios em regime especial atrasam muito.
              Depois da EC 114/113 há teto e reprogramação. O deságio é o{' '}
              <span className="brass">preço desse risco</span> — precifique por ente devedor, não com uma
              taxa única.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

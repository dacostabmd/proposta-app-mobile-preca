import Reveal from './Reveal.jsx';

export default function Viability() {
  return (
    <section id="viabilidade">
      <Reveal className="wrap">
        <div className="folio">Folha 06 — Viabilidade</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '22px' }}>
          O que precisa estar de pé antes de escalar
        </h2>

        <div className="grid2">
          <div className="card">
            <span className="tag good">Forças</span>
            <h3>Margem e demanda reais</h3>
            <p>
              Deságio alto por operação, demanda crescente dos dois lados e um estoque de ofícios já
              retido — pipeline próprio é vantagem rara de largada.
            </p>
          </div>
          <div className="card">
            <span className="tag good">Oportunidades</span>
            <h3>Mercado pouco digitalizado</h3>
            <p>
              Originação ainda artesanal e desconfiada. Quem combinar varredura automática + marca
              confiável + liquidez rápida cria fosso difícil de copiar.
            </p>
          </div>
          <div className="card">
            <span className="tag bad">Fraquezas</span>
            <h3>Capital e originação cara</h3>
            <p>
              O modelo bom exige capital para comprar (ou um fundo) e CAC alto no lado do credor (call
              center, jurídico, antifraude). Não é um app “de graça”.
            </p>
          </div>
          <div className="card">
            <span className="tag bad">Ameaças</span>
            <h3>Regulatório e prazo</h3>
            <p>
              CVM sobre oferta de cotas; fraude de precatório duplicado/cedido; mudança de regra de
              pagamento (EC 114/113) alterando prazos e retornos.
            </p>
          </div>
        </div>

        <div className="card" style={{ marginTop: '22px', borderColor: 'var(--brass)' }}>
          <span className="tag">Trava regulatória — resolver primeiro</span>
          <h3>Estrutura de fundo (FIDC-NP) é pré-requisito, não detalhe</h3>
          <p>
            Para vender cotas com rendimento ao público de forma segura: constituir um FIDC
            Não-Padronizado, contratar administrador e custodiante autorizados, definir cotas
            sênior/subordinada e due diligence de cada direito creditório. É o que transforma “P2P
            arriscado” em “produto de investimento regular”. Prazo típico de montagem: 3–6 meses.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

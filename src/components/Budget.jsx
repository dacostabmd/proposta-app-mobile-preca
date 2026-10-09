import Reveal from './Reveal.jsx';

export default function Budget() {
  return (
    <section id="orcamento">
      <Reveal className="wrap">
        <div className="folio">Folha 08 — Orçamento</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          O que custa colocar de pé
        </h2>
        <p className="kicker" style={{ marginBottom: '22px' }}>
          Faixas realistas para mercado brasileiro. Separe sempre <b>opex</b> (tocar o negócio) do{' '}
          <b>capital de aquisição</b> (comprar precatórios) — são bolsos diferentes.
        </p>

        <table>
          <caption>Fase 1 — MVP &amp; estrutura · investimento inicial (único)</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th className="num">Faixa (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>App do investidor (iOS + Android) + backend + KYC</td>
              <td className="num">180k – 280k</td>
            </tr>
            <tr>
              <td>Console de originação + robô de varredura + motor de valuation</td>
              <td className="num">90k – 150k</td>
            </tr>
            <tr>
              <td>Estruturação do FIDC-NP (adm., custodiante, pareceres, regulamento)</td>
              <td className="num">120k – 220k</td>
            </tr>
            <tr>
              <td>Marca, identidade visual e design do produto</td>
              <td className="num">25k – 50k</td>
            </tr>
            <tr className="total">
              <td>Subtotal de setup</td>
              <td className="num">415k – 700k</td>
            </tr>
          </tbody>
        </table>

        <table style={{ marginTop: '34px' }}>
          <caption>Fase 2 — Operação · custo mensal recorrente</caption>
          <thead>
            <tr>
              <th>Frente</th>
              <th className="num">Faixa (R$/mês)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comercial / originação (SDRs, closers, call center)</td>
              <td className="num">60k – 120k</td>
            </tr>
            <tr>
              <td>Tecnologia / produto (squad enxuto + manutenção)</td>
              <td className="num">40k – 80k</td>
            </tr>
            <tr>
              <td>Marketing / captação de investidores (performance + conteúdo)</td>
              <td className="num">30k – 80k</td>
            </tr>
            <tr>
              <td>Jurídico, compliance, KYC e antifraude</td>
              <td className="num">20k – 40k</td>
            </tr>
            <tr className="total">
              <td>Burn mensal estimado</td>
              <td className="num">150k – 320k</td>
            </tr>
          </tbody>
        </table>

        <div className="grid2" style={{ marginTop: '34px' }}>
          <div className="card" style={{ borderColor: 'var(--brass)' }}>
            <span className="tag">Caixa até tração</span>
            <h3>R$ 2,5 mi – 6 mi</h3>
            <p>
              Setup + 12 a 18 meses de operação antes de a receita cobrir o burn. <b>Não inclui</b> o
              capital para comprar precatórios.
            </p>
          </div>
          <div className="card">
            <span className="tag">Capital de aquisição</span>
            <h3>É o maior número — e separado</h3>
            <p>
              O dinheiro que compra os precatórios vem do FIDC / investidores, não do seu opex. Ele escala
              junto com o GMV: começa pequeno e cresce com a captação.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

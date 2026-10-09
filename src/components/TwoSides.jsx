import Reveal from './Reveal.jsx';

export default function TwoSides() {
  return (
    <section id="lados">
      <Reveal className="wrap">
        <div className="folio">Folha 03 — Os dois lados do mercado</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          Um negócio, duas dinâmicas opostas
        </h2>
        <p className="kicker" style={{ marginBottom: '26px' }}>
          A estratégia inteira nasce de reconhecer que o que funciona num lado não funciona no outro.
        </p>

        <div className="sides">
          <div className="side inv">
            <h3>
              Investidor <span className="score hi">8,5</span>
            </h3>
            <p className="muted" style={{ fontSize: '.95rem' }}>
              Aderência mobile — alta
            </p>
            <ul>
              <li>Baixa cotas fracionadas de R$ 100 em segundos</li>
              <li>Entende “renda fixa turbinada” — engaja e recompra</li>
              <li>Onboarding e KYC 100% no celular</li>
              <li>Aquisição por marketing de performance (CAC previsível)</li>
            </ul>
          </div>
          <div className="side cred">
            <h3>
              Credor <span className="score lo">3,0</span>
            </h3>
            <p className="muted" style={{ fontSize: '.95rem' }}>
              Aderência mobile — baixa
            </p>
            <ul>
              <li>Idoso / herdeiro / servidor — não baixa app para vender R$ 80 mil</li>
              <li>Medo de golpe exige rosto, voz e papel</li>
              <li>Cessão precisa de validação jurídica e documentos</li>
              <li>Originação ativa: prospecção, call center, visita</li>
            </ul>
          </div>
        </div>
        <p className="note">
          Tradução para o produto: <b>invista no app do investidor como funil de receita</b> e trate a
          originação como uma operação de vendas B2C com tecnologia de apoio — não como um app para o
          credor baixar.
        </p>
      </Reveal>
    </section>
  );
}

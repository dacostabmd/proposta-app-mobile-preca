import Reveal from './Reveal.jsx';

export default function Briefing() {
  return (
    <section id="briefing">
      <Reveal className="wrap">
        <div className="folio">Folha 01 — Briefing</div>
        <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', maxWidth: '18ch' }}>
          O produto em uma frase, o negócio em três movimentos.
        </h2>
        <p className="lede" style={{ marginTop: '20px' }}>
          Marketplace de crédito judicial: o <span className="brass">app capta investidores</span>{' '}
          que compram cotas fracionadas de precatórios; uma <span className="brass">operação ativa</span>{' '}
          (robôs de varredura + equipe comercial) compra esses precatórios de credores com deságio. A
          margem está na diferença entre o que se paga ao credor e o que o governo paga lá na frente.
        </p>

        <div className="grid3" style={{ marginTop: '34px' }}>
          <div className="card">
            <span className="tag">O problema</span>
            <h3>Crédito travado</h3>
            <p>
              Milhões de reais em precatórios parados na fila do governo. O credor é idoso, herdeiro ou
              servidor — precisa do dinheiro agora, mas desconfia de golpe.
            </p>
          </div>
          <div className="card">
            <span className="tag">A solução</span>
            <h3>Liquidez + renda</h3>
            <p>
              Credor recebe à vista com transparência. Investidor compra um ativo de crédito indexado à
              inflação com retorno acima da renda fixa tradicional.
            </p>
          </div>
          <div className="card">
            <span className="tag">O motor</span>
            <h3>App + operação</h3>
            <p>
              O celular é a vitrine de captação. A compra do precatório é feita por varredura nos
              tribunais somada a um time comercial que fecha com gente de verdade.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

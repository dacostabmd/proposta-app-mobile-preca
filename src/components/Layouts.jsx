import Reveal from './Reveal.jsx';

export default function Layouts() {
  return (
    <section id="layouts">
      <Reveal className="wrap">
        <div className="folio">Folha 04 — Layouts (conceito animado)</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          Como as telas ganham vida
        </h2>
        <p className="kicker" style={{ marginBottom: '30px' }}>
          Protótipos de direção — não pixel-perfect. Mostram a lógica: um app lindo para quem investe, um
          console robusto para quem origina.
        </p>

        <div className="lab">
          <div>
            <div className="phone" aria-label="App do investidor (mockup animado)">
              <div className="notch" />
              <div className="screen">
                <div className="sbar">
                  <span>9:41</span>
                  <span>5G ▪ ▪ ▪</span>
                </div>
                <div className="appbar">
                  <span className="ttl">Olá, Marina</span>
                  <span className="avatar" />
                </div>
                <div className="balance">
                  <div className="lbl">PATRIMÔNIO INVESTIDO</div>
                  <div className="amt">
                    R$ 24.380 <span className="mint">+ R$ 312 este mês</span>
                  </div>
                  <svg className="spark" viewBox="0 0 240 28" preserveAspectRatio="none">
                    <path
                      d="M0 22 L30 20 L60 21 L90 15 L120 16 L150 10 L180 11 L210 6 L240 3"
                      fill="none"
                      stroke="#5FDDA6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="listhdr">OPORTUNIDADES ABERTAS</div>
                <div className="pcard a">
                  <div className="top">
                    <span className="ente">União — TRF 3ª Região</span>
                    <span className="des">IPCA + 12%</span>
                  </div>
                  <div className="meta">
                    <span>Deságio 30%</span>
                    <span>~24 meses</span>
                  </div>
                  <div className="pbar">
                    <i />
                  </div>
                  <div className="cap">72% captado · cotas a partir de R$ 100</div>
                </div>
                <div className="pcard b">
                  <div className="top">
                    <span className="ente">Gov. SP — Secretaria</span>
                    <span className="des">IPCA + 14%</span>
                  </div>
                  <div className="meta">
                    <span>Deságio 38%</span>
                    <span>~36 meses</span>
                  </div>
                  <div className="pbar">
                    <i />
                  </div>
                  <div className="cap">41% captado · risco moderado</div>
                </div>
                <div className="tabbar">
                  <span className="on" />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <p className="caption">App do investidor · iOS + Android</p>
          </div>

          <div>
            <div className="console" aria-label="Console de originação (mockup animado)">
              <div className="bar">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                &nbsp;&nbsp;Console de Originação — JUSTA OS
              </div>
              <div className="body">
                <div className="term" aria-hidden="true">
                  <div className="ln">
                    <span className="b">$</span> varredura --tribunais=TRF1..5,TJSP
                  </div>
                  <div className="ln">
                    › indexando diários oficiais… <span className="ok">ok</span>
                  </div>
                  <div className="ln">› 1.284 precatórios novos encontrados</div>
                  <div className="ln">
                    › valuation + score de risco por ente… <span className="ok">ok</span>
                  </div>
                  <div className="ln">
                    › <span className="warn">312</span> leads acima do corte de margem
                  </div>
                  <div className="ln">
                    <span className="b">→</span> enviando p/ fila comercial… <span className="ok">done</span>
                  </div>
                </div>
                <div className="lead">
                  <h4>Lead #4471 · pronto p/ contato</h4>
                  <div className="lrow">
                    <span className="k">Ente devedor</span>
                    <span>União (federal)</span>
                  </div>
                  <div className="lrow">
                    <span className="k">Valor de face</span>
                    <span>R$ 142.900</span>
                  </div>
                  <div className="lrow">
                    <span className="k">Deságio sugerido</span>
                    <span className="brass">29%</span>
                  </div>
                  <div className="lrow">
                    <span className="k">Oferta ao credor</span>
                    <span className="mint">R$ 101.459</span>
                  </div>
                  <div className="lrow">
                    <span className="k">Score do ente</span>
                    <span>A — baixo risco</span>
                  </div>
                  <div className="gauge">
                    <i />
                  </div>
                  <span className="pill">Gerar proposta e acionar closer</span>
                </div>
              </div>
            </div>
            <p className="caption">Console da operação · robô de varredura + mesa comercial</p>

            <div className="funnelnote">
              <b>E o credor?</b> A porta de entrada dele <b>não</b> é um app para download — é uma landing
              / WhatsApp: “Simule quanto seu precatório vale hoje”. Captura o número do processo, o robô
              avalia, e <b>uma pessoa</b> assume dali. O app fica para investidor; o credor fala com
              humano.
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

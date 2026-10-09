import Reveal from './Reveal.jsx';
import { useInView } from '../hooks/useInView.js';

export default function Profitability() {
  const [wfRef, wfIn] = useInView({ threshold: 0.3 });

  return (
    <section id="rentabilidade">
      <Reveal className="wrap">
        <div className="folio">Folha 07 — Rentabilidade</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3.6vw,2.3rem)', marginBottom: '8px' }}>
          Anatomia de uma operação de R$ 100 mil
        </h2>
        <p className="kicker" style={{ marginBottom: '24px' }}>
          Exemplo ilustrativo (precatório federal, deságio 30%, liquidação em ~24 meses, correção pela
          SELIC). Mostra por que o deságio supera a comissão.
        </p>

        <div className={`wf ${wfIn ? 'draw' : ''}`} ref={wfRef}>
          <div className="row">
            <span className="lab2">Paga ao credor hoje</span>
            <div className="barwrap">
              <div
                className="bar"
                style={{ '--w': '59%', background: 'linear-gradient(90deg,#2b6b58,#39A47B)' }}
              />
            </div>
            <span className="val">R$ 70.000</span>
          </div>
          <div className="row">
            <span className="lab2">Recebe do governo (face + SELIC)</span>
            <div className="barwrap">
              <div
                className="bar"
                style={{ '--w': '100%', background: 'linear-gradient(90deg,#39A47B,#5FDDA6)' }}
              />
            </div>
            <span className="val mint">R$ 118.000</span>
          </div>
          <div className="row">
            <span className="lab2">Resultado bruto</span>
            <div className="barwrap">
              <div
                className="bar"
                style={{ '--w': '41%', background: 'linear-gradient(90deg,#8a7636,#C2A25C)' }}
              />
            </div>
            <span className="val brass">R$ 48.000</span>
          </div>
        </div>

        <h3 className="serif" style={{ fontSize: '1.15rem', margin: '30px 0 4px' }}>
          Para onde vão os R$ 48 mil de resultado
        </h3>
        <table>
          <caption>Distribuição do resultado bruto · valores ilustrativos</caption>
          <thead>
            <tr>
              <th>Destino</th>
              <th className="num">Valor</th>
              <th className="num">% do bruto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rendimento ao investidor (IPCA + 12% a.a.)</td>
              <td className="num">R$ 24.000</td>
              <td className="num">50%</td>
            </tr>
            <tr>
              <td>Originação + jurídico + CAC do credor</td>
              <td className="num">R$ 5.000</td>
              <td className="num">10%</td>
            </tr>
            <tr>
              <td>Estrutura do fundo (adm. / custódia / auditoria)</td>
              <td className="num">R$ 2.000</td>
              <td className="num">4%</td>
            </tr>
            <tr className="total">
              <td>Take líquido da plataforma</td>
              <td className="num">R$ 17.000</td>
              <td className="num">36%</td>
            </tr>
          </tbody>
        </table>

        <div className="models">
          <div className="model">
            <h3>Modelo A · Marketplace</h3>
            <div className="take brass">R$ 3 mil – 7 mil</div>
            <p className="muted" style={{ fontSize: '.86rem', margin: 0 }}>
              por operação de R$ 100 mil
            </p>
            <ul>
              <li>Comissão de 3–7% (o que você descreveu)</li>
              <li>Capital leve, começa rápido</li>
              <li>Risco de desintermediação (te cortam)</li>
              <li>
                Bom para <b>provar a originação</b>
              </li>
            </ul>
          </div>
          <div className="model hi">
            <h3>Modelo B · FIDC / Principal</h3>
            <div className="take mint">~ R$ 17 mil</div>
            <p className="muted" style={{ fontSize: '.86rem', margin: 0 }}>
              take líquido por operação de R$ 100 mil
            </p>
            <ul>
              <li>Captura o deságio, não só a comissão</li>
              <li>Exige capital + estrutura CVM</li>
              <li>Taxa de gestão recorrente sobre o AUM</li>
              <li>
                Onde está o <b>negócio escalável</b>
              </li>
            </ul>
          </div>
        </div>
        <p className="note">
          Rota recomendada: comece no Modelo A para validar que você consegue originar em volume; migre
          para o Modelo B conforme o fundo e a captação de investidores crescem. A margem por operação
          pode quase triplicar.
        </p>
      </Reveal>
    </section>
  );
}

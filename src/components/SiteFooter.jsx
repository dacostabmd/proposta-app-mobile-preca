import Reveal from './Reveal.jsx';

export default function SiteFooter() {
  return (
    <footer>
      <Reveal className="wrap">
        <div className="folio">Fechamento</div>
        <p className="big serif">
          A sua tese está certa. O trabalho agora é na originação, no deságio e no fundo — não no download
          do credor.
        </p>
        <p className="kicker" style={{ marginTop: '18px' }}>
          Próximos três passos sugeridos: <b className="brass">(1)</b> provar originação em volume com um
          piloto manual; <b className="brass">(2)</b> montar a estrutura do FIDC-NP em paralelo;{' '}
          <b className="brass">(3)</b> só então escalar o app do investidor como funil de captação.
        </p>
      </Reveal>
    </footer>
  );
}

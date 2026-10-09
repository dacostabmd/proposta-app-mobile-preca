import Hero from './components/Hero.jsx';
import Briefing from './components/Briefing.jsx';
import Verdict from './components/Verdict.jsx';
import TwoSides from './components/TwoSides.jsx';
import Layouts from './components/Layouts.jsx';
import DesignSystem from './components/DesignSystem.jsx';
import Viability from './components/Viability.jsx';
import Profitability from './components/Profitability.jsx';
import Budget from './components/Budget.jsx';
import Projection from './components/Projection.jsx';
import SiteFooter from './components/SiteFooter.jsx';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Briefing />
        <Verdict />
        <TwoSides />
        <Layouts />
        <DesignSystem />
        <Viability />
        <Profitability />
        <Budget />
        <Projection />
      </main>
      <SiteFooter />
    </>
  );
}

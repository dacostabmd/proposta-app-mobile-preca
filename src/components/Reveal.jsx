import { useInView } from '../hooks/useInView.js';

/**
 * Envolve o conteúdo e adiciona a classe `in` quando entra na viewport,
 * acionando a transição definida em `.reveal` no CSS.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

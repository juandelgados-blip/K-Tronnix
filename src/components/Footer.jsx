import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-icon">K.</span>
            <span>K-Tronnix</span>
          </Link>
          <p>Tecnología para acompañar tus ideas.</p>
        </div>
        <div className="footer-links">
          <Link to="/portafolio">Catálogo</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} K-Tronnix. Proyecto académico.
        </p>
      </div>
    </footer>
  );
}

import { NavLink, Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">K.</span>
        <span>K-Tronnix</span>
      </Link>
      <nav className="nav-links" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/portafolio">Portafolio</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
      <Link className="nav-cta" to="/portafolio">
        Explorar tienda <span>↗</span>
      </Link>
    </header>
  );
}

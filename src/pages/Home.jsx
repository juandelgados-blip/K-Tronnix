import { Link } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';

const categorias = [
  { nombre: 'Audio', detalle: 'Sonido para cada momento', icono: '♫' },
  { nombre: 'Computación', detalle: 'Tu espacio, mejor equipado', icono: '⌘' },
  {
    nombre: 'Accesorios',
    detalle: 'Pequeños detalles, grandes ideas',
    icono: '✧',
  },
  { nombre: 'Fotografía', detalle: 'Guarda lo que importa', icono: '◎' },
];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">TECNOLOGÍA PARA TU DÍA A DÍA</span>
          <h1>
            Ideas que conectan. <span>Tecnología que inspira.</span>
          </h1>
          <p>
            Encuentra accesorios y dispositivos que hacen más simples tus
            momentos de estudio, trabajo y entretenimiento.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/portafolio">
              Explorar catálogo <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-outline" to="/nosotros">
              Conoce K-Tronnix
            </Link>
          </div>
          <div className="hero-trust">
            <span className="trust-mark">✦</span>
            <span>Una experiencia sencilla para descubrir tecnología.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1100&auto=format&fit=crop&q=85"
            alt="Audífonos de diseño moderno"
          />
          <div className="hero-floating-card">
            <span className="floating-icon">✦</span>
            <div>
              <strong>Encuentra tu favorito</strong>
              <small>Explora nuestra colección</small>
            </div>
          </div>
          <span className="hero-orbit orbit-one" />
          <span className="hero-orbit orbit-two" />
        </div>
      </section>

      <section className="home-categories section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORA POR CATEGORÍA</span>
            <h2>Encuentra lo que buscas</h2>
          </div>
          <Link className="subtle-link" to="/portafolio">
            Ver todo el catálogo <span>→</span>
          </Link>
        </div>
        <div className="category-grid">
          {categorias.map((categoria) => (
            <Link
              className="category-tile"
              to="/portafolio"
              key={categoria.nombre}
            >
              <span className="category-icon">{categoria.icono}</span>
              <span className="category-copy">
                <strong>{categoria.nombre}</strong>
                <small>{categoria.detalle}</small>
              </span>
              <span className="category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECCIÓN K-TRONNIX</span>
            <h2>Productos para descubrir</h2>
            <p>Una selección de nuestra colección tecnológica.</p>
          </div>
          <Link className="button button-outline" to="/portafolio">
            Ver catálogo completo
          </Link>
        </div>
        <div className="product-grid featured-grid">
          {productos.slice(0, 3).map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      <section className="home-promo">
        <div className="promo-copy">
          <span className="eyebrow">TU PRÓXIMO FAVORITO TE ESPERA</span>
          <h2>La tecnología se disfruta más cuando encuentras la indicada.</h2>
          <p>
            Conoce los productos, compara sus características y encuentra el que
            mejor acompaña tu rutina.
          </p>
          <Link className="button" to="/portafolio">
            Descubrir productos <span>→</span>
          </Link>
        </div>
        <div className="promo-art">
          <img
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=85"
            alt="Audífonos inalámbricos"
          />
        </div>
      </section>
    </div>
  );
}

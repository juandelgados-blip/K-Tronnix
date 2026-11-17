import { Link } from 'react-router-dom';

export default function ProductoCard({ producto }) {
  const precio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(producto.precio);
  return (
    <article className="product-card">
      <Link
        className="product-image-link"
        to={`/portafolio/${producto.id}`}
        aria-label={`Ver ${producto.nombre}`}
      >
        <img
          className="product-image"
          src={producto.imagen}
          alt={producto.nombre}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://placehold.co/700x500/f2f0ff/6257c9?text=K-Tronnix';
          }}
        />
        <span className="product-image-badge">{producto.categoria}</span>
        <span className="product-image-arrow">↗</span>
      </Link>
      <div className="product-info">
        <span className="product-category">{producto.categoria}</span>
        <h3>
          <Link to={`/portafolio/${producto.id}`}>{producto.nombre}</Link>
        </h3>
        <p className="product-description">{producto.descripcion}</p>
        <div className="product-bottom">
          <div className="product-price-block">
            <small>Precio</small>
            <strong className="product-price">{precio}</strong>
          </div>
          <Link
            className="button button-small"
            to={`/portafolio/${producto.id}`}
          >
            Ver producto <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

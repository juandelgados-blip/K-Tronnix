import { Link, useParams } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';

export default function DetalleProducto() {
  const { id } = useParams();
  const producto = productos.find((item) => item.id === Number(id));
  if (!producto)
    return (
      <div className="page status-box detail-not-found">
        <h1>Producto no encontrado</h1>
        <p>El producto que buscas no está disponible.</p>
        <Link className="button" to="/portafolio">
          Volver al catálogo
        </Link>
      </div>
    );
  const precio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(producto.precio);
  const relacionados = productos
    .filter(
      (item) => item.id !== producto.id && item.categoria === producto.categoria
    )
    .slice(0, 3);
  return (
    <div className="page detail-page">
      <Link className="back-link" to="/portafolio">
        ← Volver al catálogo
      </Link>
      <section className="detail-layout">
        <div className="detail-gallery">
          <div className="detail-image">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="detail-image-caption">
            <span>✦</span> Una selección K-Tronnix
          </div>
        </div>
        <div className="detail-info">
          <span className="product-category">{producto.categoria}</span>
          <span className="eyebrow detail-kicker">DETALLE DEL PRODUCTO</span>
          <h1>{producto.nombre}</h1>
          <p className="detail-price">{precio}</p>
          <p className="detail-description">{producto.descripcion}</p>
          <div className="detail-divider" />
          <div className="detail-feature">
            <span>✓</span>
            <div>
              <strong>Información clara</strong>
              <small>Consulta las características del producto.</small>
            </div>
          </div>
          <div className="detail-feature">
            <span>✓</span>
            <div>
              <strong>Catálogo organizado</strong>
              <small>Compara opciones de nuestra colección.</small>
            </div>
          </div>
          <Link className="button detail-cta" to="/contacto">
            Solicitar información <span>→</span>
          </Link>
          <p className="detail-disclaimer">
            Producto perteneciente al catálogo demostrativo de K-Tronnix.
          </p>
        </div>
      </section>
      {relacionados.length > 0 && (
        <section className="related-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TAMBIÉN TE PUEDE INTERESAR</span>
              <h2>Más de {producto.categoria}</h2>
            </div>
            <Link className="subtle-link" to="/portafolio">
              Ver catálogo <span>→</span>
            </Link>
          </div>
          <div className="product-grid related-grid">
            {relacionados.map((item) => (
              <ProductoCard key={item.id} producto={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import { useMemo, useState } from 'react';
import { productos } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import FiltroPrecio from '../components/FiltroPrecio';

const precioMaximoCatalogo = Math.max(
  ...productos.map((producto) => producto.precio)
);
const categorias = ['Audio', 'Accesorios', 'Computación', 'Fotografía'];

export default function Portafolio() {
  const [precioMaximo, setPrecioMaximo] = useState(
    String(precioMaximoCatalogo)
  );
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [orden, setOrden] = useState('destacados');
  const productosFiltrados = useMemo(() => {
    const filtrados = productos.filter(
      (producto) =>
        producto.precio <=
          (precioMaximo === '' ? precioMaximoCatalogo : Number(precioMaximo)) &&
        (categoriaActiva === 'Todas' || producto.categoria === categoriaActiva)
    );
    if (orden === 'menor') filtrados.sort((a, b) => a.precio - b.precio);
    if (orden === 'mayor') filtrados.sort((a, b) => b.precio - a.precio);
    return filtrados;
  }, [precioMaximo, categoriaActiva, orden]);
  function limpiarFiltro() {
    setPrecioMaximo(String(precioMaximoCatalogo));
    setCategoriaActiva('Todas');
    setOrden('destacados');
  }

  return (
    <div className="page catalog-page">
      <section className="page-heading catalog-heading">
        <span className="eyebrow">COLECCIÓN K-TRONNIX</span>
        <h1>Encuentra tu próxima conexión.</h1>
        <p>
          Explora nuestra selección de tecnología y accesorios. Filtra por
          categoría o encuentra opciones según tu presupuesto.
        </p>
      </section>
      <div className="catalog-layout">
        <FiltroPrecio
          valor={precioMaximo}
          maximo={precioMaximoCatalogo}
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onCambio={setPrecioMaximo}
          onCategoria={setCategoriaActiva}
          onLimpiar={limpiarFiltro}
        />
        <section className="catalog-results">
          <div className="catalog-results-heading">
            <div>
              <span className="toolbar-label">NUESTRA SELECCIÓN</span>
              <h2>Todos los productos</h2>
              <p>
                {productosFiltrados.length}{' '}
                {productosFiltrados.length === 1
                  ? 'producto encontrado'
                  : 'productos encontrados'}
              </p>
            </div>
            <label className="sort-control">
              Ordenar por
              <select value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="destacados">Destacados</option>
                <option value="menor">Menor precio</option>
                <option value="mayor">Mayor precio</option>
              </select>
            </label>
          </div>
          {productosFiltrados.length > 0 ? (
            <div className="product-grid">
              {productosFiltrados.map((producto) => (
                <ProductoCard key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <div className="status-box">
              <span className="empty-icon">⌕</span>
              <h3>No encontramos productos</h3>
              <p>
                Prueba con otra categoría o aumenta tu presupuesto para ver más
                opciones.
              </p>
              <button type="button" className="button" onClick={limpiarFiltro}>
                Mostrar todos
              </button>
            </div>
          )}
        </section>
      </div>
      <p className="catalog-note">
        Los productos, precios e imágenes son demostrativos y forman parte de
        este proyecto académico.
      </p>
    </div>
  );
}

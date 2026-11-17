export default function FiltroPrecio({
  valor,
  maximo,
  categorias,
  categoriaActiva,
  onCambio,
  onCategoria,
  onLimpiar,
}) {
  const formatoCOP = (cantidad) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(Number(cantidad) || 0);
  return (
    <aside className="filter-panel">
      <div className="filter-panel-heading">
        <div>
          <span className="eyebrow">PERSONALIZA TU BÚSQUEDA</span>
          <h2>Filtros</h2>
        </div>
        <button type="button" className="filter-reset" onClick={onLimpiar}>
          Limpiar
        </button>
      </div>
      <div className="filter-group">
        <h3>Categorías</h3>
        <div className="category-filter-list">
          <button
            type="button"
            className={
              categoriaActiva === 'Todas'
                ? 'category-filter active'
                : 'category-filter'
            }
            onClick={() => onCategoria('Todas')}
          >
            Todas <span>›</span>
          </button>
          {categorias.map((categoria) => (
            <button
              type="button"
              key={categoria}
              className={
                categoriaActiva === categoria
                  ? 'category-filter active'
                  : 'category-filter'
              }
              onClick={() => onCategoria(categoria)}
            >
              {categoria}
              <span>›</span>
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group price-filter-group">
        <div className="filter-label-row">
          <h3>Precio máximo</h3>
          <strong>{formatoCOP(valor)}</strong>
        </div>
        <input
          className="price-range"
          type="range"
          min="0"
          max={maximo}
          step="5000"
          value={Math.min(Number(valor) || 0, maximo)}
          onChange={(e) => onCambio(e.target.value)}
          aria-label="Precio máximo"
        />
        <div className="filter-range-labels">
          <span>$0</span>
          <span>{formatoCOP(maximo)}</span>
        </div>
        <input
          className="price-number"
          type="number"
          min="0"
          max={maximo}
          step="5000"
          value={valor}
          onChange={(e) => onCambio(e.target.value)}
          aria-label="Escribir precio máximo"
        />
      </div>
    </aside>
  );
}

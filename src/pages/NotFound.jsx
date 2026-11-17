
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page not-found">
      <span className="error-code">404</span>
      <span className="eyebrow">PÁGINA NO ENCONTRADA</span>
      <h1>Parece que te has perdido.</h1>
      <p>
        La dirección que intentaste visitar no existe
        o ya no está disponible.
      </p>

      <Link className="button" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

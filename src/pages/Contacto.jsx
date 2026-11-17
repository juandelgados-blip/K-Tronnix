
import { useState } from "react";

const formularioInicial = {
  nombre: "",
  correo: "",
  asunto: "Consulta sobre un producto",
  mensaje: ""
};

export default function Contacto() {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value
    }));

    setEnviado(false);
  }

  function manejarEnvio(e) {
    e.preventDefault();

    setEnviado(true);
    setFormulario(formularioInicial);
  }

  return (
    <div className="page contact-page">
      <section className="page-heading">
        <span className="eyebrow">ESTAMOS PARA AYUDARTE</span>
        <h1>Hablemos de tecnología.</h1>
        <p>
          Completa el formulario si quieres consultar sobre
          nuestros productos o conocer más sobre K-Tronnix.
        </p>
      </section>

      <section className="contact-layout">
        <aside className="contact-aside">
          <span className="eyebrow">CONTACTO</span>
          <h2>¿Cómo podemos ayudarte?</h2>

          <div className="contact-detail">
            <span className="contact-icon">@</span>
            <div>
              <strong>Correo de ejemplo</strong>
              <p>contacto@techno.example</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">U</span>
            <div>
              <strong>Ubicación</strong>
              <p>Bogotá, Colombia</p>
            </div>
          </div>

        </aside>

        <form className="contact-form" onSubmit={manejarEnvio}>
          <h2>Envíanos un mensaje</h2>

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Escribe tu nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              required
              minLength={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="nombre@correo.com"
              value={formulario.correo}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Motivo de contacto</label>
            <select
              id="asunto"
              name="asunto"
              value={formulario.asunto}
              onChange={manejarCambio}
            >
              <option>Consulta sobre un producto</option>
              <option>Información general</option>
              <option>Comentarios o sugerencias</option>
              <option>Otro motivo</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos cómo podemos ayudarte..."
              rows="5"
              value={formulario.mensaje}
              onChange={manejarCambio}
              required
              minLength={10}
            />
          </div>

          <button type="submit" className="button submit-button">
            Enviar mensaje →
          </button>

          {enviado && (
            <div className="success-message" role="status">
              <strong>¡Formulario completado!</strong>
              <p>
                Los datos se validaron correctamente. Esta
                demostración no envía el mensaje a un servidor.
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

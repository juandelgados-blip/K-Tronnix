import { Link } from 'react-router-dom';

export default function Nosotros() {
  return (
    <div className="page about-page">
      <section className="page-heading">
        <span className="eyebrow">ACERCA DE NOSOTROS</span>
        <h1>La tecnología también puede ser sencilla.</h1>
        <p>
          Creemos que descubrir un producto tecnológico debe ser una experiencia
          clara, práctica y agradable.
        </p>
      </section>
      <section className="about-hero">
        <div className="about-copy">
          <span className="eyebrow">NUESTRA HISTORIA</span>
          <h2>Una idea que conecta personas e innovación.</h2>
          <p>
            K-Tronnix es una tienda tecnológica ficticia creada como proyecto
            académico. Su propósito es presentar un catálogo organizado en el
            que las personas puedan conocer productos, consultar precios y
            solicitar información de manera sencilla.
          </p>
          <p>
            Diseñamos esta experiencia alrededor de algo simple: hacer que
            explorar tecnología se sienta fácil y cercano.
          </p>
          <Link className="button button-outline" to="/portafolio">
            Explorar productos <span>→</span>
          </Link>
        </div>
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=85"
            alt="Espacio de trabajo con tecnología"
          />
          <span className="about-image-note">
            <strong>K-Tronnix</strong>
            <small>Tecnología para conectar ideas</small>
          </span>
        </div>
      </section>
      <section className="values-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LO QUE NOS REPRESENTA</span>
            <h2>Una experiencia con propósito</h2>
          </div>
        </div>
        <div className="values-grid">
          <article className="value-card">
            <span className="value-number">01</span>
            <h3>Misión</h3>
            <p>
              Ofrecer una experiencia digital clara para explorar productos
              tecnológicos y consultar sus características.
            </p>
          </article>
          <article className="value-card">
            <span className="value-number">02</span>
            <h3>Visión</h3>
            <p>
              Ser un ejemplo académico de cómo una aplicación web puede
              organizar información y facilitar la navegación.
            </p>
          </article>
          <article className="value-card">
            <span className="value-number">03</span>
            <h3>Valores</h3>
            <p>
              Claridad, innovación, organización y compromiso con una
              experiencia fácil de utilizar.
            </p>
          </article>
        </div>
      </section>
      <section className="home-cta">
        <div>
          <span className="eyebrow">SIGAMOS EXPLORANDO</span>
          <h2>La tecnología que buscas puede estar aquí.</h2>
          <p>Conoce los productos de nuestra colección.</p>
        </div>
        <Link className="button" to="/portafolio">
          Ir al catálogo <span>→</span>
        </Link>
      </section>
    </div>
  );
}

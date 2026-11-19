import { perfil, proyectos, tecnologias } from './data'

function ProyectoCard({ proyecto }) {
  return (
    <article className="card">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <ul className="tags">
        {proyecto.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="botones">
        <a className="btn btn-principal" href={proyecto.demo} target="_blank" rel="noreferrer">
          Ver demo
        </a>
        <a className="btn" href={proyecto.codigo} target="_blank" rel="noreferrer">
          Ver código
        </a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <header className="header">
        <span className="logo">{perfil.nombre}</span>
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="carrera">{perfil.carrera}</p>
          <h1>Hola, soy {perfil.nombre}.</h1>
          <p className="intro">{perfil.intro}</p>
          <a className="btn btn-principal" href="#proyectos">
            Ver mis proyectos
          </a>
        </section>

        <section id="proyectos" className="seccion">
          <h2>Proyectos</h2>
          <div className="grid">
            {proyectos.map((p) => (
              <ProyectoCard key={p.id} proyecto={p} />
            ))}
          </div>
        </section>

        <section id="tecnologias" className="seccion">
          <h2>Tecnologías</h2>
          <ul className="techs">
            {tecnologias.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contacto" className="footer">
        <h2>Contacto</h2>
        <p>Si quieres hablar conmigo, escríbeme o búscame aquí:</p>
        <div className="links">
          <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
          <a href={perfil.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <small>© {new Date().getFullYear()} {perfil.nombre}</small>
      </footer>
    </>
  )
}

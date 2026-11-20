import { useState } from 'react'
import { motion } from 'framer-motion'
import { perfil } from '../data'

export default function Contacto() {
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      window.location.href = `mailto:${perfil.email}`
    }
  }

  const medios = [
    { titulo: 'GitHub', texto: 'Mi código y proyectos', href: perfil.github },
    { titulo: 'LinkedIn', texto: 'Mi perfil profesional', href: perfil.linkedin },
  ]

  return (
    <section className="seccion">
      <h2>Contacto</h2>
      <p className="intro">Si quieres hablar conmigo, escríbeme o búscame aquí:</p>

      <div className="contacto-grid">
        <motion.div className="contacto-card" whileHover={{ y: -5 }}>
          <h3>Correo</h3>
          <p className="correo">{perfil.email}</p>
          <div className="botones">
            <a className="btn btn-principal" href={`mailto:${perfil.email}`}>Escribir</a>
            <button type="button" className="btn" onClick={copiar} aria-live="polite">
              {copiado ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </motion.div>

        {medios.map((m) => (
          <motion.a
            key={m.titulo}
            className="contacto-card enlace"
            href={m.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5 }}
          >
            <h3>{m.titulo}</h3>
            <p>{m.texto}</p>
            <span className="btn btn-principal">Abrir</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

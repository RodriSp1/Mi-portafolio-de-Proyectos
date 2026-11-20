import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Mail, Copy, Send, ExternalLink } from 'lucide-react'
import { perfil } from '../data'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email)
      toast.success('Correo copiado')
    } catch {
      toast.error('No se pudo copiar, usa el botón Escribir')
    }
  }

  const enviar = (e) => {
    e.preventDefault()
    const asunto = encodeURIComponent(`Mensaje de ${nombre} desde tu portafolio`)
    const cuerpo = encodeURIComponent(mensaje)
    toast.success('Abriendo tu app de correo…')
    window.location.href = `mailto:${perfil.email}?subject=${asunto}&body=${cuerpo}`
  }

  const medios = [
    { titulo: 'GitHub', texto: 'Mi código y proyectos', href: perfil.github },
    { titulo: 'LinkedIn', texto: 'Mi perfil profesional', href: perfil.linkedin },
  ]

  return (
    <section className="seccion">
      <title>Contacto · Portafolio</title>
      <h2>Contacto</h2>
      <p className="intro">Si quieres hablar conmigo, escríbeme o búscame aquí:</p>

      <div className="contacto-grid">
        <motion.div className="contacto-card" whileHover={{ y: -5 }}>
          <h3><Mail size={18} aria-hidden="true" /> Correo</h3>
          <p className="correo">{perfil.email}</p>
          <div className="botones">
            <a className="btn btn-principal" href={`mailto:${perfil.email}`}>Escribir</a>
            <button type="button" className="btn" onClick={copiar}>
              <Copy size={14} aria-hidden="true" /> Copiar
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
            <h3><ExternalLink size={18} aria-hidden="true" /> {m.titulo}</h3>
            <p>{m.texto}</p>
            <span className="btn btn-principal">Abrir</span>
          </motion.a>
        ))}
      </div>

      <form className="formulario" onSubmit={enviar}>
        <h3>Mándame un mensaje</h3>
        <label>
          Tu nombre
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required autoComplete="name" />
        </label>
        <label>
          Mensaje
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={5} required />
        </label>
        <button type="submit" className="btn btn-principal">
          <Send size={14} aria-hidden="true" /> Enviar
        </button>
      </form>
    </section>
  )
}

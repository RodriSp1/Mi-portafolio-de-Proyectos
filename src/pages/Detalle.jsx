import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Play, Code, MonitorPlay } from 'lucide-react'
import { proyectos } from '../data'
import NotFound from './NotFound'

function VistaPrevia({ url, titulo }) {
  const [cargar, setCargar] = useState(false)
  if (!cargar) {
    return (
      <button type="button" className="btn vista-boton" onClick={() => setCargar(true)}>
        <MonitorPlay size={16} aria-hidden="true" /> Cargar vista previa
      </button>
    )
  }
  return (
    <iframe
      className="vista-previa"
      title={`Vista previa de ${titulo}`}
      src={url}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  )
}

export default function Detalle() {
  const { id } = useParams()
  const i = proyectos.findIndex((p) => String(p.id) === id)
  if (i < 0) return <NotFound />

  const p = proyectos[i]
  const anterior = proyectos[(i - 1 + proyectos.length) % proyectos.length]
  const siguiente = proyectos[(i + 1) % proyectos.length]

  return (
    <section className="seccion detalle">
      <title>{`${p.titulo} · Portafolio`}</title>
      <Link className="volver" to="/proyectos">
        <ArrowLeft size={14} aria-hidden="true" /> Todos los proyectos
      </Link>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="etiqueta">Proyecto {String(p.id).padStart(2, '0')} de {proyectos.length}</p>
        <h2>{p.titulo}</h2>
        <p className="intro">{p.descripcion}</p>
        <ul className="tags">
          {p.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="botones detalle-botones">
          <a className="btn btn-principal" href={p.demo} target="_blank" rel="noreferrer">
            <Play size={14} aria-hidden="true" /> Prueba
          </a>
          <a className="btn" href={p.codigo} target="_blank" rel="noreferrer">
            <Code size={14} aria-hidden="true" /> Código
          </a>
        </div>
      </motion.div>

      <VistaPrevia key={p.id} url={p.demo} titulo={p.titulo} />

      <nav className="paginacion" aria-label="Otros proyectos">
        <Link to={`/proyectos/${anterior.id}`}>
          <ArrowLeft size={16} aria-hidden="true" /> {anterior.titulo}
        </Link>
        <Link to={`/proyectos/${siguiente.id}`}>
          {siguiente.titulo} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </section>
  )
}

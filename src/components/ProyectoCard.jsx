import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Code } from 'lucide-react'

export default function ProyectoCard({ proyecto }) {
  return (
    <motion.article
      className="card"
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.28 }}
    >
      <h3>
        <Link to={`/proyectos/${proyecto.id}`}>{proyecto.titulo}</Link>
      </h3>
      <p>{proyecto.descripcion}</p>
      <ul className="tags">
        {proyecto.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="botones">
        <a className="btn btn-principal" href={proyecto.demo} target="_blank" rel="noreferrer">
          <Play size={14} aria-hidden="true" /> Prueba
        </a>
        <a className="btn" href={proyecto.codigo} target="_blank" rel="noreferrer">
          <Code size={14} aria-hidden="true" /> Código
        </a>
      </div>
      <Link className="ficha-link" to={`/proyectos/${proyecto.id}`}>
        Ver ficha <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </motion.article>
  )
}

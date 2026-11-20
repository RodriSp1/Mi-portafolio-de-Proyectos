import { motion } from 'framer-motion'

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
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <ul className="tags">
        {proyecto.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="botones">
        <a className="btn btn-principal" href={proyecto.demo} target="_blank" rel="noreferrer">
          Prueba
        </a>
        <a className="btn" href={proyecto.codigo} target="_blank" rel="noreferrer">
          Código
        </a>
      </div>
    </motion.article>
  )
}

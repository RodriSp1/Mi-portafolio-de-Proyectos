import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="seccion no-encontrada">
      <title>404 · Portafolio</title>
      <motion.p
        className="error-codigo"
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        404
      </motion.p>
      <h2>El Omnitrix se quedó sin energía</h2>
      <p className="intro">Esta página no existe. Vuelve al inicio para recargarlo.</p>
      <Link className="btn btn-principal" to="/">
        <ArrowLeft size={14} aria-hidden="true" /> Volver al inicio
      </Link>
    </section>
  )
}

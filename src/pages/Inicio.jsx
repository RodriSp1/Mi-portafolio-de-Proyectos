import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { perfil, proyectos, tecnologias } from '../data'
import Omnitrix from '../components/Omnitrix'
import ProyectoCard from '../components/ProyectoCard'
import Contador from '../components/Contador'

const conApi = proyectos.filter((p) => p.tags.includes('API')).length

const estadisticas = [
  { valor: proyectos.length, texto: 'Proyectos' },
  { valor: tecnologias.length, texto: 'Tecnologías' },
  { valor: conApi, texto: 'Con API' },
]

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <p className="carrera">{perfil.carrera}</p>
          <h1>Hola, soy {perfil.nombre}.</h1>
          <p className="intro">{perfil.intro}</p>
          <div className="botones">
            <Link className="btn btn-principal" to="/proyectos">Ver mis proyectos</Link>
            <Link className="btn" to="/contacto">Contáctame</Link>
          </div>
        </div>
        <Omnitrix />
      </section>

      <section className="stats" aria-label="Resumen">
        {estadisticas.map((e, k) => (
          <motion.div
            key={e.texto}
            className="stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: k * 0.1 }}
          >
            <strong><Contador valor={e.valor} /></strong>
            <span>{e.texto}</span>
          </motion.div>
        ))}
      </section>

      <section className="seccion">
        <h2>Proyectos destacados</h2>
        <div className="grid">
          <AnimatePresence>
            {proyectos.slice(0, 3).map((p) => (
              <ProyectoCard key={p.id} proyecto={p} />
            ))}
          </AnimatePresence>
        </div>
        <div className="centrado">
          <Link className="btn" to="/proyectos">Ver los {proyectos.length} proyectos</Link>
        </div>
      </section>
    </>
  )
}

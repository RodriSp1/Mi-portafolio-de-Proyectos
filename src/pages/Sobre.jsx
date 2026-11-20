import { motion } from 'framer-motion'
import { perfil, proyectos, tecnologias } from '../data'

export default function Sobre() {
  return (
    <>
      <section className="seccion">
        <h2>Sobre mí</h2>
        <div className="ficha">
          <div className="ficha-datos">
            <p className="etiqueta">Nombre</p>
            <p>{perfil.nombre}</p>
            <p className="etiqueta">Carrera</p>
            <p>{perfil.carrera}</p>
            <p className="etiqueta">Proyectos</p>
            <p>{proyectos.length} publicados en GitHub Pages</p>
          </div>
          <p className="ficha-texto">{perfil.intro}</p>
        </div>
      </section>

      <section className="seccion">
        <h2>Tecnologías</h2>
        <ul className="techs">
          {tecnologias.map((t, k) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.05, type: 'spring', stiffness: 200, damping: 14 }}
            >
              {t}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  )
}

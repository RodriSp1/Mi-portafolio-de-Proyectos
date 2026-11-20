import { motion } from 'framer-motion'
import { sobreMi } from '../data'

export default function Sobre() {
  return (
    <section className="seccion">
      <title>Sobre mí · Portafolio</title>
      <h2>Sobre mí</h2>

      <div className="sobre-grid">
        <div className="sobre-texto">
          {sobreMi.parrafos.map((p, k) => (
            <motion.p
              key={k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="conocimientos">
          <h3>Conocimientos técnicos</h3>
          {sobreMi.conocimientos.map((g, k) => (
            <motion.div
              key={g.titulo}
              className="grupo"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.1 }}
            >
              <h4>{g.titulo}</h4>
              <ul className="chips">
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          <p className="nivel">{sobreMi.nivel}</p>
        </div>
      </div>
    </section>
  )
}

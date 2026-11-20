import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import { Atom, Gamepad2, UserRound, ArrowRight } from 'lucide-react'
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

const explorar = [
  { to: '/aliens', titulo: 'Mis aliens', texto: 'Mis herramientas en un carrusel 3D.', Icono: Atom },
  { to: '/juego', titulo: 'Memorama', texto: 'Un juego hecho con React y estado.', Icono: Gamepad2 },
  { to: '/sobre-mi', titulo: 'Sobre mí', texto: 'Mi ficha y mis tecnologías.', Icono: UserRound },
]

export default function Inicio() {
  return (
    <>
      <title>{`Inicio · Portafolio de ${perfil.nombre}`}</title>
      <section className="hero">
        <div className="hero-texto">
          <p className="carrera">{perfil.carrera}</p>
          <h1>Hola, soy {perfil.nombre}.</h1>
          <p className="escribiendo" aria-hidden="true">
            <TypeAnimation
              sequence={[
                'Desarrollo web con React', 1800,
                'Proyectos con HTML, CSS y JavaScript', 1800,
                'Aprendiendo y creando cada semana', 1800,
              ]}
              speed={55}
              deletionSpeed={70}
              repeat={Infinity}
              cursor
            />
          </p>
          <p className="intro">{perfil.intro}</p>
          <div className="botones">
            <Link className="btn btn-principal" to="/proyectos">Ver mis proyectos</Link>
            <Link className="btn" to="/contacto">Contáctame</Link>
          </div>
        </div>
        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03} transitionSpeed={900}>
          <Omnitrix />
        </Tilt>
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

      <section className="seccion">
        <h2>Explora</h2>
        <div className="explorar">
          {explorar.map(({ to, titulo, texto, Icono }) => (
            <Tilt key={to} tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.15} glareColor="#39ff14">
              <Link to={to} className="explorar-card">
                <Icono size={30} aria-hidden="true" />
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <span className="ficha-link">Entrar <ArrowRight size={14} aria-hidden="true" /></span>
              </Link>
            </Tilt>
          ))}
        </div>
      </section>
    </>
  )
}

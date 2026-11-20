import { useEffect } from 'react'
import { Routes, Route, NavLink, Link, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { perfil } from './data'
import Inicio from './pages/Inicio'
import Proyectos from './pages/Proyectos'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/proyectos', texto: 'Proyectos' },
  { to: '/sobre-mi', texto: 'Sobre mí' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-icono" aria-hidden="true" />
          {perfil.nombre}
        </Link>
        <nav aria-label="Principal">
          {enlaces.map((e) => (
            <NavLink key={e.to} to={e.to} end={e.end}>
              {e.texto}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* destello verde al cambiar de página */}
      <motion.div
        key={location.pathname}
        className="flash"
        aria-hidden="true"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="pagina"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={<Sobre />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {perfil.nombre} · Hecho con React</small>
      </footer>
    </>
  )
}

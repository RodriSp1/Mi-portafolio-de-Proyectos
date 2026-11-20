import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { Menu, X } from 'lucide-react'
import { perfil } from './data'
import Inicio from './pages/Inicio'
import Proyectos from './pages/Proyectos'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

// Páginas pesadas: se cargan solo cuando se visitan
const Detalle = lazy(() => import('./pages/Detalle'))
const Aliens = lazy(() => import('./pages/Aliens'))
const Juego = lazy(() => import('./pages/Juego'))

const enlaces = [
  { to: '/', texto: 'Inicio', end: true },
  { to: '/proyectos', texto: 'Proyectos' },
  { to: '/aliens', texto: 'Aliens' },
  { to: '/juego', texto: 'Juego' },
  { to: '/sobre-mi', texto: 'Sobre mí' },
  { to: '/contacto', texto: 'Contacto' },
]

export default function App() {
  const location = useLocation()
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll()
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenu(false)
  }, [location.pathname])

  return (
    <>
      <motion.div className="progreso" style={{ scaleX: progreso }} aria-hidden="true" />

      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-icono" aria-hidden="true" />
          {perfil.nombre}
        </Link>
        <button
          type="button"
          className="menu-boton"
          aria-expanded={menu}
          aria-controls="nav-principal"
          aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenu((m) => !m)}
        >
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="nav-principal" className={menu ? 'abierto' : ''} aria-label="Principal">
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
          <Suspense fallback={<p className="cargando">Cargando…</p>}>
          <Routes location={location}>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/:id" element={<Detalle />} />
            <Route path="/aliens" element={<Aliens />} />
            <Route path="/juego" element={<Juego />} />
            <Route path="/sobre-mi" element={<Sobre />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <footer className="footer">
        <small>© {new Date().getFullYear()} {perfil.nombre} · Hecho con React</small>
      </footer>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: '#0f160f', color: '#e9f7e9', border: '2px solid #39ff14' },
          iconTheme: { primary: '#39ff14', secondary: '#000' },
        }}
      />
    </>
  )
}

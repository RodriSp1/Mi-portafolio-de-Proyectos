import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { RotateCcw, Trophy, Hourglass } from 'lucide-react'
import { tecnologias } from '../data'

function barajar() {
  const mazo = [...tecnologias, ...tecnologias].map((tech, id) => ({ id, tech }))
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[mazo[i], mazo[j]] = [mazo[j], mazo[i]]
  }
  return mazo
}

function leerMejor() {
  try {
    return Number(localStorage.getItem('memoria-mejor')) || null
  } catch {
    return null
  }
}

export default function Juego() {
  const [cartas, setCartas] = useState(barajar)
  const [abiertas, setAbiertas] = useState([])
  const [pares, setPares] = useState([])
  const [movs, setMovs] = useState(0)
  const [bloqueo, setBloqueo] = useState(false)
  const [mejor, setMejor] = useState(leerMejor)
  const temporizador = useRef(null)

  const gano = pares.length === tecnologias.length

  useEffect(() => () => clearTimeout(temporizador.current), [])

  useEffect(() => {
    if (!gano) return
    toast.success(`¡Ganaste en ${movs} movimientos!`, { id: 'victoria' })
    if (!mejor || movs < mejor) {
      setMejor(movs)
      try {
        localStorage.setItem('memoria-mejor', String(movs))
      } catch {
        /* sin almacenamiento disponible */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gano])

  const voltear = (i) => {
    const carta = cartas[i]
    if (bloqueo || abiertas.includes(i) || pares.includes(carta.tech)) return
    const nuevas = [...abiertas, i]
    setAbiertas(nuevas)
    if (nuevas.length < 2) return

    setMovs((m) => m + 1)
    const [a, b] = nuevas
    if (cartas[a].tech === cartas[b].tech) {
      setPares((p) => [...p, carta.tech])
      setAbiertas([])
    } else {
      setBloqueo(true)
      temporizador.current = setTimeout(() => {
        setAbiertas([])
        setBloqueo(false)
      }, 800)
    }
  }

  const reiniciar = () => {
    clearTimeout(temporizador.current)
    setCartas(barajar())
    setAbiertas([])
    setPares([])
    setMovs(0)
    setBloqueo(false)
  }

  return (
    <section className="seccion">
      <title>Memorama · Portafolio</title>
      <h2>Memorama Omnitrix</h2>
      <p className="intro">Encuentra las parejas de tecnologías con la menor cantidad de movimientos.</p>

      <div className="juego-barra">
        <span>Movimientos: <strong>{movs}</strong></span>
        <span>
          <Trophy size={16} aria-hidden="true" /> Mejor: <strong>{mejor ?? '—'}</strong>
        </span>
        <button type="button" className="btn" onClick={reiniciar}>
          <RotateCcw size={14} aria-hidden="true" /> Reiniciar
        </button>
      </div>

      <div className="tablero">
        {cartas.map((c, i) => {
          const visible = abiertas.includes(i) || pares.includes(c.tech)
          return (
            <button
              key={c.id}
              type="button"
              className={`carta ${pares.includes(c.tech) ? 'par' : ''}`}
              onClick={() => voltear(i)}
              aria-label={visible ? c.tech : 'Carta boca abajo'}
            >
              <motion.div
                className="carta-inner"
                animate={{ rotateY: visible ? 180 : 0 }}
                transition={{ duration: 0.35 }}
              >
                <span className="cara frente"><Hourglass size={28} aria-hidden="true" /></span>
                <span className="cara dorso">{c.tech}</span>
              </motion.div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

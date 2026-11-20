import { useState } from 'react'
import { motion } from 'framer-motion'

// Cada "alienígena" representa una tecnología del portafolio.
const formas = [
  { alien: 'Cuatrobrazos', tech: 'HTML' },
  { alien: 'Diamante', tech: 'CSS' },
  { alien: 'XLR8', tech: 'JavaScript' },
  { alien: 'Materia Gris', tech: 'React' },
]

export default function Omnitrix() {
  const [i, setI] = useState(-1)
  const [giros, setGiros] = useState(0)

  const activar = () => {
    setI((v) => (v + 1) % formas.length)
    setGiros((g) => g + 1)
  }

  const forma = formas[i]

  return (
    <div className="omnitrix-caja">
      <motion.button
        type="button"
        className="omnitrix"
        onClick={activar}
        aria-label="Activar el Omnitrix"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
      >
        <svg viewBox="0 0 200 200" role="img" aria-hidden="true">
          <circle cx="100" cy="100" r="92" className="omni-anillo" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '100px', originY: '100px' }}
          >
            {Array.from({ length: 24 }).map((_, k) => (
              <line key={k} x1="100" y1="14" x2="100" y2={k % 2 ? 20 : 26}
                transform={`rotate(${k * 15} 100 100)`} className="omni-marca" />
            ))}
          </motion.g>
          <circle cx="100" cy="100" r="62" className="omni-centro" />
          <motion.polygon
            points="74,58 126,58 106,100 126,142 74,142 94,100"
            className="omni-reloj"
            animate={{ rotate: giros * 180 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            style={{ originX: '100px', originY: '100px' }}
          />
        </svg>
      </motion.button>
      <p className="omnitrix-texto" aria-live="polite">
        {forma ? (
          <>
            <strong>{forma.alien}</strong> = {forma.tech}
          </>
        ) : (
          'Toca el Omnitrix'
        )}
      </p>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Contador({ valor }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })
  const [numero, setNumero] = useState(0)

  useEffect(() => {
    if (!visible) return
    const control = animate(0, valor, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setNumero(Math.round(v)),
    })
    return () => control.stop()
  }, [visible, valor])

  return <span ref={ref}>{numero}</span>
}

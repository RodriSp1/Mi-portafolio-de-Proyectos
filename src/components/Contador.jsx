import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

export default function Contador({ valor }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true })

  useEffect(() => {
    if (!visible) return
    const control = animate(0, valor, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v)
      },
    })
    return () => control.stop()
  }, [visible, valor])

  return <span ref={ref}>0</span>
}

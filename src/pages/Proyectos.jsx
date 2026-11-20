import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { proyectos } from '../data'
import ProyectoCard from '../components/ProyectoCard'

export default function Proyectos() {
  const etiquetas = useMemo(() => ['Todos', ...new Set(proyectos.flatMap((p) => p.tags))], [])
  const [filtro, setFiltro] = useState('Todos')

  const visibles = filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.tags.includes(filtro))

  return (
    <section className="seccion">
      <title>Proyectos · Portafolio</title>
      <h2>Proyectos</h2>

      <div className="filtros" role="group" aria-label="Filtrar por tecnología">
        {etiquetas.map((t) => (
          <button
            key={t}
            type="button"
            className="chip"
            aria-pressed={filtro === t}
            onClick={() => setFiltro(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <p className="contador-resultados" aria-live="polite">
        {visibles.length} {visibles.length === 1 ? 'proyecto' : 'proyectos'}
      </p>

      <div className="grid">
        <AnimatePresence mode="popLayout">
          {visibles.map((p) => (
            <ProyectoCard key={p.id} proyecto={p} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

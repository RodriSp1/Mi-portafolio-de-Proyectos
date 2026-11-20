import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules'
import {
  Code, Palette, Zap, Atom, GitBranch, Rocket, Smartphone, PenTool,
} from 'lucide-react'
import { aliens } from '../aliensData'
import { proyectos } from '../data'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const iconos = { Code, Palette, Zap, Atom, GitBranch, Rocket, Smartphone, PenTool }

function usos(tech) {
  if (tech === 'Git y GitHub') return `En los ${proyectos.length} proyectos`
  const n = proyectos.filter((p) => p.tags.includes(tech)).length
  return n > 0 ? `En ${n} ${n === 1 ? 'proyecto' : 'proyectos'}` : 'En este portafolio'
}

export default function Aliens() {
  return (
    <section className="seccion">
      <title>Aliens · Portafolio</title>
      <h2>Mis aliens</h2>
      <p className="intro">
        Cada alien del Omnitrix representa una herramienta que uso. Desliza, usa las flechas o el teclado.
      </p>

      <Swiper
        className="aliens-swiper"
        modules={[EffectCoverflow, Navigation, Pagination, Keyboard]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={3}
        keyboard
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{ rotate: 28, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
      >
        {aliens.map((a) => {
          const Icono = iconos[a.icono]
          return (
            <SwiperSlide key={a.alien} className="alien-slide">
              <div className="alien-card">
                <Icono size={54} strokeWidth={1.6} aria-hidden="true" />
                <p className="etiqueta">{a.alien}</p>
                <h3>{a.tech}</h3>
                <p>{a.texto}</p>
                <span className="alien-usos">{usos(a.tech)}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

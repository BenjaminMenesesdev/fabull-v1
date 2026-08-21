import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Truck } from 'lucide-react'

// TODO: agrega las fotos reales en /public (ej: /flota/partner.jpg) y reemplaza el campo "image".
// Modelos segun flota real de Transportes Fabull SpA.
const vehiculos = [
  { id: 'partner-1', nombre: 'Peugeot Partner', badge: 'FURGÓN LIVIANO', uso: 'Reparto ágil entre locales', capacidad: 'Furgón liviano', estado: 'En flota', image: null },
  { id: 'partner-2', nombre: 'Peugeot Partner', badge: 'FURGÓN LIVIANO', uso: 'Reparto ágil entre locales', capacidad: 'Furgón liviano', estado: 'En flota', image: null },
  { id: 'partner-3', nombre: 'Peugeot Partner', badge: 'FURGÓN LIVIANO', uso: 'Reparto ágil entre locales', capacidad: 'Furgón liviano', estado: 'En flota', image: null },
  { id: 'boxer-1', nombre: 'Peugeot Boxer', badge: 'MAYOR VOLUMEN', uso: 'Despachos con más carga en una sola vuelta', capacidad: '13 m³', estado: 'En flota', image: null },
]

export default function Fleet() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [start, setStart] = useState(0)
  const visible = 3

  const canPrev = start > 0
  const canNext = start + visible < vehiculos.length

  const prev = () => canPrev && setStart(s => s - 1)
  const next = () => canNext && setStart(s => s + 1)

  const visibleItems = vehiculos.slice(start, start + visible)

  return (
    <section ref={ref} className="fleet-carousel">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="reviews__overline">Nuestra flota</span>
          <h2 className="reviews__title">VEHÍCULOS<br /><span>DISPONIBLES</span></h2>
        </motion.div>

        <div className="fleet-carousel__wrap">
          <button
            className="reviews__btn"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Anterior"
            style={{ opacity: canPrev ? 1 : 0.3, cursor: canPrev ? 'pointer' : 'default' }}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="fleet-carousel__track">
            {visibleItems.map((v, i) => (
              <motion.div
                key={v.id}
                className="fleet-carousel__card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="fleet-carousel__image">
                  {v.image ? (
                    <img src={v.image} alt={v.nombre} />
                  ) : (
                    <div className="fleet-carousel__placeholder">
                      <Truck size={40} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <span className="fleet-carousel__badge">{v.badge}</span>
                <h3 className="fleet-carousel__name">{v.nombre}</h3>
                <p className="fleet-carousel__uso-text">{v.uso}</p>
                <div className="fleet-carousel__specs">
                  <div>
                    <span className="fleet-carousel__label">Capacidad</span>
                    <span className="fleet-carousel__value">{v.capacidad}</span>
                  </div>
                  <div>
                    <span className="fleet-carousel__label">Estado</span>
                    <span className="fleet-carousel__value">{v.estado}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className="reviews__btn"
            onClick={next}
            disabled={!canNext}
            aria-label="Siguiente"
            style={{ opacity: canNext ? 1 : 0.3, cursor: canNext ? 'pointer' : 'default' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="reviews__dots" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          {vehiculos.map((_, i) => (
            <button
              key={i}
              className={`reviews__dot${i === start ? ' active' : ''}`}
              onClick={() => setStart(Math.min(i, vehiculos.length - visible))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

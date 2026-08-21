import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Truck } from 'lucide-react'

// TODO: agrega las fotos en /public (ej: /flota/partner.jpg) y reemplaza el campo "image" de cada vehiculo.
const vehiculos = [
  { id: 'partner-l1', nombre: 'Peugeot Partner', anio: 2026, badge: 'FURGÓN · L1', uso: 'Última milla', estado: 'En flota', image: null },
  { id: 'berlingo-m', nombre: 'Citroën Berlingo', anio: 2021, badge: 'FURGÓN · M', uso: 'Reparto a locales', estado: 'En flota', image: null },
  { id: 'partner-maxi', nombre: 'Peugeot Partner Maxi', anio: 2016, badge: 'FURGÓN · MAXI', uso: 'Última milla', estado: 'En flota', image: null },
  { id: 'boxer-l3', nombre: 'Peugeot Boxer', anio: 2022, badge: 'FURGÓN · L3', uso: 'Carga mayor', estado: 'En flota', image: null },
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
                <span className="fleet-carousel__year">{v.anio}</span>
                <div className="fleet-carousel__specs">
                  <div>
                    <span className="fleet-carousel__label">Uso</span>
                    <span className="fleet-carousel__value">{v.uso}</span>
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

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Package, Truck, Car, MapPin, Route, ArrowUpRight } from 'lucide-react'

const services = [
  { id: 'reparto-locales', icon: Package, title: 'Reparto a Locales', description: 'Insumos y mercadería directo a tus puntos de venta, con flota propia y disponibilidad flexible.', highlight: 'Insumos y mercadería', color: '#4FB3E8' },
  { id: 'ultima-milla', icon: Truck, title: 'Distribución Última Milla', description: 'Desde tu bodega hasta el destino final, con trazabilidad del pedido en cada etapa del recorrido.', highlight: 'Última milla', color: '#2a8ac4' },
  { id: 'vehiculo-dedicado', icon: Car, title: 'Vehículo Dedicado', description: 'Furgón y chofer reservado exclusivamente para tu operación, contratado por día o por mes.', highlight: 'Por día o mes', color: '#1a3a5c' },
  { id: 'fletes-puntuales', icon: MapPin, title: 'Fletes Puntuales', description: 'Despachos puerta a puerta cuando los necesites, sin contratos ni compromisos de largo plazo.', highlight: 'Puerta a puerta', color: '#3a9db5' },
  { id: 'ruta-multipunto', icon: Route, title: 'Ruta Multipunto', description: 'Varias entregas coordinadas en un mismo recorrido, optimizando tiempos y costos de traslado.', highlight: 'Multipunto', color: '#4FB3E8' },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="services">
      <div className="container">
        <motion.div className="services__header"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className="services__overline">Lo que hacemos</span>
          <h2 className="services__title">SERVICIOS<br /><span>DE TRANSPORTE</span></h2>
          <p className="services__desc">Transporte y distribución de última milla en la Región Metropolitana, con flota propia y disponibilidad flexible de horarios.</p>
        </motion.div>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div key={s.id} className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}>
              <div className="service-card__top">
                <div className="service-card__icon" style={{ background: `${s.color}18`, border: `1.5px solid ${s.color}30` }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <span className="service-card__badge" style={{ color: s.color, borderColor: `${s.color}40` }}>
                  {s.highlight}
                </span>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <Link to={`/servicios/${s.id}`} className="service-card__link" style={{ color: s.color }}>
                Ver más <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

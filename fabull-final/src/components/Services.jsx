import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Package, Truck, Car, MapPin, Route } from 'lucide-react'

const services = [
  {
    id: 'reparto-locales',
    icon: Package,
    badge: 'INSUMOS Y MERCADERÍA',
    title: 'Reparto a Locales',
    text: 'Insumos y mercadería directo a tus puntos de venta, con flota propia y disponibilidad flexible.',
  },
  {
    id: 'ultima-milla',
    icon: Truck,
    badge: 'ÚLTIMA MILLA',
    title: 'Distribución Última Milla',
    text: 'Desde tu bodega hasta el destino final, con trazabilidad del pedido en cada etapa del recorrido.',
  },
  {
    id: 'vehiculo-dedicado',
    icon: Car,
    badge: 'POR DÍA O MES',
    title: 'Vehículo Dedicado',
    text: 'Furgón y chofer reservados exclusivamente para tu operación, contratado por día o por mes.',
  },
  {
    id: 'fletes-puntuales',
    icon: MapPin,
    badge: 'PUERTA A PUERTA',
    title: 'Fletes Puntuales',
    text: 'Despachos puerta a puerta cuando los necesites, sin contratos ni compromisos de largo plazo.',
  },
  {
    id: 'ruta-multipunto',
    icon: Route,
    badge: 'MULTIPUNTO',
    title: 'Ruta Multipunto',
    text: 'Varias entregas coordinadas en un mismo recorrido, optimizando tiempos y costos de reparto.',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <span className="services__overline">Qué hacemos</span>
        <h2 className="services__title">NUESTROS SERVICIOS</h2>
        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="service-card__top">
                  <span className="service-card__icon"><Icon size={20} /></span>
                  <span className="service-card__badge">{s.badge}</span>
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__text">{s.text}</p>
                <Link to={`/servicios/${s.id}`} className="service-card__link">
                  VER MÁS ↗
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

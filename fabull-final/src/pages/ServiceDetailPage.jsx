import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'

const serviceData = {
  'reparto-locales': {
    title: 'REPARTO A LOCALES',
    subtitle: 'Insumos y mercadería directo a tus puntos de venta',
    description: 'Llevamos insumos y mercadería directo a tus locales y tiendas, con flota propia y disponibilidad flexible de horarios, incluido turno nocturno.',
    features: ['Flota propia (Peugeot Partner y Boxer)', 'Disponibilidad de horarios flexible', 'Turno nocturno disponible', 'Cobertura Región Metropolitana', 'Experiencia en retail y farmacias'],
  },
  'ultima-milla': {
    title: 'DISTRIBUCIÓN ÚLTIMA MILLA',
    subtitle: 'Desde tu bodega hasta el destino final',
    description: 'Distribución de última milla con trazabilidad completa: cada despacho pasa por nuestra plataforma de seguimiento, web y aplicación de entrega.',
    features: ['Seguimiento en tiempo real (recogido, en ruta, entregado)', 'Plataforma propia de tracking', 'Flota propia sin intermediarios', 'Cliente actual: DBS', 'Cobertura Región Metropolitana'],
  },
  'vehiculo-dedicado': {
    title: 'VEHÍCULO DEDICADO',
    subtitle: 'Furgón y chofer reservado para tu operación',
    description: 'Arrienda un vehículo dedicado con chofer para tu operación, contratado por día o por mes, con la flexibilidad que tu negocio necesita.',
    features: ['Contratación por día o por mes', 'Furgón tipo Partner o Boxer (13 m³)', 'Chofer incluido', 'Empresa formal (SpA) con facturación electrónica', 'Disponible de inmediato'],
  },
  'fletes-puntuales': {
    title: 'FLETES PUNTUALES',
    subtitle: 'Despachos puerta a puerta cuando los necesites',
    description: 'Fletes puntuales origen-destino, sin contratos de largo plazo, para cuando tu operación necesita un despacho puntual y confiable.',
    features: ['Despachos puerta a puerta', 'Sin compromisos de largo plazo', 'Cobertura Región Metropolitana', 'Viajes fuera de Santiago según acuerdo', 'Respuesta rápida por WhatsApp'],
  },
  'ruta-multipunto': {
    title: 'RUTA MULTIPUNTO',
    subtitle: 'Varias entregas coordinadas en un mismo recorrido',
    description: 'Coordinamos varias entregas en un mismo recorrido, optimizando tiempos y costos para reparto a múltiples locales o direcciones.',
    features: ['Varias entregas en un mismo viaje', 'Optimización de rutas', 'Ideal para reparto a múltiples locales', 'Cliente actual: Glam & Co', 'Flota propia y disponible de inmediato'],
  },
}

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = serviceData[id] || serviceData['ultima-milla']

  return (
    <main className="service-detail">
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link to="/" className="service-detail__back"><ArrowLeft size={16} /> Volver</Link>
        </motion.div>
        <motion.div className="service-detail__hero" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h1 className="service-detail__title">{service.title}</h1>
          <p className="service-detail__subtitle">{service.subtitle}</p>
          <p className="service-detail__desc">{service.description}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <h2 className="service-detail__feat-title">Qué incluye</h2>
          <div className="service-detail__feat-grid">
            {service.features.map((f, i) => (
              <motion.div key={f} className="service-detail__feat"
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.06 }}>
                <CheckCircle size={18} style={{ color: 'var(--blue)', flexShrink: 0 }} />{f}
              </motion.div>
            ))}
          </div>
          <a href="https://wa.me/56992205612?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20este%20servicio" target="_blank" rel="noopener noreferrer" className="service-detail__cta">Consultar por WhatsApp →</a>
        </motion.div>
      </div>
    </main>
  )
}

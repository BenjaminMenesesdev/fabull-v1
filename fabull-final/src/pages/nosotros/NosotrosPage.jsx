import { motion } from 'framer-motion'

export default function NosotrosPage() {
  return (
    <main className="nosotros-page">
      <div className="nosotros-hero">
        <div className="container">
          <motion.span className="nosotros-hero__overline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Nuestra historia
          </motion.span>
          <motion.h1 className="nosotros-hero__title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            TRANSPORTE Y DISTRIBUCIÓN<br /><span>DE ÚLTIMA MILLA</span>
          </motion.h1>
          <motion.p className="nosotros-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
            Transportes Fabull SpA es una empresa de transporte con base en Santiago, operando desde 2020. Nos especializamos en distribución de última milla y reparto de insumos y mercadería a locales y tiendas, con flota propia y disponibilidad flexible de horarios.
          </motion.p>
        </div>
      </div>
      <div className="nosotros-mission">
        <div className="container">
          <div className="nosotros-mission__grid">
            {[
              { label: 'Misión', text: 'Entregar un servicio de transporte formal y confiable en la Región Metropolitana, con flota propia disponible de inmediato y flexibilidad de horarios, incluido turno nocturno.' },
              { label: 'Visión', text: 'Ser la alternativa de referencia para retail y farmacias que necesitan última milla y reparto a locales, con la trazabilidad de un operador grande y el trato directo de uno chico.' },
              { label: 'Valores', text: 'Formalidad (empresa SpA con facturación electrónica), experiencia comprobada en última milla y retail/farmacias, y flexibilidad total de horarios.' },
            ].map((item, i) => (
              <motion.div key={item.label} className="nosotros-mission__card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                <span className="nosotros-mission__label">{item.label}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

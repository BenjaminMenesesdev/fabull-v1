import { motion } from 'framer-motion'

const highlights = [
  {
    n: '01',
    title: 'Flota propia',
    text: 'Peugeot Partner y Boxer disponibles de inmediato, sin depender de terceros.',
  },
  {
    n: '02',
    title: 'Trazabilidad',
    text: 'Plataforma propia de seguimiento: recogido, en ruta y entregado, en tiempo real.',
  },
  {
    n: '03',
    title: 'Formalidad',
    text: 'Empresa SpA con facturación electrónica y experiencia comprobada en retail y farmacias.',
  },
]

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about__layout">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="about__overline">Quiénes somos</span>
          <h2 className="about__title">SOMOS<br /><span>FABULL</span></h2>
          <p className="about__text">
            Transportes Fabull SpA es una empresa de transporte con base en Santiago, operando desde 2020.
            Nos especializamos en distribución de última milla y reparto de insumos y mercadería a locales
            y tiendas, con flota propia y disponibilidad flexible de horarios, incluido turno nocturno.
          </p>
          <div className="about__badge">
            <span className="about__badge-dot" />
            Región Metropolitana · Desde 2020
          </div>
        </motion.div>
        <div className="about__highlights">
          {highlights.map((h, i) => (
            <motion.div
              key={h.n}
              className="about__highlight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="about__highlight-n">{h.n}</span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

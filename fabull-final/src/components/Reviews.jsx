import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiencia = [
  { name: 'DBS', tag: 'Última milla', status: 'ACTUAL' },
  { name: 'Glam & Co', tag: 'Reparto a locales', status: 'ACTUAL' },
  { name: 'Salcobrand', tag: 'Reparto nocturno', status: 'EXPERIENCIA PREVIA' },
]

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="reviews">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="reviews__overline">Experiencia</span>
          <h2 className="reviews__title">CLIENTES QUE<br /><span>CONFÍAN EN NOSOTROS</span></h2>
        </motion.div>

        <motion.div className="reviews__carousel" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          {experiencia.map((item, i) => (
            <motion.div
              key={item.name}
              className="reviews__card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              style={{ marginBottom: i !== experiencia.length - 1 ? '1rem' : 0 }}
            >
              <div className="reviews__author" style={{ justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="reviews__avatar">{item.name[0]}</div>
                  <div>
                    <div className="reviews__name">{item.name}</div>
                    <div className="reviews__company">{item.tag}</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: item.status === 'ACTUAL' ? '#4FB3E8' : '#8a8f98',
                    border: `1px solid ${item.status === 'ACTUAL' ? '#4FB3E8' : '#8a8f98'}`,
                    borderRadius: '999px',
                    padding: '0.2rem 0.7rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

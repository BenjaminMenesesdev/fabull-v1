import { motion } from 'framer-motion'
import WhatsAppIcon from '../components/WhatsAppIcon'

export default function ContactoPage() {
  return (
    <main className="contacto-page">
      <div className="container">
        <div className="contacto-page__layout">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="contacto-page__overline">Contacto</span>
            <h1 className="contacto-page__title">CUÉNTANOS<br /><span>TU RETO</span></h1>
            <p className="contacto-page__desc">Escríbenos directo por WhatsApp y uno de nuestros especialistas te responderá a la brevedad.</p>
            <div className="contacto-page__guarantees">
              {['Respuesta rápida', 'Sin compromiso', 'Asesoría gratuita'].map(g => (
                <div key={g} className="contacto-page__guarantee">
                  <span className="contacto-page__guarantee-dot" />{g}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="contacto-page__form-wrap" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <a
              href="https://wa.me/56992205612?text=Hola%2C%20quiero%20conversar%20sobre%20mi%20operaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="form-submit"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              Conversar por WhatsApp <WhatsAppIcon size={20} color="#25D366" />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

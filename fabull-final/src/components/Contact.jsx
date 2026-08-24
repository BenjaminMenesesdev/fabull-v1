import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <motion.div
          className="contact-section__inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-section__overline">¿Listo para empezar?</span>
          <h2 className="contact-section__title">
            HABLEMOS<br /><span>HOY</span>
          </h2>
          <p className="contact-section__desc">
            Cuéntanos sobre tu operación y te diseñamos una solución a medida. Respuesta directa por WhatsApp.
          </p>

          <div className="contact-section__actions">
            <a
              href="https://wa.me/56992205612?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20Fabull"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-section__btn"
            >
              CONTÁCTANOS POR NUESTRO WHATSAPP <WhatsAppIcon size={20} color="#25D366" />
            </a>
          </div>

          <div className="contact-section__info">
            <div className="contact-section__info-item">
              <span className="contact-section__icon"><WhatsAppIcon size={20} color="#25D366" /></span>
              <div>
                <span className="contact-section__label">WhatsApp</span>
                <p>+56 9 9220 5612</p>
              </div>
            </div>
            <div className="contact-section__info-item">
              <span className="contact-section__icon"><MapPin size={20} color="#4FB3E8" /></span>
              <div>
                <span className="contact-section__label">Cobertura</span>
                <p>Región Metropolitana</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

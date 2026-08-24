import { Link } from 'react-router-dom'
import BullLogo from './BullLogo'
import WhatsAppIcon from './WhatsAppIcon'
import { MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <BullLogo size={28} />
            <span>FABULL<br /><small>TRANSPORTE</small></span>
          </div>
          <p className="footer__tagline">Reparto que se sigue, no que se explica.</p>
          <div className="footer__contact">
            <a href="https://wa.me/56992205612" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
              <WhatsAppIcon size={16} />
              +56 9 9220 5612
            </a>
            <span className="footer__contact-item">
              <MapPin size={16} />
              Región Metropolitana, Chile
            </span>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <span className="footer__col-title">Empresa</span>
            <Link to="/nosotros" className="footer__contact-item">Nosotros</Link>
            <Link to="/contacto" className="footer__contact-item">Contacto</Link>
            <Link to="/admin" className="footer__contact-item">Panel</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Servicios</span>
            <Link to="/servicios/reparto-locales" className="footer__contact-item">Reparto a Locales</Link>
            <Link to="/servicios/ultima-milla" className="footer__contact-item">Última Milla</Link>
            <Link to="/servicios/vehiculo-dedicado" className="footer__contact-item">Vehículo Dedicado</Link>
            <Link to="/servicios/fletes-puntuales" className="footer__contact-item">Fletes Puntuales</Link>
            <Link to="/servicios/ruta-multipunto" className="footer__contact-item">Ruta Multipunto</Link>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span className="footer__contact-item">© {year} Transportes Fabull SpA. Todos los derechos reservados.</span>
        <span className="footer__contact-item">Región Metropolitana · Desde 2020</span>
      </div>
    </footer>
  )
}

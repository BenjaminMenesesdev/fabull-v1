import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const footerLinks = [
    {
      title: 'Empresa',
      items: [
        { label: 'Nosotros', path: '/nosotros' },
        { label: 'Contacto', path: '/contacto' },
        { label: 'Panel', path: '/login' },
      ],
    },
    {
      title: 'Servicios',
      items: [
        { label: 'Reparto a Locales', path: '/servicios/reparto-locales' },
        { label: 'Última Milla', path: '/servicios/ultima-milla' },
        { label: 'Vehículo Dedicado', path: '/servicios/vehiculo-dedicado' },
        { label: 'Fletes Puntuales', path: '/servicios/fletes-puntuales' },
        { label: 'Ruta Multipunto', path: '/servicios/ruta-multipunto' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link to="/" className="footer__logo">
              <img
                src={isMobile ? "/toro.png" : "/logo-fabull.png"}
                alt="Fabull Transporte"
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__tagline">Reparto que se sigue, no que se explica.</p>
            <div className="footer__contact">
              <a href="https://wa.me/56992205612" target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <WhatsAppIcon size={16} color="#25D366" /> +56 9 9220 5612
              </a>
              <span className="footer__contact-item">
                <MapPin size={16} /> Región Metropolitana, Chile
              </span>
            </div>
          </div>
          <div className="footer__links">
            {footerLinks.map((col) => (
              <div key={col.title} className="footer__col">
                <span className="footer__col-title">{col.title}</span>
                {col.items.map((item) => (
                  <Link key={item.label} to={item.path}>{item.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Transportes Fabull SpA. Todos los derechos reservados.</span>
          <span className="footer__speed">Región Metropolitana · Desde 2020</span>
        </div>
      </div>
    </footer>
  )
}

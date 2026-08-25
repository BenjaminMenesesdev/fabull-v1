import { motion } from 'framer-motion'

const vehicles = [
  {
    id: 1,
    name: 'Peugeot Partner',
    badge: 'FURGÓN LIVIANO',
    use: 'Reparto ágil entre locales',
    capacity: 'Furgón liviano',
    status: 'En flota',
    image: '/peugeot-partner.jpg',
  },
  {
    id: 2,
    name: 'Peugeot Partner',
    badge: 'FURGÓN LIVIANO',
    use: 'Reparto ágil entre locales',
    capacity: 'Furgón liviano',
    status: 'En flota',
    image: '/peugeot-partner.jpg',
  },
  {
    id: 3,
    name: 'Peugeot Partner',
    badge: 'FURGÓN LIVIANO',
    use: 'Reparto ágil entre locales',
    capacity: 'Furgón liviano',
    status: 'En flota',
    image: '/peugeot-partner.jpg',
  },
  {
    id: 4,
    name: 'Peugeot Boxer',
    badge: 'MAYOR VOLUMEN',
    use: 'Despachos con más carga en una sola vuelta',
    capacity: '13 m³',
    status: 'En flota',
    image: '/peugeot-boxer.jpg',
  },
]

export default function Fleet() {
  return (
    <section className="fleet-carousel" id="flota">
      <div className="container">
        <span className="fleet-carousel__overline">Nuestra flota</span>
        <h2 className="fleet-carousel__title">
          VEHÍCULOS<br /><span>DISPONIBLES</span>
        </h2>
        <div className="fleet-carousel__grid">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.id}
              className={`fleet-carousel__card${v.name.includes('Partner') ? ' fleet-carousel__card--partner' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="fleet-carousel__image">
                <img src={v.image} alt={v.name} loading="lazy" />
              </div>
              <span className="fleet-carousel__badge">{v.badge}</span>
              <h3 className="fleet-carousel__name">{v.name}</h3>
              <p className="fleet-carousel__uso-text">{v.use}</p>
              <div className="fleet-carousel__specs">
                <div>
                  <span className="fleet-carousel__label">Capacidad</span>
                  <span className="fleet-carousel__value">{v.capacity}</span>
                </div>
                <div>
                  <span className="fleet-carousel__label">Estado</span>
                  <span className="fleet-carousel__value">{v.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

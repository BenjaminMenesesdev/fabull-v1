const items = [
  'REPARTO A LOCALES Y TIENDAS',
  'DISTRIBUCIÓN ÚLTIMA MILLA',
  'VEHÍCULO DEDICADO POR DÍA O MES',
  'FLETES PUNTUALES',
  'RUTA MULTIPUNTO',
  'FLOTA PROPIA Y DISPONIBLE DE INMEDIATO',
  'EMPRESA FORMAL CON FACTURACIÓN ELECTRÓNICA',
  'EXPERIENCIA EN RETAIL Y FARMACIAS',
  'FLEXIBILIDAD DE HORARIOS, INCLUIDO TURNO NOCTURNO',
  'REGIÓN METROPOLITANA · DESDE 2020',
]
export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="ticker__item">
            {item} <span className="ticker__dot">●</span>
          </span>
        ))}
      </div>
    </div>
  )
}

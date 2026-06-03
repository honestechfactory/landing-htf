import ScrollReveal from './ScrollReveal'

const clients = [
  'Patsy Shoes',
  'F.A.R.O',
  'A.S. Inmobiliaria',
  'Twenty4 Studios',
  'Maraca Creative House',
  'OMA by Luchi',
  'KISH&GO',
  'ALL IN SPORTS Group',
  'Quinteros Viajes',
  'RolandH',
  'PermitPal',
  'Refugio De Sol',
  'ETER Bar',
  'Welcome Suites',
  'UNRATED',
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-header">
        <div>
          <ScrollReveal className="kicker">03 · Confían en nosotros</ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Negocios que ya
              <br />
              confían en nosotros.
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <p className="section-note">
            Trabajamos codo con codo con quienes nos confían su producto.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="marquee" aria-label="Marcas que confían en nosotros">
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="marquee-item"
                aria-hidden={i >= clients.length ? true : undefined}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="portfolio-cta">
          <p className="portfolio-cta-text">
            ¿Tienes algo en mente? <em>Cuéntanoslo.</em>
          </p>
          <div style={{ display: 'flex', gap: '12px', flexShrink: 0, alignItems: 'center' }}>
            <a
              href="https://wa.me/34660104026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a call →
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

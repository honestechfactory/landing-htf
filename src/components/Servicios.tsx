import ScrollReveal from './ScrollReveal'

const services = [
  {
    num: '01',
    name: 'Operativa del negocio',
    desc: 'Sistemas que hacen que tu día a día funcione. Gestión interna y procesos.',
    tag: 'booking · calendarios · automatización',
  },
  {
    num: '02',
    name: 'Visualización y control',
    desc: 'Saber qué está pasando en tu negocio, sin complicaciones.',
    tag: 'métricas · reportes · tiempo real',
  },
  {
    num: '03',
    name: 'Presencia digital',
    desc: 'Webs y eCommerce pensados para funcionar y crecer con tu negocio.',
    tag: 'webs · shopify · performance',
  },
  {
    num: '04',
    name: 'Productos digitales',
    desc: 'Cuando necesitas algo más que una web. Aplicaciones y plataformas a medida.',
    tag: 'apps · plataformas · sistemas',
  },
]

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="section-header">
        <div>
          <ScrollReveal className="kicker">01 · Qué hacemos</ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Las partes
              <br />
              que nadie quiere
              <br />
              construir.
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <p className="section-note">
            No somos una agencia. Construimos productos digitales para negocios reales.
            Sin complejidad innecesaria.
          </p>
        </ScrollReveal>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <ScrollReveal key={service.num} className="service-card" delay={i * 0.1}>
            <div className="service-num">{service.num}</div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.desc}</p>
            <span className="service-tag">{service.tag}</span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

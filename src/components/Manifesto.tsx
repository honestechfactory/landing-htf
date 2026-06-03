import ScrollReveal from './ScrollReveal'

const principles = [
  {
    num: '01',
    title: 'Lenguaje claro',
    body: 'Sin "sinergias". Hablamos como hablan nuestros clientes.',
  },
  {
    num: '02',
    title: 'Claridad desde el inicio',
    body: 'Sabes qué vamos a hacer — y por qué. Sin confusión. Sin cosas innecesarias.',
  },
  {
    num: '03',
    title: 'Trabajo visible',
    body: 'Ves cómo se construye. Nada de cajas negras ni procesos ocultos.',
  },
  {
    num: '04',
    title: 'Pequeños por decisión',
    body: 'Dos personas. Pocos proyectos. Preferimos hacerlo bien que hacerlo todo.',
  },
]

export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="section-header">
        <div>
          <div className="kicker" style={{ opacity: 0.45, color: 'var(--htf-cream)' }}>
            04 · Nosotros
          </div>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Lo que{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--htf-sand)' }}>honesto</em>
              <br />
              significa, en la práctica.
            </h2>
          </ScrollReveal>
        </div>
        <p className="section-note" style={{ opacity: 0.5, color: 'var(--htf-cream)' }}>
          No es un valor corporativo. Es la forma en que trabajamos.
        </p>
      </div>

      <div className="manifesto-grid">
        {principles.map((p, i) => (
          <ScrollReveal key={p.num} className="manifesto-principle" delay={i * 0.1}>
            <div className="principle-num">{p.num}</div>
            <h3 className="principle-title">{p.title}</h3>
            <p className="principle-body">{p.body}</p>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="manifesto-founders">
          <p className="founders-intro">
            Diseñamos, construimos y gestionamos productos digitales
            <br />
            entre España y Argentina.
          </p>
          <p className="founders-names">
            <em>Juli</em> &amp; <em>Nico</em>.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

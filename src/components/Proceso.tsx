import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Entender el problema',
    body: 'Nos reunimos para ir al grano. Qué necesitas, qué no, y qué realmente tiene sentido construir.',
  },
  {
    num: '02',
    title: 'Definir el alcance',
    body: 'Bajamos la idea a algo concreto. Qué construimos primero, qué dejamos fuera y por qué.',
  },
  {
    num: '03',
    title: 'Prototipar y validar',
    body: 'Empezamos por el prototipo. Vemos cómo funciona antes de construirlo de verdad.',
  },
  {
    num: '04',
    title: 'Construir y evolucionar',
    body: 'Construimos lo necesario y lo ponemos en marcha. A partir de ahí, iteramos y mejoramos.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso">
      <div className="section-header">
        <div>
          <ScrollReveal className="kicker">02 · Cómo trabajamos</ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title">
              Primero entender.
              <br />
              Luego construir.
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.2}>
          <p className="section-note">
            No empezamos por el código.
            <br />
            Empezamos por entender qué tiene sentido construir.
          </p>
        </ScrollReveal>
      </div>

      <div className="proceso-grid">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} className="proceso-step" delay={i * 0.1}>
            <div className="step-num">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-body">{step.body}</p>
            {i < steps.length - 1 && <span className="step-connector">→</span>}
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

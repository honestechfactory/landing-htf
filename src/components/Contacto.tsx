import ScrollReveal from './ScrollReveal'

export default function Contacto() {
  return (
    <section id="contacto">
      <ScrollReveal className="kicker">05 · Contacto</ScrollReveal>
      <div className="contact-inner">
        <ScrollReveal delay={0.1}>
          <h2 className="contact-headline">
            Hablemos
            <br />
            sin <em>compromiso.</em>
          </h2>
        </ScrollReveal>
        <div className="contact-right">
          <ScrollReveal delay={0.2}>
            <p className="contact-note">
              Una conversación para entender qué necesitas.
              <br />
              <br />
              Sin pitch. Sin rodeos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="contact-emails">
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  opacity: 0.45,
                  marginBottom: '10px',
                }}
              >
                Escríbenos por WhatsApp
              </div>
              <a href="https://wa.me/34660104026" target="_blank" rel="noopener noreferrer">
                Juli → +34 660 104 026
              </a>
              <a href="https://wa.me/34650214602" target="_blank" rel="noopener noreferrer">
                Nico → +34 650 214 602
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

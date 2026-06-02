import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section id="hero">
      <ScrollReveal className="hero-availability" immediate>
        <span className="pulse" />
        Construyendo · 2026
      </ScrollReveal>

      <ScrollReveal delay={0.1} immediate>
        <h1 className="hero-headline">
          We build the <em>boring parts</em>
          <br />
          of your business.
        </h1>
      </ScrollReveal>

      <ScrollReveal className="hero-bottom" delay={0.2} immediate>
        <p className="hero-body">
          Software a medida para negocios reales. Webs, apps, dashboards y eCommerce
          — pensados con criterio, construidos para funcionar.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/34660104026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a call →
          </a>
          <a href="#portfolio" className="btn-secondary">
            See the work
          </a>
        </div>
      </ScrollReveal>

      <div className="hero-corner">
        Madrid · EST. 2026
        <br />
        honestechfactory.com
      </div>
    </section>
  )
}

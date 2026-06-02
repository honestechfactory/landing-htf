// Shared palette + fonts — single source of truth for the brand.
// Inject once; every component reads via CSS vars.
(function () {
  if (document.getElementById('htf-tokens')) return;
  const s = document.createElement('style');
  s.id = 'htf-tokens';
  s.textContent = `
    :root {
      --htf-blue: #2a9ac2;
      --htf-blue-deep: #1e7a9c;
      --htf-mustard: #d4a03a;
      --htf-mustard-deep: #b8852a;
      --htf-ink: #13181b;
      --htf-cream: #f5f0e6;
      --htf-paper: #ede6d5;
      --htf-sand: #f2c87a;
      --htf-bg: #f5f0e6;
      --htf-line: rgba(19,24,27,0.12);
      --htf-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
      --htf-serif: 'Instrument Serif', 'Iowan Old Style', Georgia, serif;
    }
  `;
  document.head.appendChild(s);
})();

// Brand constants reused in components.
window.HTF = {
  domain: 'honestechfactory.com',
  tagline: 'We build the boring parts.',
  est: 2026,
  city: 'Madrid',
  founders: [
    { name: 'Juli Bertorello', role: 'co-founder', email: 'juli@honestechfactory.com' },
    { name: 'Nico Kobelt',     role: 'co-founder', email: 'nico@honestechfactory.com' },
  ],
};

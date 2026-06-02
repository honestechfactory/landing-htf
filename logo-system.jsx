// Primary logo, monogram, lockups — all reusable components.
// Every size is parametrized; pass `size` to scale.

// ─── Primary wordmark on tile ─────────────────────────────
// The refined D1 evolution: tile-blue square, monospace stack.
// `size` scales everything proportionally.
function PrimaryLogo({ size = 320, meta = true, dot = 'mustard' }) {
  const s = size / 320;
  const dotColor = dot === 'mustard' ? 'var(--htf-mustard)' : 'var(--htf-sand)';
  return (
    <div style={{
      width: size, height: size, background: 'var(--htf-blue)',
      color: 'var(--htf-cream)', position: 'relative',
      fontFamily: 'var(--htf-mono)', boxSizing: 'border-box',
      padding: `${36*s}px ${40*s}px`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      {meta && (
        <>
          <span style={{ position: 'absolute', top: 14*s, left: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.6 }}>REV · 02</span>
          <span style={{ position: 'absolute', top: 14*s, right: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.6 }}>EST. 2026</span>
        </>
      )}
      <div style={{ fontSize: 36*s, lineHeight: 1, letterSpacing: -0.8*s, fontWeight: 500 }}>
        honest<br/>tech<br/>factory<span style={{ color: dotColor }}>.</span>
      </div>
      {meta && (
        <>
          <span style={{ position: 'absolute', bottom: 14*s, left: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.6 }}>
            ⎯⎯ WE BUILD THE BORING PARTS
          </span>
          <span style={{ position: 'absolute', bottom: 14*s, right: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.6 }}>BUILD 0.1</span>
        </>
      )}
    </div>
  );
}

// Horizontal wordmark-only variant (for letterhead, email sig footer).
function WordmarkH({ size = 18, color = 'var(--htf-ink)', dot = 'var(--htf-mustard)' }) {
  return (
    <span style={{ fontFamily: 'var(--htf-mono)', fontSize: size, fontWeight: 600, color, letterSpacing: -0.2, whiteSpace: 'nowrap' }}>
      honest tech factory<span style={{ color: dot }}>.</span>
    </span>
  );
}

// Monogram {htf} — re-skinned onto tile-blue palette.
function Monogram({ size = 200, variant = 'tile' }) {
  // variants: 'tile' (blue bg, cream text), 'light' (cream bg, ink text), 'ink' (ink bg, cream text)
  const bg = variant === 'tile' ? 'var(--htf-blue)' : variant === 'ink' ? 'var(--htf-ink)' : 'var(--htf-cream)';
  const fg = variant === 'light' ? 'var(--htf-ink)' : 'var(--htf-cream)';
  const brace = 'var(--htf-mustard)';
  const s = size / 200;
  return (
    <div style={{
      width: size, height: size, background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--htf-mono)', fontSize: 68*s, fontWeight: 500,
      letterSpacing: -2.5*s, lineHeight: 1, boxSizing: 'border-box',
    }}>
      <span style={{ color: brace, fontWeight: 300 }}>{'{'}</span>
      <span>htf</span>
      <span style={{ color: brace, fontWeight: 300 }}>{'}'}</span>
    </div>
  );
}

// Logo on cream bg — "light mode" of the primary.
function PrimaryLogoLight({ size = 320 }) {
  const s = size / 320;
  return (
    <div style={{
      width: size, height: size, background: 'var(--htf-cream)',
      color: 'var(--htf-ink)', position: 'relative',
      fontFamily: 'var(--htf-mono)', boxSizing: 'border-box',
      padding: `${36*s}px ${40*s}px`,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      border: '1px solid var(--htf-line)',
    }}>
      <span style={{ position: 'absolute', top: 14*s, left: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.55 }}>REV · 02</span>
      <span style={{ position: 'absolute', top: 14*s, right: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.55 }}>EST. 2026</span>
      <div style={{ fontSize: 36*s, lineHeight: 1, letterSpacing: -0.8*s, fontWeight: 500 }}>
        honest<br/>tech<br/>factory<span style={{ color: 'var(--htf-mustard-deep)' }}>.</span>
      </div>
      <span style={{ position: 'absolute', bottom: 14*s, left: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.55 }}>⎯⎯ WE BUILD THE BORING PARTS</span>
      <span style={{ position: 'absolute', bottom: 14*s, right: 18*s, fontSize: 9*s, letterSpacing: 1, opacity: 0.55 }}>BUILD 0.1</span>
    </div>
  );
}

Object.assign(window, { PrimaryLogo, PrimaryLogoLight, WordmarkH, Monogram });

export default function Hero() {
  return (
    <section
      id="home"
      className="hero wrap"
      style={{ borderTop: "none" }}
    >
      <div>
        <div className="badge">
          <span className="dot" />
          Available for freelance &amp; full-time roles
        </div>

        <h1>
          Elizabeth <span className="accent">Njuguna</span>
        </h1>

        <p className="hero-sub">
          Full-stack developer from Kenya crafting fast, accessible, and
          scalable web experiences for the modern internet.
        </p>

        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a
            href="/Elizabeth_Njuguna_Resume.pdf"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume ↗
          </a>
          <a
            href="/Elizabeth_Njuguna_Resume.pdf"
            className="btn btn-ghost"
            download="Elizabeth_Njuguna_Resume.pdf"
          >
            Download resume ↓
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="terminal" aria-hidden="true">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <span className="t-label">elizabeth@portfolio — zsh</span>
        </div>

        <div className="terminal-body">
          <div className="line">
            <span className="prompt">$</span> whoami
          </div>
          <div className="line out">
            Elizabeth Njuguna — full-stack developer
          </div>
          <div className="line">
            <span className="prompt">$</span> cat stack.txt
          </div>
          <div className="line out">
            Next.js · Node.js · Python · Flask · AI agents
          </div>
          <div className="line">
            <span className="prompt">$</span> location --show
          </div>
          <div className="line out">Nairobi, Kenya · remote friendly</div>
          <div className="line">
            <span className="prompt">$</span>{" "}
            <span className="cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}

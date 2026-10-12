export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">cat about.md</div>
          <h2>Building software that solves real problems.</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I&apos;m <strong>Elizabeth Njuguna</strong>, a full-stack
              developer based in Nairobi, Kenya. I design and build clean,
              performant web applications that help businesses and
              communities grow.
            </p>
            <p>
              From fintech dashboards and e-commerce platforms to education
              tools and developer communities, I enjoy working across the
              stack and turning complex ideas into intuitive products.
            </p>
            <div className="location-tag">
              Nairobi, Kenya · Remote friendly
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num">3+</div>
              <div className="label">YEARS EXPERIENCE</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="label">COMMITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

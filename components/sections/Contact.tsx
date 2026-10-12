export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            ./contact.sh
          </div>

          <h2>Let&apos;s talk</h2>

          <p>
            I&apos;m currently open to new opportunities, freelance
            projects, and interesting collaborations. Send me a message
            and let&apos;s build something great together.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:elizabethnjuguna217@gmail.com"
              className="btn btn-primary"
            >
              elizabethnjuguna217@gmail.com
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

            <a
              href="https://wa.me/254715099503"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Chat on WhatsApp ↗
            </a>

            <a
              href="https://www.linkedin.com/in/elizabeth-njuguna-432951371/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

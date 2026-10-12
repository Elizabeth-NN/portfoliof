import { toolGroups } from "../../data/tools";

export default function Tools() {
  return (
    <section id="tools">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">ls tools/</div>
          <h2>Tools &amp; AI</h2>
          <p>
            Platforms and techniques I use to develop, integrate, and deliver
            useful software.
          </p>
        </div>

        <div className="skills-grid">
          {toolGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p className="note">{group.note}</p>

              <div className="skill-list">
                {group.items.map((tool) => (
                  <span className="skill-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { skillGroups } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">cat skills.json</div>
          <h2>Skills &amp; technologies</h2>
          <p>
            What I use to design, build, and ship, grouped by where it sits
            in the stack.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p className="note">{group.note}</p>

              <div className="skill-list">
                {group.items.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
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

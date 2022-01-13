import { Component } from "react";
import "../css/SkillsComponent.css";

class Skills extends Component {
  render() {
    const skills = this.props.details.skills.map((skill) => {
      return (
        <div className="col-12 col-md-4 skill-tile text-center">
          <img src={skill.image} alt="Skill" width="50%" height="40%" />
          <p>{skill.name}</p>
        </div>
      );
    });
    return (
      <section id="skills">
        <div className="container">
          <h2 className="text-center">Skills</h2>
          <div className="row" style={{ marginTop: "30px" }}>
            {skills}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;

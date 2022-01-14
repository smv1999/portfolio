import { Component } from "react";
import "../css/ProjectComponent.css";
class Projects extends Component {
  onProjectClicked(id) {
    var projObj = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj.link, "_blank");
  }

  openProjectsURL() {
    window.open(this.props.details.profile_links.github.link, "_blank");
  }

  render() {
    const projects = this.props.details.projects.map((project) => {
      return (
        <div key={project.id} className="row" style={{ marginTop: "30px" }}>
          <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
            <img
              src={project.image}
              alt={project.title}
              width="22%"
              height="75%"
              style={{ margin: "auto" }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <h4>{project.title}</h4>
            <p className="text-justify">{project.description.para1}</p>
            <p className="text-justify">{project.description.para2}</p>
            <button
              className="view-projects view-projects--specs"
              onClick={() => this.onProjectClicked(project.id)}
            >
              View Project
            </button>
          </div>
        </div>
      );
    });

    return (
      <section id="projects">
        <div className="container">
          <h2 className="text-center">Projects</h2>
          {projects}
          <div className="text-center">
            <button
              style={{ marginTop: "30px" }}
              className="view-projects view-projects--specs"
              onClick={() => this.openProjectsURL()}
            >
              More Projects
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;

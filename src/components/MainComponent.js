import { React, Component, createRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { DETAILS } from "../shared/details";
import About from "./AboutComponent";
import Education from "./EducationComponent";
import Skills from "./SkillsComponent";
import Projects from "./ProjectComponent";
import Experience from "./ExperienceComponent";
import Footer from "./Footer";
import "../css/MainComponent.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: DETAILS,
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.aboutRef = createRef();
    this.educationRef = createRef();
    this.skillsRef = createRef();
    this.projectsRef = createRef();
    this.experienceRef = createRef();
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  scrollToAbout = () => this.aboutRef.current.scrollIntoView();
  scrollToEducation = () => this.educationRef.current.scrollIntoView();
  scrollToSkills = () => this.skillsRef.current.scrollIntoView();
  scrollToProjects = () => this.projectsRef.current.scrollIntoView();
  scrollToExperience = () => this.experienceRef.current.scrollIntoView();

  openProjectsURL() {
    window.open(this.state.details.profile_links.github.link, "_blank");
  }

  openLink(social) {
    window.open(social.link, "_blank");
  }

  render() {
    const myProfileDetails = this.state.details;

    return (
      <div>
        <Navbar
          light
          color="light"
          expand="md"
          className="navbar"
          style={{ padding: ".5rem 1rem" }}
        >
          <NavbarBrand href="/">
            <img
              src={myProfileDetails.logo}
              alt={myProfileDetails.name}
              style={{ width: "30px", height: "30px" }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={this.state.menu} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={this.scrollToAbout}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={this.scrollToEducation}
                >
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={this.scrollToSkills}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={this.scrollToProjects}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "black" }}
                  href="#"
                  onClick={this.scrollToExperience}
                >
                  Experience
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Other Child Components */}
        <br />
        <br />
        <br />
        <br />
        <div ref={this.aboutRef}>
          <About details={this.state.details} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div ref={this.educationRef}>
          <Education details={this.state.details} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div ref={this.skillsRef}>
          <Skills details={this.state.details} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div ref={this.projectsRef}>
          <Projects details={this.state.details} />
        </div>
        <br />
        <br />
        <div className="container text-center">
          <button className="button" onClick={() => this.openProjectsURL()}>
            More Projects
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div ref={this.experienceRef}>
          <Experience details={this.state.details} />
        </div>
        <br />
        <br />
        <div className="container text-center">
          <h4>Follow me on:</h4>
        </div>
        <div className="container horizontal-links">
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src={this.state.details.profile_links.github.image}
            alt="GitHub"
            onClick={() =>
              this.openLink(this.state.details.profile_links.github)
            }
          />
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src={this.state.details.profile_links.linkedin.image}
            alt="LinkedIn"
            onClick={() =>
              this.openLink(this.state.details.profile_links.linkedin)
            }
          />
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src={this.state.details.profile_links.medium.image}
            alt="Medium"
            onClick={() =>
              this.openLink(this.state.details.profile_links.medium)
            }
          />
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src={this.state.details.profile_links.hackerrank.image}
            alt="HackerRank"
            onClick={() =>
              this.openLink(this.state.details.profile_links.hackerrank)
            }
          />
          <img
            style={{ width: "30px", height: "30px", margin: "5px" }}
            src={this.state.details.profile_links.geeksforgeeks.image}
            alt="Geeks for Geeks"
            onClick={() =>
              this.openLink(this.state.details.profile_links.geeksforgeeks)
            }
          />
        </div>
        <br />
        <br />
        <Footer details={this.state.details} />
      </div>
    );
  }
}

export default Main;

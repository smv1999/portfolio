import { React, Component, createRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
import Follow from "./FollowComponent";
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

  render() {
    // const myProfileDetails = this.state.details;

    return (
      <div>
        <Navbar
          dark
          color="dark"
          expand="md"
          className="navbar"
          style={{ padding: ".5rem 1rem" }}
        >
          {/* <NavbarBrand href="/">
            <img
              src={myProfileDetails.logo}
              alt={myProfileDetails.name}
              style={{ width: "30px", height: "30px" }}
            />
          </NavbarBrand> */}
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={this.state.menu} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={this.scrollToAbout}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={this.scrollToEducation}
                >
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={this.scrollToSkills}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  href="#"
                  onClick={this.scrollToProjects}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
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
        <section id="top">
          <div className="container text-center jumbotron">
            <h2 className="text-color-main">
              Hello, I am{" "}
              <span className="text-color-main-name">Vaidhyanathan S M</span>
              <br />I am a Software Developer
            </h2>
            <br />
            <br />
            <p>
              <span
                onClick={this.scrollToAbout}
                className="know-more know-more--specs"
              >
                Know More
              </span>
            </p>
          </div>
        </section>
        <div ref={this.aboutRef}>
          <About details={this.state.details} />
        </div>
        <div ref={this.educationRef}>
          <Education details={this.state.details} />
        </div>
        <div ref={this.skillsRef}>
          <Skills details={this.state.details} />
        </div>
        <div ref={this.projectsRef}>
          <Projects details={this.state.details} />
        </div>
        <div ref={this.experienceRef}>
          <Experience details={this.state.details} />
        </div>
        <Follow details={this.state.details} />
        <Footer details={this.state.details} />
      </div>
    );
  }
}

export default Main;

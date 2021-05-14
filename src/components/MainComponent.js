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
import Footer from "./Footer";

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
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  scrollToAbout = () => this.aboutRef.current.scrollIntoView();
  scrollToEducation = () => this.educationRef.current.scrollIntoView();
  scrollToSkills = () => this.skillsRef.current.scrollIntoView();


  render() {
    const myProfileDetails = this.state.details;

    return (
      <div>
        <Navbar dark color="primary" expand="md">
          <NavbarBrand href="/">{myProfileDetails.name}</NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={this.state.menu} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToAbout}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToEducation}>Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.scrollToSkills}>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience">Experience</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* Other Child Components */}
        <br />
        <br />
        <br />
        <br />
        <div ref={this.aboutRef} />
        <About details={this.state.details} />
        <br />
        <br />
        <br />
        <br />
        <div ref={this.educationRef} />
        <Education details={this.state.details} />
        <br />
        <br />
        <br />
        <br />
        <div ref={this.skillsRef} />
        <Skills details={this.state.details} />
        <br />
        <br />
        <Footer details={this.state.details} />
      </div>
    );
  }
}

export default Main;

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
import { motion } from "framer-motion";
import { Card, CardContent } from "@material-ui/core";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: DETAILS,
      menu: false,
      isResources: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.aboutRef = createRef();
    this.educationRef = createRef();
    this.skillsRef = createRef();
    this.projectsRef = createRef();
    this.experienceRef = createRef();
    this.resourceRef = createRef();
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  scrollToAbout = () => this.aboutRef.current.scrollIntoView();
  scrollToEducation = () => this.educationRef.current.scrollIntoView();
  scrollToSkills = () => this.skillsRef.current.scrollIntoView();
  scrollToProjects = () => this.projectsRef.current.scrollIntoView();
  scrollToExperience = () => this.experienceRef.current.scrollIntoView();
  scrollToResources = () => {
    // this.resourceRef.current.scrollIntoView();
    this.setState({ isResources: true });
  };

  render() {
    return (
      <div>
        {!this.state.isResources ? (
          <Navbar
            dark
            color="dark"
            expand="md"
            className="navbar"
            style={{ padding: ".5rem 1rem" }}
          >
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
                <NavItem>
                  <NavLink
                    style={{ color: "white" }}
                    href="#"
                    onClick={this.scrollToResources}
                  >
                    Resources
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        ) : (
          <Navbar
            dark
            color="dark"
            expand="md"
            className="navbar"
            style={{ padding: ".5rem 1rem" }}
          >
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink style={{ color: "white", fontWeight: 700 }} href="#">
                  Resources
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        )}
        {/* Other Child Components */}
        <br />
        <br />
        <div>
          {!this.state.isResources ? (
            <div>
              <motion.section
                id="top"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  className="container text-center jumbotron"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  <motion.h2
                    className="text-color-main"
                    animate={{ fontWeight: 700 }}
                    transition={{ delay: 1.3, duration: 1 }}
                  >
                    Hello, I am{" "}
                    <span className="text-color-main-name">
                      Vaidhyanathan S M
                    </span>
                    <br />I am a Software Developer
                  </motion.h2>
                  <br />
                  <br />
                  <p>
                    <motion.span
                      animate={{ scale: 1.15 }}
                      transition={{ delay: 1.4, duration: 1 }}
                      onClick={this.scrollToAbout}
                      className="know-more know-more--specs"
                    >
                      Know More
                    </motion.span>
                  </p>
                  <br />
                  <br />
                  <p style={{ fontWeight: 700, fontSize: 25 }}>
                    Listen to my weekly podcast here!
                  </p>
                  <iframe
                    title="Tech Untangled Podcast"
                    src="https://anchor.fm/vaidhyanathansm/embed"
                    height="102px"
                    width="400px"
                    frameborder="0"
                    scrolling="no"
                  ></iframe>
                </motion.div>
              </motion.section>
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
          ) : (
            <div>
              <motion.section
                id="resources"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.div
                  className="container text-center jumbotron"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  <motion.h2
                    className="text-color-main"
                    animate={{ fontWeight: 700 }}
                    transition={{ delay: 1.3, duration: 1 }}
                  >
                    Interview Preparation Resources
                  </motion.h2>
                  <br />
                  <br />
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Card
                        className="resource-card-style"
                        variant="outlined"
                        style={{
                          backgroundColor: "#27292d",
                        }}
                      >
                        <CardContent className="row">
                          <p className="col-md-9">
                            <b style={{ fontSize: "30px" }}>
                              Database Management System
                            </b>
                          </p>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/DBMS.pdf"
                          >
                            <img
                              src="assets/images/view.png"
                              height="50"
                              width="40"
                              alt="View"
                            />
                          </a>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/DBMS.pdf"
                            download
                          >
                            <img
                              src="assets/images/download.png"
                              height="50"
                              width="50"
                              alt="Download"
                            />
                          </a>
                        </CardContent>
                      </Card>
                    </li>
                    <li>
                      <Card
                        className="resource-card-style"
                        variant="outlined"
                        style={{
                          backgroundColor: "#27292d",
                        }}
                      >
                        <CardContent className="row">
                          <p className="col-md-9">
                            <b style={{ fontSize: "30px" }}>
                              Java Interview Questions
                            </b>
                          </p>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/Java_Interview_Questions.pdf"
                          >
                            <img
                              src="assets/images/view.png"
                              height="50"
                              width="40"
                              alt="View"
                            />
                          </a>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/Java_Interview_Questions.pdf"
                            download
                          >
                            <img
                              src="assets/images/download.png"
                              height="50"
                              width="50"
                              alt="Download"
                            />
                          </a>
                        </CardContent>
                      </Card>
                    </li>
                    <li>
                      <Card
                        className="resource-card-style"
                        variant="outlined"
                        style={{
                          backgroundColor: "#27292d",
                        }}
                      >
                        <CardContent className="row">
                          <p className="col-md-9">
                            <b style={{ fontSize: "30px" }}>
                              Operating Systems
                            </b>
                          </p>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/Operating_Systems.pdf"
                          >
                            <img
                              src="assets/images/view.png"
                              height="50"
                              width="40"
                              alt="View"
                            />
                          </a>
                          <a
                            className="col-md-1"
                            style={{ color: "white", textDecoration: "none" }}
                            href="assets/docs/Operating_Systems.pdf"
                            download
                          >
                            <img
                              src="assets/images/download.png"
                              height="50"
                              width="50"
                              alt="Download"
                            />
                          </a>
                        </CardContent>
                      </Card>
                    </li>
                  </ul>
                </motion.div>
              </motion.section>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;

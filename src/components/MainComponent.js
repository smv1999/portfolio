import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DETAILS } from '../shared/details';
import  About  from './AboutComponent'
import Education from "./EducationComponent";
import Skills from './SkillsComponent';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        details: DETAILS
    }
  }

  render() {
      const myProfileDetails = this.state.details;
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">{myProfileDetails.name}</NavbarBrand>
          </div>
        </Navbar>
         {/* Other Child Components */}
        <br />
        <br />
        <br />
        <br />
        <About details={this.state.details} />
        <br />
        <br />
        <br />
        <br />
        <Education details={this.state.details} />
        <br />
        <br />
        <br />
        <br />
        <Skills details={this.state.details} />
        <br />
        <br />
        <Footer details={this.state.details}/>
      </div>
    );
  }
}

export default Main;

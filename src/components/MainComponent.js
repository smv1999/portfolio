import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DETAILS } from '../shared/details';
import  About  from './AboutComponent'

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
        <About details={this.state.details} />
      </div>
    );
  }
}

export default Main;

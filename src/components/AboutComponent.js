import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.details);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-3">
            <img src={this.props.details.profile_image} alt="Profile" width="100%" height="100%"/>
          </div>
          <div className="col-12 col-md-5 m-3">
            <h2>About</h2>
            <br />
            <h5>{this.props.details.about_me.para1}</h5>
            <p>{this.props.details.about_me.para2}</p>
            <p>{this.props.details.about_me.para3}</p>
            <p>{this.props.details.about_me.para4}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

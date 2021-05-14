import { Component } from "react";
import '../css/Footer.css'

class Footer extends Component {

constructor (props) {
    super(props);
}

  render() {
    return (
      <div className="footer text-center">
        <p className="text-color">Made with ❤️ by <a className="text-color" href={this.props.details.profile_links.github}>Vaidhyanathan S M</a></p>
      </div>
    );
  }
}

export default Footer;
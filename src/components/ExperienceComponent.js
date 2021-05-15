import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../css/ExperienceComponent.css";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const experiences = this.props.details.experiences.map((experience) => {
      return (
        <div key={experience.id} className="row" style={{padding: "10px"}}>
          <Card className="root" variant="outlined">
            <CardContent>
              <Typography variant="h4" color="textPrimary" gutterBottom>
                {experience.company}
              </Typography>
              <Typography variant="h5">
                {experience.position}
              </Typography>
              <Typography className="pos" color="textSecondary">
                {experience.timeline}
              </Typography>
              <Typography variant="body2">
                {experience.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <h2 className="text-center">Experience</h2>
        <br />
        <br />
        {experiences}
      </div>
    );
  }
}

export default Experience;

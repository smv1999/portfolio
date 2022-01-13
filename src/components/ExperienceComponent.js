import { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../css/ExperienceComponent.css";
import { Card, CardHeader } from "@material-ui/core";

class Experience extends Component {
  render() {
    const experiences = this.props.details.experiences.map((experience) => {
      return (
        <div key={experience.id} className="row" style={{ padding: "10px" }}>
          <Card
            className="root"
            variant="outlined"
            style={{
              backgroundColor: "#27292d",
            }}
          >
            <CardHeader
              title={
                <Typography variant="h4" gutterBottom>
                  {experience.company}
                </Typography>
              }
            />
            <CardContent>
              {experience.positions.map((position) => {
                return (
                  <div key={position.id}>
                    <Typography variant="h5">{position.position}</Typography>
                    <Typography className="pos">{position.timeline}</Typography>
                    <Typography variant="body2">
                      {position.description}
                    </Typography>
                    <br />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      );
    });

    return (
      <section id="experience">
        <div className="container">
          <h2 className="text-center">Experience</h2>
          <br />
          <br />
          {experiences}
        </div>
      </section>
    );
  }
}

export default Experience;

import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Component } from "react";
import "../css/EducationComponent.css";

class Education extends Component {
  render() {
    const myProfileDetails = this.props.details;
    return (
      <section id="education">
        <div className="container">
          <h2 className="text-center">Education</h2>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-12 col-md-4 edu-tile">
              <Card
                className="card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "rgb(46, 47, 52)",
                }}
              >
                <CardHeader
                  style={{ color: "white" }}
                  className="text-center"
                  title="Graduation"
                  subheader={
                    <Typography style={{ color: "white" }}>
                      {myProfileDetails.education.college.timeline}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  image="/assets/images/college.png"
                  alt="Graduation"
                />
                <CardContent>
                  <p>
                    <b>Course : </b>
                    {myProfileDetails.education.college.course}
                  </p>
                  <p>
                    <b>CGPA : </b>
                    {myProfileDetails.education.college.grade}
                  </p>
                  <p>
                    <b>College Name : </b>
                    {myProfileDetails.education.college.name}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="col-12 col-md-4 edu-tile">
              <Card
                className="card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "rgb(46, 47, 52)",
                }}
              >
                <CardHeader
                  className="text-center"
                  title="Higher Secondary School"
                  subheader={
                    <Typography style={{ color: "white" }}>
                      {myProfileDetails.education.college.timeline}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  image="/assets/images/high_school.png"
                  alt="Graduation"
                />
                <CardContent>
                  <p>
                    <b>Course : </b>
                    {myProfileDetails.education.higher_secondary_school.course}
                  </p>
                  <p>
                    <b>Percentage : </b>
                    {myProfileDetails.education.higher_secondary_school.grade}
                  </p>
                  <p>
                    <b>School Name : </b>
                    {myProfileDetails.education.higher_secondary_school.name}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="col-12 col-md-4 edu-tile">
              <Card
                className="card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "rgb(46, 47, 52)",
                }}
              >
                <CardHeader
                  className="text-center"
                  title="Secondary School"
                  subheader={
                    <Typography style={{ color: "white" }}>
                      {myProfileDetails.education.college.timeline}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  image="/assets/images/school.png"
                  alt="Graduation"
                />
                <CardContent>
                  <p>
                    <b>CGPA : </b>
                    {myProfileDetails.education.secondary_school.grade}
                  </p>
                  <p>
                    <b>School Name : </b>
                    {myProfileDetails.education.secondary_school.name}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;

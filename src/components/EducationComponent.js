import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Component } from "react";

class Education extends Component {
  render() {
    const myProfileDetails = this.props.details;
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Education</h2>
          <br />
          <br />
          <br />

          <div className="col-12 col-md-4 edu-tile">
            <h4 className="text-center">Graduation</h4>
            <Card
              style={{ maxWidth: "400px", minHeight: "200px" }}
              variant="outlined"
            >
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
                <p>
                  <b>Period : </b>
                  {myProfileDetails.education.college.timeline}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-4 edu-tile">
            <h4 className="text-center">Higher Secondary School</h4>
            <Card
              style={{ maxWidth: "400px", minHeight: "200px" }}
              variant="outlined"
            >
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
                <p>
                  <b>Period : </b>
                  {myProfileDetails.education.higher_secondary_school.timeline}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-4 edu-tile">
            <h4 className="text-center">Secondary School</h4>
            <Card
              style={{ maxWidth: "400px", minHeight: "200px" }}
              variant="outlined"
            >
              <CardContent>
                <p>
                  <b>CGPA : </b>
                  {myProfileDetails.education.secondary_school.grade}
                </p>
                <p>
                  <b>School Name : </b>
                  {myProfileDetails.education.secondary_school.name}
                </p>
                <p>
                  <b>Period : </b>
                  {myProfileDetails.education.secondary_school.timeline}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

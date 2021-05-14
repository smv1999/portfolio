import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myProfileDetails = this.props.details;
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Education</h2>
          <br />
          <br />
          <div className="col-12 col-md-5 m-3">
            <img
              src={myProfileDetails.education.college.image}
              alt="College"
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-12 col-md-5 m-3">
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
          </div>
          <div className="col-12 col-md-5 m-3">
            <img
              src={myProfileDetails.education.higher_secondary_school.image}
              alt="Higher Secondary School"
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-12 col-md-5 m-3">
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
          </div>
          <div className="col-12 col-md-5 m-3">
            <img
              src={myProfileDetails.education.secondary_school.image}
              alt="Secondary School"
              width="100%"
              height="100%"
            />
          </div>
          <div className="col-12 col-md-5 m-3">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Education;

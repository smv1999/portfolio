import { Component } from "react";
import "../css/AboutComponent.css";
import { motion } from "framer-motion";
import { Card, CardContent } from "@material-ui/core";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.details);
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={this.props.details.profile_image}
                alt="Profile"
                width="80%"
                height="95%"
              />
            </div>
            <motion.div
              className="col-12 col-sm-6"
              style={{
                padding: "25px",
              }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
            >
              <h2>About</h2>
              <br />
              <h5>{this.props.details.about_me.para1}</h5>
              <p>{this.props.details.about_me.para2}</p>
              <p>{this.props.details.about_me.para3}</p>
              <p>{this.props.details.about_me.para4}</p>
            </motion.div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              marginTop: "40px",
            }}
          >
            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a
                    href="https://www.amazon.in/dp/B0975475WF"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}>400+ Units Sold</b>
                      <br />
                      Self-Published Book - Ace the Coding Interview: Roadmap to
                      Land Your First Programming Job
                    </p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a
                    href="https://github.com/smv1999/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}>3+ Talks</b>
                      <br />
                      at various Events / Programs / Workshops
                    </p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a
                    href="https://play.google.com/store/apps/dev?id=6670598499208527718"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}>9 Apps</b>
                      <br />
                      Successfully Deployed on Google Play Store
                    </p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import {resumeData} from "../../resume-data";

function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              
              {resumeData.main.social.map(function (social) {
                return ( 
                  <>
                    <Button
                      className="btn-icon btn-round"
                      color="default"
                      size="lg"
                      href={social.url}
                      onClick={(e) => e.preventDefault()}
                      id={social.name + "-profile-header"}
                    >
                      <i className={social.className}></i>
                    </Button>
                    <UncontrolledTooltip delay={0} target={social.name + "-profile-header"}>
                      {social.tooltip}
                    </UncontrolledTooltip>
                  </>
                )
              })}
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About Me</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-about">
              <div className="story-center">
                <p>
                  {resumeData.main.bio[0]}
                </p>
              </div>
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/power.jpg") + ")",
                }}
              >
              </div>
              <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                        "url(" + require("assets/img/sandiego.jpg") + ")",
                  }}
              ></div>
              <div className="story-left">
                <p>{resumeData.main.bio[1]}</p>
              </div>
              <div className="story-right">
                <p>{resumeData.main.bio[2]}</p>
              </div>
              <div
                className="image-container image-left"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/engagement.jpg") + ")",
                }}
              >
              </div>
              <div
                className="image-container image-right"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/duomo.jpg") + ")",
                }}
              ></div>
              <div className="story-left">
                <p>{resumeData.main.bio[3]}</p>
              </div>
              <div className="story-right">
                <p>{resumeData.main.bio[4]}</p>
              </div>
            </div>
            <div className="nav-align-center">
              <Button
                className="btn-round mr-1"
                color="info"
                href="/portfolio"
                size="lg"
              >
                See My Recent Projects
              </Button>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

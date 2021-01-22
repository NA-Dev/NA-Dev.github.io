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
            <h3 className="title">About Me</h3>
            {resumeData.main.bio.map(function (p) {
              return ( 
                <h5 className="description">{p}</h5>
              )
            })}
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    href="/portfolio"
                    size="lg"
                    target="_blank"
                  >
                    Recent Projects
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

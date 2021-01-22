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
import PortfolioPageHeader from "components/Headers/PortfolioPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import {resumeData} from "../../resume-data";

function PortfolioPage() {
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
        <PortfolioPageHeader />
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
            <h3 className="title">Recent Projects</h3>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    href="/resume"
                    size="lg"
                    target="_blank"
                  >
                    View My Resume
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

export default PortfolioPage;

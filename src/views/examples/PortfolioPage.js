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
    document.body.classList.add("portfolio-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("portfolio-page");
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
          </Container>
        </div> 
        <div className="section section-projects text-center">
          <Container>
            <div className="projects">
              <Row>
                {resumeData.portfolio.projects.map(function (project) {
                  return ( 
                    <Col md="4">
                      <div className="project">
                        <img
                          alt={project.title}
                          className="rounded-circle img-fluid img-raised"
                          src={project.image}
                        ></img>
                        <h4 className="title">{project.title}</h4>
                        <p className="category text-info">{project.category}</p>
                        <p className="description">
                          {project.description}
                        </p>
                        <div className="project-buttons text-center">
                          {project.url && 
                            <Button
                              className=""
                              color="info"
                              href={project.url}
                              target="_blank"
                            >
                              <i className="fab fas fa-eye mr-2"></i> Final Project
                            </Button>
                          }
                          {project.code && 
                          <Button
                            className=""
                            color="info"
                            href={project.code}
                            target="_blank"
                          >
                            <i className="fab fa-github mr-2"></i> See Code
                          </Button>
                          }
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
              <h2>More coming soon, check back next week.</h2>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Button
                    className="btn-round mr-1"
                    color="info"
                    href="/resume"
                    size="lg"
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

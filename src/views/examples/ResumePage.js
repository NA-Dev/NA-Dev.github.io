import React from "react";

// reactstrap components
import {
  Button,
  Container, UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ResumePageHeader from "components/Headers/ResumePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Resume from "components/Resume.js";
import {resumeData} from "../../resume-data";

function ResumePage() {
  const [pills, setPills] = React.useState("2");
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
        <ResumePageHeader />
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
            <Resume />
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ResumePage;

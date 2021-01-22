/*eslint-disable*/
import React from "react";

// reactstrap components
import {Button, Container} from "reactstrap";
import {resumeData} from "../../resume-data";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
          <nav>
            <div className="social-line">
              {resumeData.main.social.map(function (social) {
                return ( 
                  <Button
                    className="btn-neutral btn-icon btn-round mt-0 mb-0"
                    color={social.name.toLowerCase()}
                    href={social.url}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className={social.className}></i>
                  </Button>
                )
              })}
            </div>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, {resumeData.main.name}<br/>
            Template by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            .
          </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

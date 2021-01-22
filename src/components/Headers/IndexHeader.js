/*eslint-disable*/
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// reactstrap components
import {Button, Container} from "reactstrap";
import {resumeData} from "../../resume-data";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo.png")}
            ></img>
            <h1 className="h1-seo">{resumeData.main.name}</h1>
            <h3>{resumeData.main.occupation}</h3>
            <h5>{resumeData.main.description}</h5>
          </div>
          <h6 className="category category-absolute">
            <div className="nav-align-center">
              <Button
                className="btn-round"
                color="info"
                size="lg"
                to="about"
                smooth={true}
                offset={-62}
                duration={500}
                tag={Link}
              >
                Learn More
              </Button>
            </div>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;

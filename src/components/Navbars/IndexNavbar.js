import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import {resumeData} from "../../resume-data";
import {routes} from "../../routes";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              <NavLink
                to="/"
                tag={Link}
              >
                <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/logo.png")}
                ></img>
              </NavLink>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              
              {Object.keys(routes).map(function (url, i) {
                return ( 
                  <NavItem>
                    <NavLink to={url} tag={Link}>
                      {routes[url]}
                    </NavLink>
                  </NavItem>
                )
              })}
              
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="/resume-download"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-file-download mr-1"></i>
                  <p>Download Resume</p>
                </Button>
              </NavItem>
              
              {resumeData.main.social.map(function (social) {
                return ( 
                  <NavItem>
                    <NavLink
                      href={social.url}
                      target="_blank"
                      id={social.name + "-tooltip"}
                    >
                      <i className={social.className}></i>
                      <p className="d-lg-none d-xl-none">{social.name}</p>
                    </NavLink>
                    <UncontrolledTooltip target={"#" + social.name + "-tooltip"}>
                      {social.tooltip}
                    </UncontrolledTooltip>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;

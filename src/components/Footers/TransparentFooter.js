/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import {resumeData} from "../../resume-data";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, {resumeData.main.name}. Template by <a href="https://www.creative-tim.com" target="_blank">CreativeTim</a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;

// From template at https://github.com/tbakerx/react-resume-template

import React, {Component} from 'react';
import {resumeData} from "../resume-data";

import "assets/scss/resume.scss";

function Resume() {
  

  return (
      <section id="resume">

        <div className="row education">
          <div className="col col-12 col-lg-3 header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="col col-12 col-lg-9 main-col">
            <div className="row item">
              <div className="col col-12">
                {resumeData.resume.education.map(function (education) {
                  return (
                    <div key={education.school}>
                      <h3>{education.school}</h3>
                      <p className="info">
                        {education.degree} 
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                      </p>
                      <p>{education.description}</p></div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="col col-12 col-lg-3 header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="col col-12 col-lg-9 main-col">
            {resumeData.resume.work.map(function (work) {
              return (
                <div key={work.company}>
                  <h3>{work.company}</h3>
                  <p className="info">
                    {work.title}
                    <span>&bull;</span> 
                    <em className="date">{work.years}</em>
                  </p>
                  <p>{work.description}</p>
                </div>
              )
            })}
          </div>
        </div>


        <div className="row skill">

          <div className="col col-12 col-lg-3 header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="col col-12 col-lg-9 main-col">
            <p>{resumeData.resume.skillmessage}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.resume.skills.map(function (skills) {
                  var className = 'bar-expand ' + skills.name.toLowerCase();
                  return (
                    <li key={skills.name}>
                      <span style={{width: skills.level}}
                           className={className} />
                      <em>{skills.name}</em>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </section>
  );
}

export default Resume;

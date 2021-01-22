// From template at https://github.com/tbakerx/react-resume-template

import React, {Component} from 'react';
import {resumeData} from "../resume-data";

import "assets/scss/resume.scss";

function Resume() {
  

  return (
      <section id="resume">
        <div className="objective">
            <p>{resumeData.resume.objective}</p>
        </div>

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
                      <h3>{education.degree}</h3>
                      <p className="info">
                        {education.school} 
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
                  <h3>{work.title}</h3>
                  <p className="info">
                    {work.company}
                    <span>&bull;</span> 
                    <em className="date">{work.years}</em>
                  </p>
                  <ul>
                    {work.description.map(function (p) {
                      return (
                        <li>{p}</li>
                      )
                    })}
                  </ul>
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

            <div className="skill-categories">
                {resumeData.resume.skills_categories.map(function (category) {
                  return (
                    <div className="skill-category" key={category.name}>
                      <h6>{category.name}</h6>
                      <div className="skills">
                        {category.skills.map(function (skill) {
                          return (
                            <span className="skill">{skill}</span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>

          </div>
        </div>
      </section>
  );
}

export default Resume;

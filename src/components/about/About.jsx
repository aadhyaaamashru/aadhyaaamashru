import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaLaptopCode } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                University of Waterloo<br />
                Expected Grad: Apr 2027
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Currently Building</h5>
              <small>
                Mudra<br />
                RateMyStreets 
              </small>
            </article>
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>What I’m Looking For</h5>
              <small>
                Seeking a Winter 2026 Internship<br />

              </small>
            </article>
          </div>

          <div className="about-content-para">
          <p>
  I'm a second-year Computer Science student at the University of Waterloo who gets better the harder things get. Whether it's building for users I’ve never met or working with tools I’ve never used, I lean into the unknown with curiosity and confidence.
  <br /><br />
  Hackathons and fast-paced team projects have taught me to move quickly, ask the right questions, and stay grounded even when the outcome isn’t clear. I don’t wait for clarity to act — I build clarity by acting.
  <br /><br />
  Outside of tech, I’m fascinated by biology and animal behavior — it’s where my curiosity began, and it still shapes how I think and solve problems today.
  <br /><br />
  I’m currently looking for a Winter 2025 internship where I can learn, build, and contribute with a team that values impact over titles.
</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile3.png";
import { FaAward } from "react-icons/fa";
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
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                Computer Science <br />
                University of Waterloo
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>

          <div className="about-content-para">
            <p>
              I'm currently a second-year Computer Science student at the
              University of Waterloo, deeply passionate about various facets of
              the field, including Web Development, Software Development,
              Artificial Intelligence, Web scraping, and Android Development. 
              
              <br />
              <br />
              I
              thrive on challenges and actively participate in hackathons,
              viewing them as invaluable opportunities for learning and growth.
              These events drive me to explore new languages and software,
              enabling me to create meaningful projects. 
              
              <br />
              <br />
              
              Beyond coding, I have a
              keen interest in Biology, particularly zoology, and often find
              myself immersed in zoology books during my free time. 
              
              <br />
              <br />
              
              As I
              progress in my studies, I'm actively seeking a co-op opportunity
              for the summer of 2024. 
              
              <br />
              <br />
              Feel free to connect with me anytime!
            </p>
          </div>

          {/* 
          <div className="about-content-btn">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

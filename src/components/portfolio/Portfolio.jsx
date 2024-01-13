import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/JustInTime.png";
import IMG2 from "../../assets/RaIInet.png";
import IMG3 from "../../assets/CollConnect.png";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "JustInTime | Hackathon Winner | TechNova | Kotlin | Java | OpenAI API",
    github: "https://devpost.com/software/justintime",
    demo: "https://devpost.com/software/justintime",
    brief: (
      <ul className="back_inner_ul">
        <br />
        <br />
        <li>• Ensures swift communication in emergencies</li>
        <br />
        <br />
        <li>
          • Alerts emergency contacts, using speech-to-text and real-time
          notifications
        </li>
        <br />
        <br />
        <li>• Created in Figma and built with Kotlin in Android Studio.</li>
        <br />
        <br />
        <li>
          • Included OpenAI for natural language processing, geo-location
          tracking
        </li>
        <br />
      </ul>
    ),
  },
  {
    id: 2,
    image: IMG2,
    title: "C++ | OOP",
    github: "#",
    demo: "#",
    brief: (
      <ul className="back_inner_ul">
        <br />
        <br />
        <li>• A Stratego-based two-player game with modular, reusable code</li>
        <br />
        <br />
        <li>
          • Implemented real-time communication between board, text, and graphical display.
        </li>
        <br />
        <br />
        <li>• Maintained code cleanliness through strict adherence to the MVC architecture.</li>
        <br />
        <br />
        <li>
          • Used x11 library for improving user experience.
        </li>
        <br />
      </ul>
    ),
  },
  {
    id: 3,
    image: IMG3,
    title: "MERN Stack",
    github: "https://github.com/aadhyaaamashru/CollConnect",
    demo: "https://github.com/aadhyaaamashru/CollConnect",
    brief: (
      <ul className="back_inner_ul">
        <br />
        <br />
        <li>• Connects verified students globally with juniors looking for admissions abroad</li>
        <br />
        <br />
        <li>
          • Inspired by Blind, a Blind for college students
        </li>
        <br />
        <br />
        <li>• Groups students by courses for targeted answers to user questions.</li>
        <br />
        <br />
        <li>
          • Allows students to freely comment without hesitation.
        </li>
        <br />
      </ul>
    ),
  },
];

const Portfolio = () => {
  const [flips, setFlips] = useState(Array(data.length).fill(false));

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };

  return (
    <section id="portfolio" className="outer-portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container front_side">
        {data.map(({ id, image, title, github, demo, brief }, index) => (
          <ReactCardFlip
            key={id}
            isFlipped={flips[index]}
            flipDirection="horizontal"
            containerClassName="containerClassName"
          >
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a className="btn" onClick={() => handleFlip(index)}>
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>

            <div className="container portfolio__container back_side">
              <p>{brief}</p>
              <a
                className="btn back_side_btn"
                onClick={() => handleFlip(index)}
              >
                Back
              </a>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

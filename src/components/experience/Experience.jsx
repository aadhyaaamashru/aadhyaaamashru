import React from "react";
import "./experience.css";
import rbcLogo from "../../assets/logos/rbc.png";
import ldbLogo from "../../assets/logos/ldb.png";
import coachbotsLogo from "../../assets/logos/coachbots.png";
import twoplugsLogo from "../../assets/logos/twoplugs.png";
import brisktekLogo from "../../assets/logos/brisktek.png";
import blueprintLogo from "../../assets/logos/blueprint.png";
import uwpmLogo from "../../assets/logos/uwpm.png";

const workExperiences = [
  {
    logo: rbcLogo,
    company: "Royal Bank of Canada",
    role: "Software Developer",
    duration: "May 2025 – Aug 2025",
  },
  {
    logo: ldbLogo,
    company: "BC Liquor",
    role: "Software Developer",
    duration: "May 2024 – Dec 2024",
  },
  {
    logo: coachbotsLogo,
    company: "CoachBOTS",
    role: "Technical Product Manager",
    duration: "May 2024 – Sep 2024",
  },
  {
    logo: twoplugsLogo,
    company: "TwoPlugs",
    role: "Software Developer",
    duration: "May 2023 – Aug 2023",
  },
  {
    logo: brisktekLogo,
    company: "Push Property - Brisktek Solution",
    role: "Full Stack Developer (Freelance)",
    duration: "Apr 2023 – Dec 2023",
  },
];

const clubExperiences = [
  {
    logo: uwpmLogo,
    company: "UW Product Management Club",
    duration: "Jan 2024 – Present",
    ladder: [
      {
        title: "President",
        duration: "Jan 2025 – Present",
      },
      {
        title: "Software Engineering Lead",
        duration: "May 2024 – Jan 2025",
      },
      {
        title: "Software Developer",
        duration: "Jan 2024 – May 2024",
      },
    ],
  },
  {
    logo: blueprintLogo,
    company: "Blueprint",
    role: "Software Developer",
    duration: "Apr 2024 – Present",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I've worked</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
        {workExperiences.map((exp, index) => (
          <article key={index} className="experience__card">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="experience__logo"
            />
            <div>
              <h4>{exp.company}</h4>
              <small>{exp.role}</small>
              <p className="text-light">{exp.duration}</p>
            </div>
          </article>
        ))}
      </div>

      <h2 style={{ marginTop: "3rem" }}>Extracurriculars</h2>

      <div className="container experience__container">
        {clubExperiences.map((club, index) => (
          <article key={index} className="experience__card">
            <img
              src={club.logo}
              alt={`${club.company} logo`}
              className="experience__logo"
            />
            <div>
              <h4>{club.company}</h4>

              {club.ladder ? (
                <>
                  <p className="text-light">{club.duration}</p>
                  <div className="ladder">
                    {club.ladder.map((step, i) => (
                      <div key={i} className="ladder__step">
                        <div className="ladder__line" />
                        <div className="ladder__content">
                          <small>{step.title}</small>
                          <p className="text-light">{step.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <small>{club.role}</small>
                  <p className="text-light">{club.duration}</p>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

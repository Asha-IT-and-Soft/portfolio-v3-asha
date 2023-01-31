import { srConfig } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineFolder } from "react-icons/hi";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    async function animate() {
      if (revealTitle.current && revealProjects.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealTitle.current, srConfig());
        sr().reveal(revealArchiveLink.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr().reveal(ref, srConfig(i * 100))
        );
      }
    }
    animate();
  }, []);

  const GRID_LIMIT = 6;
  const projects = [
    {
      external: "#",
      title: "Asha IT",
      tech: ["React", "Node.js", "Firebase", "Mongo DB"],
      githubFront: "#",
      githubBack: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vitae placeat cumque delectus cum modi aut, unde debitis doloribus recusandae!",
    },
    {
      external: "#",
      title: "Asha IT",
      tech: ["React", "Node.js", "Firebase", "Mongo DB"],
      githubFront: "#",
      githubBack: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vitae placeat cumque delectus cum modi aut, unde debitis doloribus recusandae!",
    },
  ];
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = ({
    githubFront,
    githubBack,
    external,
    title,
    tech,
    description,
  }) => {
    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <CiFolderOn />
              {/* <FiFolder /> */}
              {/* <HiOutlineFolder /> */}
            </div>
            <div className="project-links">
              {githubFront && (
                <a
                  href={githubFront}
                  aria-label="GitHub Link"
                  title="Github Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {githubBack && (
                <a
                  href={githubBack}
                  aria-label="GitHub Link"
                  title="Github Link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  title="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
            <p>{description}</p>
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <section className="other-projects container">
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>

      {/* <Link
        className="inline-link archive-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </Link> */}

      <ul className="projects-grid">
        <TransitionGroup component={null}>
          {projectsToShow &&
            projectsToShow.map((item, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}
              >
                <li
                  className="other-project"
                  key={i}
                  ref={(el) => (revealProjects.current[i] = el)}
                  style={{
                    transitionDelay: `${
                      i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                    }ms`,
                  }}
                >
                  {projectInner(item)}
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
};

export default OtherProjects;

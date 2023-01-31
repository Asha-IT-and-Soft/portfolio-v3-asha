import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ashaIT from "@/Assets/Projects/asha-it.png";
import { srConfig } from "@/utils";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const featuredProjects = [
  {
    external: "#",
    title: "Asha IT",
    tech: ["React", "Node.js", "Firebase", "Mongo DB"],
    githubFront: "#",
    githubBack: "#",
    cover: ashaIT,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vitae placeat cumque delectus cum modi aut, unde debitis doloribus recusandae!",
  },
  {
    external: "#",
    title: "Asha IT",
    tech: ["React", "Node.js", "Firebase", "Mongo DB"],
    githubFront: "#",
    githubBack: "#",
    cover: ashaIT,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis vitae placeat cumque delectus cum modi aut, unde debitis doloribus recusandae!",
  },
];

function Projects() {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    async function animate() {
      if (revealTitle.current && revealProjects.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealTitle.current, srConfig());
        revealProjects.current.forEach((ref, i) =>
          sr().reveal(ref, srConfig(i * 100))
        );
      }
    }
    animate();
  }, []);

  return (
    <Container className="padding-container" id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I’ve Built
      </h2>
      <Row>
        <ul className="project-grid">
          {featuredProjects &&
            featuredProjects.map(
              (
                {
                  external,
                  title,
                  tech,
                  githubFront,
                  githubBack,
                  cover,
                  description,
                },
                i
              ) => {
                return (
                  <li
                    className="project"
                    key={i}
                    ref={(el) => (revealProjects.current[i] = el)}
                  >
                    <div className="project-content">
                      <div>
                        <p className="project-overline">Featured Project</p>

                        <h3 className="project-title">
                          <a href={external}>{title}</a>
                        </h3>

                        <div className="project-description">{description}</div>

                        {tech.length && (
                          <ul className="project-tech-list">
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </ul>
                        )}

                        <div className="project-links">
                          {githubFront && (
                            <a href={githubFront} aria-label="GitHub Link">
                              <FiGithub />
                              Front End
                            </a>
                          )}
                          {githubBack && (
                            <a href={githubBack} aria-label="GitHub Link">
                              <FiGithub />
                              Back End
                            </a>
                          )}
                          {external && (
                            <a
                              href={external}
                              aria-label="External Link"
                              className="external"
                            >
                              <FiExternalLink />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="project-image">
                      <a href={external}>
                        <Image
                          src={cover}
                          height="auto"
                          width="auto"
                          alt={title}
                          className="img"
                        />
                      </a>
                    </div>
                  </li>
                );
              }
            )}
        </ul>
      </Row>
    </Container>
  );
}

export default Projects;

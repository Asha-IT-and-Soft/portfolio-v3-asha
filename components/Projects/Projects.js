import ashaIT from "@/Assets/Projects/asha-it.png";
import devfeed from "@/Assets/Projects/devfeed.png";
import mudi from "@/Assets/Projects/mudi.png";
import live from "@/Assets/Projects/lively.png";
import plant from "@/Assets/Projects/plant.png";
import todo from "@/Assets/Projects/todo.png";
import { srConfig } from "@/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const featuredProjects = [
  {
    external: "https://devfeed.vercel.app/",
    title: "DevFeed",
    tech: ["TypeScript", "React", "Next.js", "Firebase", "Recoil", "Chakra UI"],
    githubFront: "https://github.com/inzamam-ul/devfeed",
    cover: devfeed,
    description:
      "A platform designed for developers that enables them to build a community and share technology news. It allows developers to join other communities, post content, comment on others' posts, and vote on them",
  },
  {
    external:
      "https://drive.google.com/file/d/1G5L93VZlug7Sq5A6riEt6qdphLLNcUWn/view?usp=sharing",
    title: "Plant AI",
    tech: [
      "Javascript",
      "React Native",
      "Node.js",
      "Python(Backend)",
      "PyTorch",
      "OpenAI",
    ],
    githubFront: "https://github.com/inzamam-ul/Plant-AI-FrontEnd",
    githubBack: "https://github.com/inzamam-ul/AgroAI-server",
    cover: plant,
    description: "PLANT AI - A Plant Disease Detection App with AI Chatbot",
  },
  {
    external: "https://livelystudio.io/",
    title: "Lively",
    tech: ["TypeScript", "React", "Next.js", "Bootstrap", "Prisma", "mysql"],
    githubFront: "https://github.com/inzamam-ul/",
    cover: live,
    description:
      "A platform designed for developers that enables them to build a community and share technology news. It allows developers to join other communities, post content, comment on others' posts, and vote on them",
  },
  {
    external: "https://asha-it.web.app/",
    title: "Asha IT",
    tech: ["React", "express.js", "Firebase", "Mongo DB", "Stripe"],
    githubFront: "https://github.com/inzamam-ul/AshaIT-client",
    githubBack: "https://github.com/inzamam-ul/AshaIT-server",
    cover: ashaIT,
    description:
      "It's a software company website where authenticated users can buy services and check their service status. On the Admin dashboard admin can add/delete/update any services and change order status",
  },
  {
    external: "https://mudidokan-fullstack.web.app/",
    title: "MudiDokan",
    tech: ["JavaScript", "React", "Node.js", "Firebase", "Mongo DB"],
    githubFront: "https://github.com/inzamam-ul/mudidokan-client",
    githubBack: "https://github.com/inzamam-ul/mudidokan-server",
    cover: mudi,
    description:
      "Mudidokan.com is a online grocery shop where user can order their desired product, check order status",
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
                            <a
                              href={githubFront}
                              aria-label="GitHub Frontend Link"
                            >
                              <FiGithub />
                              Front End
                            </a>
                          )}
                          {githubBack && (
                            <a
                              href={githubBack}
                              aria-label="GitHub Backend Link"
                            >
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
                          placeholder="blur"
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

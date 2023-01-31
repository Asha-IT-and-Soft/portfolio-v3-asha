import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { srConfig } from "@/utils";

const Work = () => {
  const data = [];

  const jobsData = [
    {
      date: "2017-12-21",
      title: "Front End Developer",
      company: "Lively",
      location: "Freelancing Project",
      range: "January - April 2022",
      url: "https://livelystudio.io/",
      des: [
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and ",
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
      ],
    },
    {
      date: "2017-12-21",
      title: "Full Stack Developer",
      company: "Prime Oman",
      location: "Freelance Project",
      range: "January - April 2022",
      url: "#",
      des: [
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and ",
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
      ],
    },
    {
      date: "2017-12-21",
      title: "Front End Engineer",
      company: "eRMG",
      location: "Singapore(Remote)",
      range: "July - November 2021",
      url: "https://www.ermg.co/",
      des: [
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and ",
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
      ],
    },
  ];

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const revealHeader = useRef(null);

  useEffect(() => {
    async function animate() {
      if (revealContainer.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(revealHeader.current, srConfig());
        sr().reveal(revealContainer.current, srConfig());
      }
    }
    animate();
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  console.log(activeTabId);

  return (
    <Container id="work" className="padding-container">
      <Row className="padding-container align-items-center justify-content-center">
        <h2 ref={revealHeader} className="numbered-heading">
          Where I’ve Worked
        </h2>
        <Col ref={revealContainer} md={10}>
          <section style={{ maxWidth: 700 }} id="jobs">
            <div style={{ display: "flex" }} className="inner">
              <div
                className="tablist"
                role="tablist"
                aria-label="Job tabs"
                //   onKeyDown={(e) => onKeyDown(e)}
              >
                {jobsData &&
                  jobsData.map(({ company }, i) => {
                    return (
                      <button
                        className="tab-button"
                        key={i}
                        isActive={activeTabId === i}
                        onClick={() => setActiveTabId(i)}
                        ref={(el) => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={activeTabId === i ? "0" : "-1"}
                        aria-selected={activeTabId === i ? true : false}
                        aria-controls={`panel-${i}`}
                      >
                        <span>{company}</span>
                      </button>
                    );
                  })}
                <div
                  className="highlight-tab"
                  style={{
                    transform: `translateY(
                  calc(${activeTabId} * var(--tab-height))
                  )`,
                  }}
                  activeTabId={activeTabId}
                />
                <div
                  className="highlight-mobile"
                  style={{
                    transform: `translateX(
                  calc(${activeTabId} * var(--tab-width))
                  )`,
                  }}
                  activeTabId={activeTabId}
                />
              </div>

              <div className="panels">
                {jobsData &&
                  jobsData.map(({ title, url, company, range, des }, i) => {
                    return (
                      <CSSTransition
                        key={i}
                        in={activeTabId === i}
                        timeout={250}
                        classNames="fade"
                      >
                        <div
                          className="panel"
                          id={i}
                          role="tabpanel"
                          tabIndex={activeTabId === i ? "0" : "-1"}
                          aria-labelledby={`tab-${i}`}
                          aria-hidden={activeTabId !== i}
                          hidden={activeTabId !== i}
                        >
                          <h3>
                            <span>{title}</span>
                            <span className="company">
                              &nbsp;@&nbsp;
                              <a href={url} className="inline-link">
                                {company}
                              </a>
                            </span>
                          </h3>
                          <p className="range">{range}</p>
                          <div className="description">
                            <ul>
                              {des.map((item, i) => {
                                return <li key={i}>{item}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </CSSTransition>
                    );
                  })}
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;

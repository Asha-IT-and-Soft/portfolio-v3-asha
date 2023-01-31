import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../components/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/inzamam-ul/portfolio-v3/main/Assets/inzamam_resume.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);
  const [file, setFile] = useState("./inzamam_resume.pdf");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button
            className="more-button"
            href={file}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          {/* <PDFViewer /> */}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <button
            className="more-button"
            href={file}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;

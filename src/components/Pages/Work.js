import React from "react";
import Navbar from "./../Navbar";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Work() {
  return (
    <div>
      <Navbar />
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="03/2020 – Present"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
          bodyContainerStyle={{
            background: "#ddd",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3 style={{ color: "#61b8ff" }}>
            Sea-Land Distributors | New Orleans, LA
          </h3>
          <h4 style={{ color: "#61b8ff" }}>Front End Developer</h4>
          <p>
            <h5>My Work:</h5>
            <ul>
              <li>
                <a href="http://sldrigging.com/" target="_blank" rel="noopener noreferrer">
                  Sea-Land Distributor's website
                </a>
              </li>
              <li>
                <a
                  href="https://thortex.onrender.com/onlinecerts"
                  target="_blank" rel="noopener noreferrer"
                >
                  Certificate Database Project
                </a>
              </li>
              <li>
                Building Monorepo architecture SPAs (sub brand sites) using
                React and Material UI Framework focusing on latest web
                development trends, search engine optimized responsive websites
              </li>
              <li>
                Graphic Design Projects like logo design, flyer design, etc.
              </li>
            </ul>
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="05/2019 – 08/2019"
          style={{ color: "#e86971" }}
        >
          <h3>Texas Commission on Environmental Quality | Austin, TX</h3>
          <h4>Web Developer and Accesibility Intern</h4>
          <p>
            <h5>My Work:</h5>
            <ul>
              <li>
                To abide by state and federal law, our team reviewed each new
                webpage or application for compliance with the World Wide Web
                Consortium's{" "}
                <a href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noopener noreferrer">
                  Web Content Accessibility GuidelinesExit the TCEQ (WCAG).
                </a>
              </li>
              <li>
                As an intern in Water Quality Division, I was successfully able
                to remediate over 200 webpages and around 3500 assets which
                includes PDFs, Word Docs and Excel files to be AA compliant.
              </li>
              <li>
                My one of the Summer internship projects was to create the 11
                webpages for{" "}
                <a
                  href="https://www.tceq.texas.gov/permitting/wastewater"
                  target="_blank" rel="noopener noreferrer"
                >
                  Pretreatment Team
                </a>{" "}
                which was completed successfully.
              </li>
              <li>
                I made the{" "}
                <a
                  href="https://drive.google.com/file/d/1NSzIeT1jKcvch46IKNrvqSVn_UDRiPqx/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  documentation
                </a>{" "}
                on how I was able to achieve the requirements and made the
                resource available throughout the agency.
              </li>
              <li>
                Recieved Plain Language Training and webCMS Training by the web
                dev team of the agency.
              </li>
            </ul>
          </p>
        </TimelineItem>

        <TimelineItem
          key="003"
          dateText="01/2017 – 05/2017"
          dateInnerStyle={{ background: "grey" }}
        >
          11/2019 – 02/2020
          <h3>Imaginal Marketing Group | New Orleans, LA</h3>
          <h4>Front End Developer Intern</h4>
          <p>
            <ul>
              <li>
                Assisted in building websites using WordPress, PHP and MySql
              </li>
              <li>
                Assisted in Graphic Design tasks using Adobe Creative Suite
              </li>
              <li>Email Marketing and created HTML Email Templates</li>
              <li>
                Worked on Responsive Web design with Foundation and Sass.{" "}
              </li>
            </ul>
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="01/2017 – 05/2017"
          dateInnerStyle={{ background: "#76bb7f" }}
        >
          <h3>St Cloud State University | St. Cloud, MN</h3>
          <h4>Graphic Designer</h4>

          <p>
            <ul>
              <li>
                Created Posters, Banners, Flyers for St Cloud State University's
                events.
              </li>
              <li>Built profiecient understanding of Adobe Creative Suite.</li>
              <li>
                Check out my work <Link to="/portfolio">here</Link> .
              </li>
            </ul>
          </p>
        </TimelineItem>
      </Timeline>
      <Footer/>
    </div>
  );
}

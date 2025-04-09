import React, { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const bgImage = process.env.PUBLIC_URL + "/tech.png";
  const teamPhoto = process.env.PUBLIC_URL + "/0.png";
  const sunLifeLogo = process.env.PUBLIC_URL + "/sunlife.png";

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    document.querySelectorAll(".fade-in-text").forEach((el) => {
      observer.observe(el);
    });

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: `url(${bgImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
        //minHeight: "100vh",
        minHeight: "100%", 
        height: "100%",
      }}
    >
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
        style={{ backgroundColor: "#0E3846" }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#intro">
            <img src={sunLifeLogo} alt="Sun Life Logo" style={{ height: "70px", width: "auto" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#intro">Intro</a></li>
              <li className="nav-item"><a className="nav-link" href="#jira">Jira Automations</a></li>
              <li className="nav-item"><a className="nav-link" href="#confluence">Confluence</a></li>
              <li className="nav-item"><a className="nav-link" href="#api">Python & APIs</a></li>
              <li className="nav-item"><a className="nav-link" href="#ci">CI Challenge</a></li>
              <li className="nav-item"><a className="nav-link" href="#genai">Gen AI Project</a></li>
              <li className="nav-item"><a className="nav-link" href="#sharepoint">SharePoint Developer Gig</a></li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
<section id="intro" className="section bg-lightblue text-center">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-7 text-start">
      <h2 className="mb-4 intro-title">My Co-op Experience at Sun Life</h2>
        <p className="fade-in-text lead text-dark" style={{ marginBottom: "1.5rem" }}>
        <strong>Hi! I’m Nimrah, and I’m currently a Digital Enterprise Coordinator co-op student at Sun Life, working with the DEET (Digital Enterprise Enablement Tools) team. I get to contribute to impactful projects that support teams across the organization, while sharpening my skills in problem-solving, UX design, and technical documentation through hands-on experience.</strong>
        </p>
        <p className="fade-in-text lead text-dark">
        <strong>This is my third co-op term, and I’m in my fourth year of Computer Science at Wilfrid Laurier University, with a minor in User Experience Design. My time at Sun Life continues to help me grow as both a developer and designer, and gives me the opportunity to make meaningful contributions to enterprise-wide tools and platforms.</strong>
        </p>
      </div>
      <div className="col-md-5">
        <img src={teamPhoto} alt="My Team at Sun Life" className="profile-img" />
      </div>
    </div>
  </div>
</section>

      {/* Jira Section */}
      <section id="jira" className="section bg-lightblue">
        <div className="container">
          <h3 className="mb-3">Jira Automations & Project Management</h3>
          <p className="fade-in-text lead text-dark mb-4"></p>
          <ul>
            <li>Created advanced Jira automations using JQL and JSON (e.g. auto-email assignees of overdue issues using <code>#lookupIssues</code>).</li>
            <li>Built validator rules to prevent tickets from transitioning if certain conditions aren't met (e.g. child issues incomplete).</li>
            <li>Automation to clone issues and auto-fill fields based on t-shirt size estimates.</li>
            <li>Worked with global teams across Canada and Asia to build customized automation rules.</li>
            <li>Handled support tickets, created Jira projects, updated workflows, and imported automation JSON templates.</li>
          </ul>
        </div>
      </section>

      {/* Confluence Section */}
      <section id="confluence" className="section bg-light">
        <div className="container">
          <h3 className="mb-3">Confluence UX & Resource Hubs</h3>
          <p className="fade-in-text lead text-dark mb-4"></p>
          <ul>
            <li>Redesigned a team’s Confluence page to follow UX design principles.</li>
            <li>Took the initiative to create and manage Confluence pages for co-op students, compiling all essential resources in one hub (highly praised by peers).</li>
            <li>Built documentation and collaborated with teams to make Confluence content user-friendly and visually engaging.</li>
          </ul>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="section bg-lightblue">
        <div className="container">
          <h3 className="mb-3">REST API & Python Scripting</h3>
          <p className="fade-in-text lead text-dark mb-4"></p>
          <ul>
            <li>Developed Python scripts using Confluence REST API to generate reports.</li>
            <li>Examples: report of broken links, all page URLs, space permissions, and full page body content.</li>
            <li>Used API tokens from Atlassian Developer site to generate reports.</li>
          </ul>
        </div>
      </section>

      <section id="ci" className="section bg-light">
        <div className="container">
          <h3 className="mb-3">DBTS Continuous Improvement Challenge</h3>
          <p className="fade-in-text lead text-dark mb-4">
            <strong>Collaborated on an idea with my team to preserve knowledge of retiring employees working on legacy mainframe systems.
            We proposed a mentorship-based course creation program using My Learning Navigator.
            Mentees would shadow experienced mentors and compile training materials to transfer institutional knowledge efficiently.</strong>
            <br /><br />
            <strong>Team Members: jacob.dagan@sunlife.com, jane.ugbelase@sunlife.com, stella.delorey@sunlife.com, zeel.thakkar@sunlife.com</strong>
          </p>
          
          {/* Image under the text */}
          <img 
            src={process.env.PUBLIC_URL + "/ci_challenge.png"} 
            alt="CI Challenge Visual" 
            className="img-fluid rounded shadow"
            style={{
              display: "block",              
              maxWidth: "60%",              
              height: "auto",
              margin: "20px auto 0",       //center
              borderRadius: "12px"
            }}
          />
        </div>
      </section>


      {/* Gen AI Project Section */}
      <section id="genai" className="section bg-lightblue">
         <div className="container">
           <h3 className="mb-3">Gen AI Project – EVE Implementation</h3>
           <p className="fade-in-text lead text-dark" style={{ marginBottom: "1.5rem" }}>
              <strong>I'm excited to be working with Cynthia and the DEET team on an upcoming Gen AI initiative at Sun Life. The project focuses on implementing a Semantic Retrieval Augmented Generation (RAG) search system, powered by knowledge graphs.</strong>
            </p>
    <p className="fade-in-text lead text-dark">
      <strong>Called the EVE Implementation, this system aims to significantly improve the accuracy, contextual understanding, and relevance of AI-generated responses. By enhancing search functionality for Sun Life employees, we hope to transform how information is accessed and used across the organization—creating more efficient, accurate, and user-friendly experiences.</strong>
    </p>
  </div>
  </section>
  {/* SharePoint Playbook Project Section */}
      <section id="sharepoint" className="section bg-light">
        <div className="container">
          <h3 className="mb-3">SharePoint Developer Gig – Service Optimization Chapter</h3>
          <p className="fade-in-text lead text-dark" style={{ marginBottom: "1.5rem" }}>
            <strong>As part of my role as a SharePoint Developer within the Service Optimization Chapter team at Sun Life, I designed and developed intuitive playbook templates to enhance internal knowledge sharing.</strong>
          </p>
          <p className="fade-in-text lead text-dark">
              <strong>I applied user experience (UX) design principles to ensure the templates were accessible, easy to navigate, and visually structured for clarity. Using Miro, I wireframed layouts and worked closely with my team to gather feedback and iterate on the design. These templates improved onboarding, documentation consistency, and team collaboration by making complex information easier to understand and use.</strong>
              <br /><br />
              <strong>Team Members: juliana.l.gonzalez@sunlife.com, david.koljin@sunlife.com, christopher.lo@sunlife.com</strong>
            </p>

        </div>

        </section>


      {/* Scroll to top button */}
      {showTopButton && (
        <div className="scroll-sidebar" onClick={scrollToTop} title="Scroll to Top">
          <span>↑ Scroll to the Top</span>
        </div>
      )}
    </div>
  );
};

export default App;

import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          JENITA<span></span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
{/* HERO */}
<section className="hero">
  <div className="hero-content">

    <p className="eyebrow">
      AI ENGINEER • SOFTWARE DEVELOPER • DATA ANALYST
    </p>

    <h1 className="hero-name">
      <span className="first-name">JENITA </span>
      <span className="last-name">JEBASEELAN</span>
    </h1>

    <h2 className="hero-title">
      Building Intelligent Solutions 
    </h2>

    <p className="hero-description">
      An enthusiastic AI & Data Science engineer passionate about
      Artificial Intelligence, Generative AI, Machine Learning,
      and building impactful software solutions.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        Explore My Work
      </a>

      <a href="#contact" className="secondary-btn">
        Let's Connect
      </a>
    </div>

  </div>
</section>

    
{/* ABOUT */}
<section id="about" className="section about-section">

  <div className="section-heading">
    <p className="section-label">ABOUT ME</p>
    <h2>Building with <span>curiosity.</span></h2>
  </div>

  <div className="about-content">
    <p className="about-intro">
      I'm Jenita, a B.Tech Artificial Intelligence and Data Science student
      passionate about building practical solutions with Artificial
      Intelligence, Machine Learning, and Generative AI. I enjoy turning
      ideas into meaningful applications while continuously growing as an
      AI Engineer.
    </p>
  </div>

</section>

{/* SKILLS */}
<section id="skills" className="section skills-section">

  <p className="section-label">TECHNICAL SKILLS</p>

  <h2>
    Technologies I <span>work with.</span>
  </h2>

  <div className="skills">

    <span>Python</span>
    <span>Java</span>
    <span>SQL</span>
    <span>Machine Learning</span>
    <span>Generative AI</span>
    <span>RAG</span>
    <span>NumPy</span>
    <span>Pandas</span>
    <span>Matplotlib</span>
    <span>Flask</span>
    <span>React</span>
    <span>Ollama</span>
    <span>ChromaDB</span>
    <span>Streamlit</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>VS Code</span>
    <span>Figma</span>
    <span>MS 360</span>

  </div>

</section>



      {/* PROJECTS */}
      <section id="projects" className="section">
        <p className="section-label">FEATURED PROJECTS</p>

        <h2>Things I've built.</h2>

        <div className="projects">

          <div className="project-card">
            <p className="project-number">01</p>

            <h3>Local Q&A System</h3>

            <p>
              Privacy-focused RAG-based document Q&A system that allows
              users to retrieve intelligent answers from their local documents.
            </p>

            <small>
              Python • RAG • Ollama • ChromaDB • Streamlit
            </small>
          </div>

          <div className="project-card">
            <p className="project-number">02</p>

            <h3>House Price Prediction</h3>

            <p>
              Machine learning application that predicts house prices
              based on important property features and trained regression models.
            </p>

            <small>
              Python • Machine Learning • Pandas • Flask
            </small>
          </div>

          <div className="project-card">
            <p className="project-number">03</p>

            <h3>AI Stylist</h3>

            <p>
              AI-powered fashion styling application that provides
              personalized outfit recommendations based on user preferences
              and fashion choices.
            </p>

            <small>
              AI • Computer Vision • Fashion Tech • React
            </small>
          </div>

          <div className="project-card">
            <p className="project-number">04</p>

            <h3>Smart Task Manager</h3>

            <p>
              Productivity application designed to help students and
              professionals organize tasks and manage their daily activities.
            </p>

            <small>
              React • Supabase
            </small>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's connect.</h2>

        <p>
          Have an idea, opportunity, or project in mind?
          I'd love to connect and build something meaningful.
        </p>

        <div className="contact-details">

          <a href="mailto:jenitajebaseelan7@gmail.com" className="contact-item">
            <span className="contact-icon">✉</span>

            <div>
              <small>Email</small>
              <strong>jenitajebaseelan7@gmail.com</strong>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/jenita-jebaseelan-b15a98332/?isSelfPro"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">in</span>

            <div>
              <small>LinkedIn</small>
              <strong>JenitaJebaseelan</strong>
            </div>
          </a>

          <a
            href="https://github.com/Jenita2006"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">⌘</span>

            <div>
              <small>GitHub</small>
              <strong>Jenita2006</strong>
            </div>
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Jenita Jebaseelan. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
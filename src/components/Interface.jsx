import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";

const Section = ({ children, className = "" }) => (
  <motion.section
    className={`portfolio-section ${className}`}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const Pill = ({ children }) => <span className="pill">{children}</span>;

export const Interface = ({ setSection }) => (
  <main className="interface-shell">
    <Section className="hero-section">
      <div className="eyebrow"><span className="status-dot" /> FULL-STACK SOFTWARE ENGINEER <span className="eyebrow-line" /> CASABLANCA, MA</div>
      <div className="hero-grid">
        <div>
          <p className="hero-kicker">BUILDING SYSTEMS THAT</p>
          <h1>Make complexity<br /><em>feel simple.</em></h1>
          <p className="hero-copy">I&apos;m Saad AFIFI — an engineer shaping reliable enterprise software with Java, Spring Boot, Angular, and data-driven systems.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => setSection(3)}>Start a conversation <span>↗</span></button>
            <a className="button button-ghost" href="/projects/AFIFI_CV.pdf" download>Download resume <span>↓</span></a>
          </div>
        </div>
        <div className="hero-index"><span>SCROLL TO EXPLORE</span><strong>01</strong><div className="index-line" /><span>05</span></div>
      </div>
      <div className="hero-meta"><div><span>Currently</span><strong>Software Engineer · Oracle</strong></div><div><span>Focus</span><strong>Enterprise & distributed systems</strong></div><div><span>Certified</span><strong>Oracle Java SE 17</strong></div></div>
    </Section>

    <Section className="about-section">
      <div className="section-heading"><span className="section-number">01 / 05</span><div><p className="eyebrow">THE ENGINEER BEHIND THE CODE</p><h2>From idea to<br /><em>production.</em></h2></div></div>
      <div className="about-grid"><p className="lead">I build the connective tissue between ambitious product ideas and dependable software. My work spans business-critical CRM features at Oracle, real-time data pipelines, and interfaces that make complex operations clear.</p><div className="facts"><div><strong>29%</strong><span>Oracle optimizer cost reduction</span></div><div><strong>92%</strong><span>Test accuracy on ML platform</span></div><div><strong>3+</strong><span>Years building software</span></div></div></div>
      <div className="timeline"><div className="timeline-item active"><span>08/2026 — PRESENT</span><div><h3>Oracle <small>Junior Member of Technical Staff</small></h3><p>Building business-critical CRM features for the NetSuite platform with enterprise Java practices.</p></div></div><div className="timeline-item"><span>01/2026 — 07/2026</span><div><h3>Oracle <small>Software Engineering Intern · PFE</small></h3><p>Optimized financial algorithms and PL/SQL execution plans while expanding JUnit and Mockito regression coverage.</p></div></div><div className="timeline-item"><span>07/2025 — 08/2025</span><div><h3>Colas Digital Solutions <small>Software Developer Intern</small></h3><p>Shipped payroll services, Angular dashboards, ELK observability, and Kafka/Spark Streaming pipelines.</p></div></div></div>
    </Section>

    <Section className="skills-section">
      <div className="section-heading"><span className="section-number">02 / 05</span><div><p className="eyebrow">THE TOOLKIT</p><h2>Fluent across<br /><em>the stack.</em></h2></div></div>
      <div className="skills-layout"><div className="skill-cloud"><Pill>Java</Pill><Pill>Spring Boot</Pill><Pill>Angular</Pill><Pill>React</Pill><Pill>SQL / PL/SQL</Pill><Pill>Apache Kafka</Pill><Pill>Apache Spark</Pill><Pill>Scala</Pill><Pill>Docker</Pill><Pill>Kubernetes</Pill><Pill>JUnit / Mockito</Pill><Pill>ELK Stack</Pill></div><div className="skill-columns"><div><span>BACKEND</span><p>REST APIs<br />JPA / Hibernate<br />JWT · Node.js</p></div><div><span>DATA & SYSTEMS</span><p>Oracle · PostgreSQL<br />MongoDB · MySQL<br />Event-driven architecture</p></div><div><span>DELIVERY</span><p>GitLab CI/CD<br />Azure · Linux<br />Agile / Scrum</p></div></div></div>
    </Section>

    <Section className="projects-section">
      <div className="section-heading"><span className="section-number">03 / 05</span><div><p className="eyebrow">SELECTED WORK</p><h2>Ideas made<br /><em>tangible.</em></h2></div></div><ProjectShowcase />
    </Section>

    <Section className="contact-section">
      <div className="section-heading"><span className="section-number">04 / 05</span><div><p className="eyebrow">LET&apos;S CONNECT</p><h2>Have a system<br /><em>to build?</em></h2></div></div><ContactForm /><footer><span>SAAD AFIFI / 2026</span><span>JAVA · DATA · PRODUCT</span><a href="mailto:afifisaad8@gmail.com">afifisaad8@gmail.com ↗</a></footer>
    </Section>
  </main>
);

const ProjectShowcase = () => { const [current, setCurrent] = useAtom(currentProjectAtom); const project = projects[current] || projects[0]; return <div className="project-showcase"><div className="project-number">0{current + 1}</div><div className="project-copy"><p className="eyebrow">{project.category || "FULL-STACK PLATFORM"}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags"><Pill>Spring Boot</Pill><Pill>{current === 0 ? "Random Forest" : current === 1 ? "Kafka" : "Angular"}</Pill></div></div><div className="project-controls"><button onClick={() => setCurrent((current - 1 + projects.length) % projects.length)} aria-label="Previous project">←</button><span>{String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><button onClick={() => setCurrent((current + 1) % projects.length)} aria-label="Next project">→</button></div></div>; };

const ContactForm = () => { const [state, handleSubmit] = useForm("mrbpzaey"); return <div className="contact-layout"><div className="contact-details"><p>Open to thoughtful teams, challenging systems, and conversations about building what&apos;s next.</p><a href="mailto:afifisaad8@gmail.com">afifisaad8@gmail.com</a><a href="tel:+212621740209">+212 621 740 209</a><div className="socials"><a href="https://github.com/saadox215" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>{state.succeeded ? <p className="success-message">Message received. I&apos;ll be in touch shortly.</p> : <form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">YOUR NAME<input id="name" name="name" required /></label><label htmlFor="email">EMAIL ADDRESS<input id="email" name="email" type="email" required /><ValidationError prefix="Email" field="email" errors={state.errors} /></label><label htmlFor="message">WHAT&apos;S ON YOUR MIND?<textarea id="message" name="message" rows="3" required /></label><button className="button button-primary" disabled={state.submitting}>Send message <span>↗</span></button><ValidationError errors={state.errors} /></form>}</div>; };

export default Interface;

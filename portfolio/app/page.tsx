import type { Metadata } from "next";
import { ProjectCard, type Project } from "./components/ProjectCard";

export const metadata: Metadata = {
  title: { absolute: "Trupti Lone — Software, Machine Learning & AI Engineer" },
  description: "Trupti Lone’s software engineering portfolio: React and TypeScript interfaces, Python and FastAPI backends, machine learning, RAG, voice AI, agent orchestration, and MCP integrations.",
};

const academicProjects: Project[] = [
  { index: "01", title: "AI Realtor Voice Assistant", description: "A team-built home-tour assistant with narrated rooms and spoken property Q&A. My role covered the FastAPI backend, WebSocket voice loop, speech processing, and property-grounded RAG pipeline.", category: "Voice AI · Team Project", technologies: ["FastAPI", "LangChain", "Whisper", "FAISS"], result: "Industry practicum · backend & AI", tone: "sage", href: "https://github.com/TruptiLone/ai-realtor-voice-assistant" },
  { index: "02", title: "AI Mock Interview", description: "An NLP project for practicing behavioral interviews tailored to a job posting. Combines role extraction, conversational follow-ups, speech input, and structured AI feedback through a Gradio interface.", category: "Natural Language Processing", technologies: ["Python", "LangChain", "Gradio", "OpenAI"], href: "https://github.com/TruptiLone/AI-Mock-Interview-AI---Natural-Language-Processing-Project" },
  { index: "03", title: "Data-Driven Airbnb", description: "An analytics and machine learning study of Airbnb listings. Explores neighborhoods, room types, prices, reviews, and host verification through data cleaning, visualization, regression, and classification.", category: "Data Analytics & ML", technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn"], href: "https://github.com/TruptiLone/Data-Driven-Airbnb---Data-Analytics-and-Machine-Learning-Project" },
  { index: "04", title: "SmartHealth MLOps Case Study", description: "A team architecture case study for ML-assisted support-ticket triage. Covers model validation, CI/CD quality gates, release planning, and monitoring for a fictional consultancy; documentation and design, not a deployed system.", category: "Architecture · Team Project", technologies: ["MLOps", "CI/CD", "Delivery Planning"], href: "https://github.com/TruptiLone/smarthealth-mlops-case-study" },
];

const featuredProjects: Project[] = [
  { index: "05", title: "California Housing — End-to-End ML", description: "Predicting historical district median home values with reproducible preprocessing, geographic features, cross-validation, and a tuned random forest. Evaluation uses a held-out test set.", category: "Machine Learning", technologies: ["Python", "Scikit-learn", "Pandas"], result: "Test RMSE: $45,724 · R²: 0.844", tone: "sand", href: "https://github.com/TruptiLone/california-housing-end-to-end-with-scikit-learn" },
  { index: "06", title: "Multi-Framework Agent Orchestrator", description: "An adapted language-game builder exploring agent collaboration through a SQLite task board, filesystem MCP tools, and Playwright QA. Includes eight notebooks; the full live workflow remains to be validated.", tone: "clay", category: "AI Agents & MCP", technologies: ["Python", "Google ADK", "MCP", "SQLite"], href: "https://github.com/TruptiLone/multi-framework-agent-orchestrator" },
  { index: "07", title: "Technical Knowledge Assistant", description: "A modular RAG pipeline comparing BM25, dense, and hybrid retrieval over local documents. Includes source tracking, persisted indexes, and a small synthetic evaluation with documented generation limitations.", category: "Retrieval & LLMs", technologies: ["Python", "FAISS", "Hugging Face"], result: "CLI prototype · retrieval evaluation", tone: "sage", href: "https://github.com/TruptiLone/technical-docs-assistant-rag-pipeline" },
];

const libraryProjects: Project[] = [
  { index: "08", title: "Studentlytics", description: "A student analytics dashboard prototype created for an AWS hackathon. A React and TypeScript interface brings charts and student information together in a navigable dashboard.", category: "Dashboard Prototype", technologies: ["React", "TypeScript", "Recharts", "Vite"], href: "https://github.com/TruptiLone/AWS-Hackathon" },
];

const stackGroups = [
  { label: "Frontend", items: "React, TypeScript, HTML, CSS, Recharts" },
  { label: "Backend & data", items: "Python, FastAPI, REST APIs, WebSockets, SQL, SQLite" },
  { label: "Machine learning", items: "Scikit-learn, Pandas, NumPy, feature engineering, model evaluation" },
  { label: "Generative & voice AI", items: "RAG, Hugging Face, FAISS, LangChain, Whisper, ElevenLabs" },
  { label: "Agentic AI & tools", items: "Google ADK, multi-agent orchestration, MCP, Playwright" },
  { label: "Engineering practices", items: "Git, automated testing, reproducible experiments, MLOps & CI/CD design" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Trupti Lone, home">TL<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="https://github.com/TruptiLone" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/trupti-lone/" target="_blank" rel="noreferrer">LinkedIn</a></nav>
      </header>
      <section className="hero shell" id="top">
        <div className="hero-kicker"><span className="status-dot" /> Open to software engineering & AI/ML roles</div>
        <h1>Software Engineer<br /><span className="hero-specialty">Machine Learning &amp; AI</span></h1>
        <div className="hero-bottom"><div className="hero-summary"><p>I’m Trupti Lone, a software engineer and recent M.S. Information Systems graduate from Santa Clara University (June 2026). My experience spans backend engineering, cloud platforms, machine learning, and applied AI.</p><p>I build voice-enabled RAG systems, LLM-powered assistants, AWS-based analytics platforms, predictive models, data pipelines, and end-to-end applications with Python, FastAPI, React, LangChain, and modern AI frameworks.</p><p>I’m especially interested in agentic AI, MCP-based integrations, and intelligent workflows that combine reasoning, context retrieval, and tool use to solve complex tasks.</p></div><div className="hero-actions"><a className="button button-primary" href="#projects">View projects</a><a className="button button-secondary" href="https://github.com/TruptiLone" target="_blank" rel="noreferrer">GitHub</a></div></div>
      </section>
      <section className="section library-section" id="projects"><div className="shell">
        <div className="section-heading compact-heading"><div><p className="eyebrow">Coursework &amp; collaboration</p><h2>Academic projects</h2></div></div>
        <div className="library-grid academic-grid">{academicProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </div></section>
      <section className="section shell" id="featured-projects">
        <div className="section-heading compact-heading"><div><p className="eyebrow">Selected work</p><h2>Featured projects</h2></div></div>
        <div className="featured-grid">{featuredProjects.map((project) => <ProjectCard key={project.title} project={project} featured />)}</div>
      </section>
      <section className="section library-section"><div className="shell">
        <div className="section-heading compact-heading"><div><p className="eyebrow">Beyond the coursework</p><h2>More projects</h2></div></div>
        <div className="library-grid more-projects-grid">{libraryProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </div></section>
      <section className="section shell stack-section">
        <div className="section-heading compact-heading"><div><p className="eyebrow">Capabilities</p><h2>Tech stack</h2></div></div>
        <div className="stack-list">{stackGroups.map((group, index) => <div className="stack-row" key={group.label}><span className="stack-number">0{index + 1}</span><h3>{group.label}</h3><p>{group.items}</p></div>)}</div>
      </section>
      <section className="about-section" id="about"><div className="shell about-grid"><p className="eyebrow">A little about me</p><div><h2>Curiosity, clear thinking, and ownership—from idea to implementation.</h2><p>I approach engineering with technical curiosity, structured problem solving, and an ownership mindset. I enjoy taking ambiguous ideas from problem definition through architecture, implementation, evaluation, and iteration, while collaborating closely with cross-functional teams.</p><p>My projects connect frontend experiences, backend services, data pipelines, and AI models. I care about how those pieces work together: choosing useful abstractions, evaluating model behavior, testing integrations, and making technical tradeoffs explicit.</p><p>I’m a continuous learner who enjoys exploring emerging technologies and turning that learning into practical, reliable systems. My goal is to build software that creates meaningful value for users and the teams and businesses it supports.</p><a className="text-link" href="mailto:lonetrupti@gmail.com">Start a conversation</a></div></div></section>
      <footer className="site-footer shell"><div><a className="wordmark" href="#top">TL<span className="wordmark-dot">.</span></a><p>Software Engineering · Machine Learning · AI</p></div><div className="footer-links"><a href="https://github.com/TruptiLone" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/trupti-lone/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:lonetrupti@gmail.com">lonetrupti@gmail.com</a></div><p className="copyright">© {new Date().getFullYear()} — Built with care.</p></footer>
    </main>
  );
}

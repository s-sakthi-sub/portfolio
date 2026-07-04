"use client";

import { FormEvent, useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "arrowUp"
  | "briefcase"
  | "check"
  | "chevron"
  | "code"
  | "download"
  | "github"
  | "linkedin"
  | "mail"
  | "menu"
  | "moon"
  | "spark"
  | "sun"
  | "x";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowUp: <><path d="m7 17 10-10" /><path d="M7 7h10v10" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1.1S17.9-.3 15 1.7a13.4 13.4 0 0 0-6 0C6.1-.3 4.9.1 4.9.1A5.4 5.4 0 0 0 4.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4M9 19c-3 .9-3-1.5-4.2-2" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
    spark: <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></>,
    x: <><path d="M18 6 6 18M6 6l12 12" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const projects = [
  {
    number: "01",
    title: "Water Treatment",
    type: "Treatment operations · Full-stack",
    description:
      "A digital solution for tracking treatment operations, system conditions, and important process information in one clear workspace.",
    tags: ["Processing", "Monitoring", "Role-based Users", "Operations", "Maintenance", "Reporting"],
    tone: "coral",
  },
  {
    number: "02",
    title: "Tenjin",
    type: "Test data management · Enterprise",
    description:
      "Accelerate testing, reduce infrastructure overhead, and secure sensitive financial data across every non-production environment. Built for banks, fintechs, and enterprise technology teams, this Test Data Management solution enables organizations to provision optimized, masked, and environment-ready datasets for faster and safer software delivery.",
    tags: ["UI Automation", "API Testing", "Testpack", "Monitoring", "Reporting"],
    website: "https://tenjinworkbench.com/",
    tone: "violet",
  },
  {
    number: "03",
    title: "ARIOS",
    type: "AI test automation · Enterprise",
    description:
      "ARIOS is an AI-powered, scriptless test automation platform developed by Oracle, designed to streamline UI and API testing across enterprise applications.",
    tags: ["UI Automation", "API Testing", "Testpack", "Monitoring", "Reporting"],
    tone: "teal",
  },
];

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

const skillGroups = [
  {
    title: "Frontend",
    index: "01",
    skills: ["JSP", "React / Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    index: "02",
    skills: ["Servlet", "Spring", "Spring Boot", "Spring Boot Microservices", "PostgreSQL"],
  },
  {
    title: "Tools",
    index: "03",
    skills: ["Git & GitHub", "Docker", "CI / CD", "OpenAI Codex — Familiar"],
  },
];

type Client = {
  number: string;
  name: string;
  location: string;
  applications: string[];
};

const clients: Client[] = [
  { number: "01", name: "Emirates NBD", location: "Dubai", applications: ["Finacle"] },
  { number: "02", name: "National Bank of Kenya", location: "Kenya", applications: ["Finacle"] },
  { number: "03", name: "State Bank of Mauritius", location: "Mauritius", applications: ["Finacle", "CRM"] },
  { number: "04", name: "Bank South Pacific", location: "Papua New Guinea", applications: ["Finacle", "CRM"] },
  { number: "05", name: "ICICI Bank", location: "India", applications: ["Finacle"] },
  { number: "06", name: "Lloyds Bank", location: "India", applications: ["Flexcube", "OFSAA"] },
];

function MountainScene() {
  return (
    <div className="mountain-scene" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#07131d" />
            <stop offset="0.48" stopColor="#24303d" />
            <stop offset="0.72" stopColor="#a46b4e" />
            <stop offset="1" stopColor="#1a252a" />
          </linearGradient>
          <radialGradient id="glow" cx="62%" cy="43%" r="44%">
            <stop offset="0" stopColor="#f0ad7d" stopOpacity=".5" />
            <stop offset=".36" stopColor="#bc7456" stopOpacity=".16" />
            <stop offset="1" stopColor="#07121b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ridgeA" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#1c2d36" />
            <stop offset="1" stopColor="#0a151b" />
          </linearGradient>
          <linearGradient id="ridgeB" x1="0" y1="0" x2=".5" y2="1">
            <stop stopColor="#40505b" />
            <stop offset=".22" stopColor="#1d2b34" />
            <stop offset="1" stopColor="#0b171c" />
          </linearGradient>
          <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8d766d" stopOpacity=".75" />
            <stop offset=".45" stopColor="#2d424c" stopOpacity=".8" />
            <stop offset="1" stopColor="#101f27" />
          </linearGradient>
          <filter id="blur"><feGaussianBlur stdDeviation="18" /></filter>
        </defs>
        <rect width="1600" height="900" fill="url(#sky)" />
        <rect width="1600" height="900" fill="url(#glow)" />
        <g fill="#d5a083" opacity=".08" filter="url(#blur)">
          <ellipse cx="1040" cy="360" rx="340" ry="90" />
          <ellipse cx="700" cy="300" rx="230" ry="70" />
        </g>
        <path d="M0 360 130 420l140-165 145 221 105-89 116 95 180-286 142 209 152-114 115 148 170-250 125 156 100-64v619H0z" fill="url(#ridgeB)" />
        <path d="m570 473 246-277 43 69 22-31 77 171 52-38 80 78 95-108 69 105 132-253 114 142 100-50v619H0V503l130-150 150 145 107-93 85 103z" fill="url(#ridgeA)" opacity=".94" />
        <g fill="none" stroke="#df9871" strokeOpacity=".34" strokeWidth="3">
          <path d="m817 197 5 89 31-18 25 80 79 58" />
          <path d="m1386 190 15 91 38-17 61 68" />
          <path d="m1154 369 30 40 18-17 53 50" />
        </g>
        <path d="M630 900c82-154 248-273 430-325-89 91-98 179-15 325z" fill="url(#river)" opacity=".76" />
        <path d="M0 705c171-64 304-48 448 39 149-74 280-51 388 55v101H0zM1600 640c-164-19-317 17-455 128l-56 132h511z" fill="#071116" />
        <g fill="#0c1b1c" opacity=".96">
          <path d="m36 665 16-87 17 87zM70 686l26-140 29 140zM122 677l18-98 20 98zM1460 682l27-148 31 148zM1510 668l20-105 22 105zM1550 690l30-164 35 164z" />
        </g>
      </svg>
    </div>
  );
}

function CodeWindow() {
  return (
    <div className="code-window glass-card">
      <div className="window-top">
        <div className="traffic-lights" aria-hidden="true">
          <span /><span /><span />
        </div>
        <span>developer.ts</span>
      </div>
      <pre aria-label="Developer profile code sample">
        <code>
          <span className="syntax-blue">const</span>{" "}
          <span className="syntax-white">developer</span>{" "}={" {\n"}
          {"  "}<span className="syntax-pink">name</span>: <span className="syntax-green">&quot;Sakthivel&quot;</span>,{"\n"}
          {"  "}<span className="syntax-pink">role</span>: <span className="syntax-green">&quot;Software Developer&quot;</span>,{"\n"}
          {"  "}<span className="syntax-pink">stack</span>: [{"\n"}
          {"    "}<span className="syntax-green">&quot;React / Next.js&quot;</span>, <span className="syntax-green">&quot;TypeScript&quot;</span>,{"\n"}
          {"    "}<span className="syntax-green">&quot;Spring Boot&quot;</span>, <span className="syntax-green">&quot;PostgreSQL&quot;</span>{"\n"}
          {"  "}],{"\n"}
          {"  "}<span className="syntax-pink">focus</span>: <span className="syntax-green">&quot;Useful products&quot;</span>{"\n"}
          {"};\n\n"}
          <span className="syntax-comment">// Build clearly. Ship thoughtfully.</span>
        </code>
      </pre>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored === "light") setLight(true);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  }, [light]);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const activationPoint = window.scrollY + (header?.offsetHeight ?? 72) + 24;
      let currentSection: SectionId = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= activationPoint) {
          currentSection = id;
        }
      });

      const pageBottom = window.scrollY + window.innerHeight;
      if (pageBottom >= document.documentElement.scrollHeight - 2) {
        currentSection = "contact";
      }

      setActiveSection((previous) => previous === currentSection ? previous : currentSection);
      animationFrame = null;
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const message = String(form.get("message") || "");
    window.location.href = `mailto:Sakth.Sub@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#home" aria-label="Sakthivel home">
          Sakthivel<span>.</span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : undefined}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => {
                setActiveSection(item.id);
                closeMenu();
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-hire"
            href="#contact"
            onClick={() => {
              setActiveSection("contact");
              closeMenu();
            }}
          >
            Hire Me
          </a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}>
            <Icon name={light ? "moon" : "sun"} />
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <MountainScene />
        <div className="hero-vignette" />

        <div className="social-rail" aria-label="Social links">
          <span className="rail-line" />
          <a href="https://github.com/s-sakthi-sub/portfolio" aria-label="GitHub" target="_blank" rel="noreferrer"><Icon name="github" size={19} /></a>
          <a href="https://www.linkedin.com/in/sakthivel-subramaniyam-8b3b036a/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /></a>
          <a href="mailto:Sakth.Sub@gmail.com" aria-label="Email"><Icon name="mail" size={19} /></a>
        </div>

        <div className="hero-content shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Hello, I&apos;m</div>
            <h1>Sakthivel</h1>
            <h2>Software <em>Developer</em></h2>
            <p>I turn complex ideas into fast, accessible, and beautifully simple digital products.</p>
            <div className="hero-cta">
              <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" /></a>
              <a className="button button-secondary" href="/Sakthivel_Principal_Consultant.pdf" download="Sakthivel_Principal_Consultant.pdf">Download résumé <Icon name="download" /></a>
            </div>
          </div>
          <CodeWindow />
        </div>

        <a className="scroll-cue" href="#about">
          <span>Scroll to discover</span>
          <Icon name="chevron" size={18} />
        </a>

        <div className="hero-stats glass-card shell">
          <div><strong>04</strong><span>Core principles</span></div>
          <div><strong>15+</strong><span>Technologies</span></div>
          <div><strong>100%</strong><span>Responsive</span></div>
          <div><strong>∞</strong><span>Curiosity</span></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <div className="section-kicker">01 / About</div>
            <h2 className="section-title">Code with purpose.<br /><span>Design with empathy.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead">I&apos;m a full-stack developer who enjoys the space where engineering, product thinking, and visual craft overlap.</p>
            <p>My approach is simple: understand the real problem, remove what doesn&apos;t help, and build the rest with care. The result is software that feels natural to use and dependable under the hood.</p>
            <a className="text-link" href="#contact">More about how I work <Icon name="arrow" size={18} /></a>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div>THINK <span>✦</span> DESIGN <span>✦</span> BUILD <span>✦</span> LEARN <span>✦</span> THINK <span>✦</span> DESIGN <span>✦</span> BUILD</div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">02 / Selected work</div>
              <h2 className="section-title">Projects that solve<br /><span>real problems.</span></h2>
            </div>
            <p>A small selection of product-focused builds. Each one started with a messy question and ended with a clearer experience.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-orb" />
                  <div className="mock-window">
                    <span /><span /><span />
                    <div className="mock-sidebar" />
                    <div className="mock-content"><i /><i /><i /></div>
                  </div>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  </div>
                  <a
                    href={project.website ?? "#contact"}
                    aria-label={project.website ? `Visit the ${project.title} website` : `Discuss the ${project.title} project`}
                    target={project.website ? "_blank" : undefined}
                    rel={project.website ? "noreferrer" : undefined}
                  >
                    <Icon name="arrowUp" size={24} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="shell">
          <div className="section-kicker">03 / Toolkit</div>
          <div className="skills-intro">
            <h2 className="section-title">The right tools.<br /><span>Thoughtfully applied.</span></h2>
            <p>Technology should support the product—not distract from it. I choose proven foundations, then add complexity only where it earns its place.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <div className="skill-card-top"><span>{group.index}</span><Icon name={group.title === "Frontend" ? "code" : group.title === "Backend" ? "briefcase" : "spark"} size={28} /></div>
                <h3>{group.title}</h3>
                <ul>{group.skills.map((skill) => <li key={skill}><Icon name="check" size={15} />{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients-section" id="clients">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">04 / Clients</div>
              <h2 className="section-title">Clients I&apos;ve<br /><span>worked with.</span></h2>
            </div>
            <p>Banking automation experience across markets, platforms, and enterprise application landscapes.</p>
          </div>
          <div className="client-grid">
            {clients.map((client) => (
              <article className="client-card" key={client.name}>
                <div className="client-card-top">
                  <span>{client.number}</span>
                  <span className="client-location">{client.location}</span>
                </div>
                <h3>{client.name}</h3>
                <div className="client-applications">
                  <span>Applications automated</span>
                  <ul>
                    {client.applications.map((application) => (
                      <li key={application}>{application}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-glow" />
        <div className="shell contact-grid">
          <div>
            <div className="section-kicker">05 / Contact</div>
            <h2>Have a project<br />in mind? <span>Let&apos;s talk.</span></h2>
            <p>Tell me what you&apos;re building, where you&apos;re stuck, or just say hello. I&apos;ll get back to you soon.</p>
            <a className="email-link" href="mailto:Sakth.Sub@gmail.com">Sakth.Sub@gmail.com <Icon name="arrowUp" /></a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label>What can I help with?<textarea name="message" placeholder="A little about your idea..." rows={4} required /></label>
            <button className="button button-primary" type="submit">Send message <Icon name="arrow" /></button>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#home">Sakthivel<span>.</span></a>
          <p>Designed &amp; built with care © {new Date().getFullYear()}</p>
          <div className="footer-links">
            <a href="https://github.com/s-sakthi-sub/portfolio" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sakthivel-subramaniyam-8b3b036a/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#home" aria-label="Back to top"><Icon name="arrowUp" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

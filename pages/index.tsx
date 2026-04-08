import type { NextPage } from "next";
import Layout from "../components/Layout/index";
import styles from "../styles/bento.module.scss";

const Home: NextPage = () => {
  const experiences = [
    {
      company: "SMBC Indonesia (Jenius Digital Banking)",
      role: "Digital Banking Solution Developer",
      duration: "Nov 2023 - Present",
      desc: "Fullstack Developer at SMBC Indonesia (Jenius), developing and optimizing digital banking services using microservices architecture, with expertise in system performance, security, and high-availability financial systems.",
    },
    {
      company: "DANA Indonesia",
      role: "Frontend Engineer Intern",
      duration: "Dec 2022 - Aug 2023",
      desc: "Frontend Engineer Intern at DANA Indonesia, contributing to secure wallet infrastructure and DANA Protection features using Vue.js, ensuring reliable and seamless user and admin experiences.",
    },
    {
      company: "Pahamify",
      role: "Frontend Engineer Intern",
      duration: "Feb - July 2022",
      desc: "Frontend Engineer Intern at Pahamify, enhancing web platform performance using Vue.js and contributing to engineering strategy, including Vue 3 migration and repository architecture decisions.",
    },
    {
      company: "AutomateAll",
      role: "Frontend Engineer Intern",
      duration: "Sep - Nov 2021",
      desc: "Frontend Engineer Intern at AutomateAll, developing high-performance web applications using Next.js, with a focus on UI/UX implementation and agile delivery.",
    },
  ];

  const projects = [
    {
      type: "Web (FE)",
      title: "Bima Utama",
      link: "https://bimautama.com",
      desc: "Industrial machinery and engineering solutions for large-scale operations.",
      size: styles.boxTall,
      variant: styles.bgBlue,
      icon: "bi-gear-fill",
    },
    {
      type: "Web (FE)",
      title: "Resilience Test",
      link: "https://resilience-test.vercel.app",
      size: "",
      variant: styles.bgYellow,
      icon: "bi-activity",
    },
    {
      type: "Web (FE)",
      title: "Simi Studio",
      link: "https://simistudio.vercel.app",
      size: "",
      variant: styles.bgPurple,
      icon: "bi-window-stack",
    },
    {
      type: "Web (FE)",
      title: "Surevkos",
      link: "https://surevkos.vercel.app",
      size: "",
      variant: styles.bgPink,
      icon: "bi-house-check",
    },
  ];

  return (
    <Layout>
      <div className={styles.bentoContainer}>
        {/* Profile Section */}
        <div className={`${styles.bentoBox} ${styles.boxLarge}`}>
          <div className={styles.profileInfo}>
            <div className={styles.avatar}>N</div>
            <div className={styles.details}>
              <h1>Nofath Zukhrufi Haideal</h1>
              <p>Fullstack Web Developer</p>
            </div>
          </div>
          <p className={styles.projectDesc}>
            Fullstack Software Engineer with 2.5+ years of experience in digital
            banking and fintech. Skilled in building scalable and secure
            applications using React Native, ReactJS, Node.js (HapiJS/Express),
            and Vue.js. Experienced in developing and optimizing banking systems
            with a focus on performance, reliability, and compliance.
          </p>
          <div className="mt-auto pt-4 d-flex flex-wrap gap-2">
            <span className={styles.tag}>ReactJS</span>
            <span className={styles.tag}>React Native</span>
            <span className={styles.tag}>NestJS</span>
            <span className={styles.tag}>VueJS</span>
            <span className={styles.tag}>NodeJS</span>
          </div>
        </div>

        {/* Experience Section */}
        <div
          className={`${styles.bentoBox} ${styles.boxLarge} ${styles.bgGray}`}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className={styles.tag}>Experience</span>
            <i className="bi bi-briefcase-fill text-primary"></i>
          </div>
          <div className={styles.experienceList}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
                <div className={styles.role}>{exp.role}</div>
                <p className={styles.expDesc}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Grid */}
        <div className={styles.bentoBox}>
          <div className={styles.socialGrid}>
            <a
              href="https://github.com/NofathZ"
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/nofathzukhrufihaideal"
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/nofath.zukhrufi"
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a href="mailto:nofath86@gmail.com" className={styles.socialItem}>
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>

        {/* Location Box */}
        <div className={styles.bentoBox}>
          <div className="d-flex flex-column h-100 justify-content-between">
            <span className={styles.tag}>Location</span>
            <div>
              <p className="m-0" style={{ fontSize: "24px" }}>
                🇮🇩
              </p>
              <h3 className={styles.projectTitle}>Indonesia</h3>
            </div>
          </div>
        </div>

        {/* About/CTA */}
        <div className={`${styles.bentoBox} ${styles.boxMedium}`}>
          <div className="d-flex flex-column h-100">
            <div className="d-flex justify-content-between align-items-center">
              <span className={styles.tag}>Status</span>
              <i className="bi bi-lightning-charge-fill text-warning"></i>
            </div>
            <h3 className={styles.projectTitle + " mt-2"}>
              Open for new adventures
            </h3>
            <p className={styles.projectDesc}>
              Available for freelance and full-time opportunities. Let&apos;s
              build something great together.
            </p>
          </div>
        </div>

        {/* Projects */}
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`${styles.bentoBox} ${project.size} ${project.variant}`}
          >
            <div className="d-flex justify-content-between align-items-start">
              <span className={styles.tag}>{project.type}</span>
              <div className={styles.iconLink}>
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>

            <div className="mt-auto">
              <div className={styles.projectIcon}>
                <i className={`bi ${project.icon}`}></i>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.desc && (
                <p className={styles.projectDesc}>{project.desc}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

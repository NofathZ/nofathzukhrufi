import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/index";
import styles from "../styles/bento.module.scss";
import { projects } from "../data/projects";

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

  const projectCardConfigs = [
    { size: styles.boxTall, variant: styles.bgBlue },
    { size: "", variant: styles.bgYellow },
    { size: "", variant: styles.bgPurple },
    { size: "", variant: styles.bgPink },
  ];

  return (
    <Layout>
      <div className={styles.bentoContainer}>
        {/* Profile Section */}
        <div className={`${styles.bentoBox} ${styles.boxLarge}`}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className={styles.tag}>Profile</span>
            <i className="bi bi-person-fill text-primary"></i>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.avatar}>N</div>
            <div className={styles.details}>
              <h1>Nofath Zukhrufi Haideal</h1>
              <p>Fullstack Software Engineer</p>
            </div>
          </div>
          <p className={styles.projectDesc}>
            Software Engineer with 3+ years of experience building scalable fintech and digital banking applications across frontend and backend systems. Specialized in React Native, Node.js, Redis, and microservices architecture with supporting DevOps expertise. Strong focus on security, performance, and distributed system reliability.
          </p>
          <div className={`mt-auto pt-4 ${styles.tagsContainer}`}>
            <span className={styles.tag}>ReactJS</span>
            <span className={styles.tag}>React Native</span>
            <span className={styles.tag}>NestJS</span>
            <span className={styles.tag}>NodeJS</span>
            <span className={styles.tag}>Kubernetes</span>
            <span className={styles.tag}>OpenShift</span>
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
          <Link
            key={idx}
            href={`/projects/${project.slug}`}
            className={`${styles.bentoBox} ${projectCardConfigs[idx]?.size} ${projectCardConfigs[idx]?.variant}`}
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
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

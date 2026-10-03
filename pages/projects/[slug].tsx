import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Layout from "../../components/Layout/index";
import { projects } from "../../data/projects";
import styles from "../../styles/project-detail.module.scss";

interface ProjectDetailProps {
  project: typeof projects[0];
}

const ProjectDetail: NextPage<ProjectDetailProps> = ({ project }) => {
  if (!project) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Project not found</h1>
            <Link href="/">Back to home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <i className="bi bi-arrow-left"></i> Back to home
        </Link>

        <div className={styles.projectHeader}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <i className={`bi ${project.icon}`}></i>
            </div>
            <div>
              <h1>{project.title}</h1>
              <p className={styles.type}>{project.type}</p>
            </div>
          </div>
          <a href={project.link} target="_blank" rel="noreferrer" className={styles.visitBtn}>
            <i className="bi bi-arrow-up-right"></i> Visit Project
          </a>
        </div>

        <div className={styles.content}>
          {/* Overview */}
          <section className={styles.section}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          {/* Problem/Challenge */}
          <section className={styles.section}>
            <h2>Problem & Challenge</h2>
            <p>{project.problem}</p>
          </section>

          {/* Role/Contribution */}
          <section className={styles.section}>
            <h2>My Role & Contribution</h2>
            <p>{project.role}</p>
          </section>

          {/* Technologies */}
          <section className={styles.section}>
            <h2>Technologies Used</h2>
            <div className={styles.techStack}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Solution/Process */}
          <section className={styles.section}>
            <h2>Solution & Process</h2>
            <p>{project.solution}</p>
          </section>

          {/* Result/Impact */}
          <section className={styles.section}>
            <h2>Result & Impact</h2>
            <p>{project.result}</p>
            <div className={styles.impact}>
              <h3>Key Impact</h3>
              <p>{project.impact}</p>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <Link href="/" className={styles.navLink}>
            <i className="bi bi-arrow-left"></i> Back to Portfolio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
    revalidate: 3600,
  };
};

export default ProjectDetail;

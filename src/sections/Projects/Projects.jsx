import styles from './ProjectsStyles.module.css';
import p from '../../assets/p.jpeg';
import kobodrop from '../../assets/kobodrop.jpeg';
import shopper from '../../assets/shopper.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={p}
          link="https://main--astonishing-starship-522d88.netlify.app/"
          h3="Resume"
          p="Portfolio"
        />
        <ProjectCard
          src={kobodrop}
          link="https://jidedrop.netlify.app/"
          h3="Kobodrop"
          p="commercial landing page"
        />
        <ProjectCard
          src={shopper}
          link="https://663e2da44b489504a4933bd9--ephemeral-bonbon-c33f09.netlify.app/"
          h3="Shopper"
          p="shopping React App"
        />
      </div>
    </section>
  );
}

export default Projects;

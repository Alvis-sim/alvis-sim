import styles from './ProjectsStyles.module.css';
import bulb from '../../assets/bulb.webp'
import auction from '../../assets/auctioneer.webp'
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bulb}
          link="https://alvissim.com/random-quote"
          h3="Quotes"
          p="For Vida"
        />
        <ProjectCard
          src={auction}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="BidBestie"
          p="Auction Platform"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
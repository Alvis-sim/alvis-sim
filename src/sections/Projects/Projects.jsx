import styles from './ProjectsStyles.module.css';
import bulb from '../../assets/bulb.webp'
import auction from '../../assets/auctioneer.webp'
import house from '../../assets/house.webp'
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
          link="https://bidbestie.com"
          h3="BidBestie"
          p="Auction Platform"
        />
        <ProjectCard
          src={house}
          link="https://github.com/mxtrify/RealtyHub"
          h3="RealtyHub"
          p="Real Estate platform"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          h3="FitLift"
          p="Fitness App (WIP)"
        />
      </div>
    </section>
  );
}

export default Projects;
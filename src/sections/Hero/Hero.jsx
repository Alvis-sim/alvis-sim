import styles from './HeroStyles.module.css'
import heroImg from "../../assets/alvis_pfp.png"
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import ig_white from '../../assets/ig_white.png'
import ig_Dark from '../../assets/ig_black.png'
import CV from '../../assets/cv2.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const igIcon = theme === 'light' ?  ig_Dark : ig_white;

    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Pic of Alvis Sim" 
            />
            <img className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Alvis Sim
            </h1>
            <h2>Full Stack Developer</h2>
            <span>
                {/* <a href="https://twitter.com/Alvis-sim" target="_blank">
                    <img src={twitterIcon} alt="twitter Icon" />
                </a> */}
                <a href="https://www.instagram.com/alvis_sim/" target="_blank">
                    <img src={igIcon} alt="Instagram Icon" />
                </a>               
                <a href="https://github.com/Alvis-sim" target="_blank">
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/alvis-sim/" target="_blank">
                    <img src={linkedinIcon} alt="linkedin Icon" />
                </a>
            </span>
            <p className={styles.description}>
                Master of Chatgpt and the ancient language of 'It Worked Yesterday.'
            </p>
            <a href={CV} download> 
                <button className="hover">Resume</button>
            </a>
            {/* <a href="#contact"> 
                <button className="hover">Contact</button>
            </a> */}
        </div>
    </section>
  )
}

export default Hero
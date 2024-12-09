/* eslint-disable no-unused-vars */
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from '../../assets/twitter-light.svg';
import LinkedInIcon from '../../assets/linkedin-light.svg';
import GitHubIcon from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf'
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile picture of Anbu Manickam"
        />
        <img className={styles.colorMode} 
        src={themeIcon}
        alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anbu
        <br />
        Manickam
        </h1>
        <h2>.NET Developer</h2>
        <span>
          <a href="https://x.com/ANBUMANICKAM_?t=yn1VaKc2aVs51EeAyF7bbw&s=09" target="_blank">
            <img src={twitterIcon} alt="Twitter icon"></img>
          </a>
          <a href="https://github.com/anbumanickam" target="_blank">
            <img src={GitHubIcon} alt="GitHub icon"></img>
          </a>
          <a href="https://www.linkedin.com/in/anbu-manickam/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn icon"></img>
          </a>
        </span>
        <p>
          With a passion for developing modern Dotnet web application for commercial
          businesses.
        </p>
        <a href={CV} download> <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

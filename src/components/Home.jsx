import styles from "../styles/Home.module.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className={"container"}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.imageWrapper}>
          <img 
            src="/Me.png" 
            alt="Michael Vincent R. Alcoseba" 
            className={styles.heroImage} 
          />
        </div>
        <div className={styles.intro}>
          <h1>Hello, I’m <span className={styles.highlight}>Michael Vincent  R. Alcoseba</span></h1>
          <p>
            A Computer Engineer who turn ideas into functional applications using programming languages such as Python, C++, and JavaScript. 
            Proficient in full-stack development, database management, and modern frameworks, 
            with hands-on experience delivering reliable and scalable software solutions.
          </p>

          <Link to="/about" className={styles.ctaBtn}>Learn More</Link>
        </div>
      </section>

      {/* Summary Sections */}
      <section className={styles.summary}>
        <div className={styles.card}>
          <h2>About Me</h2>
          <p>Quick timeline and journey summary.</p>
          <Link to="/about">Read More →</Link>
        </div>

        <div className={styles.card}>
          <h2>Skills & Projects</h2>
          <p>Here are the skills I've learned along the way and some applications I’ve worked on.</p>
          <Link to="/projects">See Skills & Projects →</Link>
        </div>

        <div className={styles.card}>
          <h2>Certificates & Badges</h2>
          <p>Certificates and Badges earned throughout my career.</p>
          <Link to="/certificates">View Certificates & Badges →</Link>
        </div>

        <div className={styles.card}>
          <h2>Contact</h2>
          <p>Let’s connect and work on something great.</p>
          <Link to="/contact">Get in Touch →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

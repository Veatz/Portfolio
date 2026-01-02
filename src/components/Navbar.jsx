import styles from "../styles/Navbar.module.css"
import { Link } from "react-router-dom"
import { FaHome, FaUser, FaCode, FaCertificate, FaPhone } from "react-icons/fa"


function Navbar() {

  return (
    <nav className={styles.navcontainer}>
      <ul className={styles.list}>
        <li>
          <Link to="/" className={styles.link}>
            <FaHome className={styles.icon} />
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            <FaUser className={styles.icon} />
            <span className={styles.text}>About</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.link}>
            <FaCode className={styles.icon} />
            <span className={styles.text}>Skills & Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/certificates" className={styles.link}>
            <FaCertificate className={styles.icon} />
            <span className={styles.text}>Certificates & Badges</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.link}>
            <FaPhone className={styles.icon} />
            <span className={styles.text}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

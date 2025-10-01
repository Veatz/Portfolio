import styles from "../styles/Navbar.module.css"
import { Link } from "react-router-dom"
function Navbar() {

  return (
    <nav className={styles.navcontainer}>
      <ul className={styles.list}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/about" className={styles.link}>About</Link></li>
        <li><Link to="/projects" className={styles.link}>Skills & Projects</Link></li>
        <li><Link to="/certificates" className={styles.link}>Certificates & Badges</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar

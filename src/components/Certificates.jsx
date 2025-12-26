import styles from "../styles/Certificates.module.css";

function Certificates() {
  return (
    <div className="container">
    <h1>Certificates & Badges</h1>
        <h4>
          Here are some of my most significant certifications and badges that 
          highlight my expertise and continuous learning.
        </h4>
       <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>WordPress Crash Course: Build any Website in Minutes!</h2>
            <img 
              src="/certs/WordpressCert.jpg" 
              alt="WordPress Crash Course: Build any Website in Minutes!" 
            />
          </div>
        </div>
      </div>
       <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>SY 2022 - 2023 Second Semester Dean's Lister</h2>
            <img 
              src="/certs/merit-certificate-1.png" 
              alt="SY 2022 - 2023 Second Semester Dean's Lister" 
            />
          </div>
        </div>
      </div>
      
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>IT Essentials</h2>
            <img 
              src="/certs/ITEssentials.png" 
              alt="IT Essentials" 
            />
          </div>
        </div>
      </div>
    <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>CCNAv7: Introduction to Networks</h2>
            <img 
              src="/certs/IntroductiontoNetworks1.png" 
              alt="CCNAv7: Introduction to Networks" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Introduction to Cybersecurity</h2>
            <img 
              src="/certs/IntroductiontoCybersecurity.png" 
              alt="Introduction to Cybersecurity" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Partner: NDG LInux Essentials</h2>
            <img 
              src="/certs/LinuxEssentials.png" 
              alt="Partner: NDG Linux Essentials" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Partner: JavaScript Essentials 1 (JSE)</h2>
            <img 
              src="/certs/JavaScriptEssentials1.png" 
              alt="Partner: JavaScript Essentials 1 (JSE)" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Python Essentials 1</h2>
            <img 
              src="/certs/PythonEssentials.png" 
              alt="Python Essentials 1" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>CCNAv7: Enterprise Networking, Security, and Automation</h2>
            <img 
              src="/certs/EnterpriseNetworkingSecurityandAutomation.png" 
              alt="CCNAv7: Enterprise Networking, Security, and Automation" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Partner: JavaScript Essentials 2 (JSE)</h2>
            <img 
              src="/certs/JavaScriptEssentials2.png" 
              alt="Partner: JavaScript Essentials 2 (JSE)" 
            />
          </div>
        </div>
      </div>
      <div className={styles.certContainer}>
        <div className={styles.cert}>
          <div className={styles.imageWrapper}>
            <h2>Cyber Threat Management</h2>
            <img 
              src="/certs/CyberThreatManagement1.png" 
              alt="Cyber Threat Management " 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;

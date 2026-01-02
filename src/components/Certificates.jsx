import { useState } from "react";
import styles from "../styles/Certificates.module.css";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "WordPress Crash Course: Build any Website in Minutes!",
      image: "/certs/WordpressCert.jpg",
      alt: "WordPress Crash Course: Build any Website in Minutes!"
    },
    {
      title: "SY 2022 - 2023 Second Semester Dean's Lister",
      image: "/certs/merit-certificate-1.png",
      alt: "SY 2022 - 2023 Second Semester Dean's Lister"
    },
    {
      title: "IT Essentials",
      image: "/certs/ITEssentials.png",
      alt: "IT Essentials"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      image: "/certs/IntroductiontoNetworks1.png",
      alt: "CCNAv7: Introduction to Networks"
    },
    {
      title: "Introduction to Cybersecurity",
      image: "/certs/IntroductiontoCybersecurity.png",
      alt: "Introduction to Cybersecurity"
    },
    {
      title: "Partner: NDG Linux Essentials",
      image: "/certs/LinuxEssentials.png",
      alt: "Partner: NDG Linux Essentials"
    },
    {
      title: "Partner: JavaScript Essentials 1 (JSE)",
      image: "/certs/JavaScriptEssentials1.png",
      alt: "Partner: JavaScript Essentials 1 (JSE)"
    },
    {
      title: "Python Essentials 1",
      image: "/certs/PythonEssentials.png",
      alt: "Python Essentials 1"
    },
    {
      title: "CCNAv7: Enterprise Networking, Security, and Automation",
      image: "/certs/EnterpriseNetworkingSecurityandAutomation.png",
      alt: "CCNAv7: Enterprise Networking, Security, and Automation"
    },
    {
      title: "Partner: JavaScript Essentials 2 (JSE)",
      image: "/certs/JavaScriptEssentials2.png",
      alt: "Partner: JavaScript Essentials 2 (JSE)"
    },
    {
      title: "Cyber Threat Management",
      image: "/certs/CyberThreatManagement1.png",
      alt: "Cyber Threat Management"
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="container">
      <h1>Certificates & Badges</h1>
      <h4>
        Here are some of my most significant certifications and badges that 
        highlight my expertise and continuous learning.
      </h4>

      <div className={styles.certGrid}>
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className={styles.certCard}
            onClick={() => openModal(cert)}
          >
            <div className={styles.certImageWrapper}>
              <img 
                src={cert.image} 
                alt={cert.alt}
              />
            </div>
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>×</button>
            <h2>{selectedCert.title}</h2>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.alt}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;

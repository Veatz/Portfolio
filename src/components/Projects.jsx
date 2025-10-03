import { useEffect, useRef, useState } from "react";
import styles from "../styles/Projects.module.css"
import { Link } from "react-router-dom"
import ProjectDetail from "./ProjectDetail";


function Projects() {

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);

  // Create seamless loop effect
  useEffect(() => {
    const refs = [scrollRef1, scrollRef2];
    
    refs.forEach(ref => {
      if (ref.current) {
        const container = ref.current;
        const slide = container.querySelector(`.${styles.slide}`);
        
        if (slide) {
          // Clone the slide for seamless looping
          const clone = slide.cloneNode(true);
          container.appendChild(clone);
        }
      }
    });
  }, []);

  return (
    <div className={"container"}>
     
     {/* Skills */}
      <section className={styles.skillsSection}>
      <h2>Skills</h2>
      <p>
        I specialize in full-stack development, AI, and hardware systems, with experience in Python, C++, JavaScript, PHP, and SQL alongside frameworks such as React, Node.js, Express, and Laravel. My expertise extends to machine learning, computer vision, and IoT, enabling me to design solutions that integrate both software and hardware. For a full breakdown of my skills and experience, please see my{" "}
        <a href="https://drive.google.com/file/d/18-2HgkhGvav_H8tyX8ietu5MTRyyQl7u/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume →
        </a>.
      </p>
      <h4>Technical Skills</h4>
        <div className={styles.skillsWrapper}>
          <div className={styles.skillsScroll} ref={scrollRef1}>
            <div className={styles.slide}>
              <div className={styles.skill}><img src="/icons/python.png" alt="Python" /><p>Python</p></div>
              <div className={styles.skill}><img src="/icons/cpp.png" alt="C++" /><p>C++</p></div>
              <div className={styles.skill}><img src="/icons/javascript.png" alt="JS" /><p>JavaScipt</p></div>
              <div className={styles.skill}><img src="/icons/php.png" alt="PHP" /><p>PHP</p></div>
              <div className={styles.skill}><img src="/icons/sql.png" alt="SQL" /><p>SQL</p></div>
              <div className={styles.skill}><img src="/icons/html.png" alt="HTML" /><p>HTML</p></div>
              <div className={styles.skill}><img src="/icons/css.png" alt="CSS" /><p>CSS</p></div>
              <div className={styles.skill}><img src="/icons/react.png" alt="React" /><p>React</p></div>
              <div className={styles.skill}><img src="/icons/reactnative.png" alt="React Native" /><p>React Native</p></div>
              <div className={styles.skill}><img src="/icons/laravel.png" alt="Laravel" /><p>Laravel</p></div>
              <div className={styles.skill}><img src="/icons/node.png" alt="Node JS" /><p>Node JS</p></div>
              <div className={styles.skill}><img src="/icons/mongodb.png" alt="MongoDB" /><p>MongoDB</p></div>
              <div className={styles.skill}><img src="/icons/expressjs.png" alt="Express JS" /><p>Express JS</p></div>
              <div className={styles.skill}><img src="/icons/matlab.png" alt="MATLAB" /><p>MATLAB</p></div>
              <div className={styles.skill}><img src="/icons/ml.png" alt="Machine Learning" /><p>Machine Learning</p></div>
              <div className={styles.skill}><img src="/icons/dl.png" alt="Deep Learning" /><p>Deep Learning</p></div>
              <div className={styles.skill}><img src="/icons/computervision.png" alt="Computer Vision" /><p>Computer Vision</p></div>
              <div className={styles.skill}><img src="/icons/dataanalysis.png" alt="Data Analysis" /><p>Data Analysis</p></div>
              <div className={styles.skill}><img src="/icons/troubleshooting.png" alt="Troubleshooting" /><p>Troubleshooting</p></div>
              <div className={styles.skill}><img src="/icons/arduino.png" alt="Arduino" /><p>Arduino</p></div>
              <div className={styles.skill}><img src="/icons/iot.png" alt="Internet of Things (IoT)" /><p>Internet of Things (IoT)</p></div>
              <div className={styles.skill}><img src="/icons/embedded.png" alt="Embedded Systems" /><p>Embedded Systems</p></div>
              <div className={styles.skill}><img src="/icons/networking.png" alt="Networking" /><p>Networking</p></div>      
            
            </div>
          </div>
        </div>
      <h4>Tools & Productivity</h4>
        <div className={styles.skillsWrapper}>
          <div className={styles.skillsScrollReverse} ref={scrollRef2}>
            <div className={styles.slide}>
              <div className={styles.skill}><img src="/icons/git.png" alt="GIT" /><p>GIT</p></div>
              <div className={styles.skill}><img src="/icons/github.png" alt="GitHub" /><p>GitHub</p></div>
              <div className={styles.skill}><img src="/icons/chatgpt.png" alt="ChatGPT" /><p>ChatGPT</p></div>
              <div className={styles.skill}><img src="/icons/microsoft365.png" alt="Microsoft 365" /><p>Microsoft 365</p></div>
              <div className={styles.skill}><img src="/icons/googleD.png" alt="Google Docs"/><p>Google Docs</p></div>
              <div className={styles.skill}><img src="/icons/googleE.png" alt="Google Sheets"/><p>Google Sheets</p></div>
              <div className={styles.skill}><img src="/icons/googleF.png" alt="Google Forms"/><p>Google Forms</p></div>
              <div className={styles.skill}><img src="/icons/googleS.png" alt="Google Slides"/><p>Google Slides</p></div>
              <div className={styles.skill}><img src="/icons/appscript.png" alt="Google Appscript"/><p>Google Appscript</p></div>
              <div className={styles.skill}><img src="/icons/figma.png" alt="Figma"/><p>Figma</p></div>
              <div className={styles.skill}><img src="/icons/canva.png" alt="Canva"/><p>Canva</p></div> 
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <ProjectDetail
          title="PixelPaint"
          description={
            <>
             PixelPaint: A vision-based wall area estimator for a robotic paint coater is an AI-powered paint estimation and application system designed to modernize traditional wall painting processes in the Philippines. Using a calibrated camera and deep learning–based object detection, it provides accurate wall area measurements and instant paint volume calculations. The system also integrates a robotic coater capable of applying paint up to 2.4 meters high, ensuring consistency, speed, and reduced manual effort. Built to minimize material waste, labor costs, and project delays, PixelPaint demonstrates expertise in computer vision, deep learning, and hardware integration. Click the video below to see PixelPaint in action.          
             <br></br> 
            <a
              href="https://drive.google.com/file/d/1Qo9h9iAj5gl8W24NFKNa_vmzpeTRV-za/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 PixelPaint Documentation
            </a>
          </>
          }
          videoId="P-ZkG15wkds"
          thumbnail="/thumbnails/PixelPaint.png"
        />

        <ProjectDetail
          title="CBO Registration Portal"
          description={
          <>
          CBO Registration Portal is a multi-step online registration system for Community-Based Organizations, developed in 2025 using the MERN stack (MongoDB, Express.js, React.js, Node.js) for the Department of Social Welfare and Development’s Enhanced Partnership Against Hunger and Poverty – National Program Management Office (EPAHP-NPMO). The system streamlines end-to-end registration and validation of CBOs and their products through a structured workflow that requires all fields and documents before submission. It enhances data accuracy, reduces manual errors, and improves process efficiency by automating validation and verification. Key features include secure authentication, form validation, document uploads, progress tracking, and database-driven reporting, demonstrating full-stack development, UI/UX design, API integration, and workflow automation skills while supporting government program operations.
          <br></br> 
          <a
              href="https://drive.google.com/file/d/1kynZ_bGJlxxo48FlOGHIvlIKlCbgzjqb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Internship Documentation
            </a>
          </>
          }
          videoId="O0eTJx_FSyQ"
          thumbnail="/thumbnails/CBORegistrationPortal.png"
        />

        <ProjectDetail
          title="ElecThinker"
          description={
          <>
          ElecThinker is a mobile application built to support students in selecting electives that match their interests through a quiz-based recommendation system. Beyond course recommendations, it enables profile management and offers a video-sharing space for posting and exploring educational content. Developed with React Native, Node.js, Express.js, and Appwrite, the project showcases skills in mobile development, backend integration, and user-centered design. Click the video below to see ElecThinker in action. 
          <br></br> 
          <a
              href="https://drive.google.com/file/d/1I2SWxMGm5ORrt1mxLjj10ORPmDhHvJne/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 ElecThinker Documentation
            </a>
          </>
        }
          videoId="2GB-eazXA_I"
          thumbnail="/thumbnails/Electhinker.png"
        />
      </section>
    </div>
  )
}

export default Projects
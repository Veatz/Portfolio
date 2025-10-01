import { useEffect, useRef, useState } from "react";
import styles from "../styles/About.module.css";

function About() {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  

  // Track scroll for progress line
  useEffect(() => {
  const handleScroll = () => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const percentage = Math.min(
        100,
        Math.max(0, ((scrollTop - elementTop + window.innerHeight * 0.5) / elementHeight) * 100)
      );
      setProgress(percentage);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Animate items into view
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.timelineItem}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const timelineData = [
    { year: "2016 - Where It Started to Take Shape", 
      text: "My love for technology sparks in 2012 through my high school robotics club, fueled by a childhood fascination with games and toys. But It really took shape in 2016, when I enrolled in the STEM strand at STI College who gave me the foundation to explore that passion more seriously. I also joined school innovation events, including pitching a simple rescue bot with a camera that could be controlled by phone. I finished my senior high school with a capstone project: a table with a foot pedal that could charge phones by converting mechanical energy into electricity. These experiences showed me how ideas, science, and creativity could come together to solve real problems." },
    { year: "2018 - A Turning Point", 
      text: "2018 marked the start of my college journey at the Technological University of the Philippines, where I enrolled in Electronics Engineering. It was my first real test of commitment, as I transitioned from being a regular student to facing the demands of university life. To push myself further, I even joined the Reserve Officers’ Training Corps for my National Service Training Program. But the reality hit hard: daily six-hour commutes, twelve-hour class days, and a six-day schedule became overwhelming, and I wasn’t able to keep up. Failing to meet the university standard was tough, but it became a turning point. Instead of carrying failure as baggage, I learned to take it as experience, and it led me back to my original program of choice: Computer Engineering." },
    { year: "2019 - Finding My Ground", 
      text: "With a renewed determination to thrive in tech, I shifted to Computer Engineering at the Technological Institute of the Philippines. Carrying the weight of my past struggles, I was determined not to repeat the same mistakes. TIP became my proving ground, where I pushed myself harder than ever and aced the year with a 1.8 GWA. For the first time, I felt my resolve paying off—until the pandemic suddenly hit and changed everything." },
    { year: "2020 - When the Storm Hit", 
      text: "When the pandemic started, my father lost his job as a linen keeper on a cruise ship because of travel bans. Around the same time, my phone broke and my laptop was borrowed by my sister so she could continue her studies. I had an outstanding balance of ₱30,000, and without work, I had no way to continue mine. \nAs the eldest, I chose to help my parents support our family. We sold puto, kutsinta, and lumpia to get by, though it was difficult since going out also meant risking infection. My education was on hold for two years, but during that time I gained resilience, responsibility, and a stronger sense of family." },
    { year: "2022 - Back on Track", 
      text: "As Covid cases lessened and life slowly returned to normal, my father regained his job, and I finally returned to school. After two years of doing nothing but survive, I was determined to make the most of this second chance. The return wasn’t easy. Classes were online, and I immediately enrolled in two major programming subjects: Data Structures and Algorithms, and Database Management Systems.\n\nI was eager but rusty, and jumping straight into coding after a long hiatus hit me hard. I’ll never forget my first four hours of listening to functions and C++ syntax. I even caught a fever from the mental strain, something my professor still laughs about today. Before the pandemic, I had only touched Python, so diving into C++ felt overwhelming at first. But I was hungry to learn, and little by little, I pushed myself to study beyond class hours until I became one of the most active in the course. The same happened in Database Management Systems, which I found easier to grasp, and by the end of the semester, I had reignited a flame for programming that I thought I had lost." },
    { year: "2023 - Catching Up and Moving Forward", 
      text: "I continued doing my best and working as I normally do, but this time it finally paid off. I made the cutoff for the Dean’s List with a consistent GWA of 1.4, earning a recognition I honestly didn’t expect. TIP had revised its Dean’s List qualifications so that only the top 5% of students could achieve it, with strict requirements on units and no backlogs. As a transferee and an irregular student from the start, meeting those standards was even tougher for me, which made this achievement feel even more meaningful. \n\nFor the first time, I felt I was truly back on track. The two years I lost during the pandemic had always made me feel like I was being left behind by my peers, but this recognition helped me realize I could move forward at my own pace. That lingering fear of being left behind still pushes me to do more, but I now understand the most important thing I need to work on is myself." },
    { year: "2024 - Facing the Biggest Challenge Yet", 
      text: 'The final step toward my degree came with the Design Project, a capstone course that TIP is known for, aligned with the international standards of the Accreditation Board for Engineering and Technology (ABET). All engineering students in accredited programs prepare for this challenge, where the project is split into two semesters: the first for feasibility studies, alternate design testing, client approval, and a 50% prototype completion; the second for achieving a fully completed system with engineering standards and at least 95% accuracy on its quantifiable objectives. \n\nIn early 2025, I took the course and led my group. Unfortunately, our initial project was deemed unfeasible within the timeframe, and we failed the course. It was the first major setback I had faced since transferring, but this time I wasn’t afraid of failure. I enrolled again, armed with the lessons I had learned, and started fresh with a new project: “Design of Vision-Based Wall Area Estimation for a Robotic Paint Coater.”' },
    { year: "2025 - Finishing Strong", 
      text: "Early 2025, I started my internship at the Department of Social Welfare and Development (DSWD) under the Enhanced Partnership Against Hunger and Poverty, National Program Management Office (EPAHP-NPMO). My task was to develop a prototype website, the CBO Registration Portal, based on the paper forms they were still using. I used the MERN stack to build the site and had to finish it within my required 240 training hours. I had never built a website with React before, so I learned as I went. Luckily, I had prior experience from a project in React Native, and I used that knowledge to complete the portal. By the end of my internship, the project was finished with satisfactory results.\n\nAfter my internship, I gave all my focus to completing our Design Project. I thought it would be easier since we had already finished about 50% of it the previous semester, but I was wrong. It was constant revisions, fine-tuning to reach 95% accuracy in detection and segmentation, testing the program, and recording results. After a long and challenging process, we finally made it through our final defense.\n\nFINALLY, the moment I had been working toward for years arrived. I am now an Engineer. I am Engr. Alcoseba, a proud Computer Engineering graduate of the Technological Institute of the Philippines – Quezon City." },
  ];
 
  

  return (
    <div className={"container"}>
      {/* Bio */}
      <section className={styles.bio}>
        <div className={styles.imageWrapper}>
                  <img 
                    src="/Aboutme.png" 
                    alt="Graduate" 
                    className={styles.heroImage} 
                  />
        </div>
        <p>
          Hello, I’m Engr. Michael Vincent R. Alcoseba, a Computer Engineer from the Technological Institute of the Philippines, 
          Class of 2025. My journey in technology has always been about curiosity, persistence, and finding ways to turn ideas into something real.
          <br /><br />
          Throughout my academic journey, I worked on projects that challenged both my logic and creativity. 
          I explored programming, software development, and problem solving through hands-on work such as 
          building applications, working with databases, and designing intelligent systems. My final year pushed me further as I finished my internship website project 
          and final design project that required continuous testing and refinement until it reached real-world accuracy.
          <br /><br />
          Along the way, I faced challenges that tested not only my skills but also my resilience and determination. 
          From late nights debugging to learning new frameworks on the fly, I learned to adapt, to improve, and to keep pushing forward. 
          These experiences shaped me into someone who values growth, leadership, collaboration, and the process of creating solutions that matter.
          <br /><br />
          At the heart of it, I am a person who believes that technology should make life better. 
          I look forward to building a career in software engineering where I can continue learning, work with others, 
          and contribute to projects that leave a meaningful impact.
        </p>
      </section>

      {/* Timeline */}
      <section className={styles.timeline} ref={timelineRef}>
        <h2>My Journey</h2>
        <div className={styles.timelineWrapper}>
          {/* Progress Line */}
          <div
            className={styles.progressLine}
            style={{ height: `${progress}%` }}
          ></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.timelineItem} ${
                visibleItems.includes(index.toString()) ? styles.show : ""
              } ${index % 2 === 0 ? styles.left : styles.right}`}
              data-index={index}
            >
              <div className={styles.content}>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.text}>
                  {item.text.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
       <section className={styles.bioend}>
        <p>
        Looking back, my journey has been full of challenges, lessons, and small victories that built up to who I am today. From curiosity as a kid to finally becoming a Computer Engineer, each step taught me persistence, creativity, and the value of learning through experience.
        <br /><br />
        This timeline is not the end of my story, but the beginning of a new chapter. I’m excited to carry everything I’ve learned into the real world, to keep growing, and to contribute to projects that create real impact.
       </p>
       </section>
    </div>
  );
}

export default About;

// src/components/Contact.jsx
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import styles from "../styles/Contact.module.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_jwirlxj",      
      "template_9oqk3ug",     
      form.current,
      "3kGrYHSfhykJ5G3hl"       
    ).then(
      (result) => {
        alert("Message sent successfully ✅")
        form.current.reset()
      },
      (error) => {
        alert("Something went wrong ❌")
        console.error(error)
      }
    )
  }

  return (
    <div className="container">
    <section className={styles.contact}>
      <h1>Let’s Get in Touch</h1>
        <p>
          Let’s connect! I’m always open to questions, collaborations, and new opportunities—don’t hesitate to reach out 🫶
        </p>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name"required />

        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea name="message" rows="5" placeholder="Please Input your Message" required />

        <button type="submit">Send Message</button>
      </form>

      <div className={styles.socials}>
          <a 
            href="mailto:alcosebamvr@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaEnvelope /> Email
          </a>

          <a href="https://github.com/Veatz" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/mv-alcoseba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>

          <a 
            href="https://drive.google.com/uc?export=download&id=18-2HgkhGvav_H8tyX8ietu5MTRyyQl7u" 
            className={styles.resumeBtn}
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
    </section>
    </div>
  )
}

export default Contact

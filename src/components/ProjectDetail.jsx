import { useState, useRef } from "react";
import styles from "../styles/Projects.module.css";

function ProjectDetail({ title, description, videoId, thumbnail }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  // Reset to thumbnail when video ends
  const handleEnded = () => {
    setPlay(false);
  };

  return (
    <div className={styles.projectDetail}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.videoWrapper}>
        {play ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className={styles.thumbnailWrapper} onClick={() => setPlay(true)}>
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className={styles.thumbnail}
            />
            <div className={styles.playButton}>▶</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;

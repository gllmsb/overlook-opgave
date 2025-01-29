import { useState, useEffect } from "react";
import styles from "./Slideshow.module.scss";

export const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.slideshow}>
      <img src={images[currentIndex]} alt="Slideshow" className={styles.slideImage} />
    </div>
  );
};

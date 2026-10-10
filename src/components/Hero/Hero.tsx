import { motion } from "motion/react";
import styles from "./Hero.module.css";
import image2 from "../../assets/images/imagen2.jpg";
    
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow} />

      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PARA TI, CON TODO MI AMOR
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Hay momentos que estan a punto 
          <span> de cambiarlo todo...</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Porque hay personas que hacen que cada momento
          tenga un significado especial.
        </motion.p>

        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className={styles.photoFrame}>
            <img
              src={image2}
              alt="Un momento especial"
            />
          </div>
        </motion.div>

        <motion.button
          className={styles.scrollButton}
          onClick={() =>
            document
              .getElementById("story")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span>Desliza hacia abajo... prepárate porque lo que viene no te lo esperas</span>

          <span className={styles.arrow}>↓</span>
        </motion.button>
      </div>
    </section>
  );
};
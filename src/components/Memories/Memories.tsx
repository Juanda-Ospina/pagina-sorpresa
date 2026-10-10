import { motion } from "motion/react";
import { memories } from "../../data/memories";
import styles from "./Memories.module.css";

export const Memories = () => {
  return (
    <section className={styles.memories}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>MOMENTOS</span>

          <h2>
            una pequeña parte de,
            <span> grandes recuerdos juntos.</span>
          </h2>

          <p>
            Algunos momentos pasan rápido, pero cuando los compartimos con
            alguien especial, terminan quedándose para siempre.
          </p>
        </motion.header>

        <div className={styles.gallery}>
          {memories.map((memory, index) => (
            <motion.figure
              key={memory.id}
              className={`${styles.photo} ${styles[memory.size]}`}
              style={
                {
                  "--rotation": `${memory.rotation}deg`,
                } as React.CSSProperties
              }
              initial={{
                opacity: 0,
                y: 60,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: memory.rotation,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
                zIndex: 10,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={memory.image}
                  alt={memory.caption}
                  loading="lazy"
                />
              </div>

              <figcaption>{memory.caption}</figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.div
          className={styles.bottomMessage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>♡</span>
          <p>Y lo mejor es que nuestra historia todavía continúa.</p>
        </motion.div>
      </div>
    </section>
  );
};
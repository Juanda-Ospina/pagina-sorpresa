import { motion } from "motion/react";
import { storyMoments } from "../../data/story";
import styles from "./Story.module.css";

export const Story = () => {
  return (
    <section id="story" className={styles.story}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>NUESTRA HISTORIA</span>

          <h2>
            Hay momentos que
            <span> merecen quedarse.</span>
          </h2>

          <p>
            Porque cuando miramos atrás, descubrimos que los pequeños
            momentos terminaron convirtiéndose en los más importantes.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {storyMoments.map((moment, index) => (
            <motion.article
              key={moment.id}
              className={`${styles.moment} ${
                moment.align === "right" ? styles.right : styles.left
              }`}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >
              <div className={styles.marker} />

              <div className={styles.content}>
                <div className={styles.imageWrapper}>
                  <img
                    src={moment.image}
                    alt={moment.title}
                    loading="lazy"
                  />
                </div>

                <div className={styles.text}>
                  {moment.date && (
                    <span className={styles.date}>{moment.date}</span>
                  )}

                  <h3>{moment.title}</h3>

                  <p>{moment.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
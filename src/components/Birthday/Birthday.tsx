import { motion } from "motion/react";
import styles from "./Birthday.module.css";

export const Birthday = () => {
  return (
    <section className={styles.birthday}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          SE ACERCA UN DÍA MUY ESPECIAL
        </motion.span>

        <motion.div
          className={styles.heart}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          ♡
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          Que quiero celebrar 
          <span> Contigo...</span>
        </motion.h2>

        <motion.p
          className={styles.message}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
        >
Y aunque sé que nos encantan las sorpresas, hay una fecha muy especial, muy cerquita que no podía dejar 
pasar así como así. Se acerca tu cumpleaños, 
mi amor, y tenía que hacer algo a la altura de lo mucho que te amo.
        </motion.p>

        <motion.div
          className={styles.divider}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "70px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
        />

        <motion.p
          className={styles.finalMessage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
        >
          Y por supuesto...
          <br />
          <span>esto no podía terminar aquí.</span>
        </motion.p>
      </div>
    </section>
  );
};
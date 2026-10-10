import { motion } from "motion/react";
import styles from "./Mensaje.module.css";

const paragraphs = [
<>A veces la vida no sale como la imaginamos…<br />pero eso no significa que deje de valer la pena.</>,

<>Hemos tenido momentos difíciles,<br />momentos que nos han puesto a prueba y nos han hecho aprender.</>,

<>No somos perfectos.<br />Tenemos mucho por mejorar, por sanar y por construir.</>,

<>Pero también tenemos algo muy bonito:<br /><span className={styles.highlight}>una historia que hemos escrito juntos.</span></>,

<>Y entre todo lo bueno y lo difícil…<br /><span className={styles.highlight}>yo todavía te sigo eligiendo.</span></>,

<>Te elijo para seguir aprendiendo,<br />para seguir creciendo y para seguir intentando hacerlo mejor.</>,

<>Te elijo porque todavía quiero compartir muchas cosas contigo.</>,

<>Viajes, risas, días tranquilos, aventuras,<br />y también esos momentos sencillos que terminan siendo los más especiales.</>,

<>Porque la realidad es que no todo ha sido fácil…<br />pero tampoco todo ha sido malo.</>,

<>Y si algo tengo claro,<br /><span className={styles.highlight}>es que todavía quiero vivir muchas cosas a tu lado, con mi familia.</span></>,

<>Esta vez, quiero empezar por regalarle<br /><span className={styles.closing}>un recuerdo más.</span></>,
];

export const Mensaje = () => {
return ( <section id="story" className={styles.story}> <div className={styles.backgroundGlow} />

  <div className={styles.container}>
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
    >
      <span className={styles.eyebrow}>LO QUE QUIERO DECIRTE</span>

      <h2>
        No se trata de que todo sea perfecto,
        <span> sino de seguir eligiéndonos.</span>
      </h2>

      <div className={styles.divider}>
        <span />
        <span className={styles.dividerHeart}>♡</span>
        <span />
      </div>
    </motion.header>

    <div className={styles.message}>
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          className={
            index === paragraphs.length - 1
              ? styles.finalParagraph
              : styles.paragraph
          }
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{
            duration: 0.65,
            delay: 0.05,
            ease: "easeOut",
          }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>

    <motion.div
      className={styles.signature}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <span>Con amor, para nuestra historia.</span>
      <span className={styles.signatureHeart}>♡</span>
    </motion.div>
  </div>
</section>


);
};

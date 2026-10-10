import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { letterPages, surpriseData } from "../../data/surprise";
import styles from "./Letter.module.css";

const pageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
    rotateY: direction > 0 ? -8 : 8,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
    rotateY: direction > 0 ? 8 : -8,
  }),
};

export const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = letterPages.length + 1;
  const showingTickets = currentPage === letterPages.length;

  const changePage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= totalPages) return;

    setDirection(nextPage > currentPage ? 1 : -1);
    setCurrentPage(nextPage);
  };

  const openLetter = () => {
    setCurrentPage(0);
    setDirection(1);
    setIsOpen(true);
  };

  return (
    <section className={styles.letterSection}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.eyebrow}>
            {isOpen ? "UNA HISTORIA PARA NOSOTROS" : "UNA ÚLTIMA COSA"}
          </span>

          <h2>
            {isOpen ? (
              <>
                Cada página guarda
                <span> algo que quiero decirte.</span>
              </>
            ) : (
              <>
                Tengo algo
                <span> para ti.</span>
              </>
            )}
          </h2>

          {!isOpen && (
            <p>
              Hay regalos que se pueden envolver...
              y otros que comienzan con una pequeña sorpresa.
            </p>
          )}
        </motion.div>

        <div className={styles.letterArea}>
          <AnimatePresence mode="wait" initial={false}>
            {!isOpen ? (
              <motion.button
                key="envelope"
                type="button"
                className={styles.envelope}
                onClick={openLetter}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6 }}
                aria-label="Abrir carta"
              >
                <div className={styles.envelopeBack} />
                <div className={styles.paperPreview}>
                  <span>Para ti</span>
                </div>
                <div className={styles.envelopeFront} />
                <div className={styles.flap} />
                <div className={styles.seal}>
                  <span>♡</span>
                </div>
                <span className={styles.openHint}>Toca para abrir</span>
              </motion.button>
            ) : (
              <motion.div
                key="book"
                className={styles.book}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.pageTopline}>
                  <span>UNA CARTA PARA TI</span>
                  <span>
                    {String(currentPage + 1).padStart(2, "0")} /{" "}
                    {String(totalPages).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.pageViewport}>
                  <AnimatePresence
                    mode="wait"
                    custom={direction}
                    initial={false}
                  >
                    {showingTickets ? (
                      <motion.div
                        key="tickets"
                        className={styles.ticketPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.38, ease: "easeInOut" }}
                      >
                        <span className={styles.pageEyebrow}>
                          EL REGALO ES...
                        </span>

                        <h3 className={styles.ticketHeading}>
                          ¡Nos vamos a
                          <span>{surpriseData.destination}!</span>
                        </h3>

                        <p className={styles.ticketMessage}>
                          {surpriseData.subtitle}
                        </p>

                        <p className={styles.ticketDescription}>
                          {surpriseData.message}
                        </p>

                        <div className={styles.ticketsStack}>
                          {surpriseData.tickets.map((ticket, index) => (
                            <article
                              key={ticket.ticketNumber}
                              className={`${styles.ticket} ${
                                index === 0
                                  ? styles.ticketFirst
                                  : styles.ticketSecond
                              }`}
                            >
                              <div className={styles.ticketMain}>
                                <div className={styles.ticketTop}>
                                  <span>{ticket.airline}</span>
                                  <span>BOARDING PASS</span>
                                </div>

                                <div className={styles.route}>
                                  <div className={styles.airport}>
                                    <strong>{ticket.originCode}</strong>
                                    <span>{ticket.origin}</span>
                                  </div>

                                  <div className={styles.flightPath}>
                                    <span />
                                    <span className={styles.plane}>✈</span>
                                    <span />
                                  </div>

                                  <div
                                    className={`${styles.airport} ${styles.destinationAirport}`}
                                  >
                                    <strong>{ticket.destinationCode}</strong>
                                    <span>{ticket.destination}</span>
                                  </div>
                                </div>

                                <div className={styles.ticketDetails}>
                                  <div>
                                    <span>VIAJERO/A</span>
                                    <strong>{ticket.passenger}</strong>
                                  </div>
                                  <div>
                                    <span>FECHA</span>
                                    <strong>{ticket.date}</strong>
                                  </div>
                                  <div>
                                    <span>HORA</span>
                                    <strong>{ticket.time}</strong>
                                  </div>
                                </div>

                                <p className={styles.ticketNote}>
                                  {ticket.note}
                                </p>
                              </div>

                              <div className={styles.ticketStub}>
                                <span>REGALO</span>
                                <strong>{ticket.ticketNumber}</strong>
                                <span>ASIENTO</span>
                                <strong>{ticket.seat}</strong>
                                <span>PUERTA</span>
                                <strong>{ticket.gate}</strong>
                                <div className={styles.barcode} />
                              </div>
                            </article>
                          ))}
                        </div>

                        <p className={styles.ticketDisclaimer}>
                          Tiquetes simbólicos de regalo. Los datos del viaje
                          están pendientes de confirmación.
                        </p>

                        <p className={styles.ticketClosing}>
                          {surpriseData.closingMessage}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.article
                        key={currentPage}
                        className={styles.messagePage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.38, ease: "easeInOut" }}
                      >
                        <span className={styles.pageEyebrow}>
                          {letterPages[currentPage].eyebrow}
                        </span>

                        <div className={styles.pageHeart}>♡</div>

                        <h3>{letterPages[currentPage].title}</h3>

                        <div className={styles.pageDivider} />

                        {letterPages[currentPage].paragraphs.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}

                        <span className={styles.pageSignature}>
                          Con todo mi amor
                        </span>
                      </motion.article>
                    )}
                  </AnimatePresence>
                </div>

                <div className={styles.pageNavigation}>
                  <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 0}
                  >
                    <span>←</span> Anterior
                  </button>

                  <div className={styles.pageDots}>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Ir a la página ${index + 1}`}
                        aria-current={
                          currentPage === index ? "page" : undefined
                        }
                        className={
                          currentPage === index ? styles.activeDot : ""
                        }
                        onClick={() => changePage(index)}
                      />
                    ))}
                  </div>

                  {!showingTickets ? (
                    <button
                      type="button"
                      className={styles.navButton}
                      onClick={() => changePage(currentPage + 1)}
                    >
                      {currentPage === letterPages.length - 1
                        ? "Ver regalo"
                        : "Siguiente"}{" "}
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.navButton}
                      onClick={() => {
                        setIsOpen(false);
                        setCurrentPage(0);
                      }}
                    >
                      Volver al sobre
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
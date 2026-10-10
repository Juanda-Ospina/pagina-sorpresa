import { Hero } from "../../components/Hero/Hero";
// import { Story } from "../../components/Story/Story";
import { Memories } from "../../components/Memories/Memories";
import { Birthday } from "../../components/Birthday/Birthday";
import { Letter } from "../../components/Letter/Letter";
// import { Surprise } from "../../components/Surprise/Surprise";
import { Mensaje } from "../../components/Mensaje/Mensaje";

import styles from "./SurprisePage.module.css";

export const SurprisePage = () => {
  return (
    <main className={styles.page}>
      <Hero />

      <Memories />

      {/* <Story /> */}

      <Mensaje />

      <Birthday />

      <Letter />

      {/* <Surprise /> */}
    </main>
  );
};
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  team1,
  team2,
  team3,
  teamDivider1,
  teamDivider2,
} from "../../assets/images/images";
import styles from "./Team.module.scss";
import "../../assets/scss/main.scss";

const Team = () => {
  const [members, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <section className={styles.team} id="team">
      <h1 className={`page__title`}>Our top team</h1>
      <h2 className={styles.team__subtitle}>
        Learn more about how you can save our planet's nature.
      </h2>
      <motion.div
        className={styles.team__members}
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.7, ease: "easeOut" }}
        ref={members}
      >
        <img
          className={styles["team__member-1"]}
          src={team1}
          alt="first team member"
        />
        <img
          className={styles["team__divider-1"]}
          src={teamDivider1}
          alt="divider"
        />
        <img
          className={styles["team__member-2"]}
          src={team2}
          alt="second team member"
        />
        <img
          className={styles["team__divider-2"]}
          src={teamDivider2}
          alt="divider"
        />
        <img
          className={styles["team__member-3"]}
          src={team3}
          alt="third team member"
        />
      </motion.div>
    </section>
  );
};

export default Team;

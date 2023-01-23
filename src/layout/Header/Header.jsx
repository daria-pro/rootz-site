import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import {
  headline,
  locationIcon,
  parrot,
  card,
} from "../../assets/images/images";
import styles from "./Header.module.scss";
import { useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Header = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 10]);
  const y2 = useTransform(scrollY, [0, 300], [0, 40]);
  const [count, setCount] = useState(29128);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const svgVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles[`header__main-content`]}>
        <div>
          <motion.img
            className={styles.header__title}
            src={headline}
            alt=""
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          />
          <h2 className={styles.header__subtitle}>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </h2>
          <form action="">
            <div className={styles["header__input-wrapper"]}>
              <img
                className={styles["header__input-icon"]}
                src={locationIcon}
                alt=""
              />
              <input
                className={styles.header__input}
                type="text"
                placeholder="Find the place to help"
              />
              <div className={styles["header__form-button"]}>
                <Button variant="red">search</Button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles["header__right-side"]}>
          <motion.img
            className={styles.header__parrot}
            src={parrot}
            alt=""
            style={{ y: y2 }}
          />
          <motion.img
            className={styles.header__members}
            src={card}
            alt=""
            style={{ y: y1 }}
          />
          <motion.p
            style={{ y: y1 }}
            className={styles["header__members-number"]}
          >
            {count}
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;

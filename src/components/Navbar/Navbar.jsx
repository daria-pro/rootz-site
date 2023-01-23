import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";
import { logo, logo1, logo2, logo3 } from "../../assets/images/images";
import Button from "../Button/Button";
import HamburgerMenu from "../Hamburger/Hamburger";
import { useRef } from "react";
import { useState } from "react";

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const leaf1 = useRef(null);
  const leaf2 = useRef(null);
  const leaf3 = useRef(null);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <motion.a
          href="/"
          className={styles["nav__logo-wrapper"]}
          onHoverStart={() => setHover(!hover)}
          onHoverEnd={() => setHover(!hover)}
        >
          <motion.div className={styles["nav__logo-leaves"]}>
            <motion.img
              className={styles.nav__leaf1}
              src={logo1}
              alt=""
              ref={leaf1}
              animate={{
                rotateY: hover ? 360 : 0,
                scale: hover ? 1.2 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.img
              className={styles.nav__leaf2}
              src={logo2}
              alt=""
              ref={leaf2}
              animate={{
                rotateY: hover ? 360 : 0,
                scale: hover ? 1.2 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              className={styles.nav__leaf3}
              src={logo3}
              alt=""
              ref={leaf3}
              animate={{
                rotateY: hover ? 360 : -360,
                scale: hover ? 1.2 : 1,
              }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          <img className={styles.nav__logo} src={logo} alt="Rootz logo" />
        </motion.a>
        <ul className={styles.nav__menu}>
          <li>
            <a className={styles.nav__link} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="#mission">
              Our mission
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="#places">
              Places
            </a>
          </li>
          <li>
            <a className={styles.nav__link} href="#team">
              Team
            </a>
          </li>
        </ul>
        <div className={styles.nav__button}>
          <Button variant="white" href="#cta">
            Apply
          </Button>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;

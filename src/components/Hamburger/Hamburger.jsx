import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Hamburger.module.scss";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("page__body--no-scroll");
    } else {
      document.body.classList.remove("page__body--no-scroll");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${styles.hamburger} ${
          isOpen ? styles["hamburger--active"] : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles["hamburger__bar"]}></span>
        <span className={styles["hamburger__bar"]}></span>
        <span className={styles["hamburger__bar"]}></span>
      </button>
      <div
        className={`${styles["menu-container"]} ${
          isOpen ? `${styles["menu-container--open"]}` : ""
        }`}
      >
        <ul className={styles.hamburger__menu}>
          <li>
            {/* eslint-disable-next-line*/}
            <a
              className={styles.hamburger__link}
              onClick={() => toggleMenu()}
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={styles.hamburger__link}
              href="#mission"
              onClick={() => setIsOpen(!isOpen)}
            >
              Our mission
            </a>
          </li>
          <li>
            <a
              className={styles.hamburger__link}
              href="#places"
              onClick={() => setIsOpen(!isOpen)}
            >
              Places
            </a>
          </li>
          <li>
            <a
              className={styles.hamburger__link}
              href="#team"
              onClick={() => setIsOpen(!isOpen)}
            >
              Team
            </a>
          </li>
          <div className={styles.hamburger__button}>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="white"
              href="#cta"
            >
              Apply
            </Button>
          </div>
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;

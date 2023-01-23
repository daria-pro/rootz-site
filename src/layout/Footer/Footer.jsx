import styles from "./Footer.module.scss";
import { twitter, facebook, linkedIn } from "../../assets/images/images";

const Footer = () => {
  return (
    <div className={styles.footer} id="places">
      <div className={styles.footer__content}>
        <div className={styles.footer__contacts}>
          <h2 className={styles.footer__title}>Contacts</h2>
          <p className={styles.footer__paragraph}>
            2019 Rootz Foundation. All rights reserved
          </p>
        </div>
        <div className={styles.footer__headquarters}>
          <h3 className={styles.footer__subtitle}>Headquarters</h3>
          <p className={styles.footer__paragraph}>
            1234 Taliban <br />
            Los Angeles, La 1234567 <br />
            (123) 456-7890
          </p>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.footer__subtitle}>Social media</h3>
          <div className={styles["footer__social-icons"]}>
            <a href="/">
              <img src={twitter} alt="" />
            </a>
            <a href="/">
              <img src={facebook} alt="" />
            </a>
            <a href="/">
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

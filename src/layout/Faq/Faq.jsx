import Button from "../../components/Button/Button";
import Accordion from "../../components/Accordion/Accordion";
import data from '../../assets/questionsData'
import styles from "./Faq.module.scss";
import "../../assets/scss/main.scss";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div>
        <h1 className={`page__title ${styles.faq__title}`}>Ready to Get started?</h1>
        <p className={styles.faq__text}>
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <Button href='#cta' maxWidth="166px" >Contact us</Button>
      </div>
      <Accordion data={data}/>
    </section>
  );
};

export default Faq;

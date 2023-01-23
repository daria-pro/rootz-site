import { useState } from "react";
import { minus, plus } from "../../../assets/images/images";
import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ title, content, active, multiple, onToggle }) => {
  const [visiblity, setVisiblity] = useState(false);

  const isActive = () => (multiple ? visiblity : active);

  const toogleVisiblity = () => {
    setVisiblity((prev) => !prev);
    onToggle();
  };

  return (
    <div className={`item ${isActive() ? `${styles["item--active"]}` : ""}`}>
      <div className={styles.item__header} onClick={toogleVisiblity}>
        <p>{title}</p>
        <div className={styles["item__icon-wrapper"]}>
          <img src={isActive() ? minus : plus} alt="" />
        </div>
      </div>
      <div className={styles.item__body}>{content}</div>
    </div>
  );
};

export default AccordionItem;

import { useState } from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import styles from './Accordion.module.scss'

const Accordion = ({ data, multiple = false }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.accordion}>
      {data.map((tab, idx) => (
        <AccordionItem
          key={idx}
          {...tab}
          active={active === idx}
          multiple={multiple}
          onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
        />
      ))}
    </div>
  );
};

export default Accordion;
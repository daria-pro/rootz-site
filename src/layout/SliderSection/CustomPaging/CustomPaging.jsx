import { arrowLeft, arrowRight } from "../../../assets/images/images";
import styles from "./CustomPaging.module.scss";

function CustomPaging({ currentSlide, handlePrev, handleNext }) {
  return (
    <div className={styles.paging}>
      <img
        className={styles["paging__arrow-left"]}
        onClick={handlePrev}
        src={arrowLeft}
        alt=""
      />
      <div className={styles.paging__numbers}>
        {currentSlide + 1} <span>/ 5</span>
      </div>
      <img
        className={styles["paging__arrow-right"]}
        onClick={handleNext}
        src={arrowRight}
        alt=""
      />
    </div>
  );
}

export default CustomPaging;

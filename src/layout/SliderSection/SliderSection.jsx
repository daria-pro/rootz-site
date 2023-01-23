import { useRef } from "react";
import Slider from "react-slick";
import CustomPaging from "./CustomPaging/CustomPaging";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  slider1,
  slider2,
  slider3,
  slider3_1,
  slider4,
  slider5,
} from "../../assets/images/images";
import styles from "./SliderSection.module.scss";

export const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const sliderRef = useRef(null);

  const settings = {
    centerMode: true,
    centerPadding: "45px",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  function handleNext() {
    sliderRef.current.slickNext();
  }

  function handlePrev() {
    sliderRef.current.slickPrev();
  }

  return (
    <div className={styles.slider} id="mission">
      <Slider
        ref={sliderRef}
        {...settings}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        <div className={styles.slider__item}>
          <img className="slider__image" src={slider1} alt="" />
          <h4 className={styles.slider__title}>Avoid plastic</h4>
        </div>
        <div className={styles.slider__item}>
          <img className="slider__image" src={slider2} alt="" />
          <h4 className={styles.slider__title}>Choose organic</h4>
        </div>
        <div
          className={`${styles.slider__item} ${styles["slider__item-main"]}`}
        >
          <img className="slider__image" src={slider3} alt="" />
          <img className={styles.slider__secondImage} src={slider3_1} alt="" />
          <h4 className={styles.slider__title}>Save watter</h4>
          <p className={styles.slider__text}>
            Taking on the issue of ensuring access to safe water requires
            worldwide effort.
          </p>
        </div>
        <div className={styles.slider__item}>
          <img className="slider__image" src={slider4} alt="" />
          <h4 className={styles.slider__title}>Plant trees</h4>
        </div>
        <div className={styles.slider__item}>
          <img className="slider__image" src={slider5} alt="" />
          <h4 className={styles.slider__title}>Save energy</h4>
        </div>
      </Slider>
      <div className={styles.slider__paging}>
        <CustomPaging
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentSlide={currentSlide}
        />
      </div>
    </div>
  );
};

export default SliderSection;

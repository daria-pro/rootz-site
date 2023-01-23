import { Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ctaLeaf1, ctaLeaf2 } from "../../assets/images/images";
import styles from "./Cta.module.scss";
import "../../assets/scss/main.scss";
import { useState } from "react";

const Cta = () => {
  const [alert, setAlert] = useState(false);

  return (
    <section className={styles.cta} id="cta">
      <div className={styles.cta__content}>
        <div className={styles["cta__text-wrapper"]}>
          <h2 className="page__title">Get started today!</h2>
          <p className={styles.cta__text}>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <Formik
          initialValues={{ firstName: "", email: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, "Must be at least 3 characters")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            setAlert(true);
            resetForm();
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit} className={styles.cta__form}>
              {alert && (
                <motion.div
                  className={styles.cta__alert}
                  animate={{ y: 30, x: "-50%" }}
                  transition={{ ease: "easeOut", duration: 1.5 }}
                >
                  Demo booked successfully!
                </motion.div>
              )}
              <motion.img
                className={styles["cta__leaf-1"]}
                src={ctaLeaf1}
                alt="leaf"
                animate={{ rotateY: alert ? 360 : -360 }}
                transition={{ duration: 0.7 }}
              />
              <motion.img
                className={styles["cta__leaf-2"]}
                src={ctaLeaf2}
                alt="leaf"
                animate={{ rotateY: alert ? 360 : -360 }}
                transition={{ duration: 0.8 }}
              />
              <h3 className={styles["cta__form-title"]}>Log in</h3>
              <div className={styles["cta__input"]}>
                <Input
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="Name"
                  type="email"
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className={styles.cta__error}>{errors.firstName}</div>
                ) : null}
              </div>
              <Input
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                name="email"
              />
              {errors.email && touched.email ? (
                <div className={styles.cta__error}>{errors.email}</div>
              ) : null}
              <div className={styles.cta__button}>
                <Button variant="red" onClick={handleSubmit} type="submit">
                  Book a demo
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Cta;

import { Field } from "formik";
import styles from "./Input.module.scss";

const Input = ({ placeholder, required, type, value, onChange, name }) => {
  return (
    <Field
      className={styles.input}
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;

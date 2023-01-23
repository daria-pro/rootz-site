import styles from "./Button.module.scss";

const Button = ({
  variant = "red",
  children,
  href,
  maxWidth,
  type,
  onClick,
}) => {
  return (
    <a
      href={href}
      style={{ maxWidth }}
      type={type}
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;

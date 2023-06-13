import styles from './Button.module.scss';

const Button = props => {
  return <button className={styles.button} onClick={props.action}>{props.title}</button>
}

export default Button;
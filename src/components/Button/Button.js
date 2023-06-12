import styles from './Button.module.scss';


const Button = props => {

  // console.log('props', props)
  // console.log('props.title', props.title)

  return <button className={styles.button} onClick={props.action}>{props.title}</button>
}

export default Button;
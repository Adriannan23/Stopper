import styles from './Stoper.module.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';

const Stoper = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(0);

  const startTime = () => {
    setIsRunning(true);
    const timer = setInterval(() => { setTime(previousNum => previousNum + 10) }, 10);
    setTimer(timer)
  }

  const stopTimer = () => {
    clearInterval(timer);
    setIsRunning(false);
  }

  const resetTime = () => {
    setTime(0);
  }

  return (
    <div className='main-div'>
      <div>
        <span>{('0' + Math.floor((time / 60000) % 100)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}.</span>
        <span>{(((time % 1000)))}</span>
      </div>
      <div className='button-box'>
        <Button title="start" action={startTime} />
        <Button title="stop" action={stopTimer} />
        <Button title="reset" action={resetTime} />
      </div>
    </div>
  )
};

export default Stoper;
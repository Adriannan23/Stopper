import styles from './Stoper.module.scss';
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const Stoper = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTime = () => {
    const timer = setInterval(() => { setTime(previousNum => previousNum + 1) }, 10);
    console.log('setTimer', setTimer);
    console.log('timer', timer);
    setTimer(timer)
  }

  const stopTimer = () => {
    clearInterval(timer);
  }

  const resetTime = () => {
    setTime(0);
  }

  return (
    <div>
      <h1>Stoper</h1>
      <div>{time}</div>
      <Button title="start" action={startTime} />
      <Button title="stop" action={stopTimer} />
      <Button title="reset" action={resetTime} />
    </div>
  )
};

export default Stoper;
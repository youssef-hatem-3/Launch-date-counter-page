import React, { useEffect, useRef, useState } from 'react';
import CountDownComponentStyle from './CountDownComponent.module.css'

const CountDownComponent = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  let interval = useRef() ;

  const startInterval = () =>{
    let countDate = new Date('May 30 , 2024 00:00:00').getTime() ;
    interval = setInterval(() => {
      const now = new Date().getTime() ; 
      const distance = countDate - now  ;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60*24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
        } else {
        // update timer
        setTimerDays (days);
        setTimerHours (hours);
        setTimerMinutes (minutes);
        setTimerSeconds (seconds);
        }
      
    }, 1000);
  }

useEffect(() => {
  startInterval()
  return () => {
    clearInterval(interval.current);
  };
});
  

  return (
    <>
      <div className={`${CountDownComponentStyle.body}`}>
        <div className={`${CountDownComponentStyle.layer} text-white `}>
          <div className={`text-center`}>
            <i className={`${CountDownComponentStyle.icon} fa-solid fa-clock m-4`}></i>
            <h1 className={`mb-3`}>CountDown Tiner</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum, voluptas quos culpa </p>
            <div className={`${CountDownComponentStyle.counterBox} rounded my-5`}>
                <section>
                  <p>{timerDays}</p>
                  <p>Days</p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerHours}</p>
                  <p>Hours</p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerMinutes}</p>
                  <p>Minutes</p>
                </section>
                <span>:</span>
                <section>
                  <p>{timerSeconds}</p>
                  <p>Seconds</p>
                </section>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountDownComponent;

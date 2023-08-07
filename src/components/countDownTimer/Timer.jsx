import React, { useEffect, useState } from "react";
import moment from "moment";
import './Timer.css'
const Timer = ({ startDate, endDate }) => {
  const calculateTimeLeft = () => {
    const now = moment();
    const end = moment(endDate);
    const diff = end.diff(now);

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const duration = moment.duration(diff);
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [startDate, endDate]);

  return (
        <div class="container">
            <li><span id="days">{timeLeft.days}</span>days</li>
            <li><span id="hours">{timeLeft.hours}</span>Hours</li>
            <li><span id="minutes">{timeLeft.minutes}</span>Minutes</li>
            <li><span id="seconds">{timeLeft.seconds}</span>Seconds</li>

        </div>
 
  );
};

export default Timer;

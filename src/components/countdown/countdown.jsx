import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // Set end date once

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      // If time is up, return zeroes
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {/* Days */}
      <div className="time-block">
        <span className="time">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="label">Days</span>
      </div>
      <span className="separator">:</span>

      {/* Hours */}
      <div className="time-block">
        <span className="time">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="label">Hours</span>
      </div>
      <span className="separator">:</span>

      {/* Minutes */}
      <div className="time-block">
        <span className="time">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="label">Minutes</span>
      </div>
      <span className="separator">:</span>

      {/* Seconds */}
      <div className="time-block">
        <span className="time">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;

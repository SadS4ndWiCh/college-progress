import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import duration from 'dayjs/plugin/duration';

dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const END = dayjs('2023-01-28 7:30');

export function useTime() {
  const [leftTime, setLeftTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCountdownFinish, setIsCountdownFinish] = useState(false);

  useEffect(() => {
    if (isCountdownFinish) return

    let countdownInterval = setInterval(() => {
      const difference = dayjs.duration(END.diff(dayjs()));
      
      if (difference.milliseconds() > 0) {
        setLeftTime({
          years: difference.years(),
          months: difference.months(),
          days: difference.days(),
          hours: difference.hours(),
          minutes: difference.minutes(),
          seconds: difference.seconds(),
        });
      } else {
        return setIsCountdownFinish(true);
      }

    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isCountdownFinish]);

  return { leftTime, isCountdownFinish }
}
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

const END = dayjs.tz('2023-1-28 7:30');
const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const msPerMonth = msPerDay * 30;

function formatTime(n: number): string {
  return String(n).padStart(2, '0');
}

export function useTime() {
  const [leftTime, setLeftTime] = useState({
    months: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setInterval(() => {
      let nowToEndMs = END.diff(dayjs(), 'millisecond');
      const monthsLeft = formatTime(Math.floor(nowToEndMs / msPerMonth));
      nowToEndMs = nowToEndMs % msPerMonth;
      const daysLeft = formatTime(Math.floor(nowToEndMs / msPerDay));
      nowToEndMs = nowToEndMs % msPerDay;
      const hoursLeft = formatTime(Math.floor(nowToEndMs / msPerHour));
      nowToEndMs = nowToEndMs % msPerHour;
      const minutesLeft = formatTime(Math.floor(nowToEndMs / msPerMinute));
      nowToEndMs = nowToEndMs % msPerMinute
      const secondsLeft = formatTime(Math.floor(nowToEndMs / 1000));
      
      setLeftTime({
        months: monthsLeft,
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    }, 1000);
  }, []);

  return { leftTime }
}
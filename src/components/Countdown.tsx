import { useTime } from '@hooks/useTime';

import styles from '@styles/components/Countdown.module.scss';

export function Countdown() {
  const { leftTime } = useTime();

  function formatTime(n: number): string {
    return String(n).padStart(2, '0');
  }

  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>{formatTime(leftTime.years)}</span>
        <p>Ano</p>
      </div>

      <span>:</span>
      <div>

        <span>{formatTime(leftTime.months)}</span>
        <p>Mesês</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{formatTime(leftTime.days)}</span>
        <p>Dias</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{formatTime(leftTime.hours)}</span>
        <p>Horas</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{formatTime(leftTime.minutes)}</span>
        <p>Minutos</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{formatTime(leftTime.seconds)}</span>
        <p>Segundos</p>
      </div>
    </div>
  )
}
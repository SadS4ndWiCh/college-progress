import { useTime } from '@hooks/useTime';

import styles from '@styles/components/Countdown.module.scss';

export function Countdown() {
  const { leftTime } = useTime();

  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>{leftTime.months}</span>
        <p>Mesês</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{leftTime.days}</span>
        <p>Dias</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{leftTime.hours}</span>
        <p>Horas</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{leftTime.minutes}</span>
        <p>Minutos</p>
      </div>

      <span>:</span>
      
      <div>
        <span>{leftTime.seconds}</span>
        <p>Segundos</p>
      </div>
    </div>
  )
}
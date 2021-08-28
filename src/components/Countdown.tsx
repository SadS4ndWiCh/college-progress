import styles from '@styles/components/Countdown.module.scss';

export function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>40</span>
        <p>Mesês</p>
      </div>

      <span>:</span>
      
      <div>
        <span>26</span>
        <p>Dias</p>
      </div>

      <span>:</span>
      
      <div>
        <span>23</span>
        <p>Horas</p>
      </div>

      <span>:</span>
      
      <div>
        <span>54</span>
        <p>Minutos</p>
      </div>

      <span>:</span>
      
      <div>
        <span>21</span>
        <p>Segundos</p>
      </div>
    </div>
  )
}
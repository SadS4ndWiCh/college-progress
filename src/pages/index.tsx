import type { NextPage } from 'next'

import { Countdown } from '@components/Countdown';

import styles from '@styles/pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <div>
          <h1><span>ADS</span> Fatec</h1>
          <p>Contagem Regressiva</p>
        </div>
      </header>

      <main>
        <h2>Restam de aula:</h2>
        <Countdown />
        <small>É considerado o tempo completo, levando em conta mesmo dias sem aula</small>
      </main>
    </div>
  )
}

export default Home

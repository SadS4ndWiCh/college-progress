import type { NextPage } from 'next'
import Head from 'next/head';

import { useTime } from '@hooks/useTime';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Countdown } from '@components/Countdown';

import styles from '@styles/pages/Home.module.scss';

const Home: NextPage = () => {
  const { isCountdownFinish } = useTime();

  const { width, height } = useWindowSize();

  return (
    <div className={styles.container}>
      <Head>
        <meta name="title" content="ADS Fatec - Contagem Regressiva" />
        <meta name="description" content="Contagem regressiva para o termino da faculdade de ADS" />
        <meta property="og:image" content="https://adsfatec.vercel.app/images/og-image.webp" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsfatec.vercel.app/" />
        <meta property="og:title" content="ADS Fatec - Contagem Regressiva" />
        <meta property="og:description" content="Contagem regressiva para o termino da faculdade de ADS" />
        <meta property="og:image" content="https://adsfatec.vercel.app/images/og-image.webp" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://adsfatec.vercel.app/" />
        <meta property="twitter:title" content="ADS Fatec - Contagem Regressiva" />
        <meta property="twitter:description" content="Contagem regressiva para o termino da faculdade de ADS" />
        <meta property="twitter:image" content="https://adsfatec.vercel.app/images/og-image.webp" />

        <title>ADS Fatec - Contagem Regressiva</title>
      </Head>

      { isCountdownFinish && (
        <Confetti 
          width={width}
          height={height}
        />
      ) }

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

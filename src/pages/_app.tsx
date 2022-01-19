import React from 'react'
import Head from 'next/head'

import '../styles/globals.scss'
import style from '../styles/app.module.scss'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div className={style.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp

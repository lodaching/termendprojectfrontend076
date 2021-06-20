import style from './layout.module.scss'
import Head from 'next/head'
import Header from './Header'

export default function Layout(props) {
  return (
    <div className={style.layout} >
      <Head>
        <title>Lo DaChing</title>
        <link rel="icon" href="/Goescat-Macaron-Telegram.ico" />
      </Head>
      <Header />

      <main className={style.main}>{props.children}</main>
    </div>
  )
}
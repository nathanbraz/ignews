import styles from '../sytles/home.module.scss';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ignews</title>
      </Head>
      <h1 className={styles.title}>
        Hello World!
      </h1>  
    </>
  )
}

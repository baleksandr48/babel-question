import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState('');

  const onClick = () => {
    fetch('/api/cats')
      .then((result) => result.text())
      .then((result) => setData(result));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={onClick}>Get data</button>
      {data}
    </div>
  );
}

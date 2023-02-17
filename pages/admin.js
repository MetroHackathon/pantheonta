import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

          <a href="/" className={styles.card2}><img src="https://metrohs.com/pantheonta.png" align="center" width="50"/></a>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          <p className={styles.white}>--------------</p>
          
          <p className={styles.card2}>Settings</p>
          <p className={styles.card2}>Profile</p>

      </header>
      <main>
        <h2>
          PantheonTA
        </h2>
        <h1 className={styles.title}>
          Admin Dashboard
        </h1>
          <a href="https://teams.microsoft.com" className={styles.card3}>
            <h3>General Metro Chat&rarr;</h3>
            <p><i>Edit overall properties...</i></p>
          </a>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h2 {
          color: #ec9d00;
        }
        header {
          width: 47%;
          height: 100px;
          border-bottom: 2px solid #000000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          // border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img 
        src="https://metrohs.com/pantheonslogo.png"
        width="35%">
        </img>
        {/* <img src="https://metrohs.com/pantheonta.png" width="100" /> */}
        {/* <h1 className={styles.title}>
          Pantheon<br></br>Teaching Assisstant
        </h1> */}
        {/* <p className={styles.description}>
          For WWT's 2023 Sustainability STEM Student Forum
        </p> */}
        <div className={styles.grid}>
          <a href="/teacher" className={styles.card}>
            <h3>Teacher Sign in &rarr;</h3>
            <p></p>
          </a>

          <Link href="/student" className={styles.card}>
            <h3>Student Sign in &rarr;</h3>
            <p></p>
          </Link>

          <a
            href="https://chat.openai.com"
            className={styles.card}
          >
            <h3>Learn More &rarr;</h3>
            <p>Discover how we are using AI to keep education sustainable</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Try it &rarr;</h3>
            <p>
              Walk through how students and teachers will interact with chat AI
            </p>
          </a>
        </div>
      </main>

      <footer>
        Metro Hackathon Team © 2023
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
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
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

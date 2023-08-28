import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Projects, Accueil, Footer } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LCL | My vision </title>
        <meta name="robots" content="noindex" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Accueil />
      <Projects />
      <Footer />
    </div>
  );
}

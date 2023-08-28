import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Projects, Accueil, Footer } from "../components";



export default function Home() {
  return (
    <>
      <Accueil />
      <Projects />
      <Footer />
    </>
  );
}

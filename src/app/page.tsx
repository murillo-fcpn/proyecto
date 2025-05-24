"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import "./globals.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1>Inicio</h1>
      </main>
    </div>
  );
}
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";


export default function Home() {

  return (
    <BrowserRouter >

      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}></main>
      </div>
    </BrowserRouter >
  );
}

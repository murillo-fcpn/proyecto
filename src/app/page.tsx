import styles from "@/assets/page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <Image
          src={
            "https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"
          }
          alt="rick y morty"
          width={200} 
          height={200}
        />
        <p>Trabajo Programacion WEB II </p>
        <p>nuestro equipo G-32</p>
        <p>Integrantes: </p>
        <p>Alan Paulo Sanchez Silva</p>
        <p>Israel Elias Murillo Flores</p>
      </div>
      <div></div>
    </div>
  );
}

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="rick y morty" height={200} />
        <p>esta es nuestra pagina.</p>

      </div>
      <div></div>
    </div>
  );
}

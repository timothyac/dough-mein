import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "site name";
const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR || "#000";
const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR || "#fff";
const accentColor = process.env.NEXT_PUBLIC_ACCENT_COLOR || "#0b5cd6";

const Home: NextPage = () => {
  return (
    <div
      className={styles.container}
      style={{ color: primaryColor, backgroundColor: secondaryColor }}
    >
      <Head>
        <title>{siteName}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {siteName}</h1>

        <p className={styles.description}>
          This site is currently under construction
        </p>
      </main>

      <footer className={styles.footer}>
        <span>
          Template built with{" "}
          <a
            href="https://github.com/timothyac/dough-mein"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: accentColor }}
          >
            Dough Mein
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Home;

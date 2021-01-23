import * as React from "react";
import { Link } from "gatsby";
import classnames from "classnames";

import "@styles/global";
import styles from "./index.module.scss";

export default () =>
(
  <main className={styles.container}>
    <header className={styles.header}>
      <h1 className={classnames(styles.text5X, styles.fontBlack)}>
        <Link to="/">JRM.DEV</Link>
      </h1>
    </header>
    <main className={styles.main}>
      <h1
        className={classnames(
          styles.left,
          styles.text4X,
          styles.fontSemibold
        )}
      >
        👋 Howdy!
      </h1>

      <br/>

      <h2 className={classnames(styles.right, styles.textXl)}>
        My name is <Link className={styles.anchor} to="/about/">Joseph R Miles</Link>.
        <br/>
        Your friendly neighborhood hacker 👨‍💻.
      </h2>

      <div className={classnames(styles.right, styles.prose)}>
        <p>
          This is my own little corner of the Internet 🌎, where I&nbsp;
          <a href="/posts/">learn in public</a> and keep a&nbsp;
          <a href="/projects/">directory of my work</a>.
        </p>
        <p>
          Want to get in touch? Send an email to&nbsp;
          <Link to="mailto:joe@jrm.dev"><code>joe@jrm.dev</code></Link> or Tweet&nbsp;
          <Link to="https://twitter.com/@joebobmiles"><code>@joebobmiles</code></Link>.
        </p>
      </div>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2020 &ndash; 2021 JRM.DEV</p>
    </footer>
  </main>
);
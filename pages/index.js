import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.frontPage}>
        <h2 className={styles.frontTitle}>Hello!</h2>
        <p className={styles.frontDescription}>
          I'm Jun, a <span className={styles.highlight}>Malaysian</span> sophomore at
          <span className={styles.highlight}> NYU Abu Dhabi.</span>
        </p>
        <p className={styles.frontDescription}>
          Interested in <span className={styles.highlight}>Computer Science</span>,
          Design, accompanied with plenty of tea.
        </p>
        <div className={styles.downArrowContainer}>
          <IoIosArrowDown size='1.4em'/>
        </div>
      </section>
    </div>
  );
}

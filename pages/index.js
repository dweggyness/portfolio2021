import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ExperienceComponent from '../components/ExperienceComponent';
import nyuadLogo from '../public/nyuad-logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.frontPage}>
        <Header />
        <section className={styles.titleContainer}>
          <h2 className={styles.frontTitle}>Hello!</h2>
          <p className={styles.description}>
            I'm Jun, a <span className={styles.highlight}>Malaysian</span> sophomore at
            <span className={styles.highlight}> NYU Abu Dhabi.</span>
          </p>
          <p className={styles.description}>
            Interested in <span className={styles.highlight}>Computer Science</span>,
            Design, accompanied with plenty of tea.
          </p>
        </section>
        <div className={styles.downArrowContainer}>
          <IoIosArrowDown size='1.4em'/>
        </div>
      </section>
      <section className={styles.experienceContainer}>
        <h3 className={styles.contentTitle}>Work</h3>
        <p className={styles.description}>
          Code and experiences I have been financially compensated for.
        </p>
        <div style={{ marginTop: '1em' }} />
        <ExperienceComponent
          img={nyuadLogo}
          title='eMason Solutions - Kuala Lumpur, MY'
          description='Software Development Intern'
          startDate='Sept 2019'
          endDate='May 2020'
        />
        <div style={{ marginTop: '1em' }} />
        <ExperienceComponent
          img={nyuadLogo}
          title='NYUAD Student Assistantship Program - Abu Dhabi, UAE'
          description='Website Development Assistant'
          startDate='June 2021'
          endDate='Aug 2021'
        />
        <div style={{ marginTop: '1em' }} />
      </section>
    </div>
  );
}

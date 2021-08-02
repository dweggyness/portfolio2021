import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../styles/Home.module.css';
import { Header, Footer, Button, ExperienceComponent } from '../components';
import nyuadLogo from '../public/images/nyuad-logo.png';
import hackadLogo from '../public/images/hackad-logo.png';
import gazelleLogo from '../public/images/gazelle-logo.png';
import emasonLogo from '../public/images/emason-logo.png';

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
      <div style={{ marginTop: '1em' }} />
      <section className={styles.experienceContainer}>
        <h3 className={styles.contentTitle}>Work</h3>
        <p className={styles.description}>
          Experiences I have been financially compensated for.
        </p>
        <div style={{ marginTop: '1em' }} />
        <ExperienceComponent
          img={emasonLogo}
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
      <div style={{ marginTop: '2em' }} />
      <section className={styles.experienceContainer}>
        <h3 className={styles.contentTitle}>Experience</h3>
        <p className={styles.description}>
          Organizations I have worked for.
        </p>
        <div style={{ marginTop: '1em' }} />
        <ExperienceComponent
          img={gazelleLogo}
          title='The Gazelle - Abu Dhabi, UAE'
          description='Deputy Web Chief'
          startDate='Jan 2021'
          endDate='Present'
        />
        <div style={{ marginTop: '1em' }} />
        <ExperienceComponent
          img={hackadLogo}
          title='hackAD - Abu Dhabi, UAE'
          description='Event Coordinator'
          startDate='Jan 2021'
          endDate='May 2021'
        />
        <div style={{ marginTop: '1em' }} />
        <div>
          <Button
            link={'resume.pdf'}
            text='Resume'
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

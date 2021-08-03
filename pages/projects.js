import React from 'react';
import { Header, ProjectComponent, Footer } from '../components';
import styles from '../styles/pages/ProjectPage.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <h3 className={styles.contentTitle}>Projects</h3>
        <p className={styles.description}>
          Some things I've worked on for fun in the past, or for personal use.
        </p>
      </section>
      <div style={{ marginTop: '3em' }} />
      <section className={styles.projectContainer}>
        <ProjectComponent />
      </section>
      <Footer />
    </div>
  );
}

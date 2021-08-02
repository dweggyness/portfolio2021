import React from 'react';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      Jun Ming © 2021-2021
      <div style={{ marginLeft: '0.8em' }} />
      •
      <div style={{ marginLeft: '0.9em' }} />
      <a className={styles.contactButton} href="https://aemail.com/gJm9">
        <MdEmail />
        <div style={{ marginLeft: '0.2em' }} />
        Contact me!
      </a>
    </div>
  );
}

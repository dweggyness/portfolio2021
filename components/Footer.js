import React from 'react';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/components/Footer.module.css';
import Button from './Button';

export default function Footer() {
  return (
    <div className={styles.footer}>
      Updated: Aug 2021
      <div style={{ marginLeft: '0.8em' }} />
      •
      <div style={{ marginLeft: '0.8em' }} />
      2021 © Jun Ming
      <div style={{ marginLeft: '0.8em' }} />
      •
      <div style={{ marginLeft: '0.9em' }} />
      <Button
        icon={MdEmail}
        text='Contact me!'
        link='https://aemail.com/gJm9'
      />
    </div>
  );
}

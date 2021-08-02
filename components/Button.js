import React from 'react';
import styles from '../styles/Button.module.css';

export default function Button(props) {
  const { icon, text, link } = props;
  const Icon = icon;
  return (
    <a className={styles.button} href={link}>
      {Icon && <Icon />}
      <div style={{ marginLeft: '0.2em' }} />
      {text}
    </a>
  );
}

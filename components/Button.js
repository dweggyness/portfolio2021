import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  link: PropTypes.string,
};

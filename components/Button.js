import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

export default function Button(props) {
  const { icon, text, link, shouldOpenInNewTab = false } = props;
  const Icon = icon;

  // spread these props into the anchor element if bool is true
  const additionalProps = shouldOpenInNewTab && { target: '_blank', rel: 'noreferrer' };
  return (
    <a className={styles.button} href={link} {...additionalProps} >
      {Icon && <Icon className={styles.icon} />}
      <div style={{ marginLeft: '0.2em' }} />
      {text}
    </a>
  );
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  link: PropTypes.string,
  shouldOpenInNewTab: PropTypes.bool,
};

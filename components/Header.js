import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import avatar from '../public/avatar.jpg';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Image
          className={styles.avatar}
          src={avatar}
          alt='Picture of myself'
          width={'60px'}
          height={'60px'}
        />
      </div>
      <div className={styles.socialIconsBar}>
        <a className={styles.socialIconContainer} href='https://github.com/dweggyness/'>
          <FaGithub className={styles.socialIcon} size='1.4em'/>
        </a>
        <a className={styles.socialIconContainer} href='https://www.linkedin.com/in/ooi-jun-ming-1695251a9/'>
          <FaLinkedin className={styles.socialIcon} size='1.4em'/>
        </a>
        <a className={styles.socialIconContainer} href='https://www.instagram.com/ojmming/'>
          <FaInstagram className={styles.socialIcon} size='1.4em'/>
        </a>
      </div>
    </div>
  );
}

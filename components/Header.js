import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import avatar from '../public/avatar.jpg';

export default function Header() {
  const router = useRouter();
  const onHomePage = router.pathname === '/';
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <Image
            className={styles.avatar}
            src={avatar}
            alt='Picture of myself'
            width={'60px'}
            height={'60px'}
          />
        </a>
      </Link>
      <div className={styles.headerRightBar}>
        <Link href={onHomePage ? '/projects' : '/'}>
          <a
            className={styles.underlineOnHover}
            style={{ fontSize: '1.2em', verticalAlign: 'middle', bottom: '2.5px' }}>
            <span>
              {onHomePage ? 'Projects' : 'Home'}
            </span>
          </a>
        </Link>
        <a className={styles.underlineOnHover} href='https://github.com/dweggyness/'>
          <FaGithub className={styles.socialIcon} size='1.4em'/>
        </a>
        <a className={styles.underlineOnHover} href='https://www.linkedin.com/in/ooi-jun-ming-1695251a9/'>
          <FaLinkedin className={styles.socialIcon} size='1.4em'/>
        </a>
        <a className={styles.underlineOnHover} href='https://www.instagram.com/ojmming/'>
          <FaInstagram className={styles.socialIcon} size='1.4em'/>
        </a>
      </div>
    </div>
  );
}

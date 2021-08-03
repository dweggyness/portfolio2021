import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoToday, IoLogoGithub } from 'react-icons/io5';
import styles from '../styles/components/ProjectComponent.module.css';
import Dwegstea from '../public/projects/dwegstea.png';

export default function ProjectComponent(props) {
  const { img, title = 'Title', link = 'www.google.com', githubLink = 'd' } = props;
  const description = "This project is about something, using something."
  const techStackText = 'React/JS/CSS/HTML';
  const date = 'Aug 2020';
  return (
    <section className={`flexCol ${styles.container}`}>
      <div className={'flex'}>
        <div className={`flexCol ${styles.descriptionContainerLeft}`}>
          <div style={{ position: 'relative' }}>
            <a className={styles.hoverAnim} href={link} target='_blank' rel='noreferrer'>
              <h3 className={styles.title}>{title}</h3>
            </a>
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.techStackText}>{techStackText}</p>
        </div>
        <div className={`flexCol ${styles.descriptionContainerRight}`}>
          <div className={'flex alignCenter'}>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{date}</p>
          </div>
          <div className={'flex alignCenter'}>
            <div style={{ position: 'relative' }}>
              <a className={`flex alignCenter ${styles.hoverAnim}`} href={githubLink} target='_blank' rel='noreferrer'>
                <IoLogoGithub style={{ marginTop: '1px' }} />
                <div style={{ marginLeft: '0.4em' }} />
                <p>Github Link</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1em' }} />
      <div className={styles.projectImage}>
        <Image
          src={Dwegstea}
          alt='project image'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </section>
  );
}

ProjectComponent.propTypes = {
};

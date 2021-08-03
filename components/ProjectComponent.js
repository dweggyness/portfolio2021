import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IoToday, IoLogoGithub } from 'react-icons/io5';
import styles from '../styles/components/ProjectComponent.module.css';

export default function ProjectComponent(props) {
  const { img, title, projectLink, githubLink, description, techStackText, date } = props;
  return (
    <section className={`flexCol ${styles.container}`}>
      <div className={'flex'}>
        <div className={`flexCol ${styles.descriptionContainerLeft}`}>
          <div style={{ position: 'relative' }}>
            <a className={styles.hoverAnim} href={projectLink} target='_blank' rel='noreferrer'>
              <h3 className={styles.title}>{title}</h3>
            </a>
          </div>
          <div style={{ marginBottom: '0.2em' }} />
          <p>{description}</p>
          <p className={'lightText'}>{techStackText}</p>
        </div>
        <div className={`flexCol ${styles.descriptionContainerRight}`}>
          <div className={'flex alignCenter lightText'} >
            <IoToday />
            <div style={{ marginLeft: '0.4em' }} />
            <p>{date}</p>
          </div>
          <div className={'flex alignCenter'}>
            <div style={{ position: 'relative' }}>
              <a className={`flex alignCenter ${styles.githubLink}`} href={githubLink}>
                <IoLogoGithub style={{ marginTop: '1px' }} />
                <div style={{ marginLeft: '0.4em' }} />
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '1em' }} />
      <div className={styles.projectImageContainer}>
        <a href={projectLink}>
          <Image
            className={styles.projectImage}
            src={img}
            alt='project image screenshot'
            objectFit='contain'
          />
        </a>
      </div>
    </section>
  );
}

ProjectComponent.propTypes = {
  img: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
  techStackText: PropTypes.string,
  date: PropTypes.string,
};

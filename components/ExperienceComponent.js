import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import styles from '../styles/ExperienceComponent.module.css';

export default function ExperienceComponent(props) {
  const { img, title, description, startDate, endDate } = props;
  return (
    <div className={`flex ${styles.container}`}>
      <IoIosArrowForward className={styles.icon} size={'1.4em'}/>
      <div className={'flexCol'} style={{ marginLeft: '1em' }} >
        <div className={'flex alignCenter'} style={{ marginBottom: '0.5em' }}>
          { img
            && <Image
              src={img}
              layout='fixed'
              width={24}
              height={24}
              alt='company logo'
            />
          }
          <p className={styles.text} style={{ marginLeft: '0.5em' }}> {title} </p>
        </div>
        <div className={'flex alignCenter'}>
          <div className={`flex ${styles.dateContainer}`}>
            <p className={styles.text}> {startDate} </p>
            <p className={styles.text} style={{ whiteSpace: 'pre-wrap' }}> {'-'} </p>
            <p className={styles.text}> {endDate} </p>
          </div>
          <p className={styles.text} style={{ margin: 0 }} > {description} </p>
        </div>
      </div>
    </div>
  );
}

ExperienceComponent.propTypes = {
  img: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

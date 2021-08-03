import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/SkillsGroupComponent.module.css';
import { javascriptLogo, cssLogo, figmaLogo, gatsbyLogo, gitLogo,
  htmlLogo, nextLogo, photoshopLogo, pythonLogo, reactLogo, postgresqlLogo } from '../public/logos';

export default function SkillsGroupComponent() {
  return (
    <div className={`flex ${styles.container}`}>
      <ul className={`flexCol alignCenter ${styles.skillColumn}`}>
        <h4 className={styles.title}>Languages</h4>
        <Item
          img={javascriptLogo}
          text='JavaScript'
        />
        <Item
          img={pythonLogo}
          text='Python'
        />
        <Item
          img={htmlLogo}
          text='HTML'
        />
        <Item
          img={cssLogo}
          text='CSS'
        />
        <Item
          img={postgresqlLogo}
          text='SQL'
        />
      </ul>
      <div className={`flexCol alignCenter ${styles.skillColumn}`}>
        <h4 className={styles.title}>Tools</h4>
        <Item
          img={reactLogo}
          text='React'
        />
        <Item
          img={nextLogo}
          text='Next.js'
        />
        <Item
          img={gatsbyLogo}
          text='Gatsby'
        />
        <Item
          img={gitLogo}
          text='Git'
        />
        <Item
          img={photoshopLogo}
          text='Photoshop'
        />
        <Item
          img={figmaLogo}
          text='Figma'
        />
      </div>
    </div>
  );
}

function Item(props) {
  const { img, text } = props;
  return (
    <li>
      <Image src={img} width={20} height={20} alt={`logo for ${text}`} objectFit='scale-down' />
      <span style={{ marginLeft: '0.5em' }} />
      {text}
    </li>
  );
}

Item.propTypes = {
  img: PropTypes.element,
  text: PropTypes.string,
};

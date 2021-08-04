import React from 'react';
import { Header, ProjectComponent, Footer } from '../components';
import styles from '../styles/pages/ProjectPage.module.css';
import DwegsteaScreenshot from '../public/projects/dwegstea.png';
import NetflixRedditScreenshot from '../public/projects/netflix-reddit.jpg';
import BattleshipsScreenshot from '../public/projects/battleships.png';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <h3 className={styles.contentTitle}>Projects</h3>
        <p className={styles.description}>
          Some things I&apos;ve worked on for fun in the past, or for personal use.
        </p>
      </section>
      <div style={{ marginTop: '3em' }} />
      <section className={styles.projectContainer}>
        <ProjectComponent
          img={DwegsteaScreenshot}
          title='Dwegstea Tea Blog'
          projectLink='https://dwegstea.me'
          githubLink='https://github.com/dweggyness/contentfulBlog'
          description='A tea blog for me to write tea reviews. Uses a 3rd party CMS to add content! Sadly out of date :('
          techStackText='GatsbyJS / React / JS / CSS / HTML'
          date='Sept 2020'
        />
        <div style={{ marginTop: '3em' }} />
        <ProjectComponent
          img={NetflixRedditScreenshot}
          title='Netflix Chrome Extension'
          projectLink='https://chrome.google.com/webstore/detail/netflix-reddit-discussion/ihiibcpkgomehmkohaedaebejibmdnlm?hl=en'
          githubLink='https://github.com/dweggyness/netflixRedditDiscussion'
          description='A simple extension for my own use, displays reddit discussion threads for the current episode/show you just finished watching on Netflix.'
          techStackText='JS / CSS / HTML'
          date='Nov 2020'
        />
        <div style={{ marginTop: '3em' }} />
        <ProjectComponent
          img={BattleshipsScreenshot}
          title='Battleships Clone'
          projectLink='https://waterbound-fighting-vessels.herokuapp.com/'
          githubLink='https://github.com/dweggyness/battleships'
          description='A full-stack battleship clone, supports online-multiplayer, or you can play against the AI! '
          techStackText='Express / React / JS / CSS / HTML'
          date='June 2020'
        />
      </section>
      <Footer />
    </div>
  );
}

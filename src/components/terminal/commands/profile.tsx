/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styles from './commands.module.css';
import Link from 'next/link';

const profile = (args: string[]) => {
  const name = String.raw` 
██████╗░██████╗░░█████╗░██╗░░░██╗███████╗░██████╗██╗░░██╗  ██████╗░░█████╗░███╗░░██╗░██████╗░█████╗░██████╗░██╗
██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔════╝██║░░██║  ██╔══██╗██╔══██╗████╗░██║██╔════╝██╔══██╗██╔══██╗██║
██████╔╝██████╔╝███████║╚██╗░██╔╝█████╗░░╚█████╗░███████║  ██████╔╝███████║██╔██╗██║╚█████╗░███████║██████╔╝██║
██╔═══╝░██╔══██╗██╔══██║░╚████╔╝░██╔══╝░░░╚═══██╗██╔══██║  ██╔═══╝░██╔══██║██║╚████║░╚═══██╗██╔══██║██╔══██╗██║
██║░░░░░██║░░██║██║░░██║░░╚██╔╝░░███████╗██████╔╝██║░░██║  ██║░░░░░██║░░██║██║░╚███║██████╔╝██║░░██║██║░░██║██║
╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═════╝░╚═╝░░╚═╝  ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝
`;

  return (
    <div className={styles.profile}>
      <div className={styles.name}>
        <pre className={styles.art}>{name}</pre>
      </div>
      <div className={styles.summary}>
        <div className={styles.namecard}>
          <b>Software Engineer</b>
          <br />
          <b>Location: -.. .. --. .. - .- .-..</b>
        </div>
        A highly motivated software engineer with experience in developing and delivering scalable and robust
        applications. Skilled in various programming languages such as Typescript, Python, SQL, and have delivered
        software solutions using technologies like Node.js, React.js, AWS, Docker and RabbitMQ. Interested in machine
        learning and have developed a Number plate recognition model using CNN. Likes learning and always seeks to
        improve his skills and knowledge to stay ahead in the constantly evolving world of technology.
      </div>
      <div className={styles.resume}>
        <Link
          className={styles.link}
          href="https://drive.google.com/file/d/14j8bmW0wDzZfUE0Fsx93l-JJ5X8DYGAk/"
          target="_blank"
        >
          <b>Resume</b>
        </Link>

        <b style={{ marginLeft: '2rem' }}>GitHub: </b>
        <Link className={styles.link} href="https://github.com/praveshpansari/" target="_blank">
          https://github.com/praveshpansari
        </Link>
        <br />
      </div>
      Would like to work together? Get in touch with me at:
      <div className={styles.contact}>
        <b>LinkedIn: </b>
        <Link className={styles.link} href="https://linkedin.com/in/praveshpansari/" target="_blank">
          https://linkedin.com/in/praveshpansari
        </Link>
        <br />
        <b>Email: </b>
        <a className={styles.link} href="mailto:praveshpansari@gmail.com">
          praveshpansari@gmail.com
        </a>
      </div>
    </div>
  );
};

export default profile;

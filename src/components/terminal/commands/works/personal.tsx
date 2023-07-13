import React, { FC } from 'react';
import { Project } from './data';
import styles from '../commands.module.css';
import Link from 'next/link';

const Personal: FC<{ work: Project }> = ({ work }) => {
  return (
    <article className={styles.article}>
      <div className={styles.works_image}>
        <pre className={styles.art}>{work.art}</pre>
      </div>
      <div className={styles.works_description}>
        <b>Link: </b>
        {work.website && (
          <Link className={styles.link} href={work.website} target="_blank" rel="external">
            <i>{work.website}</i>
          </Link>
        )}
        <br />
        <br />
        {work.description}
        <br />
        <br />
        <b>Leveraged Technologies: </b>
        {work.tech}
      </div>
    </article>
  );
};

export default Personal;

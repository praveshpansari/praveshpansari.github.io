import React, { FC } from 'react';
import styles from '../commands.module.css';
import Link from 'next/link';
import { Project } from './data';

const Professional: FC<{ work: Project }> = ({ work }) => {
  return (
    <article className={styles.article}>
      <div className={styles.works_image}>
        <pre className={styles.art}>{work.art}</pre>
      </div>
      <div className={styles.works_description}>
        {work.website && work.appLink ? (
          <b>
            Link:
            <Link
              className={styles.link}
              style={{ textDecoration: 'none' }}
              href={work.website}
              target="_blank"
              rel="external"
            >
              &nbsp;Website&nbsp;
            </Link>
            <Link
              className={styles.link}
              style={{ textDecoration: 'none' }}
              href={work.appLink}
              target="_blank"
              rel="external"
            >
              App
            </Link>
          </b>
        ) : work.website ? (
          <>
            <b>Link: </b>
            <Link className={styles.link} href={work.website} target="_blank" rel="external">
              <i>{work.website}</i>
            </Link>
          </>
        ) : work.appLink ? (
          <b>
            Link: &nbsp;
            <Link
              className={styles.link}
              style={{ textDecoration: 'none' }}
              href={work.appLink}
              target="_blank"
              rel="external"
            >
              App
            </Link>
          </b>
        ) : (
          <></>
        )}
        <br />
        <br />
        {work.description}
        <br />
        <br />
        <b>Role: </b>
        {work.role}
        <br />
        <b>Leveraged Technologies: </b> {work.tech}
      </div>
    </article>
  );
};

export default Professional;

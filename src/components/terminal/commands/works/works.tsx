/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styles from '../commands.module.css';
import { personal, professional } from './data';
import Professional from './professional';
import Personal from './personal';

const works = (args: string[]) => {
  return (
    <div className={styles.works}>
      <div className={styles.professional}>
        <div className={styles.titles}>Professional Projects</div>
        <div className={styles.intro}>
          Hold on tight, because I&apos;m about to unveil a collection of thrilling projects that I&apos;ve had the
          honor of working on professionally. Imagine a tapestry woven with threads of pure excitement and digital
          prowess. I&apos;ve danced with websites that could make ballerinas jealous, creating virtual realms that
          captivated users from every corner of the digital universe. I&apos;ve delved deep into the enchanted land of
          app development, conjuring mobile marvels that would make Tony Stark do a double take. I&apos;ve even embarked
          on daring quests to build APIs that bridged the gap between different realms of data, ensuring smooth
          communication between all the digital warriors out there. These projects were like a thrilling theme park of
          creativity, where each ride was more exhilarating than the last. So, buckle up, my friend, and get ready for
          an adventure through the exciting projects that have defined my professional journey!
        </div>
        <div className={styles.projects}>
          {professional.map((work) => (
            <Professional key={work.id} work={work} />
          ))}
        </div>
      </div>
      <div className={styles.personal}>
        <div className={styles.titles}>Personal Projects</div>
        <div className={styles.intro}>
          Behold, the realm of my personal projects where creativity knows no bounds! Behold my collection of apps that
          could make the Internet itself jealous. I&apos;ve crafted virtual realms that allow users to do everything
          from managing their personal finances with a hint of magic to planning intergalactic vacations with a touch of
          whimsy. These web apps are like little portals into a world of convenience and delight. I&apos;ve dabbled in
          the mystical arts of AI, conjuring up apps that would give R2-D2 a run for its money. These AI wonders can
          analyze data, predict the future, and even make your toast perfectly golden every time! But that&apos;s not
          all, my friend. Prepare to have your mind blown, for I have also ventured into the uncharted territory of
          programming language creation. Yes, you heard it right! I&apos;ve built my very own mini programming language,
          complete with a fancy compiler that transforms code into pure magic. It&apos;s like having my own secret
          language to communicate with computers! So, get ready to explore a world where personal projects come to life,
          where imagination meets technology, and where the sky is the limit! Let the quirkiness commence!
        </div>
        <div className={`${styles.projects} ${styles.personal_projects}`}>
          {personal.map((work) => (
            <Personal key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default works;

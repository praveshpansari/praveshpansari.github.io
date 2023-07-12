import React from 'react';
import styles from './commands.module.css';
import Image from 'next/image';

const about = (args: string[]) => {
  return (
    <>
      <div className={styles.about}>
        <section className={styles.section}>
          <div className={styles.heading}>Experience</div>
          <div className={styles.information}>
            <div className={styles.information__image}>
              <Image
                priority
                src="/trilogy.png"
                width={0}
                height={0}
                className={` ${styles.image1} ${styles.image}`}
                alt="Clipart for Trilogy"
              />
            </div>
            <div className={styles.information__description}>
              <div className={styles.anim}>
                <b>Trilogy</b>
                <br />
                <i>Software Engineer II (Dec 2021 - Present)</i>
                <br />
                <br />
                Hold on to your digital hats, because I&apos;ve got a story to tell! For nearly two glorious years, I
                donned the cape of a Software Engineer II at the mighty Trilogy. Picture this: me, armed with a keyboard
                and a superhero-sized mug of coffee, leaping into the clouds (not the fluffy ones, mind you, but the
                computing kind) to craft dazzling solutions. I teamed up with the cloud itself, like a dynamic duo, to
                bring forth magnificent innovations. Together, we soared through the virtual skies, sprinkling cloud
                magic upon the world. It was like coding with a thunderstorm, electrifying and awe-inspiring! Now, if
                only I could find a way to make my code rain candy... sweet, sweet cloud candy.
              </div>
            </div>
          </div>

          <div className={styles.information}>
            <div className={styles.information__image}>
              <Image
                priority
                src="/startup.png"
                width={0}
                height={0}
                className={`${styles.image} ${styles.image2}`}
                alt="Clip art for 2fy tech"
              />
            </div>
            <div className={styles.information__description}>
              <b>Friend For You Tech</b>
              <br />
              <i>Cofounder - Software Engineer (Apr 2019 - Dec 2021)</i>
              <br />
              <br />
              Listen up, folks, because I&apos;m about to spill the beans on a legendary tale! Brace yourselves for the
              epic saga of how I, alongside my trusty band of friends, founded a software company that defied the odds
              and conquered the digital realm. We christened it 2FY Tech(Friend For You Tech, of course!) and embarked
              on a thrilling adventure. Picture a group of tech-savvy warriors, armed with keyboards and overflowing
              with creative genius, ready to slay the dragons of mundane software. As a mighty software engineer, I
              battled lines of code with the ferocity of a keyboard ninja, delivering triumphant websites and apps to
              our clients. Our creations were so mesmerizing that they could make the Mona Lisa jealous. We brought
              dreams to life, transforming mere ideas into tangible digital wonders. It was like being a digital wizard,
              spreading our tech magic far and wide. Oh, the joy of being a software engineer and co-founder, creating
              digital marvels while living the startup life!
            </div>
          </div>

          <div className={styles.information}>
            <div className={styles.information__image}>
              <Image
                priority
                src="/contract.png"
                width={0}
                height={0}
                className={`${styles.image} ${styles.image3}`}
                alt="Clip art for dhanu info"
              />
            </div>
            <div className={styles.information__description}>
              <b>Dhanu Info</b>
              <br />
              <i>Software Engineer (Jan 2019 - Mar 2019)</i>
              <br />
              <br />
              Ahoy there, fellow adventurer! Prepare to be regaled with the tale of my daring exploits at Dhanu Info,
              where I embarked on a whirlwind three-month contract as a software engineer. Picture this: me, armed with
              my coding sword and shield, diving headfirst into the realm of backend APIs. I crafted these digital gems,
              these glorious bridges connecting the different layers of the tech universe. But that&apos;s not all! I
              also ventured into the uncharted territory of the front end, adding marvelous features that would make
              even unicorns jealous. I weaved HTML spells, danced with CSS charms, and conjured JavaScript enchantments
              to create a user experience that could make heads spin in awe. It was like being a mad scientist, mixing
              bits and bytes to create a symphony of digital wizardry. So, hold onto your screens, my friend, because
              the journey at Dhanu Info was a whirlwind of epic proportions!
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.education}`}>
          <div className={styles.heading}>Education</div>
          <div className={styles.information}>
            <div className={styles.information__image}>
              <Image
                priority
                src="/university.png"
                width={0}
                height={0}
                className={`${styles.image} ${styles.image4}`}
                alt="a university image"
              />
            </div>
            <div className={styles.information__description}>
              <i>BS in Computer Science</i>
              <br />
              <b>Leeds Beckett University</b>
              <br />
              <br />
              Guess what? I graduated from the prestigious Leeds Beckett University with a mind-bogglingly impressive
              first-class honors degree in Computer Science! Yep, I mastered the art of coding like a wizard and rocked
              those binary digits like a funky disco dancer. My brain is now a well-oiled machine, ready to conquer the
              tech world one quirky line of code at a time! Who needs a diploma frame when you can have a holographic
              trophy displaying my nerdy glory? Time to put the &quot;fun&quot; in functions and the &quot;party&quot;
              in Python!
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.skills}`}>
          <div className={styles.heading}>Skills</div>
          <div className={styles.information}>
            <div className={styles.information__image}>
              <Image
                priority
                src="/skills.png"
                width={0}
                height={0}
                className={`${styles.image} ${styles.image5}`}
                alt="image showing programming languages"
              />
            </div>
            <div className={styles.information__description}>
              <ul className={styles.skillsList}>
                <li>TypeScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>AWS</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default about;

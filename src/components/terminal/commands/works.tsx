/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styles from './commands.module.css';
import Link from 'next/link';

const works = (args: string[]) => {
  const cloudfix = String.raw`
░█████╗░██╗░░░░░░█████╗░██╗░░░██╗██████╗░███████╗██╗██╗░░██╗
██╔══██╗██║░░░░░██╔══██╗██║░░░██║██╔══██╗██╔════╝██║╚██╗██╔╝
██║░░╚═╝██║░░░░░██║░░██║██║░░░██║██║░░██║█████╗░░██║░╚███╔╝░
██║░░██╗██║░░░░░██║░░██║██║░░░██║██║░░██║██╔══╝░░██║░██╔██╗░
╚█████╔╝███████╗╚█████╔╝╚██████╔╝██████╔╝██║░░░░░██║██╔╝╚██╗
░╚════╝░╚══════╝░╚════╝░░╚═════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝
`;

  const sellerfusion = String.raw`
░██████╗███████╗██╗░░░░░██╗░░░░░███████╗██████╗░███████╗██╗░░░██╗░██████╗██╗░█████╗░███╗░░██╗
██╔════╝██╔════╝██║░░░░░██║░░░░░██╔════╝██╔══██╗██╔════╝██║░░░██║██╔════╝██║██╔══██╗████╗░██║
╚█████╗░█████╗░░██║░░░░░██║░░░░░█████╗░░██████╔╝█████╗░░██║░░░██║╚█████╗░██║██║░░██║██╔██╗██║
░╚═══██╗██╔══╝░░██║░░░░░██║░░░░░██╔══╝░░██╔══██╗██╔══╝░░██║░░░██║░╚═══██╗██║██║░░██║██║╚████║
██████╔╝███████╗███████╗███████╗███████╗██║░░██║██║░░░░░╚██████╔╝██████╔╝██║╚█████╔╝██║░╚███║
╚═════╝░╚══════╝╚══════╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝
`;

  const gharelubazzar = String.raw`
░██████╗░██╗░░██╗░█████╗░██████╗░███████╗██╗░░░░░██╗░░░██╗██████╗░░█████╗░███████╗███████╗░█████╗░██████╗░
██╔════╝░██║░░██║██╔══██╗██╔══██╗██╔════╝██║░░░░░██║░░░██║██╔══██╗██╔══██╗╚════██║╚════██║██╔══██╗██╔══██╗
██║░░██╗░███████║███████║██████╔╝█████╗░░██║░░░░░██║░░░██║██████╦╝███████║░░███╔═╝░░███╔═╝███████║██████╔╝
██║░░╚██╗██╔══██║██╔══██║██╔══██╗██╔══╝░░██║░░░░░██║░░░██║██╔══██╗██╔══██║██╔══╝░░██╔══╝░░██╔══██║██╔══██╗
╚██████╔╝██║░░██║██║░░██║██║░░██║███████╗███████╗╚██████╔╝██████╦╝██║░░██║███████╗███████╗██║░░██║██║░░██║
░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝░╚═════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
`;

  const getstorepos = String.raw`
░██████╗░███████╗████████╗  ░██████╗████████╗░█████╗░██████╗░███████╗  ██████╗░░█████╗░░██████╗
██╔════╝░██╔════╝╚══██╔══╝  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝  ██╔══██╗██╔══██╗██╔════╝
██║░░██╗░█████╗░░░░░██║░░░  ╚█████╗░░░░██║░░░██║░░██║██████╔╝█████╗░░  ██████╔╝██║░░██║╚█████╗░
██║░░╚██╗██╔══╝░░░░░██║░░░  ░╚═══██╗░░░██║░░░██║░░██║██╔══██╗██╔══╝░░  ██╔═══╝░██║░░██║░╚═══██╗
╚██████╔╝███████╗░░░██║░░░  ██████╔╝░░░██║░░░╚█████╔╝██║░░██║███████╗  ██║░░░░░╚█████╔╝██████╔╝
░╚═════╝░╚══════╝░░░╚═╝░░░  ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚══════╝  ╚═╝░░░░░░╚════╝░╚═════╝░
`;

  const tswearn = String.raw`
████████╗░██████╗░██╗░░░░░░░██╗  ███████╗░█████╗░██████╗░███╗░░██╗
╚══██╔══╝██╔════╝░██║░░██╗░░██║  ██╔════╝██╔══██╗██╔══██╗████╗░██║
░░░██║░░░╚█████╗░░╚██╗████╗██╔╝  █████╗░░███████║██████╔╝██╔██╗██║
░░░██║░░░░╚═══██╗░░████╔═████║░  ██╔══╝░░██╔══██║██╔══██╗██║╚████║
░░░██║░░░██████╔╝░░╚██╔╝░╚██╔╝░  ███████╗██║░░██║██║░░██║██║░╚███║
░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚═╝░░  ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`;

  const aicare = String.raw`
░█████╗░██╗  ░█████╗░░█████╗░██████╗░███████╗
██╔══██╗██║  ██╔══██╗██╔══██╗██╔══██╗██╔════╝
███████║██║  ██║░░╚═╝███████║██████╔╝█████╗░░
██╔══██║██║  ██║░░██╗██╔══██║██╔══██╗██╔══╝░░
██║░░██║██║  ╚█████╔╝██║░░██║██║░░██║███████╗
╚═╝░░╚═╝╚═╝  ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝
`;

  const grobazzar = String.raw`
░██████╗░██████╗░░█████╗░██████╗░░█████╗░███████╗███████╗░█████╗░██████╗░
██╔════╝░██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚════██║╚════██║██╔══██╗██╔══██╗
██║░░██╗░██████╔╝██║░░██║██████╦╝███████║░░███╔═╝░░███╔═╝███████║██████╔╝
██║░░╚██╗██╔══██╗██║░░██║██╔══██╗██╔══██║██╔══╝░░██╔══╝░░██╔══██║██╔══██╗
╚██████╔╝██║░░██║╚█████╔╝██████╦╝██║░░██║███████╗███████╗██║░░██║██║░░██║
░╚═════╝░╚═╝░░╚═╝░╚════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
`;

  const anpr = String.raw`
░█████╗░███╗░░██╗██████╗░██████╗░  ░░░░░░  ███╗░░██╗███████╗██████╗░░█████╗░██╗░░░░░
██╔══██╗████╗░██║██╔══██╗██╔══██╗  ░░░░░░  ████╗░██║██╔════╝██╔══██╗██╔══██╗██║░░░░░
███████║██╔██╗██║██████╔╝██████╔╝  █████╗  ██╔██╗██║█████╗░░██████╔╝███████║██║░░░░░
██╔══██║██║╚████║██╔═══╝░██╔══██╗  ╚════╝  ██║╚████║██╔══╝░░██╔═══╝░██╔══██║██║░░░░░
██║░░██║██║░╚███║██║░░░░░██║░░██║  ░░░░░░  ██║░╚███║███████╗██║░░░░░██║░░██║███████╗
╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝  ░░░░░░  ╚═╝░░╚══╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝
`;

  const pong = String.raw`
██████╗░░█████╗░███╗░░██╗░██████╗░░░░░█████╗░██╗
██╔══██╗██╔══██╗████╗░██║██╔════╝░░░░██╔══██╗██║
██████╔╝██║░░██║██╔██╗██║██║░░██╗░░░░███████║██║
██╔═══╝░██║░░██║██║╚████║██║░░╚██╗░░░██╔══██║██║
██║░░░░░╚█████╔╝██║░╚███║╚██████╔╝██╗██║░░██║██║
╚═╝░░░░░░╚════╝░╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝░░╚═╝╚═╝
`;

  const cfx = String.raw`
░█████╗░███████╗██╗░░██╗  ███████╗░██████╗██╗░░██╗░█████╗░██████╗░
██╔══██╗██╔════╝╚██╗██╔╝  ██╔════╝██╔════╝██║░░██║██╔══██╗██╔══██╗
██║░░╚═╝█████╗░░░╚███╔╝░  █████╗░░╚█████╗░███████║██║░░██║██████╔╝
██║░░██╗██╔══╝░░░██╔██╗░  ██╔══╝░░░╚═══██╗██╔══██║██║░░██║██╔═══╝░
╚█████╔╝██║░░░░░██╔╝╚██╗  ███████╗██████╔╝██║░░██║╚█████╔╝██║░░░░░
░╚════╝░╚═╝░░░░░╚═╝░░╚═╝  ╚══════╝╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░
`;

  const agency = String.raw`
███╗░░░███╗██╗░░░██╗░██████╗████████╗██╗░█████╗░  ░█████╗░░██████╗░███████╗███╗░░██╗░█████╗░██╗░░░██╗
████╗░████║╚██╗░██╔╝██╔════╝╚══██╔══╝██║██╔══██╗  ██╔══██╗██╔════╝░██╔════╝████╗░██║██╔══██╗╚██╗░██╔╝
██╔████╔██║░╚████╔╝░╚█████╗░░░░██║░░░██║██║░░╚═╝  ███████║██║░░██╗░█████╗░░██╔██╗██║██║░░╚═╝░╚████╔╝░
██║╚██╔╝██║░░╚██╔╝░░░╚═══██╗░░░██║░░░██║██║░░██╗  ██╔══██║██║░░╚██╗██╔══╝░░██║╚████║██║░░██╗░░╚██╔╝░░
██║░╚═╝░██║░░░██║░░░██████╔╝░░░██║░░░██║╚█████╔╝  ██║░░██║╚██████╔╝███████╗██║░╚███║╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░  ╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░
`;

  const todo = String.raw`
████████╗░█████╗░██████╗░░█████╗░  ░█████╗░██████╗░██████╗░
╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗
░░░██║░░░██║░░██║██║░░██║██║░░██║  ███████║██████╔╝██████╔╝
░░░██║░░░██║░░██║██║░░██║██║░░██║  ██╔══██║██╔═══╝░██╔═══╝░
░░░██║░░░╚█████╔╝██████╔╝╚█████╔╝  ██║░░██║██║░░░░░██║░░░░░
░░░╚═╝░░░░╚════╝░╚═════╝░░╚════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░
`;

  const draw = String.raw`
██████╗░██████╗░░█████╗░░██╗░░░░░░░██╗░░░██╗░█████╗░
██╔══██╗██╔══██╗██╔══██╗░██║░░██╗░░██║░░░██║██╔══██╗
██║░░██║██████╔╝███████║░╚██╗████╗██╔╝░░░██║██║░░██║
██║░░██║██╔══██╗██╔══██║░░████╔═████║░░░░██║██║░░██║
██████╔╝██║░░██║██║░░██║░░╚██╔╝░╚██╔╝░██╗██║╚█████╔╝
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░╚════╝░
`;

  const converter = String.raw`
░█████╗░░█████╗░███╗░░██╗██╗░░░██╗███████╗██████╗░████████╗███████╗██████╗░
██╔══██╗██╔══██╗████╗░██║██║░░░██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
██║░░╚═╝██║░░██║██╔██╗██║╚██╗░██╔╝█████╗░░██████╔╝░░░██║░░░█████╗░░██████╔╝
██║░░██╗██║░░██║██║╚████║░╚████╔╝░██╔══╝░░██╔══██╗░░░██║░░░██╔══╝░░██╔══██╗
╚█████╔╝╚█████╔╝██║░╚███║░░╚██╔╝░░███████╗██║░░██║░░░██║░░░███████╗██║░░██║
░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
`;

  return (
    <div className={styles.works}>
      <div className={styles.intro}>
        Hold on tight, because I&apos;m about to unveil a collection of thrilling projects that I&apos;ve had the honor
        of working on professionally. Imagine a tapestry woven with threads of pure excitement and digital prowess.
        I&apos;ve danced with websites that could make ballerinas jealous, creating virtual realms that captivated users
        from every corner of the digital universe. I&apos;ve delved deep into the enchanted land of app development,
        conjuring mobile marvels that would make Tony Stark do a double take. I&apos;ve even embarked on daring quests
        to build APIs that bridged the gap between different realms of data, ensuring smooth communication between all
        the digital warriors out there. These projects were like a thrilling theme park of creativity, where each ride
        was more exhilarating than the last. So, buckle up, my friend, and get ready for an adventure through the
        exciting projects that have defined my professional journey!
      </div>
      <div className={styles.projects}>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{cloudfix}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link className={styles.link} href="https://www.cloudfix.com/" target="_blank" rel="external">
              <i>https://www.cloudfix.com</i>
            </Link>
            <br />
            <br />
            An automatic cost optimization platform for AWS services which aimed to reduce 10% of AWS service costs for
            the client. CloudFix scans your AWS accounts, identifies new cost savings opportunities, and automatically
            implements fixes – around the clock. Unlike tools that just find one-off savings, CloudFix runs continuously
            in the background, so you can realize 15-60% per AWS service in compounding savings.
            <br />
            <br />
            <b>Role: </b>Enhancing the platform & its architecture, creating core features for & by AWS services and
            testing them using cdk.
            <br />
            <b>Leveraged Technologies: </b>AWS (Cloudformation, Athena, S3, Lambda, Step Functions, Cloudwatch, RDS,
            SSM), TypeScript, Python, Node.js, React.js, MySQL
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{sellerfusion}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link className={styles.link} href="https://www.sellerfusion.io/" target="_blank" rel="external">
              <i>https://www.sellerfusion.io</i>
            </Link>
            <br />
            <br />A aggregation platform which aims to display a sellers data from Amazon, Walmart & Target.
            SellerFusion&apos;s mission is to fully support entrepreneurs and brands grow and scale their eCommerce
            business, by creating a single platform for all aspects of the e-Commerce seller, ranging from sales,
            finance, marketing/campaign, and inventory/logistics. Their AI engine and automation tools will allow the
            users to scrape and learn customer sentiments for actionable insights, and of course, take actions
            immediately.
            <br />
            <br />
            <b>Role: </b>Led development of crawler, worked on data visualization and query optimization.
            <br />
            <b>Leveraged Technologies: </b>TypeScript, Python, Flask, React.js, GraphQL, Postgres, Grafana, RabbitMQ,
            Kotlin, Docker, Prometheus
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{gharelubazzar}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link className={styles.link} href="https://www.gharelubazzar.com/" target="_blank" rel="external">
              <i>https://www.gharelubazzar.com</i>
            </Link>
            <br />
            <br />
            An e-commerce website aiming to provide products as a wholesale where buying would be done through a bidding
            system. It allows the buyers to bid and buy products in large quantities and sellers to list products in
            bulk quantity and approve buyer bids. It is a platform connecting Gharelubazzar, already a leading seller in
            Nepal, as well as other wholesalers to large retailers as well as small shops.
            <br />
            <br />
            <b>Role: </b>Communicated with client, designed the system architecture and worked on the frontend &
            backend.
            <br />
            <b>Leveraged Technologies: </b>TypeScript, Angular, Node.js, REST APIs, MongoDB, Heroku
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{getstorepos}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link className={styles.link} href="https://www.getstorepos.com/" target="_blank" rel="external">
              <i>https://www.getstorepos.com</i>
            </Link>
            <br />
            <br />
            GET StoreStore POS is full-fledged as it comes with all the indispensable features that simplifies
            operations, increases sales, and astounds guests. GET StoreStore Point of Sale and management system (POS)
            enables the restaurants to expand and prosper by being user friendly, instant and efficient. Provides
            features such as QR dine-in and ordering, online ordering, integrated payments and more.
            <br />
            <br />
            <b>Role: </b>Migrated from React to Angular, created features like authentication, table booking, etc.
            <br />
            <b>Leveraged Technologies: </b>TypeScript, Angular, Node.js, React.js, GraphQL
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{tswearn}</pre>
          </div>
          <div className={styles.works_description}>
            <b>
              Link:
              <Link
                className={styles.link}
                style={{ textDecoration: 'none' }}
                href="https://tap-shake-walk.web.app/"
                target="_blank"
                rel="external"
              >
                &nbsp;Website&nbsp;
              </Link>
              <Link
                className={styles.link}
                style={{ textDecoration: 'none' }}
                href="https://play.google.com/store/apps/details?id=com.tswearn.app"
                target="_blank"
                rel="external"
              >
                App
              </Link>
            </b>
            <br />
            <br />
            TSW (Tap, Travel, Shake, Walk) is a fitness app that converts activity points into TWS coins. These coins
            can be used in the shop tab to buy exciting products. The activity points can be increased by shaking the
            phone or even by tapping! Travel from one location to another also earns points. Users can challenge their
            friends and chat with them, all the while earning coins by tapping. Their is a leaderboard and winners
            receive fantastic rewards such as Amazon vouchers, phones, gadgets, and more!
            <br />
            <br />
            <b>Role: </b>Created the UI for the website, developed APIs for calulating and tracking the metrics &
            rewards.
            <br />
            <b>Leveraged Technologies: </b>JavaScript, TypeScript, Node.js, HTML/CSS, MongoDB, REST APIs
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{aicare}</pre>
          </div>
          <div className={styles.works_description}>
            <b>
              Link: &nbsp;
              <Link
                className={styles.link}
                style={{ textDecoration: 'none' }}
                href="https://play.google.com/store/apps/details?id=com.doctor.aicare"
                target="_blank"
                rel="external"
              >
                App
              </Link>
            </b>
            <br />
            <br />
            An app providing users instant access to the top certified doctors from around the world, 24/7, at the
            convenience of their home or workplace, with or without insurance coverage. Patients can get live video
            consultations with the best doctors in all areas of specialty, upload their medical results, and track their
            treatment plan and progress in a 100% secure and confidential way. Bookings can be made to the nearest
            doctors for appointments and consultation.
            <br />
            <br />
            <b>Role: </b>Created the admin panel, developed APIs for features like scheduling appointments, bookings,
            patient reports etc.
            <br />
            <b>Leveraged Technologies: </b>JavaScript, TypeScript, Angular, Node.js, HTML/CSS, SCSS, MongoDB, REST APIs
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{grobazzar}</pre>
          </div>
          <div className={styles.works_description}>
            <b>
              Link:
              <Link
                className={styles.link}
                style={{ textDecoration: 'none' }}
                href="https://www.grobazar.com/"
                target="_blank"
                rel="external"
              >
                &nbsp;Website&nbsp;
              </Link>
              <Link
                className={styles.link}
                style={{ textDecoration: 'none' }}
                href="https://play.google.com/store/apps/details?id=com.grobazar.shopping"
                target="_blank"
                rel="external"
              >
                App
              </Link>
            </b>
            <br />
            <br />A platform to fulfill the grocery needs of the people. Provides instant home delivery of groceries,
            dairy products, bakery items, cosmetics and more. Their mission is to focus on quantity, cost leadership and
            express delivery.
            <br />
            <br />
            <b>Role: </b>Worked on the backend to create APIs for features such as placing order, invoicing, delivery.
            <br />
            <b>Leveraged Technologies: </b>JavaScript, TypeScript, Node.js, MongoDB, REST APIs
          </div>
        </article>
      </div>
      <div className={styles.intro}>
        Behold, the realm of my personal projects where creativity knows no bounds! Behold my collection of apps that
        could make the Internet itself jealous. I&apos;ve crafted virtual realms that allow users to do everything from
        managing their personal finances with a hint of magic to planning intergalactic vacations with a touch of
        whimsy. These web apps are like little portals into a world of convenience and delight. I&apos;ve dabbled in the
        mystical arts of AI, conjuring up apps that would give R2-D2 a run for its money. These AI wonders can analyze
        data, predict the future, and even make your toast perfectly golden every time! But that&apos;s not all, my
        friend. Prepare to have your mind blown, for I have also ventured into the uncharted territory of programming
        language creation. Yes, you heard it right! I&apos;ve built my very own mini programming language, complete with
        a fancy compiler that transforms code into pure magic. It&apos;s like having my own secret language to
        communicate with computers! So, get ready to explore a world where personal projects come to life, where
        imagination meets technology, and where the sky is the limit! Let the quirkiness commence!
      </div>
      <div className={styles.projects}>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{anpr}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/anpr-nepal/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/anpr-nepal</i>
            </Link>
            <br />
            <br />
            Autmatic Number Plate Recognition of Nepali Number Plates This project aims to locate and recognize the
            characters from Nepali number plates on a vehicle. It reads symbols on license plates using optical
            character recognition. License plate localization on the image, character segmentation, character
            recognition of the segmented characters are the processes involved in a number plate recognition system. The
            system then uses Convolutional Neural Network (CNN) for predicting each segmented character. The CNN is
            trained on a 17,400 image dataset made using 30 Nepali characters generated from different computer fonts
            and handwritten characters. The color of the plate is recognized using k-means clustering and choosing the
            nearest centroid color. It is deployed using Flask.
            <br />
            <br />
            <b>Leveraged Technologies: </b>YOLOv3, OpenCV, TensorFlow, CNN, NumPy, SciPy, Matplotlib, Python, Flask
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{cfx}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/CFXEshop/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/CFXEshop</i>
            </Link>
            <br />
            <br />
            This is an ecommerce website with three types of users: Buyers, Traders and Admin. Each user has a different
            dashboard and different functions. Buyers can favorite products, add them to cart and buy them using PayPal,
            traders can sell and manage orders and admins can manage users, products and orders. After a successful
            order invoice is also emailed to the customer. There is also a management dashboard build using APEX oracle
            to display daily finance and delivery and monthly sales reports by making use of Oracle functions,
            procedures & triggers are used.
            <br />
            <br />
            <b>Leveraged Technologies: </b> XAMPP, MariaDB, PHP, jQuery, HTML/CSS/JS, Oracle Database, PL/SQL, Bootstrap
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{pong}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/pong-ai/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/pong-ai</i>
            </Link>
            <br />
            <br />
            An old time classic Pong game made with a retro look. Supports 2 player with one keyboard (WASD & arrows).
            There is also an AI player which can be played against and the difficulty also can be adjusted. There game
            difficulty is automatically scaled, the longer the game goes on, the game becomes more difficult (ball
            velocity increases).
            <br />
            <br />
            <b>Leveraged Technologies: </b>Lua, Love2D
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{todo}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/todo-app/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/todo-app</i>
            </Link>
            <br />
            <br />
            A todo android application that allows you to create tasks based on priority and date, mark them complete
            and delete them. The basic CRUD operations for TODO exists like adding, updating, listing them with Recycle
            view and deleting them. There is a login screen with validation and shared preferences. Users can view TODOs
            in 4 categories of today, tommorow, later & older. All views have landscape layout and all update operations
            have validations.
            <br />
            <br />
            <b>Leveraged Technologies: </b>Android Studio, JAVA, RoomDB
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{draw}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/Draw.io/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/Draw.io</i>
            </Link>
            <br />
            <br />
            This is a simple programming environment, where commands can be used to manipulate shapes and lines on an
            artboard. The artboard is the place where all drawings and the cursor are rendered. The menu allows file
            operations like save and load, exit, and the about information.The command line runs single commands while
            the code editor can run multiple commands. The output box displays the log information and error
            information. The syntax button analyzes the code in the code editor and displays any errors it found in the
            log box. Four types of shapes can be drawn: rectangle, square, circle and triangle. A line can be drawn
            given a destination position. The shapes can be drawn outlined or filled and their color can be changed.
            Variables can be declared, a while loop is present and both parameterized and parameter less functions can
            be implemented.
            <br />
            First the lexer tokenizes the input, the parser parses the command and the painter then updates the
            artboard.
            <br />
            <br />
            <b>Leveraged Technologies: </b>C#, Git, Visual Studio, .NET Framework
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{agency}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/Web-Development-Agency/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/Web-Development-Agency</i>
            </Link>
            <br />
            <br />
            Mystic is a creative agency aiming at providing digital services like digital marketing, website and app
            development, branding and designing. It is a static website developed using vanilla web technologies like
            HTML, CSS & JS. Includes particle.js for reverse snow effect on the hero section, an eye catching theme with
            parallax scroll and beautiful animations. There is a home page, about page, contact page, pricing page and a
            login page.
            <br />
            <br />
            <b>Leveraged Technologies: </b>HTML, CSS, JavaScript, Git
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.works_image}>
            <pre className={styles.art}>{converter}</pre>
          </div>
          <div className={styles.works_description}>
            <b>Link: </b>
            <Link
              className={styles.link}
              href="https://github.com/praveshpansari/converter/"
              target="_blank"
              rel="external"
            >
              <i>https://github.com/praveshpansari/converter</i>
            </Link>
            <br />
            <br />
            A convertor program consisiting of several metrics and currency conversion units. Metric conversions like
            acres to hectares, mph to kmh, yards to meters, celsius to farenheit etc are present. Currency conversions
            can be dont from GBP to any currency. The target currency can be loaded from a file which has the currency
            name, symbol and the conversion rate. The sample file provided consists of currencis like USD, AUD, Euro,
            THB etc. One can also perform reverse calculations using the reverse conversion option. The metric
            conversions are reversed and all the currencies now convert to GBP.
            <br />
            <br />
            <b>Leveraged Technologies: </b>Eclipse IDE, Java
          </div>
        </article>
      </div>
    </div>
  );
};

export default works;

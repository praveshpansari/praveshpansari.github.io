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

  return (
    <div className={styles.works}>
      <div className={styles.intro}>
        Hold on tight, because I&apos;m about to unveil a collection of thrilling projects that I&apos;ve had the honor
        of working on professionally. Imagine a tapestry woven with threads of pure excitement and digital prowess.
        I&apos;ve danced with websites that could make ballerinas jealous, creating virtual realms that captivated users
        from every corner of the digital universe. I&apos;ve delved deep into the enchanted land of app development,
        conjuring mobile marvels that would make Tony Stark do a double take. I&apos;ve even embarked on daring quests to
        build APIs that bridged the gap between different realms of data, ensuring smooth communication between all the
        digital warriors out there. These projects were like a thrilling theme park of creativity, where each ride was
        more exhilarating than the last. So, buckle up, my friend, and get ready for an adventure through the exciting
        projects that have defined my professional journey!
      </div>
      <div className={styles.professional}>
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
    </div>
  );
};

export default works;

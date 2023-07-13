/* eslint-disable no-irregular-whitespace */

export interface Project {
  id: number;
  art: string;
  appLink?: string;
  website?: string;
  role?: string;
  tech: string;
  description: string;
}

export const professional: Project[] = [
  {
    id: 1,
    art: String.raw`
░█████╗░██╗░░░░░░█████╗░██╗░░░██╗██████╗░███████╗██╗██╗░░██╗
██╔══██╗██║░░░░░██╔══██╗██║░░░██║██╔══██╗██╔════╝██║╚██╗██╔╝
██║░░╚═╝██║░░░░░██║░░██║██║░░░██║██║░░██║█████╗░░██║░╚███╔╝░
██║░░██╗██║░░░░░██║░░██║██║░░░██║██║░░██║██╔══╝░░██║░██╔██╗░
╚█████╔╝███████╗╚█████╔╝╚██████╔╝██████╔╝██║░░░░░██║██╔╝╚██╗
░╚════╝░╚══════╝░╚════╝░░╚═════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝
`,
    website: 'https://www.cloudfix.com',
    description:
      'An automatic cost optimization platform for AWS services which aimed to reduce 10% of AWS service costs for the client. CloudFix scans your AWS accounts, identifies new cost savings opportunities, and automatically implements fixes – around the clock. Unlike tools that just find one-off savings, CloudFix runs continuously in the background, so you can realize 15-60% per AWS service in compounding savings.',
    role: 'Enhancing the platform & its architecture, creating core features for & by AWS services and testing them using cdk.',
    tech: 'AWS (Cloudformation, Athena, S3, Lambda, Step Functions, Cloudwatch, RDS, SSM), TypeScript, Python, Node.js, React.js, MySQL',
  },
  {
    id: 2,
    art: String.raw`
░██████╗███████╗██╗░░░░░██╗░░░░░███████╗██████╗░███████╗██╗░░░██╗░██████╗██╗░█████╗░███╗░░██╗
██╔════╝██╔════╝██║░░░░░██║░░░░░██╔════╝██╔══██╗██╔════╝██║░░░██║██╔════╝██║██╔══██╗████╗░██║
╚█████╗░█████╗░░██║░░░░░██║░░░░░█████╗░░██████╔╝█████╗░░██║░░░██║╚█████╗░██║██║░░██║██╔██╗██║
░╚═══██╗██╔══╝░░██║░░░░░██║░░░░░██╔══╝░░██╔══██╗██╔══╝░░██║░░░██║░╚═══██╗██║██║░░██║██║╚████║
██████╔╝███████╗███████╗███████╗███████╗██║░░██║██║░░░░░╚██████╔╝██████╔╝██║╚█████╔╝██║░╚███║
╚═════╝░╚══════╝╚══════╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░░░░░╚═════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝
`,
    website: 'https://www.sellerfusion.io',
    description:
      'A aggregation platform which aims to display a sellers data from Amazon, Walmart & Target. SellerFusion&apos;s mission is to fully support entrepreneurs and brands grow and scale their eCommerce business, by creating a single platform for all aspects of the e-Commerce seller, ranging from sales, finance, marketing/campaign, and inventory/logistics. Their AI engine and automation tools will allow the users to scrape and learn customer sentiments for actionable insights, and of course, take actions immediately.',
    role: 'Led development of crawler, worked on data visualization and query optimization.',
    tech: 'TypeScript, Python, Flask, React.js, GraphQL, Postgres, Grafana, RabbitMQ, Kotlin, Docker, Prometheus',
  },
  {
    id: 3,
    art: String.raw`
░██████╗░██╗░░██╗░█████╗░██████╗░███████╗██╗░░░░░██╗░░░██╗██████╗░░█████╗░███████╗███████╗░█████╗░██████╗░
██╔════╝░██║░░██║██╔══██╗██╔══██╗██╔════╝██║░░░░░██║░░░██║██╔══██╗██╔══██╗╚════██║╚════██║██╔══██╗██╔══██╗
██║░░██╗░███████║███████║██████╔╝█████╗░░██║░░░░░██║░░░██║██████╦╝███████║░░███╔═╝░░███╔═╝███████║██████╔╝
██║░░╚██╗██╔══██║██╔══██║██╔══██╗██╔══╝░░██║░░░░░██║░░░██║██╔══██╗██╔══██║██╔══╝░░██╔══╝░░██╔══██║██╔══██╗
╚██████╔╝██║░░██║██║░░██║██║░░██║███████╗███████╗╚██████╔╝██████╦╝██║░░██║███████╗███████╗██║░░██║██║░░██║
░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝░╚═════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
`,
    website: 'https://www.gharelubazzar.com',
    description:
      ' An e-commerce website aiming to provide products as a wholesale where buying would be done through a bidding system. It allows the buyers to bid and buy products in large quantities and sellers to list products in bulk quantity and approve buyer bids. It is a platform connecting Gharelubazzar, already a leading seller in Nepal, as well as other wholesalers to large retailers as well as small shops.',
    role: 'Communicated with client, designed the system architecture and worked on the frontend & backend.',
    tech: 'TypeScript, Angular, Express.js, Node.js, REST APIs, MongoDB, Heroku',
  },
  {
    id: 4,
    art: String.raw`
░██████╗░███████╗████████╗  ░██████╗████████╗░█████╗░██████╗░███████╗  ██████╗░░█████╗░░██████╗
██╔════╝░██╔════╝╚══██╔══╝  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝  ██╔══██╗██╔══██╗██╔════╝
██║░░██╗░█████╗░░░░░██║░░░  ╚█████╗░░░░██║░░░██║░░██║██████╔╝█████╗░░  ██████╔╝██║░░██║╚█████╗░
██║░░╚██╗██╔══╝░░░░░██║░░░  ░╚═══██╗░░░██║░░░██║░░██║██╔══██╗██╔══╝░░  ██╔═══╝░██║░░██║░╚═══██╗
╚██████╔╝███████╗░░░██║░░░  ██████╔╝░░░██║░░░╚█████╔╝██║░░██║███████╗  ██║░░░░░╚█████╔╝██████╔╝
░╚═════╝░╚══════╝░░░╚═╝░░░  ╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚══════╝  ╚═╝░░░░░░╚════╝░╚═════╝░
`,
    website: 'https://www.getstorepos.com',
    description:
      'GET StoreStore POS is full-fledged as it comes with all the indispensable features that simplifies operations, increases sales, and astounds guests. GET StoreStore Point of Sale and management system (POS) enables the restaurants to expand and prosper by being user friendly, instant and efficient. Provides features such as QR dine-in and ordering, online ordering, integrated payments and more.',
    role: 'Migrated from React to Angular, created features like authentication, table booking, etc.',
    tech: 'TypeScript, Angular, JavaScript, HTML/CSS, Node.js, React.js, GraphQL',
  },
  {
    id: 5,
    art: String.raw`
████████╗░██████╗░██╗░░░░░░░██╗  ███████╗░█████╗░██████╗░███╗░░██╗
╚══██╔══╝██╔════╝░██║░░██╗░░██║  ██╔════╝██╔══██╗██╔══██╗████╗░██║
░░░██║░░░╚█████╗░░╚██╗████╗██╔╝  █████╗░░███████║██████╔╝██╔██╗██║
░░░██║░░░░╚═══██╗░░████╔═████║░  ██╔══╝░░██╔══██║██╔══██╗██║╚████║
░░░██║░░░██████╔╝░░╚██╔╝░╚██╔╝░  ███████╗██║░░██║██║░░██║██║░╚███║
░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚═╝░░  ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`,
    website: 'https://tap-shake-walk.web.app',
    appLink: 'https://play.google.com/store/apps/details?id=com.tswearn.app',
    description:
      'TSW (Tap, Travel, Shake, Walk) is a fitness app that converts activity points into TWS coins. These coins can be used in the shop tab to buy exciting products. The activity points can be increased by shaking the phone or even by tapping! Travel from one location to another also earns points. Users can challenge their friends and chat with them, all the while earning coins by tapping. Their is a leaderboard and winners receive fantastic rewards such as Amazon vouchers, phones, gadgets, and more!',
    role: 'Created the UI for the website, developed APIs for calulating and tracking the metrics & rewards.',
    tech: 'JavaScript, TypeScript, Express.js, Node.js, HTML/CSS, MongoDB, REST APIs',
  },
  {
    id: 6,
    art: String.raw`
░█████╗░██╗  ░█████╗░░█████╗░██████╗░███████╗
██╔══██╗██║  ██╔══██╗██╔══██╗██╔══██╗██╔════╝
███████║██║  ██║░░╚═╝███████║██████╔╝█████╗░░
██╔══██║██║  ██║░░██╗██╔══██║██╔══██╗██╔══╝░░
██║░░██║██║  ╚█████╔╝██║░░██║██║░░██║███████╗
╚═╝░░╚═╝╚═╝  ░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝
`,
    appLink: 'https://play.google.com/store/apps/details?id=com.doctor.aicare',
    description:
      'An app providing users instant access to the top certified doctors from around the world, 24/7, at the convenience of their home or workplace, with or without insurance coverage. Patients can get live video consultations with the best doctors in all areas of specialty, upload their medical results, and track their treatment plan and progress in a 100% secure and confidential way. Bookings can be made to the nearest doctors for appointments and consultation.',
    role: 'Created the admin panel, developed APIs for features like scheduling appointments, bookings, patient reports etc.',
    tech: 'JavaScript, TypeScript, Angular, Node.js, Express.js, HTML/CSS, SCSS, MongoDB, REST APIs',
  },
  {
    id: 7,
    art: String.raw`
░██████╗░██████╗░░█████╗░██████╗░░█████╗░███████╗███████╗░█████╗░██████╗░
██╔════╝░██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚════██║╚════██║██╔══██╗██╔══██╗
██║░░██╗░██████╔╝██║░░██║██████╦╝███████║░░███╔═╝░░███╔═╝███████║██████╔╝
██║░░╚██╗██╔══██╗██║░░██║██╔══██╗██╔══██║██╔══╝░░██╔══╝░░██╔══██║██╔══██╗
╚██████╔╝██║░░██║╚█████╔╝██████╦╝██║░░██║███████╗███████╗██║░░██║██║░░██║
░╚═════╝░╚═╝░░╚═╝░╚════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
`,
    website: 'https://www.grobazar.com',
    appLink: 'https://play.google.com/store/apps/details?id=com.grobazar.shopping',
    description:
      'A platform to fulfill the grocery needs of the people. Provides instant home delivery of groceries, dairy products, bakery items, cosmetics and more. Their mission is to focus on quantity, cost leadership and express delivery.',
    role: 'Worked on the backend to create APIs for features such as placing order, invoicing, delivery.',
    tech: 'JavaScript, TypeScript, Node.js, Express.js, MongoDB, REST APIs',
  },
];

export const personal: Project[] = [
  {
    id: 1,
    art: String.raw`
░█████╗░███╗░░██╗██████╗░██████╗░  ░░░░░░  ███╗░░██╗███████╗██████╗░░█████╗░██╗░░░░░
██╔══██╗████╗░██║██╔══██╗██╔══██╗  ░░░░░░  ████╗░██║██╔════╝██╔══██╗██╔══██╗██║░░░░░
███████║██╔██╗██║██████╔╝██████╔╝  █████╗  ██╔██╗██║█████╗░░██████╔╝███████║██║░░░░░
██╔══██║██║╚████║██╔═══╝░██╔══██╗  ╚════╝  ██║╚████║██╔══╝░░██╔═══╝░██╔══██║██║░░░░░
██║░░██║██║░╚███║██║░░░░░██║░░██║  ░░░░░░  ██║░╚███║███████╗██║░░░░░██║░░██║███████╗
╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝  ░░░░░░  ╚═╝░░╚══╝╚══════╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝
`,
    website: 'https://github.com/praveshpansari/anpr-nepal',
    description:
      'Automatic Number Plate Recognition of Nepali Number Plates This project aims to locate and recognize the characters from Nepali number plates on a vehicle. It reads symbols on license plates using optical character recognition. License plate localization on the image, character segmentation, character recognition of the segmented characters are the processes involved in a number plate recognition system. The system then uses Convolutional Neural Network (CNN) for predicting each segmented character. The CNN is trained on a 17,400 image dataset made using 30 Nepali characters generated from different computer fonts and handwritten characters. The color of the plate is recognized using k-means clustering and choosing the nearest centroid color. It is deployed using Flask.',
    tech: 'YOLOv3, OpenCV, TensorFlow, CNN, NumPy, SciPy, Matplotlib, Python, Flask',
  },
  {
    id: 2,
    art: String.raw`
░█████╗░███████╗██╗░░██╗  ███████╗░██████╗██╗░░██╗░█████╗░██████╗░
██╔══██╗██╔════╝╚██╗██╔╝  ██╔════╝██╔════╝██║░░██║██╔══██╗██╔══██╗
██║░░╚═╝█████╗░░░╚███╔╝░  █████╗░░╚█████╗░███████║██║░░██║██████╔╝
██║░░██╗██╔══╝░░░██╔██╗░  ██╔══╝░░░╚═══██╗██╔══██║██║░░██║██╔═══╝░
╚█████╔╝██║░░░░░██╔╝╚██╗  ███████╗██████╔╝██║░░██║╚█████╔╝██║░░░░░
░╚════╝░╚═╝░░░░░╚═╝░░╚═╝  ╚══════╝╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░
`,
    website: 'https://github.com/praveshpansari/CFXEshop/',
    description:
      'This is an ecommerce website with three types of users: Buyers, Traders and Admin. Each user has a different dashboard and different functions. Buyers can favorite products, add them to cart and buy them using PayPal, traders can sell and manage orders and admins can manage users, products and orders. After a successful order invoice is also emailed to the customer. There is also a management dashboard build using APEX oracle to display daily finance and delivery and monthly sales reports by making use of Oracle functions, procedures & triggers are used.',
    tech: 'XAMPP, MariaDB, PHP, jQuery, HTML/CSS/JS, Oracle Database, PL/SQL, Bootstrap',
  },
  {
    id: 3,
    art: String.raw`
██████╗░░█████╗░███╗░░██╗░██████╗░░░░░█████╗░██╗
██╔══██╗██╔══██╗████╗░██║██╔════╝░░░░██╔══██╗██║
██████╔╝██║░░██║██╔██╗██║██║░░██╗░░░░███████║██║
██╔═══╝░██║░░██║██║╚████║██║░░╚██╗░░░██╔══██║██║
██║░░░░░╚█████╔╝██║░╚███║╚██████╔╝██╗██║░░██║██║
╚═╝░░░░░░╚════╝░╚═╝░░╚══╝░╚═════╝░╚═╝╚═╝░░╚═╝╚═╝
`,
    website: 'https://github.com/praveshpansari/pong-ai',
    description:
      ' An old time classic Pong game made with a retro look. Supports 2 player with one keyboard (WASD & arrows). There is also an AI player which can be played against and the difficulty also can be adjusted. There game difficulty is automatically scaled, the longer the game goes on, the game becomes more difficult (ball velocity increases).',
    tech: 'Lua, Love2D',
  },
  {
    id: 4,
    art: String.raw`
████████╗░█████╗░██████╗░░█████╗░  ░█████╗░██████╗░██████╗░
╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗
░░░██║░░░██║░░██║██║░░██║██║░░██║  ███████║██████╔╝██████╔╝
░░░██║░░░██║░░██║██║░░██║██║░░██║  ██╔══██║██╔═══╝░██╔═══╝░
░░░██║░░░╚█████╔╝██████╔╝╚█████╔╝  ██║░░██║██║░░░░░██║░░░░░
░░░╚═╝░░░░╚════╝░╚═════╝░░╚════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░
`,
    website: 'https://github.com/praveshpansari/todo-app',
    description:
      'A todo android application that allows you to create tasks based on priority and date, mark them complete and delete them. The basic CRUD operations for TODO exists like adding, updating, listing them with Recycle view and deleting them. There is a login screen with validation and shared preferences. Users can view TODOs in 4 categories of today, tommorow, later & older. All views have landscape layout and all update operations have validations.',
    tech: 'Android Studio, JAVA, RoomDB',
  },
  {
    id: 5,
    art: String.raw`
██████╗░██████╗░░█████╗░░██╗░░░░░░░██╗░░░██╗░█████╗░
██╔══██╗██╔══██╗██╔══██╗░██║░░██╗░░██║░░░██║██╔══██╗
██║░░██║██████╔╝███████║░╚██╗████╗██╔╝░░░██║██║░░██║
██║░░██║██╔══██╗██╔══██║░░████╔═████║░░░░██║██║░░██║
██████╔╝██║░░██║██║░░██║░░╚██╔╝░╚██╔╝░██╗██║╚█████╔╝
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚═╝░╚════╝░
`,
    website: 'https://github.com/praveshpansari/Draw.io',
    description:
      'This is a simple programming environment, where commands can be used to manipulate shapes and lines on an artboard. The artboard is the place where all drawings and the cursor are rendered. The menu allows file operations like save and load, exit, and the about information.The command line runs single commands while the code editor can run multiple commands. The output box displays the log information and error information. The syntax button analyzes the code in the code editor and displays any errors it found in the log box. Four types of shapes can be drawn: rectangle, square, circle and triangle. A line can be drawn given a destination position. The shapes can be drawn outlined or filled and their color can be changed. Variables can be declared, a while loop is present and both parameterized and parameter less functions can be implemented.\nFirst the lexer tokenizes the input, the parser parses the command and the painter then updates the artboard.',
    tech: 'C#, Git, Visual Studio, .NET Framework',
  },
  {
    id: 6,
    art: String.raw`
███╗░░░███╗██╗░░░██╗░██████╗████████╗██╗░█████╗░  ░█████╗░░██████╗░███████╗███╗░░██╗░█████╗░██╗░░░██╗
████╗░████║╚██╗░██╔╝██╔════╝╚══██╔══╝██║██╔══██╗  ██╔══██╗██╔════╝░██╔════╝████╗░██║██╔══██╗╚██╗░██╔╝
██╔████╔██║░╚████╔╝░╚█████╗░░░░██║░░░██║██║░░╚═╝  ███████║██║░░██╗░█████╗░░██╔██╗██║██║░░╚═╝░╚████╔╝░
██║╚██╔╝██║░░╚██╔╝░░░╚═══██╗░░░██║░░░██║██║░░██╗  ██╔══██║██║░░╚██╗██╔══╝░░██║╚████║██║░░██╗░░╚██╔╝░░
██║░╚═╝░██║░░░██║░░░██████╔╝░░░██║░░░██║╚█████╔╝  ██║░░██║╚██████╔╝███████╗██║░╚███║╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝░░░╚═╝░░░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░  ╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░
`,
    website: 'https://github.com/praveshpansari/Web-Development-Agency',
    description:
      'Mystic is a creative agency aiming at providing digital services like digital marketing, website and app development, branding and designing. It is a static website developed using vanilla web technologies like HTML, CSS & JS. Includes particle.js for reverse snow effect on the hero section, an eye catching theme with parallax scroll and beautiful animations. There is a home page, about page, contact page, pricing page and a login page.',
    tech: 'HTML, CSS, JavaScript, Git',
  },

  {
    id: 7,
    art: String.raw`
░█████╗░░█████╗░███╗░░██╗██╗░░░██╗███████╗██████╗░████████╗███████╗██████╗░
██╔══██╗██╔══██╗████╗░██║██║░░░██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
██║░░╚═╝██║░░██║██╔██╗██║╚██╗░██╔╝█████╗░░██████╔╝░░░██║░░░█████╗░░██████╔╝
██║░░██╗██║░░██║██║╚████║░╚████╔╝░██╔══╝░░██╔══██╗░░░██║░░░██╔══╝░░██╔══██╗
╚█████╔╝╚█████╔╝██║░╚███║░░╚██╔╝░░███████╗██║░░██║░░░██║░░░███████╗██║░░██║
░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
`,
    website: 'https://github.com/praveshpansari/converter',
    description:
      ' A convertor program consisiting of several metrics and currency conversion units. Metric conversions like acres to hectares, mph to kmh, yards to meters, celsius to farenheit etc are present. Currency conversions can be dont from GBP to any currency. The target currency can be loaded from a file which has the currency name, symbol and the conversion rate. The sample file provided consists of currencis like USD, AUD, Euro, THB etc. One can also perform reverse calculations using the reverse conversion option. The metric conversions are reversed and all the currencies now convert to GBP.',
    tech: 'Eclipse IDE, Java',
  },
];

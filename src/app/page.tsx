import styles from './page.module.css';
import Terminal from '@/components/terminal/terminal';

export default function Home() {
  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0D9C3K7R6D"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-0D9C3K7R6D');
    </script>
    <main className={styles.main}>
      <Terminal />
    </main>
      </>
  );
}

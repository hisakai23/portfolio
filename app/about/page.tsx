import Header from '../components/Header';
import styles from './page.module.css'; // ← ここ追加！

export default function AboutPage() {
  return (
      <main className={styles.main}>
        <p>私はゆうきです。Next.jsでポートフォリオを作っています。</p>
      </main>
  );
}

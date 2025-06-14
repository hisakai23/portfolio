// app/projects/page.tsx
import styles from './page.module.css';

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>制作実績</h1>


      <section className={styles.projectCard}>
        <h2 className={styles.heading2}>ToDoアプリ</h2>
        <p>React と TypeScript を使用したタスク管理アプリです。ローカルストレージに対応し、タスクの追加・削除・フィルタリングが可能です。</p>
        <ul>
          <li>技術：React / TypeScript / CSS Modules</li>
          <li><a href="https://github.com/ユーザー名/todo-app" target="_blank">GitHubリンク</a></li>
          <li><a href="https://todo-app.vercel.app/" target="_blank">デプロイURL</a></li>
        </ul>
      </section>

      <section className={styles.projectCard}>
        <h2 className={styles.heading2}>このポートフォリオ</h2>
        <p>Next.js App Routerを使って作成した自己紹介ページです。CSS Modules、GitHub連携、Vercelデプロイなどを実践。</p>
        <ul>
          <li>技術：Next.js / TypeScript / CSS Modules / Vercel</li>
          <li><a href="https://github.com/hisakai23/portfolio" target="_blank">GitHubリンク</a></li>
        </ul>
      </section>
    </main>
  );
}

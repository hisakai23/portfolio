// app/about/page.tsx
//import Link from 'next/link';
import Header from '../components/Header'; // ← ヘッダーをインポート（階層に注意！）

export default function AboutPage() {
  return (
    <>
      <main style={{ padding: 20 }}>
        <p>私はゆうきです。Next.jsでポートフォリオを作っています。</p>
      </main>
    </>
  );
}

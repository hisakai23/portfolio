import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>ゆうきのポートフォリオ</h1>
      <p>Next.jsで作成したポートフォリオです。</p>
      
      <br />

      <ul>
        <li><Link href="/about">自己紹介</Link></li>
        <li><Link href="/skills">スキル</Link></li>
        <li><Link href="/projects">制作物</Link></li>
      </ul>
    </main>
  );
}

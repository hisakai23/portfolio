// app/components/Header.tsx
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      padding: '10px 20px',
      background: '#f5f5f5',
      borderBottom: '1px solid #ddd',
      marginBottom: '20px'
    }}>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}

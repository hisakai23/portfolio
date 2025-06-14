export default function ProjectsPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>My Projects</h1>

      <section style={{ marginTop: 30 }}>
        <h2>📝 ToDoリストアプリ</h2>
        <p>
          Next.js と React の学習の一環として、シンプルな ToDo アプリを作成しました。
          タスクの追加、削除、完了処理、優先度や日付の設定などの基本機能を実装しています。
        </p>

        <h3>📌 使用技術</h3>
        <ul>
          <li>Next.js (App Router)</li>
          <li>React（useState フック）</li>
          <li>TypeScript</li>
          <li>CSS（インラインスタイル）</li>
        </ul>

        <h3>💡 工夫した点</h3>
        <ul>
          <li>完了したタスクに取り消し線を表示</li>
          <li>優先度をドロップダウンで設定できる</li>
          <li>日付付きでタスクを管理できる</li>
        </ul>

        <h3>🖥️ スクリーンショット（任意）</h3>
        <p>※ スクリーンショットがあれば、後で画像を貼り付けられます。</p>
      </section>
    </main>
  );
}

import './App.css'

function App() {


  return (
    <div className="site">
      <header className="header page-width">
        <a className="logo" href="#top" aria-label="MYAPP トップへ">MYAPP</a>
        <nav aria-label="メインメニュー">

          <a href={`${import.meta.env.BASE_URL}guide.html`}>使い方</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-text">
            <h1>アプリを探す時間を、<br /><span>もっと短く。</span></h1>
            <p>増え続けるアプリを、カテゴリーやフォルダで自由に整理。<br className="desktop-break" />必要なアプリをすばやく見つけられます。通知やバックアップなど、便利な機能も利用できます。</p>
            <a className="primary-button" href="#download">MYAPPを使ってみる</a>
          </div>
          <div className="hero-image">
            <img src={`${import.meta.env.BASE_URL}myapp-screen.png`} alt="MYAPPの実際のアプリ画面" />
          </div>
        </section>

        <section className="extra-section page-width" id="plugins">
          <details className="extra-panel">
            <summary>プラグイン <span>＋</span></summary>
            <div className="extra-content">
              <p>MYAPPに便利な機能を追加して、日常の操作をもっとシンプルに。</p>
              <p>必要な機能を少しずつ充実させていきます。</p>
              <h3>現在の追加機能</h3>
              <ul>
                <li>通知機能：予定や大切な用事を忘れないための機能</li>
                <li>バックアップ機能：設定やアプリの整理情報を保存・復元</li>
              </ul>
              <p>便利な機能を随時追加予定！</p>
            </div>
          </details>

          <details className="extra-panel" id="custom">
            <summary>オーダーメイド <span>＋</span></summary>
            <div className="extra-content">
              <p>「こんな機能が欲しい」「こんなアプリがあったら便利」など、アイデアを募集しています。</p>
              <p>ご提案を参考に、MYAPPの追加機能や新しいアプリの開発を検討します。</p>
              <p>制作の可否や条件は、ご相談内容に応じて個別に検討します。</p>
              <a href="mailto:myapp.team2026@gmail.com?subject=MYAPP%20オーダーメイド相談">メールで相談する</a>
            </div>
          </details>

          <details className="extra-panel" id="contact">
            <summary>お問い合わせ <span>＋</span></summary>
            <div className="extra-content">
              <p>不具合報告、改善提案、機能のご要望、その他のお問い合わせはこちらから。</p>
              <a href="mailto:myapp.team2026@gmail.com">myapp.team2026@gmail.com</a>
            </div>
          </details>
        </section>
        <section className="download page-width" id="download">
          <h2>あなたのスマホを、もっと使いやすく。</h2>
          <p>MYAPPはAndroid向けのアプリ整理ツールです。</p>
          <a className="primary-button" href="https://github.com/doramar75-sys/myapp-website/releases/latest/download/app-release.apk">MYAPPをダウンロード（Android）</a>
        </section>
      </main>

      <footer>© MYAPP</footer>
    </div>
  )
}

export default App


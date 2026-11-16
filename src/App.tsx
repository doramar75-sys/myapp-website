
import './App.css'

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="logo">MYAPP</div>
       <nav>
  <a href="#features">機能紹介</a>
  <a href={`${import.meta.env.BASE_URL}guide.html`}>
    使い方ガイド
  </a>
  <a href="#download">ダウンロード</a>
</nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <span className="eyebrow">Android アプリ整理ツール</span>
            <h1>
              アプリを探す時間を、
              <br />
              <span>もっと短く。</span>
            </h1>
            <p>
              支払い、仕事、ゲーム、写真。
              <br />
              増え続けるアプリを、自分好みに整理。
              <br />
              必要なアプリに、すばやくアクセス。
            </p>
            <a className="primary-button" href="#download">
              MYAPPを使ってみる
            </a>
          </div>

          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}myapp-screen.png`}
              alt="MYAPPの実際のアプリ画面"
            />
          </div>
        </section>

        <section className="features" id="features">
          <h2>アプリの整理を、もっと自由に。</h2>
          <div className="feature-grid">
            <article>
              <div className="feature-icon">▦</div>
              <h3>カテゴリー整理</h3>
              <p>支払いや仕事など、用途に合わせて自由に分類。</p>
            </article>
            <article>
              <div className="feature-icon">▣</div>
              <h3>フォルダ管理</h3>
              <p>関連するアプリをまとめて、すっきり収納。</p>
            </article>
            <article>
              <div className="feature-icon">⌕</div>
              <h3>アプリ検索</h3>
              <p>たくさんのアプリの中から、使いたいものを検索。</p>
            </article>
            <article>
              <div className="feature-icon">⌂</div>
              <h3>ホームとしても使える</h3>
              <p>通常のアプリとしても、ホームアプリとしても利用可能。</p>
            </article>
          </div>
        </section>

        <section className="download" id="download">
          <h2>あなたのスマホを、もっと使いやすく。</h2>
          <p>MYAPPはAndroid向けのアプリ整理ツールです。</p>
          <span className="coming-soon">
            ダウンロード案内は準備中
          </span>
        </section>
      </main>

      <footer>© MYAPP</footer>
    </div>
  )
}

export default App

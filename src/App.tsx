import { useState } from 'react'
import './App.css'

const features = [
  { icon: '▦', title: 'カテゴリー整理', description: 'アプリを用途ごとに分類して、見やすく整理できます。' },
  { icon: '▣', title: 'フォルダ管理', description: '関連するアプリをまとめて、すっきり収納できます。' },
  { icon: '⌕', title: 'アプリ検索', description: 'たくさんのアプリから、使いたいものをすばやく検索。' },
  { icon: '⌂', title: 'ホームとして使える', description: '通常のアプリとしても、ホームアプリとしても利用可能。' },
]

function App() {
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <div className="site">
      <header className="header page-width">
        <a className="logo" href="#top" aria-label="MYAPP トップへ">MYAPP</a>
        <nav aria-label="メインメニュー">
          <a href="#features" onClick={() => setFeaturesOpen(true)}>機能紹介</a>
          <a href={`${import.meta.env.BASE_URL}guide.html`}>使い方ガイド</a>
          <a href="#download">ダウンロード</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-text">
            <h1>アプリを探す時間を、<br /><span>もっと短く。</span></h1>
            <p>増え続けるアプリを、カテゴリーやフォルダで自由に整理。<br className="desktop-break" />必要なアプリを、すばやく見つけられます。</p>
            <a className="primary-button" href="#download">MYAPPを使ってみる</a>
          </div>
          <div className="hero-image">
            <img src={`${import.meta.env.BASE_URL}myapp-screen.png`} alt="MYAPPの実際のアプリ画面" />
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="page-width">
            <button
              className="section-toggle"
              type="button"
              aria-expanded={featuresOpen}
              aria-controls="features-content"
              onClick={() => setFeaturesOpen(!featuresOpen)}
            >
              <span>主な機能 <small>{featuresOpen ? '閉じる' : 'タップして見る'}</small></span>
              <span className="toggle-symbol" aria-hidden="true">{featuresOpen ? '−' : '＋'}</span>
            </button>
            {featuresOpen && (
              <div className="feature-grid" id="features-content">
                {features.map((feature) => (
                  <article key={feature.title}>
                    <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
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

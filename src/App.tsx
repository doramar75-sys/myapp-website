cd "$env:USERPROFILE\Downloads\myapp-website-main\myapp-website-main"

$path = "src\App.tsx"
Copy-Item $path "$path.before-update.bak" -Force

@'
import { useState } from 'react'
import './App.css'

const apkUrl = 'https://github.com/doramar75-sys/myapp-website/releases/latest/download/app-release.apk'
const email = 'myapp.team2026@gmail.com'

function App() {
  const [openSection, setOpenSection] = useState('')

  const toggle = (name: string) => {
    setOpenSection(openSection === name ? '' : name)
  }

  return (
    <div className="site">
      <header className="header page-width">
        <a className="logo" href="#top" aria-label="MYAPP トップへ">MYAPP</a>
        <nav aria-label="メインメニュー">
          <a href={apkUrl}>ダウンロード</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div className="hero-text">
            <h1>アプリを探す時間を、<br /><span>もっと短く。</span></h1>
            <p>
              増え続けるアプリを、カテゴリーやフォルダで自由に整理。
              <br className="desktop-break" />
              必要なアプリを、すばやく見つけられます。
            </p>
            <p>
              暮らしを便利にするプラグインを随時リリース。
              <br className="desktop-break" />
              オーダーメイドによる新しい機能の追加にも取り組んでいきます。
            </p>
            <a className="primary-button" href={apkUrl}>
              MYAPPを使ってみる
            </a>
            <p>
              現在はAndroid向けテスト版を公開中です。
              ダウンロード後、必要なインストール権限を許可してご利用ください。
            </p>
          </div>
          <div className="hero-image">
            <img
              src={`${import.meta.env.BASE_URL}myapp-screen.png`}
              alt="MYAPPの実際のアプリ画面"
            />
          </div>
        </section>

        <section className="features-section" id="plugins">
          <div className="page-width">
            <button
              className="section-toggle"
              type="button"
              aria-expanded={openSection === 'plugins'}
              onClick={() => toggle('plugins')}
            >
              <span>プラグイン <small>タップして見る</small></span>
              <span className="toggle-symbol" aria-hidden="true">
                {openSection === 'plugins' ? '−' : '＋'}
              </span>
            </button>
            {openSection === 'plugins' && (
              <div className="feature-grid">
                <article>
                  <h3>便利な機能を順次追加</h3>
                  <p>日常生活を便利にするプラグインを随時リリースしていきます。</p>
                </article>
                <article>
                  <h3>必要な機能を選択</h3>
                  <p>MYAPPのカテゴリータブ最後尾にある「追加機能」から利用できます。</p>
                </article>
              </div>
            )}
          </div>
        </section>

        <section className="features-section" id="custom">
          <div className="page-width">
            <button
              className="section-toggle"
              type="button"
              aria-expanded={openSection === 'custom'}
              onClick={() => toggle('custom')}
            >
              <span>オーダーメイド <small>タップして見る</small></span>
              <span className="toggle-symbol" aria-hidden="true">
                {openSection === 'custom' ? '−' : '＋'}
              </span>
            </button>
            {openSection === 'custom' && (
              <div className="feature-grid">
                <article>
                  <h3>あなたのアイデアを募集</h3>
                  <p>
                    「こんな機能が欲しい」というご要望を受け付けています。
                    実現可能なものから開発を検討します。
                  </p>
                  <a href={`mailto:${email}?subject=${encodeURIComponent('MYAPP オーダーメイド相談')}`}>
                    メールで相談する
                  </a>
                </article>
              </div>
            )}
          </div>
        </section>

        <section className="features-section" id="contact">
          <div className="page-width">
            <button
              className="section-toggle"
              type="button"
              aria-expanded={openSection === 'contact'}
              onClick={() => toggle('contact')}
            >
              <span>お問い合わせ <small>タップして見る</small></span>
              <span className="toggle-symbol" aria-hidden="true">
                {openSection === 'contact' ? '−' : '＋'}
              </span>
            </button>
            {openSection === 'contact' && (
              <div className="feature-grid">
                <article>
                  <h3>ご意見・不具合報告</h3>
                  <p>ご質問や不具合の報告はこちらからお送りください。</p>
                  <a href={`mailto:${email}?subject=${encodeURIComponent('MYAPP お問い合わせ')}`}>
                    {email}
                  </a>
                </article>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>© MYAPP</footer>
    </div>
  )
}

export default App




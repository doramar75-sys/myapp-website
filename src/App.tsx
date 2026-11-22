import './App.css'

const base = import.meta.env.BASE_URL
const release = 'https://github.com/doramar75-sys/myapp-website/releases/download/test-2026-11-22/'
const products = [
  { id: 'myapp', name: 'MYAPP', icon: 'myapp-icon.png', headline: '使いたいアプリが、すぐ見つかる。', features: ['カテゴリー・フォルダ整理', 'アプリ検索・Google検索', '生活メモ・予定'], apk: 'app-release.apk' },
  { id: 'myfiles', name: 'MYFILES', icon: 'myfiles-icon.png', headline: '写真も書類も、簡単に整理整頓。', features: ['写真・書類の分類・検索', 'スキャン・PDF / JPEG保存', 'Google Drive連携'], apk: 'myfiles-release.apk' },
]

function FilesPreview() {
  return <div className="mf-demo" aria-hidden="true">
    <div className="demo-status"><span>12:00</span><span>● ▰</span></div>
    <div className="demo-title">MYFILES <span>MYAPP</span></div>
    <div className="demo-actions"><span>取込</span><span>スキャン</span><span>Drive</span></div>
    <div className="demo-search">⌕　登録済みファイルを検索</div>
    <div className="demo-tabs"><span>収納庫</span><span>書類</span><span>写真</span><span>＋</span></div>
    <div className="demo-label">収納庫 <span>6件</span></div>
    <div className="demo-grid">
      <div className="demo-item"><div className="demo-photo scenery"><i /></div><small>風景.jpg</small></div>
      <div className="demo-item"><div className="demo-paper"><b>書類</b><i/><i/><i/><i/></div><small>書類.pdf</small></div>
      <div className="demo-item"><div className="demo-paper demo-blue"><b>メモ</b><i/><i/><i/></div><small>メモ.pdf</small></div>
      <div className="demo-item"><div className="demo-photo sunset"><i /></div><small>写真.jpg</small></div>
      <div className="demo-item"><div className="demo-paper"><b>資料</b><i/><i/><i/><i/></div><small>資料.pdf</small></div>
      <div className="demo-item"><div className="demo-folder">▰</div><small>フォルダ</small></div>
    </div>
    <div className="demo-nav">◀　　　 ●　　　 ■</div>
  </div>
}

function App() {
  return <div className="brand-site" id="top">
    <header className="site-header wrap">
      <a className="wordmark" href="#top"><img src={`${base}myapp-icon.png`} alt="" />MYAPP</a>
      <nav aria-label="メインメニュー"><a href="#products">製品紹介</a><a href={`${base}usage.html`}>使い方ガイド</a><a href="#contact">お問い合わせ</a></nav>
    </header>
    <main>
      <section className="hero-v4 wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span/> Android向け · 初期テスト版</p>
          <h1 id="hero-title"><span>スマートフォンを、</span><span className="accent">もっと便利に。</span></h1>
          <p className="hero-lead">アプリも、写真も、書類も。<br/>必要な情報へ、より早く、よりシンプルに。</p>
          <a className="blue-button" href="#products">ダウンロード <span aria-hidden="true">↓</span></a>
          <p className="quiet hero-note">Android対応　·　当面無料</p>
        </div>
        <div className="hero-art" aria-label="MYAPPの実際の画面とMYFILESの表示イメージ">
          <div className="orbit" aria-hidden="true"/>
          <div className="phone phone-back"><FilesPreview/></div>
          <div className="phone phone-front"><img src={`${base}myapp-screen.png`} alt="MYAPPのアプリ画面" /></div>
          <span className="art-label">MYAPP / MYFILES（MYFILESは表示イメージ）</span>
        </div>
      </section>
      <section className="wrap products-v4" id="products" aria-label="製品紹介・ダウンロード">
        <div className="section-line"><h2>2つのアプリで、もっと快適に。</h2><a href={`${base}usage.html`}>使い方ガイド →</a></div>
        <div className="product-grid">
          {products.map(product => <article className="glass product-card" id={product.id} key={product.id}>
            <div className="product-title"><img src={`${base}${product.icon}`} alt=""/><div><h3>{product.name}</h3><p>{product.headline}</p></div></div>
            <ul className="pr-list">{product.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
            <a className="blue-button product-download" href={`${release}${product.apk}`}>{product.name}をダウンロード <span aria-hidden="true">↓</span></a>
            <div className="card-footer"><span>Android APK · テスト版</span><a href={`${base}usage.html#${product.id}`}>使い方 →</a></div>
          </article>)}
        </div>
        <p className="quiet release-note">それぞれ単独でも、連携しても使えます。テスト版のため、大切なデータは別途バックアップしてください。</p>
      </section>
      <section className="wrap extra-v4" aria-label="その他のご案内">
        <details className="glass"><summary><span>プラグイン</span><span className="plus">＋</span></summary><p>必要な機能を、少しずつ追加していきます。</p></details>
        <details className="glass"><summary><span>オーダーメイド</span><span className="plus">＋</span></summary><p>日常で感じる不便や、欲しいアプリのアイデアを募集しています。制作の可否や条件は個別に検討します。</p><a href="mailto:myapp.team2026@gmail.com?subject=MYAPP%20オーダーメイド相談">メールで相談する →</a></details>
        <details className="glass" id="contact"><summary><span>お問い合わせ</span><span className="plus">＋</span></summary><p>不具合報告・改善提案・ご質問はこちらへ。</p><a href="mailto:myapp.team2026@gmail.com">myapp.team2026@gmail.com</a></details>
      </section>
      <section className="wrap mission"><h2>世の中から、<span className="accent">めんどくさいをなくそう。</span></h2><p>日々の暮らしを、もっとシンプルに。</p></section>
    </main>
    <footer className="wrap site-footer"><span>© MYAPP</span><a href={`${base}usage.html`}>使い方・ご利用前の注意事項</a></footer>
  </div>
}

export default App

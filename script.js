/* =========================================================
   網站內容：改文字、加文件夾都在這裡
   - 每一列（row）是一層文件夾，第一個是主文件夾，後面最多兩個是同一層的小標籤
   - color 對應 style.css 裡的 --f-xxx 顏色：brown / blue / yellow / sage / red / navy
   - extra 可放特殊內容：'features' | 'flow' | 'team'
   - group 可指定麵包屑與登記單上的分類（預設是同一列的主文件夾）
   ========================================================= */

// TODO：DiuLa! 的網址；還沒有的話留空，按鈕會顯示「即將上線」
const DIULA_URL = 'https://diula-py.github.io/diula-outter/#/';

// 組員：照片放進 images/team/，再把檔名填到 photo，例如 photo: 'images/team/卓筱婷.jpg'
const TEAM = [
  { role: 'PM', name: '卓筱婷', photo: '' },
  { role: 'MARKETING', name: '孫于晴', photo: '' },
  { role: 'MARKETING', name: '繆宜君', photo: '' },
  { role: 'VISUAL DESIGNER', name: '張祖寧', photo: '' },
  { role: 'DEVELOPER', name: '王惟賢', photo: '' },
  { role: 'DEVELOPER', name: '謝旻', photo: '' },
];

// 使用流程（TODO：依實際流程調整）
const FLOW = [
  ['登錄', '撿到東西的人，依證件類或非證件類登錄拾獲物。'],
  ['整理', 'DiuLa! 把各平台的失物資訊整理在一起。'],
  ['尋找', '失主跨平台搜尋，或從 Threads 貼文中找到自己的東西。'],
  ['領回', '確認是自己的物品後，聯繫拾獲者領回。'],
];

// 功能頁的分組，跟 App 首頁一樣
const FEATURE_GROUPS = [
  { title: '尋找遺失物', ids: ['cross', 'threads'] },
  { title: '登錄拾獲物', ids: ['idcard', 'item'] },
];

// 首頁「DiuLa! 功能」的重點功能：<em> 包住的字會放大變紅；<wbr> 是可以換行的位置；desc 是選填的一行說明（建議 20 字內）
const POINTS = [
  { icon: 'multi', title: '一鍵查詢<em>四大</em><wbr>遺失物平台', desc: '' },
  { icon: 'web', title: '免下載<wbr>隨開隨用', desc: '' },
  { icon: 'cards', title: '圖文卡片<wbr>一目瞭然', desc: '' },
  { icon: 'ai', title: '<em>AI</em>遺失物<wbr>自動分類', desc: '' },
  { icon: 'bell', title: '<em>5</em>日持續追蹤<wbr>與通知', desc: '' },
  { icon: 'steps', title: '<em>3</em>步快速通報', desc: '' },
  { icon: 'mask', title: '證件個資<wbr>自動遮蔽', desc: '' },
  { icon: 'share', title: '官方代發<wbr>社群擴散', desc: '' },
  { icon: 'postsearch', title: '社群貼文<wbr>精準搜', desc: '' },
];

// 功能畫面：mock: 'home' 是用網頁重現的 App 首頁；
// 其他畫面把截圖放進 images/screens/，再填到 src，例如 src: 'images/screens/ai.png'
const SCREENS = [
  { src: '', caption: 'AI 自動分類' },
  { mock: 'home', caption: 'App 首頁', main: true },
  { src: '', caption: '圖文卡片' },
];

// App 使用的圖示
const ICONS = {
  multi: '<circle cx="10" cy="10" r="6.5"/><path d="m15 15 5.5 5.5"/><path d="M7.5 7.5h1.6v1.6H7.5zM10.9 7.5h1.6v1.6h-1.6zM7.5 10.9h1.6v1.6H7.5zM10.9 10.9h1.6v1.6h-1.6z"/>',
  web: '<path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12z"/>',
  cards: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m3 14 5-4 4 3 3-2 6 4.5"/><circle cx="15.5" cy="8.5" r="1.5"/>',
  ai: '<path d="M11 3.5l1.9 5 5 1.9-5 1.9-1.9 5-1.9-5-5-1.9 5-1.9z"/><path d="M18.5 14.5l.9 2.3 2.3.9-2.3.9-.9 2.3-.9-2.3-2.3-.9 2.3-.9z"/>',
  bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.8 1.8H4.2z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
  steps: '<path d="M3 20h6v-5.5h6V9h6"/><path d="M16.5 3.5H21V8"/><path d="m21 3.5-5 5"/>',
  mask: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8" cy="10.5" r="2"/><path d="M5.3 15.8c.6-1.6 4.8-1.6 5.4 0"/><path d="M14 10h4.5M14 14h4.5" stroke-width="3.4"/>',
  share: '<circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="5.5" r="2.6"/><circle cx="18" cy="18.5" r="2.6"/><path d="m8.3 10.8 7.4-4M8.3 13.2l7.4 4"/>',
  postsearch: '<path d="M4 4.5h16v11H9.5L4 20z"/><circle cx="11.5" cy="9.5" r="2.6"/><path d="m13.5 11.5 2.2 2.2"/>',
  home: '<path d="M3 11 12 3l9 8v10h-6.5v-6h-5v6H3z" fill="currentColor"/>',
  user: '<circle cx="12" cy="8" r="4.5" fill="currentColor"/><path d="M3 21.5a9 7.5 0 0 1 18 0z" fill="currentColor"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
  threads: '<path d="M15.5 12.2c0-2.3-1.4-3.6-3.3-3.6-1.9 0-3.2 1.3-3.2 3.1 0 1.7 1.2 2.9 2.9 2.9 2.4 0 3.6-1.9 3.6-4.6 0-4-2.6-6-5.8-6C6.3 4 4 6.9 4 12s2.4 8 6.2 8c2.6 0 4.2-.9 5.3-2.3"/><path d="M15.5 12.2c0 3 1.1 4.1 2.3 4.1 1.3 0 2.2-1.4 2.2-4.3"/>',
  idcard: '<rect x="2.5" y="5" width="19" height="14" rx="2.5" fill="currentColor"/><circle cx="8.5" cy="10.5" r="2" fill="#f3f0e1" stroke="none"/><path d="M5.5 16c.6-1.8 5.4-1.8 6 0" stroke="#f3f0e1"/><path d="M14 10h4.5M14 14h3" stroke="#f3f0e1"/>',
  item: '<rect x="5" y="4" width="14" height="17" rx="2.5" fill="currentColor"/><rect x="9" y="2.5" width="6" height="3.5" rx="1" fill="currentColor"/><path d="M10 11a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.4" stroke="#f3f0e1"/><circle cx="12" cy="17" r=".6" fill="#f3f0e1" stroke="#f3f0e1"/>',
};

const ROWS = [
  [
    {
      id: 'intro', code: '01A', zh: 'DiuLa! 介紹', en: 'About DiuLa!', color: 'brown',
      note: '我們是誰、為什麼做 DiuLa!。',
      side: '本檔案記錄 DiuLa! 的起點，內容持續更新中。',
      body: [
        // TODO：換成正式介紹
        'DiuLa! 是一個跨平台的失物招領系統。我們想解決「東西掉了找不回來」這件小事。',
        '失物資訊常常散落在不同的社群和平台上。DiuLa! 把它們整理在一起，讓撿到東西的人和掉東西的人更容易找到彼此。',
      ],
      excerpt: [
        '每一件失物背後都有一段故事：一把陪了很久的鑰匙、一張剛辦好的學生證、一個重要的人送的小東西。',
        '我們想做的不只是一張登記表，而是讓這些物品有機會回到主人身邊的一條路。',
      ],
    },
    { id: 'mission', code: '01B', zh: '使命', en: 'Mission', color: 'yellow',
      note: '我們為什麼存在。',
      body: ['縮短物品從遺失到尋回的時間，讓失物招領變得簡單、透明。'] },
    { id: 'vision', code: '01C', zh: '願景', en: 'Vision', color: 'blue',
      note: '我們想走到哪裡。',
      body: ['成為大家遺失物品時，第一個想到的地方。'] },
  ],
  [
    { id: 'features', code: '02A', zh: 'DiuLa! 功能', en: '一次看懂<wbr> 9 大重點功能', color: 'blue',
      titleHTML: '<img src="images/logo.png" alt="DiuLa!"><span>功能</span>',
      wide: true,
      note: '尋找遺失物、登錄拾獲物，一個地方搞定。',
      body: [],
      extra: 'features' },
    { id: 'cross', code: '02B', zh: '跨平台尋找', en: 'Cross-platform', color: 'red', icon: 'search',
      title: '跨平台尋找遺失物',
      note: '功能檔案：一次搜尋多個平台。',
      body: ['不用在各個社群之間來回翻找。DiuLa! 整合多個平台的失物資訊，一次搜尋就能看到。'] },
    { id: 'threads', code: '02C', zh: 'Threads 尋找', en: 'Threads', color: 'yellow', icon: 'threads',
      title: 'Threads 尋找遺失物',
      note: '功能檔案：從 Threads 貼文找失物。',
      body: ['很多人會在 Threads 上發文協尋失物。DiuLa! 幫你從這些貼文中，找出可能是你的東西。'] },
  ],
  [
    { id: 'idcard', code: '03A', zh: '證件類登錄', en: 'ID items', color: 'yellow', icon: 'idcard', group: 'features',
      title: '證件類遺失物登錄',
      note: '功能檔案：撿到證件時登錄。',
      body: ['撿到學生證、身分證、健保卡等證件時，可以在這裡登錄，讓失主更快找到。'] },
    { id: 'item', code: '03B', zh: '非證件類登錄', en: 'Other items', color: 'sage', icon: 'item', group: 'features',
      title: '非證件類遺失物登錄',
      note: '功能檔案：撿到其他物品時登錄。',
      body: ['撿到錢包、鑰匙、耳機、雨傘等物品時，拍照並填寫特徵與拾獲地點，完成登錄。'] },
    { id: 'flow', code: '03C', zh: '使用流程', en: 'How it works', color: 'brown', group: 'features',
      note: '從登錄到領回的四個步驟。',
      body: ['從登錄到領回，只需要四個步驟。'],
      extra: 'flow' },
  ],
  [
    { id: 'team', code: '04A', zh: '組員介紹', en: 'Our team', color: 'navy',
      note: '一起把 DiuLa! 做出來的組員們。',
      side: 'DiuLa! 團隊名冊。',
      body: ['每個人負責不同的部分，一起把 DiuLa! 做出來。'],
      extra: 'team' },
  ],
];

// 沒填的欄位用這些預設內容
const DEFAULTS = {
  date: '2026',
  side: '檔案內容整理中，部分細節尚待補充。',
  excerpt: [
    '這份檔案仍在整理中，更多細節、截圖與使用案例會陸續補上。',
    '如果你對這個部分有想法，歡迎透過頁面最下方的聯絡方式告訴我們。',
  ],
};

/* ========================================================= */

const FILES = {};
ROWS.forEach((row) => {
  row.forEach((f, j) => {
    FILES[f.id] = { ...DEFAULTS, ...f, groupId: f.group || (j === 0 ? null : row[0].id) };
  });
});
Object.values(FILES).forEach((f) => { f.group = f.groupId ? FILES[f.groupId] : null; });
const MAIN_FILES = ROWS.map((row) => FILES[row[0].id]);

// 淺色文件夾用深色字
const LIGHT_COLORS = ['blue', 'yellow', 'sage', 'paper'];
const colorVars = (f) =>
  `--c: var(--f-${f.color}); --ink: var(${LIGHT_COLORS.includes(f.color) ? '--ink-dark' : '--ink-light'});`;

// 檔案頁的附頁與登記單顏色，避免跟文件夾同色
const paperVars = (f) =>
  `--sheet2: var(--f-${f.color === 'blue' ? 'sage' : 'blue'}); --slip: var(--f-${f.color === 'yellow' ? 'paper' : 'yellow'});`;

const PHOTO_ICON = '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8.5 6l1.5-2h4l1.5 2"/></svg>';

const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const tabHTML = (f, kind) => `
  <button class="tab tab-${kind}" style="${colorVars(f)}" data-open="${f.id}" aria-label="打開檔案：${f.zh}">
    <svg class="tab-shape" aria-hidden="true"><path class="fill"/><path class="edge"/></svg>
    <span class="tab-label">${f.zh}</span>
  </button>`;

/* ----- 文件夾總覽 ----- */
const cabinet = document.getElementById('cabinet');

cabinet.innerHTML = ROWS.map((row, i) => {
  const [main, ...subs] = row.map((f) => FILES[f.id]);
  return `
    <div class="folder" style="${colorVars(main)} --i: ${i};" data-id="${main.id}">
      <div class="tabs">
        ${tabHTML(main, 'main')}
        ${subs.map((f) => tabHTML(f, 'sub')).join('')}
      </div>
      <div class="folder-body" data-open="${main.id}">
        <div class="preview">
          <span>${main.code}</span>
          <p class="preview-note">${main.note}</p>
          <span class="preview-date">${main.date}<span class="preview-open">打開檔案 →</span></span>
        </div>
      </div>
    </div>`;
}).join('');

// 依標籤實際大小畫出外形：一條連續的 S 形曲線，
// 兩端落在文件夾上框線的正中間，讓線條無縫接上
function drawTab(tab) {
  const css = getComputedStyle(tab);
  const stroke = parseFloat(css.getPropertyValue('--stroke')) || 1.5;
  const w = tab.clientWidth;
  const h = tab.clientHeight;
  const s = Math.min(parseFloat(css.getPropertyValue('--slope')) || 36, w / 3);
  const top = stroke / 2;
  const base = h - stroke / 2;
  const curve =
    `M0 ${base}C${s * 0.55} ${base} ${s * 0.45} ${top} ${s} ${top}` +
    `H${w - s}C${w - s * 0.45} ${top} ${w - s * 0.55} ${base} ${w} ${base}`;

  const svg = tab.querySelector('.tab-shape');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.querySelector('.fill').setAttribute('d', `${curve}V${h}H0Z`);
  svg.querySelector('.edge').setAttribute('d', curve);
}

const tabObserver = new ResizeObserver((entries) => entries.forEach((e) => drawTab(e.target)));
cabinet.querySelectorAll('.tab').forEach((tab) => tabObserver.observe(tab));

// 滑鼠移到主標籤或色帶上時展開預覽
const setPeek = (folder) => {
  cabinet.querySelectorAll('.folder.is-peek').forEach((el) => {
    if (el !== folder) el.classList.remove('is-peek');
  });
  folder?.classList.add('is-peek');
};

cabinet.addEventListener('pointerover', (e) => {
  if (e.pointerType !== 'mouse') return;
  const hit = e.target.closest('.tab-main, .folder-body');
  setPeek(hit ? hit.closest('.folder') : null);
});
cabinet.addEventListener('pointerleave', () => setPeek(null));
cabinet.addEventListener('focusin', (e) => {
  const tab = e.target.closest('.tab-main');
  setPeek(tab ? tab.closest('.folder') : null);
});

cabinet.addEventListener('click', (e) => {
  const target = e.target.closest('[data-open]');
  if (target) openFile(target.dataset.open);
});

/* ----- 檔案頁 ----- */
const dossier = document.getElementById('dossier');
const baseTitle = document.title;
let returnFocus = null;

/* ----- 功能檔案：手機畫面與重點功能 ----- */
const homeMock = () => `
  <div class="screen screen-home">
    <div class="m-head"><img src="images/logo.png" alt=""></div>
    ${FEATURE_GROUPS.map((g) => `
      <p class="m-title">${g.title}</p>
      ${g.ids.map((id) => `<div class="m-pill">${icon(FILES[id].icon)}<span>${FILES[id].title}</span></div>`).join('')}
    `).join('')}
    <div class="m-nav"><span class="on">${icon('home')}</span><span>${icon('user')}</span></div>
  </div>`;

const emptyScreen = () => `
  <div class="screen screen-empty">${PHOTO_ICON}<span>功能畫面</span></div>`;

const screensHTML = () => `<div class="screens">${SCREENS.map((sc) => `
  <figure class="screen-item${sc.main ? ' is-main' : ''}">
    <div class="phone">
      ${sc.mock === 'home' ? homeMock()
        : sc.src ? `<img class="screen" src="${sc.src}" alt="${sc.caption}">`
        : emptyScreen()}
    </div>
    <figcaption>${sc.caption}</figcaption>
  </figure>`).join('')}</div>`;

const pointsHTML = () => `<ol class="points">${POINTS.map((p) => `
  <li class="point">
    <span class="point-icon">${icon(p.icon)}</span>
    <div>
      <h3>${p.title}</h3>
      ${p.desc ? `<p>${p.desc}</p>` : ''}
    </div>
  </li>`).join('')}</ol>`;


function extraHTML(f) {
  switch (f.extra) {
    case 'features':
      return screensHTML() + pointsHTML() +
        `<h4 class="sub-head">App 首頁四大入口</h4>` +
        FEATURE_GROUPS.map((g) => `
        <h4 class="bar-title mini-title">${g.title}</h4>
        <div class="app-pills">${g.ids.map((id) => `
          <button class="app-pill" data-open="${id}">
            ${icon(FILES[id].icon)}<span>${FILES[id].title}</span>
          </button>`).join('')}
        </div>`).join('') +
        `<p class="more-link"><button class="pill" data-open="flow">看使用流程 →</button></p>`;
    case 'flow':
      return `<ol class="flow">${FLOW
        .map(([title, desc]) => `<li><span><strong>${title}</strong>${desc}</span></li>`)
        .join('')}</ol>`;
    case 'team':
      return `<div class="members">${TEAM.map((m) => `
        <div class="member-card">
          ${m.photo
            ? `<img class="photo" src="${m.photo}" alt="${m.name}">`
            : `<div class="photo photo-empty" aria-hidden="true">${PHOTO_ICON}<span>照片</span></div>`}
          <p class="role">${m.role}</p>
          <h4>${m.name}</h4>
        </div>`).join('')}</div>`;
    default:
      return '';
  }
}

function renderFile(f) {
  const crumbs = f.group
    ? `<a href="#file/${f.group.id}">${f.group.zh}</a> / 檔案 ${f.code}`
    : `檔案 ${f.code}`;
  const others = MAIN_FILES.filter((x) => x.id !== f.id);
  const heading = f.icon ? `${icon(f.icon)}${f.title}` : f.en;

  dossier.setAttribute('style', colorVars(f) + paperVars(f));
  dossier.innerHTML = `
    <div class="dossier-bar">
      <div class="container bar-inner">
        <p class="crumbs"><a href="#" data-close>DiuLa! 檔案室</a> / ${crumbs}</p>
        <button class="pill close-btn" data-close>關閉 ✕</button>
      </div>
    </div>

    <header class="container dossier-head">
      <h2 class="bar-title dossier-title" id="dossier-title">${f.titleHTML || f.zh}</h2>
      <div class="dossier-meta">
        <p>${f.note}</p>
        <p>${f.date}</p>
      </div>
    </header>

    <div class="stage">
      <div class="panel${f.wide ? ' panel-wide' : ''}">
        <article class="sheet${f.wide ? ' sheet-wide' : ''}">
          <div class="holes" aria-hidden="true"><i></i><i></i><i></i></div>
          <span class="stamp">檔案 №${f.code}</span>
          <p class="side-note">${f.side}</p>
          <div class="sheet-main">
            <h3 class="en${f.icon ? ' en-icon' : ''}">${heading}</h3>
            ${f.body.map((p) => `<p>${p}</p>`).join('')}
            ${extraHTML(f)}
          </div>
          <span class="barcode" aria-hidden="true">DIULA${f.code}0917LF2026</span>
        </article>

        <article class="sheet-2">
          <h3 class="en">Excerpt ${f.code.slice(-1)}</h3>
          <div class="columns">${f.excerpt.map((p) => `<p>${p}</p>`).join('')}</div>
          <div class="slip-wrap" aria-hidden="true">
            <div class="slip">
              <h4>LOST&amp;FOUND</h4>
              <dl>
                <div><dt>檔案編號</dt><dd>№${f.code}</dd></div>
                <div><dt>分類</dt><dd>${(f.group || f).zh}</dd></div>
                <div><dt>收件</dt><dd>DiuLa! 團隊</dd></div>
                <div><dt>狀態</dt><dd>已歸檔</dd></div>
              </dl>
              <div class="sign"><img src="images/logo.png" alt=""></div>
            </div>
            <svg class="paperclip" viewBox="0 0 44 110"><path d="M30 30V88a10 10 0 0 1-20 0V16a14 14 0 0 1 28 0v70"/></svg>
          </div>
        </article>
      </div>

      <nav class="side-tabs" aria-label="其他檔案">
        ${others.map((x, i) => `<button class="side-tab" style="${colorVars(x)} --i: ${i};" data-open="${x.id}">${x.zh}</button>`).join('')}
      </nav>
    </div>`;
}

function showFile(id) {
  const f = FILES[id];
  if (dossier.hidden) returnFocus = document.activeElement;

  renderFile(f);
  dossier.hidden = false;
  dossier.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  document.title = `${f.zh}｜${baseTitle}`;

  // 重新播放開啟動畫
  dossier.classList.remove('play');
  void dossier.offsetWidth;
  dossier.classList.add('play');

  dossier.querySelector('.close-btn').focus({ preventScroll: true });
}

function hideFile() {
  if (dossier.hidden) return;
  dossier.hidden = true;
  dossier.innerHTML = '';
  document.body.style.overflow = '';
  document.title = baseTitle;
  returnFocus?.focus({ preventScroll: true });
}

// 用網址 #file/xxx 記錄目前打開的檔案，瀏覽器的上一頁也能用
function openFile(id) { location.hash = `file/${id}`; }
function closeFile() { location.hash = ''; }

function route() {
  const id = location.hash.match(/^#file\/(.+)$/)?.[1];
  if (id && FILES[id]) showFile(id);
  else hideFile();
}
window.addEventListener('hashchange', route);
route();

dossier.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) {
    e.preventDefault();
    closeFile();
    return;
  }
  const target = e.target.closest('[data-open]');
  if (target) openFile(target.dataset.open);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !dossier.hidden) closeFile();
});

// 「前往 DiuLa!」按鈕
document.querySelectorAll('.js-diula-link').forEach((link) => {
  if (DIULA_URL) {
    link.href = DIULA_URL;
  } else {
    link.textContent = 'DiuLa! 即將上線';
    link.classList.add('is-soon');
    link.setAttribute('aria-disabled', 'true');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   網站內容：改文字、加文件夾都在這裡
   - 每一列（row）是一層文件夾，第一個是主文件夾，後面最多兩個是同一層的小標籤
   - color 對應 style.css 裡的 --f-xxx 顏色：brown / blue / yellow / sage / red / navy
   - extra 可放特殊內容：'features' | 'flow'（搭配 steps）| 'team'
   - group 可指定麵包屑與登記單上的分類（預設是同一列的主文件夾）
   ========================================================= */

// TODO：DiuLa! 的網址；還沒有的話留空，按鈕會顯示「即將上線」
const DIULA_URL = 'https://diula-py.github.io/diula-outter/#/';

// 指導老師：放在組員上方
const ADVISOR = { role: 'PROJECT ADVISOR', name: '吳林展', photo: 'images/team/advisor-wu.jpg' };

// 組員：照片卡上已經有姓名和職位，網頁只放照片。順序＝PM、MARKETING、DEVELOPER、VISUAL DESIGNER
const TEAM = [
  { role: 'PM', name: '卓筱婷', photo: 'images/team/pm-cho.jpg' },
  { role: 'MARKETING', name: '孫于晴', photo: 'images/team/marketing-sun.jpg' },
  { role: 'MARKETING', name: '繆宜君', photo: 'images/team/marketing-miao.jpg' },
  { role: 'DEVELOPER', name: '王惟賢', photo: 'images/team/developer-wang.jpg' },
  { role: 'DEVELOPER', name: '謝旻', photo: 'images/team/developer-hsieh.jpg' },
  { role: 'VISUAL DESIGNER', name: '張祖寧', photo: 'images/team/designer-chang.jpg' },
];

// App 首頁示意圖上的四大入口
const APP_HOME = [
  { title: '尋找遺失物', items: [['search', '跨平台尋找遺失物'], ['threads', 'Threads 尋找遺失物']] },
  { title: '登錄拾獲物', items: [['idcard', '證件類遺失物登錄'], ['item', '非證件類遺失物登錄']] },
];

// 首頁「DiuLa! 功能」的重點功能：<em> 包住的字會放大變紅；<wbr> 是可以換行的位置；desc 是選填的一行說明（建議 20 字內）
// note 是點開後便條上的內容，可以放多段：note: ['第一段', '第二段']（TODO：補上內容）
const POINTS = [
  { icon: 'multi', title: '一鍵查詢<em>四大</em><wbr>遺失物平台', desc: '',
    note: ['DiuLa! 整合警政署、捷運、高鐵與 Threads 遺失物資訊，一次搜尋多平台，不必再逐一搜網站、打客服。'] },
  { icon: 'web', title: '免下載<wbr>隨開隨用', desc: '',
    note: ['除了直接搜尋 DiuLa! 網站，也可透過 PWA 加入主畫面，或從 LINE 官方帳號進入 LIFF，免下載 App，快速查詢與通報。'] },
  { icon: 'cards', title: '圖文資訊<wbr>快速掌握', desc: '',
    note: ['將遺失物資訊整理成圖文卡片，物品照片、拾獲地點與時間清楚呈現，快速掌握資訊，找尋更直覺。'],
    small: '註：遺失物照片依各平台來源顯示。' },
  { icon: 'ai', title: '<em>AI</em>遺失物<wbr>自動分類', desc: '',
    note: [
      '上傳失物照片或輸入文字描述後，由 AI 自動辨識並分類物品標籤，減少輸入關鍵字與描述物品的困難。',
      '無論來自哪個平台都用同一套分類，篩選一次就能精準縮小範圍。',
    ] },
  { icon: 'bell', title: '<em>5</em>日持續追蹤<wbr>與通知', desc: '',
    note: ['現在沒找到不代表找不回來。設定追蹤後，DiuLa! 會在 5 日內持續比對新進的遺失物，有符合的失物資訊將即時通知你。'] },
  { icon: 'steps', title: '<em>3</em>步快速<wbr>拾獲通報', desc: '',
    note: ['撿到東西想物歸原主？只要拍照、選地點、送出，透過三個步驟即可完成拾獲物通報，快速留下失物資訊，增加失主尋回的機會。'] },
  { icon: 'mask', title: '證件個資<wbr>自動打碼', desc: '',
    note: ['拾獲證件時，系統自動遮蔽證件中的個人資訊，保留辨識失物所需的線索，同時降低個資外洩風險。'] },
  { icon: 'share', title: '匿名代發<wbr>Threads 協尋', desc: '',
    note: ['不用透過自己的帳號發文，DiuLa! 可將協尋資訊匿名發布至 DiuLa! 官方 Threads，擴大曝光範圍，同時保護個人帳號隱私，I 人也能安心協尋。'] },
  { icon: 'postsearch', title: 'Threads<wbr>協尋文精準搜', desc: '',
    note: ['從 Threads 協尋貼文中篩選相關資訊，縮小搜尋範圍，快速找到可能的失物線索。'] },
  { icon: 'mycase', title: '我的案件<wbr>集中管理', desc: '',
    note: ['「我的遺失物」與「我的拾獲物」集中管理曾經登錄的案件，查看目前狀態，也能刪除案件；若曾發布 Threads 協尋文，也可直接刪除貼文。'] },
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
  mycase: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  item: '<rect x="5" y="4" width="14" height="17" rx="2.5" fill="currentColor"/><rect x="9" y="2.5" width="6" height="3.5" rx="1" fill="currentColor"/><path d="M10 11a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.4" stroke="#f3f0e1"/><circle cx="12" cy="17" r=".6" fill="#f3f0e1" stroke="#f3f0e1"/>',
};

const ROWS = [
  [
    {
      id: 'intro', code: '01A', zh: 'DiuLa! 介紹', en: 'About DiuLa!', color: 'brown',
      titleHTML: '<img src="images/logo.png" alt="DiuLa!"><span>介紹</span>',
      note: '我們是誰、為什麼做 DiuLa!。',
      side: '本檔案記錄 DiuLa! 的起點，內容持續更新中。',
      body: [
        '大家好，我們是 DiuLa!，世新資傳112級畢業製作團隊。',
        '你有沒有曾經遺失物品，花費了許多時間與心力尋找卻還是找不回來？',
        '遺失物品是一件不便且令人焦慮的事情，然而現行協尋管道如：尋問工作人員、致電客服、報案、線上查詢、社群發文等管道各自獨立、體驗不佳，讓失主疲於在多平台間奔波；即便轉向 Threads 求助，因受限於龐雜貼文與演算法，也讓相關訊息難以曝光。',
        'DiuLa! 以「資訊整合視覺化、AI 自動辨識標籤分類、主動媒合推播、低進入門檻」為四大設計原則，整合警政署、北捷、高鐵與 Threads 的遺失物資訊，並建立查詢、通報雙軌並行機制，打造一站式 AI 遺失物協尋平台，期望能提升每一次尋回遺失物的機率，為你帶來便捷安心的協尋體驗。',
      ],
      excerpt: [
        '每一件失物背後都有一段故事：一把陪了很久的鑰匙、一張剛辦好的學生證、一個重要的人送的小東西。',
        '我們想做的不只是一張登記表，而是讓這些物品有機會回到主人身邊的一條路。',
      ],
    },
  ],
  [
    { id: 'features', code: '02A', zh: 'DiuLa! 功能', en: '一次看懂<wbr> 10 大重點功能', color: 'blue',
      titleHTML: '<img src="images/logo.png" alt="DiuLa!"><span>功能</span>',
      wide: true,
      note: '尋找遺失物、登錄拾獲物，一個地方搞定。',
      body: [],
      extra: 'features' },
  ],
  [
    // TODO：三個使用流程的步驟依實際操作調整
    { id: 'flow-cross', code: '03A', zh: '跨平台尋物使用流程', en: 'Cross-platform search', color: 'red', icon: 'search', group: 'features',
      title: '跨平台尋物使用流程',
      note: '一次搜尋多個平台，找回遺失物。',
      body: ['不用在各個社群之間來回翻找。DiuLa! 整合多個平台的失物資訊，一次搜尋就能看到。'],
      extra: 'flow',
      steps: [
        ['輸入', '輸入遺失物的名稱、特徵或遺失地點。'],
        ['搜尋', 'DiuLa! 同時搜尋多個遺失物平台。'],
        ['比對', '從圖文卡片中找出可能是自己的東西。'],
        ['領回', '確認是自己的物品後，依平台指示領回。'],
      ] },
    { id: 'flow-found', code: '03B', zh: '登錄拾獲物使用流程', en: 'Report found items', color: 'yellow', icon: 'item', group: 'features',
      title: '登錄拾獲物使用流程',
      note: '撿到東西時，幫它找到主人。',
      body: ['撿到證件或其他物品時，在這裡登錄，讓失主更快找到。'],
      extra: 'flow',
      steps: [
        ['選擇類別', '選擇證件類（學生證、身分證、健保卡等）或非證件類（錢包、鑰匙、耳機等）。'],
        ['拍照填寫', '拍下物品照片，填寫特徵與拾獲地點。'],
        ['完成登錄', '送出後，失主就能搜尋到這筆資料。'],
        ['歸還', '失主確認後，聯繫領回。'],
      ] },
    { id: 'flow-threads', code: '03C', zh: 'Threads協尋使用流程', en: 'Threads search', color: 'sage', icon: 'threads', group: 'features',
      title: 'Threads 協尋使用流程',
      note: '從 Threads 貼文中找回失物。',
      body: ['很多人會在 Threads 上發文協尋失物。DiuLa! 幫你從這些貼文中，找出可能是你的東西。'],
      extra: 'flow',
      steps: [
        ['描述', '描述遺失物的名稱、特徵與遺失地點。'],
        ['搜尋貼文', 'DiuLa! 從 Threads 貼文中找出相關的協尋與拾獲資訊。'],
        ['比對', '查看符合的貼文，確認是不是自己的東西。'],
        ['聯繫', '透過 Threads 聯繫發文者領回。'],
      ] },
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
Object.values(FILES).forEach((f, i) => {
  f.group = f.groupId ? FILES[f.groupId] : null;
  f.noteNo = String(i + 1).padStart(2, '0'); // RESEARCH NOTE 編號，照檔案順序
});
const MAIN_FILES = ROWS.map((row) => FILES[row[0].id]);
// 側邊欄列出全部檔案，不只每一層的主文件夾
const SIDE_FILES = ROWS.flat().map((f) => FILES[f.id]);

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
    ${APP_HOME.map((g) => `
      <p class="m-title">${g.title}</p>
      ${g.items.map(([ic, label]) => `<div class="m-pill">${icon(ic)}<span>${label}</span></div>`).join('')}
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

const pointsHTML = () => `<ol class="points">${POINTS.map((p, i) => `
  <li>
    <button class="point" data-point="${i}" aria-haspopup="dialog">
      <span class="point-icon">${icon(p.icon)}</span>
      <span class="point-text">
        <span class="point-title">${p.title}</span>
        ${p.desc ? `<p>${p.desc}</p>` : ''}
      </span>
    </button>
  </li>`).join('')}</ol>`;


function extraHTML(f) {
  switch (f.extra) {
    case 'features':
      return screensHTML() + pointsHTML();
    case 'flow':
      return `<ol class="flow">${f.steps
        .map(([title, desc]) => `<li><span><strong>${title}</strong>${desc}</span></li>`)
        .join('')}</ol>`;
    case 'team': {
      const card = (m) => (m.photo
        ? `<img class="photo" src="${m.photo}" alt="${m.name}｜${m.role}">`
        : `<div class="photo photo-empty" aria-hidden="true">${PHOTO_ICON}<span>照片</span></div>`);
      return `<div class="advisor">${card(ADVISOR)}</div>
        <div class="members">${TEAM.map(card).join('')}</div>`;
    }
    default:
      return '';
  }
}

function renderFile(f) {
  const crumbs = f.group
    ? `<a href="#file/${f.group.id}">${f.group.zh}</a> / 檔案 ${f.code}`
    : `檔案 ${f.code}`;
  const others = SIDE_FILES.filter((x) => x.id !== f.id);
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
          <h3 class="en">RESEARCH NOTE / ${f.noteNo}</h3>
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
  const point = e.target.closest('[data-point]');
  if (point) { openMemo(Number(point.dataset.point)); return; }
  const target = e.target.closest('[data-open]');
  if (target) openFile(target.dataset.open);
});

document.addEventListener('keydown', (e) => {
  // 便條開著時，Esc 只關便條
  if (e.key === 'Escape' && !dossier.hidden && !memo.open) closeFile();
});

/* ----- 重點功能的便條小視窗 ----- */
const memo = document.getElementById('memo');

function openMemo(i) {
  const p = POINTS[i];
  const note = p.note.length ? p.note : ['內容整理中，之後補上。'];
  memo.innerHTML = `
    <div class="memo-paper">
      <span class="memo-tape" aria-hidden="true"></span>
      <button class="memo-close" data-memo-close aria-label="關閉">✕</button>
      <p class="memo-no">MEMO / ${String(i + 1).padStart(2, '0')}</p>
      <div class="memo-head">
        <span class="point-icon">${icon(p.icon)}</span>
        <h3 id="memo-title">${p.title}</h3>
      </div>
      <div class="memo-body">${note.map((t) => `<p>${t}</p>`).join('')}</div>
      ${p.small ? `<p class="memo-small">${p.small}</p>` : ''}
    </div>`;
  memo.showModal();
}

memo.addEventListener('click', (e) => {
  // 點便條外面的背景，或按 ✕ 都會關閉
  if (e.target === memo || e.target.closest('[data-memo-close]')) memo.close();
});
memo.addEventListener('close', () => { memo.innerHTML = ''; });

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

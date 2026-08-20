// ============================================================
// FNSL TV - Application Logic
// Works on any modern browser
// Now with automatic Twitch live detection
// ============================================================

let currentSection = 'live';
let filteredVods = [];
let liveStatusCache = {};       // { username: { isLive, title, viewerCount, ... } }
let liveApiOk = false;           // true only when /api/live returned ok:true
let lastLiveCheck = 0;

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  if (typeof FNSL_CONFIG === 'undefined') {
    console.error('[FNSL] data.js failed to load — FNSL_CONFIG missing');
    const st = document.getElementById('live-status-text');
    if (st) st.textContent = 'Config error: data.js did not load. Re-upload data.js from the zip.';
    return;
  }

  applyConfig();
  renderVods();
  renderHistory();
  renderStandings();
  showSection('live');
  setupKeyboardNav();

  // Always paint stream cards first (offline ok), then try live detect
  renderLiveStreams();
  checkLiveStreams();

  // Re-check every 60 seconds
  setInterval(checkLiveStreams, 60 * 1000);
});

// ---------- CONFIG APPLY ----------
function applyConfig() {
  const cycleEl = document.getElementById('cycle-season');
  if (cycleEl) cycleEl.textContent = FNSL_CONFIG.cycleSeason || 'M27 - S1';
  const seasonEl = document.getElementById('current-season');
  if (seasonEl) seasonEl.textContent = FNSL_CONFIG.currentSeason || 'Season ?';
  const champEl = document.getElementById('defending-champ');
  if (champEl) champEl.textContent = FNSL_CONFIG.defendingChamp || '—';
  const coachEl = document.getElementById('defending-coach');
  if (coachEl) coachEl.textContent = FNSL_CONFIG.defendingCoach || '';


  // Champ team logo
  const champLogo = document.getElementById('champ-logo');
  if (champLogo && FNSL_CONFIG.defendingChamp) {
    const name = FNSL_CONFIG.defendingChamp.toLowerCase();
    const abbrMap = {
      'jacksonville jaguars': 'jax', 'las vegas raiders': 'lv', 'atlanta falcons': 'atl',
      'seattle seahawks': 'sea', 'new york giants': 'nyg', 'detroit lions': 'det',
      'kansas city chiefs': 'kc', 'philadelphia eagles': 'phi', 'green bay packers': 'gb',
      'dallas cowboys': 'dal', 'san francisco 49ers': 'sf', 'buffalo bills': 'buf',
      'baltimore ravens': 'bal', 'cincinnati bengals': 'cin', 'miami dolphins': 'mia',
      'new england patriots': 'ne', 'chicago bears': 'chi', 'minnesota vikings': 'min',
      'carolina panthers': 'car', 'tampa bay buccaneers': 'tb', 'arizona cardinals': 'ari',
      'los angeles rams': 'lar', 'los angeles chargers': 'lac', 'denver broncos': 'den',
      'houston texans': 'hou', 'indianapolis colts': 'ind', 'tennessee titans': 'ten',
      'pittsburgh steelers': 'pit', 'cleveland browns': 'cle', 'new york jets': 'nyj',
      'washington commanders': 'wsh', 'washington football team': 'wsh', 'new orleans saints': 'no'
    };
    let abbr = null;
    for (const [key, val] of Object.entries(abbrMap)) {
      if (name.includes(key) || key.includes(name)) { abbr = val; break; }
    }
    // also try matching last word
    if (!abbr) {
      const last = name.split(' ').pop();
      for (const [key, val] of Object.entries(abbrMap)) {
        if (key.includes(last)) { abbr = val; break; }
      }
    }
    if (abbr) {
      champLogo.src = `https://a.espncdn.com/i/teamlogos/nfl/500/${abbr}.png`;
      champLogo.style.display = 'block';
      champLogo.alt = FNSL_CONFIG.defendingChamp;
    }
  }

  startStatsSlideshow();
  renderSocialLinks();
  renderTicker();
}

// ---------- LEAGUE LEADERS SLIDESHOW ----------
let statsSlideIndex = 0;
let statsSlideTimer = null;

function startStatsSlideshow() {
  const container = document.getElementById('stats-slideshow');
  const dots = document.getElementById('stats-dots');
  if (!container) return;

  const players = FNSL_CONFIG.topPlayers || [];
  if (players.length === 0) {
    container.innerHTML = '<p class="text-slate-400 text-sm">Leaders update after Week 1</p>';
    return;
  }

  container.innerHTML = players.map((p, i) => `
    <div class="stat-slide ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <div class="flex items-baseline justify-between gap-2">
        <span class="text-xs font-bold text-purple-300 uppercase">${escapeHtml(p.pos)}</span>
        <span class="text-xs text-slate-500">#${p.rank || 1}</span>
      </div>
      <p class="font-bold text-lg leading-tight mt-1">${escapeHtml(p.name)}</p>
      <p class="text-slate-400 text-sm">${escapeHtml(p.team)} · ${escapeHtml(p.stat)}</p>
    </div>
  `).join('');

  if (dots) {
    dots.innerHTML = players.map((_, i) =>
      `<button class="w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-purple-400' : 'bg-slate-600'} stats-dot" data-idx="${i}" aria-label="Slide ${i+1}"></button>`
    ).join('');
    dots.querySelectorAll('.stats-dot').forEach(btn => {
      btn.addEventListener('click', () => {
        statsSlideIndex = parseInt(btn.dataset.idx, 10);
        showStatsSlide(statsSlideIndex);
        resetStatsTimer();
      });
    });
  }

  resetStatsTimer();
}

function showStatsSlide(idx) {
  const slides = document.querySelectorAll('.stat-slide');
  const dots = document.querySelectorAll('.stats-dot');
  if (!slides.length) return;
  statsSlideIndex = ((idx % slides.length) + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === statsSlideIndex));
  dots.forEach((d, i) => {
    d.classList.toggle('bg-purple-400', i === statsSlideIndex);
    d.classList.toggle('bg-slate-600', i !== statsSlideIndex);
  });
}

function resetStatsTimer() {
  if (statsSlideTimer) clearInterval(statsSlideTimer);
  statsSlideTimer = setInterval(() => {
    showStatsSlide(statsSlideIndex + 1);
  }, 4000);
}

// ---------- NAVIGATION ----------
function showSection(name) {
  currentSection = name;
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById('section-' + name);
  if (el) el.classList.remove('hidden');

  document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
    if (btn.dataset.section === name) {
      btn.classList.add('bg-green-600/20', 'text-green-400');
    } else {
      btn.classList.remove('bg-green-600/20', 'text-green-400');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- AUTOMATIC LIVE CHECK ----------
async function checkLiveStreams() {
  const channels = (FNSL_CONFIG.twitchChannels || [])
    .map(c => c.trim().toLowerCase())
    .filter(Boolean);

  (FNSL_CONFIG.featuredStreams || []).forEach(s => {
    if (s.channel && s.platform === 'twitch') {
      const name = s.channel.trim().toLowerCase();
      if (name && !channels.includes(name)) channels.push(name);
    }
  });

  if (channels.length === 0) {
    renderLiveStreams();
    return;
  }

  const statusText = document.getElementById('live-status-text');
  if (statusText) statusText.textContent = 'Checking who is live…';

  try {
    const url = `/api/live?channels=${encodeURIComponent(channels.join(','))}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    const data = await res.json();

    if (data.ok && Array.isArray(data.live)) {
      liveStatusCache = {};
      data.live.forEach(s => {
        const login = (s.login || '').toLowerCase();
        if (login) liveStatusCache[login] = s;
      });
      liveApiOk = true;
      lastLiveCheck = Date.now();
      console.log('[FNSL] Live check OK:', data.live.length, 'live of', data.checked, 'checked', data.live);
    } else {
      // Do NOT wipe cache / force offline on API errors
      liveApiOk = false;
      console.warn('[FNSL] Live API not ok:', data.error || data);
      if (statusText) {
        statusText.textContent = 'No one is live right now — auto-detect will turn on when Twitch is configured';
      }
    }

    renderLiveStreams();
  } catch (err) {
    liveApiOk = false;
    console.warn('[FNSL] Live check failed:', err);
    const statusText2 = document.getElementById('live-status-text');
    if (statusText2) statusText2.textContent = 'No one is live right now — check VODs or come back later';
    renderLiveStreams();
  }
}

// ---------- LIVE STREAMS ----------
function renderLiveStreams() {
  const container = document.getElementById('live-streams');
  const noLive = document.getElementById('no-live');
  const statusText = document.getElementById('live-status-text');

  container.innerHTML = '';

  // Build the list of streams to show
  let streams = [...(FNSL_CONFIG.featuredStreams || [])];

  // Apply automatic live status (only override when API succeeded)
  streams = streams.map(s => {
    const channel = (s.channel || '').trim().toLowerCase();
    const liveInfo = channel ? liveStatusCache[channel] : null;

    if (liveInfo) {
      return {
        ...s,
        isLive: true,
        title: liveInfo.title || s.title,
        viewerCount: liveInfo.viewerCount,
        thumbnail: liveInfo.thumbnail || s.thumbnail,
        startedAt: liveInfo.startedAt
      };
    }

    if (liveApiOk && channel) {
      return { ...s, isLive: false };
    }
    return s;
  });

  // Also add any live channels that were in twitchChannels but not in featuredStreams
  Object.values(liveStatusCache).forEach(liveInfo => {
    const already = streams.some(s => (s.channel || '').toLowerCase() === liveInfo.login.toLowerCase());
    if (!already) {
      streams.push({
        id: liveInfo.login,
        title: liveInfo.title || `${liveInfo.displayName} is live`,
        owner: liveInfo.displayName,
        platform: 'twitch',
        channel: liveInfo.login,
        isLive: true,
        viewerCount: liveInfo.viewerCount,
        thumbnail: liveInfo.thumbnail
      });
    }
  });

  const liveOnes = streams.filter(s => s.isLive);
  const offlineOnes = streams.filter(s => !s.isLive);

  if (liveOnes.length === 0 && offlineOnes.length === 0) {
    noLive.classList.remove('hidden');
    statusText.textContent = 'No streams configured yet — add usernames in data.js';
    updateLiveBadge(0);
    return;
  }

  noLive.classList.add('hidden');

  // Show live first
  [...liveOnes, ...offlineOnes].forEach(stream => {
    container.appendChild(createStreamCard(stream));
  });

  if (liveOnes.length > 0) {
    statusText.textContent = `${liveOnes.length} stream${liveOnes.length > 1 ? 's' : ''} live right now`;
  } else if (liveApiOk) {
    statusText.textContent = 'No one is live — check VODs or come back later';
  } else {
    // Keep a friendly message; technical Twitch errors stay in the console
    statusText.textContent = 'No one is live right now — streams will light up when someone goes live';
  }

  updateLiveBadge(liveOnes.length);
}

// NFL team logo lookup (ESPN CDN)
const TEAM_LOGO_ABBR = {
  raiders: 'lv', packers: 'gb', bears: 'chi', giants: 'nyg', eagles: 'phi',
  patriots: 'ne', colts: 'ind', rams: 'lar', chiefs: 'kc', cardinals: 'ari',
  commanders: 'wsh', texans: 'hou', titans: 'ten', steelers: 'pit', dolphins: 'mia',
  lions: 'det', panthers: 'car', vikings: 'min', cowboys: 'dal', chargers: 'lac',
  broncos: 'den', '49ers': 'sf', bengals: 'cin', jets: 'nyj', seahawks: 'sea',
  buccaneers: 'tb', falcons: 'atl', ravens: 'bal', browns: 'cle', jaguars: 'jax',
  bills: 'buf', saints: 'no'
};

function getTeamLogoUrl(stream) {
  const id = (stream.id || '').toLowerCase();
  const abbr = TEAM_LOGO_ABBR[id];
  if (abbr) return `https://a.espncdn.com/i/teamlogos/nfl/500/${abbr}.png`;
  const title = (stream.title || '').toLowerCase();
  for (const [key, val] of Object.entries(TEAM_LOGO_ABBR)) {
    if (title.includes(key)) {
      return `https://a.espncdn.com/i/teamlogos/nfl/500/${val}.png`;
    }
  }
  return null;
}

function createStreamCard(stream) {
  const card = document.createElement('div');
  card.className = 'stream-card tv-card rounded-2xl bg-fnsl-card border border-slate-800 overflow-hidden cursor-pointer group focus:outline-none';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');

  const isLive = stream.isLive;
  const viewers = stream.viewerCount ? `${stream.viewerCount} watching` : '';
  const logoUrl = getTeamLogoUrl(stream);
  // Live preview from Twitch (updates while streaming)
  const previewUrl = (isLive && stream.channel)
    ? `https://static-cdn.jtvnw.net/previews-ttv/live_user_${encodeURIComponent(stream.channel.toLowerCase())}-640x360.jpg?t=${Date.now()}`
    : null;

  card.innerHTML = `
    <div class="relative aspect-video bg-slate-900 overflow-hidden">
      ${isLive ? `
        <div class="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600 text-xs font-bold uppercase tracking-wide shadow">
          <span class="w-1.5 h-1.5 rounded-full bg-white live-dot"></span> LIVE
        </div>
      ` : `
        <div class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-700/90 text-xs font-medium">
          Offline
        </div>
      `}
      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
        ${previewUrl
          ? `<img src="${previewUrl}" alt="Live preview" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='${logoUrl ? `<img src=\'${logoUrl}\' class=\'w-20 h-20 object-contain\' />` : '🔴'}';" />`
          : (logoUrl
            ? `<img src="${logoUrl}" alt="" class="w-20 h-20 object-contain opacity-90 group-hover:scale-110 transition duration-300" onerror="this.style.display='none'" />`
            : `<span class="text-4xl">📺</span>`)}
      </div>
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition flex items-center justify-center">
        <div class="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
          <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg leading-tight line-clamp-2">${escapeHtml(stream.title || 'Untitled Stream')}</h3>
      <p class="text-slate-400 text-sm mt-1">${escapeHtml(stream.owner || stream.channel || '')}</p>
      <div class="flex items-center justify-between mt-3 text-xs text-slate-500">
        <div class="flex items-center gap-2">
          ${logoUrl ? `<img src="${logoUrl}" alt="" class="w-6 h-6 object-contain" onerror="this.style.display='none'" />` : ''}
          <span class="uppercase tracking-wide">${stream.platform || 'stream'}</span>
        </div>
        <span>${viewers}</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openStream(stream));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openStream(stream);
    }
  });

  return card;
}

function openStream(stream) {
  const overlay = document.getElementById('player-overlay');
  const container = document.getElementById('player-container');
  const title = document.getElementById('player-title');

  title.textContent = stream.title || 'Stream';

  let embed = '';
  if (stream.platform === 'twitch' && stream.channel) {
    const parent = window.location.hostname || 'localhost';
    embed = `<iframe
      src="https://player.twitch.tv/?channel=${encodeURIComponent(stream.channel)}&parent=${parent}&autoplay=true"
      height="100%" width="100%"
      allowfullscreen
      class="w-full h-full min-h-[60vh]"
      style="border:none;">
    </iframe>`;
  } else if (stream.platform === 'youtube' && stream.videoId) {
    embed = `<iframe
      src="https://www.youtube.com/embed/${encodeURIComponent(stream.videoId)}?autoplay=1"
      height="100%" width="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full min-h-[60vh]"
      style="border:none;">
    </iframe>`;
  } else if (stream.url) {
    window.open(stream.url, '_blank');
    return;
  } else {
    embed = `<div class="text-center p-12 text-slate-400">
      <p class="text-xl mb-2">No embed available</p>
      <p>Add a Twitch channel or YouTube video ID in data.js</p>
    </div>`;
  }

  container.innerHTML = embed;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  const overlay = document.getElementById('player-overlay');
  const container = document.getElementById('player-container');
  overlay.classList.remove('active');
  container.innerHTML = '';
  document.body.style.overflow = '';
}

function playAllLive() {
  const live = (FNSL_CONFIG.featuredStreams || []).filter(s => {
    const channel = (s.channel || '').toLowerCase();
    return s.isLive || liveStatusCache[channel];
  });

  // Also include pure auto-detected ones
  const autoLive = Object.values(liveStatusCache).map(l => ({
    channel: l.login,
    title: l.title,
    platform: 'twitch',
    isLive: true
  }));

  const allLive = [...live, ...autoLive];
  if (allLive.length === 0) {
    alert('No live streams right now.');
    return;
  }
  openStream(allLive[0]);
}

function refreshStreams() {
  checkLiveStreams();
}

function updateLiveBadge(count) {
  const badge = document.getElementById('live-badge');
  const countEl = document.getElementById('live-count');
  if (count > 0) {
    badge.classList.remove('hidden');
    badge.classList.add('flex');
    countEl.textContent = `${count} LIVE`;
  } else {
    badge.classList.add('hidden');
    badge.classList.remove('flex');
  }
}

// ---------- VODS ----------
function renderVods() {
  // Chronological (oldest first)
  filteredVods = [...(FNSL_CONFIG.vods || [])].sort((a, b) =>
    String(a.date || '').localeCompare(String(b.date || ''))
  );
  filterVods();
}

function filterVods() {
  const search = (document.getElementById('vod-search')?.value || '').toLowerCase();
  const type = document.getElementById('vod-filter')?.value || 'all';

  filteredVods = (FNSL_CONFIG.vods || []).filter(v => {
    const matchesType = type === 'all' || v.type === type;
    const matchesSearch = !search ||
      (v.title || '').toLowerCase().includes(search) ||
      (v.description || '').toLowerCase().includes(search) ||
      (v.teams || []).join(' ').toLowerCase().includes(search) ||
      (v.season || '').toString().includes(search);
    return matchesType && matchesSearch;
  }).sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')));

  const grid = document.getElementById('vod-grid');
  grid.innerHTML = '';

  if (filteredVods.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16 text-slate-400">
        <p class="text-xl mb-2">No VODs match your filters</p>
        <p class="text-sm">Add past streams in data.js → vods array</p>
      </div>`;
    return;
  }

  filteredVods.forEach(vod => {
    const card = document.createElement('div');
    card.className = 'stream-card tv-card rounded-2xl bg-fnsl-card border border-slate-800 overflow-hidden cursor-pointer group';
    card.tabIndex = 0;

    const typeBadge = {
      game: 'bg-blue-600/30 text-blue-300',
      draft: 'bg-purple-600/30 text-purple-300',
      show: 'bg-amber-600/30 text-amber-300',
      superbowl: 'bg-yellow-500/20 text-yellow-300'
    }[vod.type] || 'bg-slate-700 text-slate-300';

    card.innerHTML = `
      <div class="relative aspect-video bg-slate-900 flex items-center justify-center text-4xl">
        📼
        <div class="absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold uppercase ${typeBadge}">
          ${vod.type || 'vod'}
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg leading-tight">${escapeHtml(vod.title)}</h3>
        <p class="text-slate-400 text-sm mt-1 line-clamp-2">${escapeHtml(vod.description || '')}</p>
        <div class="flex items-center justify-between mt-3 text-xs text-slate-500">
          <span>Season ${vod.season || '?'}</span>
          <span>${vod.date || ''}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openVod(vod));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVod(vod);
      }
    });

    grid.appendChild(card);
  });
}

function openVod(vod) {
  if (vod.platform === 'youtube' && vod.videoId) {
    openStream({
      title: vod.title,
      platform: 'youtube',
      videoId: vod.videoId
    });
  } else if (vod.url) {
    window.open(vod.url, '_blank');
  } else {
    alert('Add a YouTube videoId or url for this VOD in data.js');
  }
}

// ---------- HISTORY ----------
function renderHistory() {
  const tbody = document.getElementById('history-tbody');
  tbody.innerHTML = '';

  const history = [...(FNSL_CONFIG.history || [])].sort((a, b) => b.season - a.season);

  if (history.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="px-5 py-12 text-center text-slate-400">
          No championship history yet.<br>
          <span class="text-sm">Add entries to FNSL_CONFIG.history in data.js</span>
        </td>
      </tr>`;
  } else {
    history.forEach(h => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-800/50 transition';
      tr.innerHTML = `
        <td class="px-5 py-4 font-medium">${h.season}</td>
        <td class="px-5 py-4 text-amber-400 font-bold">SB ${h.superBowl || h.season}</td>
        <td class="px-5 py-4 font-bold text-green-400">${escapeHtml(h.champion)}</td>
        <td class="px-5 py-4 text-slate-300">${escapeHtml(h.runnerUp || '—')}</td>
        <td class="px-5 py-4 font-mono">${escapeHtml(h.score || '—')}</td>
        <td class="px-5 py-4 text-sm text-slate-400">${escapeHtml(h.mvp || h.notes || '')}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  const leaderboard = document.getElementById('titles-leaderboard');
  leaderboard.innerHTML = '';
  const titles = getTitleCounts();

  if (titles.length === 0) {
    leaderboard.innerHTML = `<p class="col-span-full text-slate-400">Add champions to see the all-time leaderboard.</p>`;
  } else {
    titles.forEach(({ team, titles: count }, i) => {
      const card = document.createElement('div');
      card.className = 'tv-card rounded-xl bg-fnsl-card border border-slate-800 p-4 text-center';
      card.innerHTML = `
        <div class="text-3xl font-black ${i === 0 ? 'text-amber-400' : 'text-slate-200'}">${count}</div>
        <div class="text-sm font-medium mt-1 leading-tight">${escapeHtml(team)}</div>
        <div class="text-xs text-slate-500 mt-1">${count === 1 ? 'title' : 'titles'}</div>
      `;
      leaderboard.appendChild(card);
    });
  }
}


// ---------- STANDINGS ----------
function renderStandings() {
  renderConf('afc', FNSL_CONFIG.standings?.afc || []);
  renderConf('nfc', FNSL_CONFIG.standings?.nfc || []);
}

function renderConf(conf, teams) {
  const container = document.getElementById('standings-' + conf);
  container.innerHTML = '';

  if (teams.length === 0) {
    container.innerHTML = `<div class="px-5 py-8 text-center text-slate-400 text-sm">Add teams in data.js</div>`;
    return;
  }

  const sorted = [...teams].sort((a, b) => {
    const [aw] = (a.record || '0-0').split('-').map(Number);
    const [bw] = (b.record || '0-0').split('-').map(Number);
    return bw - aw;
  });

  sorted.forEach((t, i) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between px-5 py-3 hover:bg-slate-800/40';
    row.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-slate-500 text-sm w-5">${i + 1}</span>
        <div>
          <div class="font-semibold">${escapeHtml(t.team)}</div>
          ${t.owner ? `<div class="text-xs text-slate-500">${escapeHtml(t.owner)}</div>` : ''}
        </div>
      </div>
      <div class="font-mono font-bold text-lg">${escapeHtml(t.record || '0-0')}</div>
    `;
    container.appendChild(row);
  });
}

// ---------- TV / KEYBOARD NAV ----------
function setupKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlayer();
    if (e.key === '1') showSection('live');
    if (e.key === '2') showSection('vods');
    if (e.key === '3') showSection('history');
    if (e.key === '4') showSection('standings');
  });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

// ---------- UTILS ----------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Expose for inline handlers
window.showSection = showSection;
window.playAllLive = playAllLive;
window.refreshStreams = refreshStreams;
window.filterVods = filterVods;
window.closePlayer = closePlayer;
window.toggleFullscreen = toggleFullscreen;
window.openStream = openStream;
window.checkLiveStreams = checkLiveStreams;

// ---------- SOCIAL LINKS ----------
const SOCIAL_ICONS = {
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  twitch: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
  neonsportz: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.5 3.6v7.4L12 18.8 5.5 15.2V7.8L12 4.2zM8 10h2v6H8v-6zm3 2h2v4h-2v-4zm3-1h2v5h-2v-5z"/></svg>`
};

function renderSocialLinks() {
  const links = (FNSL_CONFIG.socialLinks || []).filter(l => l.url && l.url.trim() !== '');
  const html = links.map(l => {
    const icon = SOCIAL_ICONS[l.id] || '';
    const color = l.color || '#94a3b8';
    return `<a class="social-btn" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer" style="color:${color}" title="${escapeHtml(l.label)}">
      ${icon}<span>${escapeHtml(l.label)}</span>
    </a>`;
  }).join('');

  const top = document.getElementById('social-links');
  const foot = document.getElementById('social-links-footer');
  if (top) top.innerHTML = html;
  if (foot) foot.innerHTML = html;
}


// ---------- SCORE / MATCHUP TICKER ----------
function renderTicker() {
  const el = document.getElementById('ticker-content');
  if (!el) return;

  const items = FNSL_CONFIG.tickerItems || [];
  if (items.length === 0) {
    el.innerHTML = '<span class="ticker-item">FNSL — No updates yet</span>';
    return;
  }

  // Duplicate content so the loop scrolls seamlessly
  const html = items.map(item => {
    const cls = item.type === 'live' ? 'live-item'
      : item.type === 'final' ? 'final-item'
      : '';
    const prefix = item.type === 'live' ? '● LIVE '
      : item.type === 'final' ? 'FINAL '
      : item.type === 'upcoming' ? 'UPCOMING '
      : '';
    return `<span class="ticker-item ${cls}">${prefix}${escapeHtml(item.text)}</span><span class="sep">◆</span>`;
  }).join('');

  el.innerHTML = html + html;
}

// ============================================================
// FNSL TV - Application Logic
// Optimized for LG webOS / Smart TVs + modern browsers
// Now with automatic Twitch live detection
// ============================================================

let currentSection = 'live';
let filteredVods = [];
let liveStatusCache = {};       // { username: { isLive, title, viewerCount, ... } }
let lastLiveCheck = 0;

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderVods();
  renderHistory();
  renderStandings();
  showSection('live');
  setupKeyboardNav();

  // First render (manual flags), then try auto-detect
  renderLiveStreams();
  checkLiveStreams();

  // Re-check every 60 seconds
  setInterval(checkLiveStreams, 60 * 1000);
});

// ---------- CONFIG APPLY ----------
function applyConfig() {
  document.getElementById('current-season').textContent = FNSL_CONFIG.currentSeason || 'Season ?';
  document.getElementById('defending-champ').textContent = FNSL_CONFIG.defendingChamp || '—';
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

  // Also include any channels listed in featuredStreams
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
    const res = await fetch(url);
    const data = await res.json();

    liveStatusCache = {};
    if (data.ok && Array.isArray(data.live)) {
      data.live.forEach(s => {
        liveStatusCache[s.login.toLowerCase()] = s;
      });
    }

    lastLiveCheck = Date.now();
    renderLiveStreams();
  } catch (err) {
    console.warn('Live check failed (will use manual isLive flags):', err);
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

  // Apply automatic live status
  streams = streams.map(s => {
    const channel = (s.channel || '').trim().toLowerCase();
    const liveInfo = liveStatusCache[channel];

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

    // If we successfully checked and they are NOT in the live list → force offline
    // (only if we have a channel name and we did a real check)
    if (channel && Object.keys(liveStatusCache).length > 0 || lastLiveCheck > 0) {
      // Keep the original isLive if we never got a successful API response
      // but if API worked, override to false when not live
      if (lastLiveCheck > 0) {
        return { ...s, isLive: false };
      }
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

  statusText.textContent = liveOnes.length > 0
    ? `${liveOnes.length} stream${liveOnes.length > 1 ? 's' : ''} live right now`
    : 'No one is live — check VODs or come back later';

  updateLiveBadge(liveOnes.length);
}

function createStreamCard(stream) {
  const card = document.createElement('div');
  card.className = 'stream-card tv-card rounded-2xl bg-fnsl-card border border-slate-800 overflow-hidden cursor-pointer group focus:outline-none';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');

  const isLive = stream.isLive;
  const viewers = stream.viewerCount ? `${stream.viewerCount} watching` : '';

  card.innerHTML = `
    <div class="relative aspect-video bg-slate-900 overflow-hidden">
      ${isLive ? `
        <div class="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600 text-xs font-bold uppercase tracking-wide">
          <span class="w-1.5 h-1.5 rounded-full bg-white live-dot"></span> LIVE
        </div>
      ` : `
        <div class="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-slate-700/90 text-xs font-medium">
          Offline
        </div>
      `}
      <div class="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-slate-800 to-slate-900">
        ${isLive ? '🔴' : '📺'}
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
      <div class="flex items-center justify-between mt-2 text-xs text-slate-500">
        <span class="uppercase tracking-wide">${stream.platform || 'stream'}</span>
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
  filteredVods = [...(FNSL_CONFIG.vods || [])];
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
  });

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

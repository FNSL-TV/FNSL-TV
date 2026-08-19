# FNSL TV

A clean, modern, **TV-optimized** web app for your Father N Son League (FNSL).

Built to be better than the XCFL TV prototype:

- **Live streams** section with big cards + fullscreen player (Twitch / YouTube embeds)
- **Past VODs** searchable archive (games, drafts, shows, Super Bowls)
- **League History** – full Super Bowl champions table + all-time titles leaderboard
- **Current Standings** (AFC / NFC)
- Fully keyboard / remote-friendly (LG webOS, Fire TV, Apple TV browser, etc.)
- Dark theme, large touch targets, focus rings for TV navigation
- Single source of truth in `data.js` – easy for you to update every week

---

## Quick Start

1. Open `index.html` in any modern browser (Chrome / Edge / Safari / LG webOS browser).
2. Edit `data.js` with your real league info.
3. Deploy free on Vercel / Netlify / Cloudflare Pages or just host the folder.

### On LG Smart TV
- Best experience: host the site (Vercel is free & one-click) → open the URL in the TV’s browser → “Add to Home Screen” if available, or bookmark it.
- Or use the built-in web browser and go full-screen.

---

## How to Customize (the important part)

Open **`data.js`**. Everything lives there.

### 1. Basic info
```js
leagueName: "Father N Son League",
currentSeason: "Season 3",
defendingChamp: "Las Vegas Raiders",
```

### 2. Live Streams
Two ways:

**A. Manual featured streams** (recommended to start)
```js
featuredStreams: [
  {
    id: "week8-raiders",
    title: "Raiders vs Chiefs • Week 8",
    owner: "Dustin (Raiders)",
    platform: "twitch",
    channel: "your_twitch_username",   // without twitch.tv/
    isLive: true,                      // flip to true when you go live
  },
  // add more owners...
]
```

**B. Auto-detect (advanced)**  
Add usernames to `twitchChannels`. Later you can plug in a Twitch Helix API key if you want automatic live detection.

### 3. Past Streams / VODs
```js
vods: [
  {
    id: "sb2",
    title: "FNSL Super Bowl II",
    description: "Eagles vs Bills",
    type: "superbowl",          // game | draft | show | superbowl
    season: "2",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ",     // the ID from youtube.com/watch?v=XXXX
    date: "2026-02-08",
    teams: ["Philadelphia Eagles", "Buffalo Bills"]
  },
]
```

### 4. League History (the coolest part)
```js
history: [
  {
    season: 1,
    superBowl: "I",
    champion: "Las Vegas Raiders",
    runnerUp: "Kansas City Chiefs",
    score: "31-24",
    mvp: "Your QB",
    notes: "Inaugural championship"
  },
  // keep adding every year
]
```

The all-time titles leaderboard is calculated automatically from this list.

### 5. Standings
Just update the `record` strings weekly:
```js
standings: {
  afc: [
    { team: "Las Vegas Raiders", record: "7-3", owner: "Dustin" },
    ...
  ],
  nfc: [ ... ]
}
```

---

## Deploy in 60 seconds (recommended)

1. Create a free [Vercel](https://vercel.com) account
2. Drag the `fnsl-tv` folder onto the Vercel dashboard (or connect a GitHub repo)
3. Done. You get a clean URL like `fnsl-tv.vercel.app`
4. Open that URL on your LG TV browser

You can also push to GitHub and enable GitHub Pages.

---

## TV Remote Tips

- **Arrow keys** move focus between cards
- **Enter / OK** opens a stream or VOD
- **Escape** closes the player
- Number keys **1–4** jump to Live / VODs / History / Standings
- Fullscreen button in the top right

---

## Want it even better later?

Possible upgrades you (or I) can add:
- Real-time Twitch live status via their API
- NeonSportz scrape / API if they ever open one
- Multi-stream picture-in-picture view
- Schedule calendar of upcoming games
- Owner profiles + career records
- Push notifications when someone goes live

Just say the word and we can iterate.

---

Built for Dustin & the FNSL crew.  
Go win another one. 🏈

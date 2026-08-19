// ============================================================
// FNSL TV - CONFIG & DATA
// Edit this file to customize your league
// ============================================================

const FNSL_CONFIG = {
  leagueName: "Father N Son League",
  shortName: "FNSL",
  founded: "2024",
  currentSeason: "Season 3",
  defendingChamp: "Las Vegas Raiders",

  // =========================================================
  // AUTOMATIC LIVE DETECTION
  // Put every owner’s Twitch username here (no https://)
  // The app will automatically check who is live and show them.
  // =========================================================
  twitchChannels: [
    // "your_twitch_username",
    // "another_owner_twitch",
    // "third_owner",
  ],

  // =========================================================
  // FEATURED / MANUAL STREAMS (optional but recommended)
  // These always appear in the list.
  // If the channel is also in twitchChannels above, the app
  // will automatically set isLive based on Twitch.
  // =========================================================
  featuredStreams: [
    {
      id: "raiders-home",
      title: "Las Vegas Raiders • Home Stream",
      owner: "Dustin (Owner / Coach)",
      platform: "twitch",
      channel: "",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    }
    // Add more owners the same way
  ],

  // Past VODs – add real YouTube video IDs when you upload games / draft shows
  vods: [
    {
      id: "sb1",
      title: "FNSL Super Bowl I • Raiders vs Chiefs",
      description: "The inaugural championship. Raiders take the first Lombardi.",
      type: "superbowl",
      season: "1",
      platform: "youtube",
      videoId: "",
      date: "2025-02-09",
      teams: ["Las Vegas Raiders", "Kansas City Chiefs"]
    },
    {
      id: "sb2",
      title: "FNSL Super Bowl II",
      description: "Season 2 title game",
      type: "superbowl",
      season: "2",
      platform: "youtube",
      videoId: "",
      date: "2026-02-08",
      teams: []
    },
    {
      id: "draft-s3",
      title: "Season 3 Fantasy Draft",
      description: "Full draft show with commentary",
      type: "draft",
      season: "3",
      platform: "youtube",
      videoId: "",
      date: "2026-08-01",
      teams: []
    }
  ],

  // League History – fill every season
  history: [
    {
      season: 1,
      superBowl: "I",
      champion: "Las Vegas Raiders",
      runnerUp: "Kansas City Chiefs",
      score: "31-24",
      mvp: "",
      notes: "Inaugural FNSL champions"
    },
    {
      season: 2,
      superBowl: "II",
      champion: "Philadelphia Eagles",
      runnerUp: "Buffalo Bills",
      score: "27-20",
      mvp: "",
      notes: ""
    }
  ],

  // Standings – update weekly
  standings: {
    afc: [
      { team: "Las Vegas Raiders", record: "0-0", owner: "Dustin" },
      { team: "Kansas City Chiefs", record: "0-0", owner: "" },
      { team: "Buffalo Bills", record: "0-0", owner: "" },
      { team: "Baltimore Ravens", record: "0-0", owner: "" },
      { team: "Cincinnati Bengals", record: "0-0", owner: "" },
      { team: "Miami Dolphins", record: "0-0", owner: "" },
      { team: "New England Patriots", record: "0-0", owner: "" },
      { team: "New York Jets", record: "0-0", owner: "" },
      { team: "Pittsburgh Steelers", record: "0-0", owner: "" },
      { team: "Cleveland Browns", record: "0-0", owner: "" },
      { team: "Houston Texans", record: "0-0", owner: "" },
      { team: "Indianapolis Colts", record: "0-0", owner: "" },
      { team: "Jacksonville Jaguars", record: "0-0", owner: "" },
      { team: "Tennessee Titans", record: "0-0", owner: "" },
      { team: "Denver Broncos", record: "0-0", owner: "" },
      { team: "Los Angeles Chargers", record: "0-0", owner: "" }
    ],
    nfc: [
      { team: "Philadelphia Eagles", record: "0-0", owner: "" },
      { team: "Dallas Cowboys", record: "0-0", owner: "" },
      { team: "San Francisco 49ers", record: "0-0", owner: "" },
      { team: "Detroit Lions", record: "0-0", owner: "" },
      { team: "Green Bay Packers", record: "0-0", owner: "" },
      { team: "Minnesota Vikings", record: "0-0", owner: "" },
      { team: "Chicago Bears", record: "0-0", owner: "" },
      { team: "New York Giants", record: "0-0", owner: "" },
      { team: "Washington Commanders", record: "0-0", owner: "" },
      { team: "Atlanta Falcons", record: "0-0", owner: "" },
      { team: "Carolina Panthers", record: "0-0", owner: "" },
      { team: "New Orleans Saints", record: "0-0", owner: "" },
      { team: "Tampa Bay Buccaneers", record: "0-0", owner: "" },
      { team: "Arizona Cardinals", record: "0-0", owner: "" },
      { team: "Los Angeles Rams", record: "0-0", owner: "" },
      { team: "Seattle Seahawks", record: "0-0", owner: "" }
    ]
  }
};

// Helper: compute titles count from history
function getTitleCounts() {
  const counts = {};
  FNSL_CONFIG.history.forEach(h => {
    counts[h.champion] = (counts[h.champion] || 0) + 1;
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([team, titles]) => ({ team, titles }));
}

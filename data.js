// ============================================================
// FNSL TV - CONFIG & DATA
// Edit this file to customize your league
// ============================================================

const FNSL_CONFIG = {
  leagueName: "Father N Son League",
  shortName: "FNSL",
  founded: "2018",
  currentSeason: "Season 58",
  defendingChamp: "COACH OCINCO",

  // =========================================================
  // AUTOMATIC LIVE DETECTION
  // Put every owner’s Twitch username here (no https://)
  // The app will automatically check who is live and show them.
  // =========================================================
  twitchChannels: [
    // "fnsldu5t1n812",
    // "cooprelax",
    // "tvkeez",
    // "mr_smokie",
    // "stu07172008",
    // "primestudio1",
    // "fearcloakk",
    // "jay_biebz",
    // "tr904",
    // "bdog5123",
    // "httr_gaming_18",
    // "anticartier",
    // "coachocinco",
    // "almoeydmg",
    // "coolcam_1324__",
    // "fazedarkskin931",
    // "countryswag77",
    // "hotrod55_spf",
    // "jordannoair",
    // "quailman1738",
    // "vurmiciousknid",
    // "rjthedesigner",
    // "dellis19",
    // "youngmosesgaming",
    // "sanchez_717",
    // "beans6613",
    // "iambwo4life",
    // "th30nlyeagle",
    // "jayydash23",
    // "bignewff",
    
  ],

  // =========================================================
  // FEATURED / MANUAL STREAMS (optional but recommended)
  // These always appear in the list.
  // If the channel is also in twitchChannels above, the app
  // will automatically set isLive based on Twitch.
  // =========================================================
  featuredStreams: [
    {
      id: "raiders",
      title: "Las Vegas Raiders • Stream",
      owner: "Dustin (Owner / Coach)",
      platform: "twitch",
      channel: "fnsldu5t1n812",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "packers",
      title: "Green Bay Packers • Stream",
      owner: "COOP (Owner / Coach)",
      platform: "twitch",
      channel: "cooprelax",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "bears",
      title: "Chicago Bears • Stream",
      owner: "Keezy (Owner / Coach)",
      platform: "twitch",
      channel: "tvkeez",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "giants",
      title: "New York Giants • Stream",
      owner: "Smokie (Owner / Coach)",
      platform: "twitch",
      channel: "mr_smokie",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "eagles",
      title: "Philidelphia Eagles • Stream",
      owner: "Stu (Owner / Coach)",
      platform: "twitch",
      channel: "stu07172008",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "patriots",
      title: "New England Patriots • Stream",
      owner: "Primetime (Owner / Coach)",
      platform: "twitch",
      channel: "primestudio1",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "colts",
      title: "Indianapolis Colts • Stream",
      owner: "Willie (Owner / Coach)",
      platform: "twitch",
      channel: "fearcloakk",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "rams",
      title: "Las Angeles Rams • Stream",
      owner: "Jay B (Owner / Coach)",
      platform: "twitch",
      channel: "jay_biebz",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "chiefs",
      title: "Kansas City Chiefs • Stream",
      owner: "tr904 (Owner / Coach)",
      platform: "twitch",
      channel: "tr904",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "cardinals",
      title: "Arizona Cardinals • Stream",
      owner: "BDog (Owner / Coach)",
      platform: "twitch",
      channel: "bdog5123",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "commanders",
      title: "Washington Commanders • Stream",
      owner: "Redskins4life (Owner / Coach)",
      platform: "twitch",
      channel: "httr_gaming_18",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "texans",
      title: "Houston Texans • Stream",
      owner: "HighlyAnti (Owner / Coach)",
      platform: "twitch",
      channel: "anticartier",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "titans",
      title: "Tennessee Titans • Stream",
      owner: "Coach Ocinco (Owner / Coach)",
      platform: "twitch",
      channel: "coachocinco",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "steelers",
      title: "Pittsburgh Steelers • Stream",
      owner: "AlmoneyDMG (Owner / Coach)",
      platform: "twitch",
      channel: "almoeydmg",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "dolphins",
      title: "Miami Dolphins • Stream",
      owner: "CoolCam (Owner / Coach)",
      platform: "twitch",
      channel: "coolcam_1324__",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "lions",
      title: "Detroit Lions • Stream",
      owner: "DaytoDayDavis (Owner / Coach)",
      platform: "twitch",
      channel: "fazedarkskin931",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "panthers",
      title: "Carolina Panthers • Stream",
      owner: "countryswag77 (Owner / Coach)",
      platform: "twitch",
      channel: "countryswag77",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "vikings",
      title: "Minnesota Vikings • Stream",
      owner: "Rod (Owner / Coach)",
      platform: "twitch",
      channel: "hotrod55_spf",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "cowboys",
      title: "Dallas Cowboys • Stream",
      owner: "Jordan (Owner / Coach)",
      platform: "twitch",
      channel: "jordannoair",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "chargers",
      title: "Las Angeles Chargers • Stream",
      owner: "Quailman (Owner / Coach)",
      platform: "twitch",
      channel: "quailman1738",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "broncos",
      title: "Denver Broncos • Stream",
      owner: "Vurm (Owner / Coach)",
      platform: "twitch",
      channel: "vurmiciousknid",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "49ers",
      title: "San Francisco 49ers • Stream",
      owner: "RJ (Owner / Coach)",
      platform: "twitch",
      channel: "rjthedesigner",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "bengals",
      title: "Cincinnatti Bengals • Stream",
      owner: "dellis19 (Owner / Coach)",
      platform: "twitch",
      channel: "dellis19",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "jets",
      title: "New York Jets • Stream",
      owner: "YoungMoses (Owner / Coach)",
      platform: "twitch",
      channel: "youngmosesgaming",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "seahawks",
      title: "Seattle Seahawks • Stream",
      owner: "Patrik (Owner / Coach)",
      platform: "twitch",
      channel: "sanchez_717",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "buccaneers",
      title: "Tampa Bay Buccaneers • Stream",
      owner: "Vjackson (Owner / Coach)",
      platform: "twitch",
      channel: "beans6613",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "falcons",
      title: "Atlanta Falcons • Stream",
      owner: "BWO (Owner / Coach)",
      platform: "twitch",
      channel: "iambwo4life",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "ravens",
      title: "Baltimore Ravens • Stream",
      owner: "Tchanka (Owner / Coach)",
      platform: "twitch",
      channel: "th30nlyeagle",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "browns",
      title: "Cleveland Browns • Stream",
      owner: "Mr.Notification (Owner / Coach)",
      platform: "twitch",
      channel: "jayydash23",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
    {
      id: "jags",
      title: "Jacksonville Jaguars • Stream",
      owner: "BigNewff (Owner / Coach)",
      platform: "twitch",
      channel: "bignewff",                 // put your Twitch username here (same as in twitchChannels)
      isLive: false                // will be overridden automatically if channel is live
    },
   
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

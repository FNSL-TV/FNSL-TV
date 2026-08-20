// ============================================================
// FNSL TV - CONFIG & DATA  (LOCKED IN - permanent base data)
// Father N Son League
// ============================================================

const FNSL_CONFIG = {
  leagueName: "Father N Son League",
  shortName: "FNSL",
  founded: "2018",
  cycleSeason: "M27 - S1",      // current Madden cycle (update when new Madden drops)
  currentSeason: "Season 58",   // lifetime season count (bump after each Super Bowl)
  defendingChamp: "Jacksonville Jaguars",
  defendingCoach: "Coach Ocinco",

  // =========================================================
  // AUTOMATIC LIVE DETECTION
  // =========================================================
  twitchChannels: [
    "fnsldu5t1n812",
    "cooprelax",
    "tvkeez",
    "mr_smokie",
    "stu07172008",
    "primestudio1",
    "fearcloakk",
    "jay_biebz",
    "tr904",
    "bdog5123",
    "httr_gaming_18",
    "anticartier",
    "coachocinco",
    "almoeydmg",
    "coolcam_1324__",
    "fazedarkskin931",
    "countryswag77",
    "hotrod55_spf",
    "jordannoair",
    "quailman1738",
    "vurmiciousknid",
    "rjthedesigner",
    "dellis19",
    "youngmosesgaming",
    "sanchez_717",
    "beans6613",
    "iambwo4life",
    "th30nlyeagle",
    "jayydash23",
    "bignewff"
  ],

  // =========================================================
  // FEATURED STREAMS (all teams)
  // =========================================================
  featuredStreams: [
    {
      id: "raiders",
      title: "Las Vegas Raiders • Stream",
      owner: "Dustin (Owner / Coach)",
      platform: "twitch",
      channel: "fnsldu5t1n812",
      isLive: false
    },
    {
      id: "packers",
      title: "Green Bay Packers • Stream",
      owner: "COOP (Owner / Coach)",
      platform: "twitch",
      channel: "cooprelax",
      isLive: false
    },
    {
      id: "bears",
      title: "Chicago Bears • Stream",
      owner: "Keezy (Owner / Coach)",
      platform: "twitch",
      channel: "tvkeez",
      isLive: false
    },
    {
      id: "giants",
      title: "New York Giants • Stream",
      owner: "Smokie (Owner / Coach)",
      platform: "twitch",
      channel: "mr_smokie",
      isLive: false
    },
    {
      id: "eagles",
      title: "Philadelphia Eagles • Stream",
      owner: "Stu (Owner / Coach)",
      platform: "twitch",
      channel: "stu07172008",
      isLive: false
    },
    {
      id: "patriots",
      title: "New England Patriots • Stream",
      owner: "Primetime (Owner / Coach)",
      platform: "twitch",
      channel: "primestudio1",
      isLive: false
    },
    {
      id: "colts",
      title: "Indianapolis Colts • Stream",
      owner: "Willie (Owner / Coach)",
      platform: "twitch",
      channel: "fearcloakk",
      isLive: false
    },
    {
      id: "rams",
      title: "Los Angeles Rams • Stream",
      owner: "Jay B (Owner / Coach)",
      platform: "twitch",
      channel: "jay_biebz",
      isLive: false
    },
    {
      id: "chiefs",
      title: "Kansas City Chiefs • Stream",
      owner: "tr904 (Owner / Coach)",
      platform: "twitch",
      channel: "tr904",
      isLive: false
    },
    {
      id: "cardinals",
      title: "Arizona Cardinals • Stream",
      owner: "BDog (Owner / Coach)",
      platform: "twitch",
      channel: "bdog5123",
      isLive: false
    },
    {
      id: "commanders",
      title: "Washington Commanders • Stream",
      owner: "Redskins4life (Owner / Coach)",
      platform: "twitch",
      channel: "httr_gaming_18",
      isLive: false
    },
    {
      id: "texans",
      title: "Houston Texans • Stream",
      owner: "HighlyAnti (Owner / Coach)",
      platform: "twitch",
      channel: "anticartier",
      isLive: false
    },
    {
      id: "titans",
      title: "Tennessee Titans • Stream",
      owner: "Coach Ocinco (Owner / Coach)",
      platform: "twitch",
      channel: "coachocinco",
      isLive: false
    },
    {
      id: "steelers",
      title: "Pittsburgh Steelers • Stream",
      owner: "AlmoneyDMG (Owner / Coach)",
      platform: "twitch",
      channel: "almoeydmg",
      isLive: false
    },
    {
      id: "dolphins",
      title: "Miami Dolphins • Stream",
      owner: "CoolCam (Owner / Coach)",
      platform: "twitch",
      channel: "coolcam_1324__",
      isLive: false
    },
    {
      id: "lions",
      title: "Detroit Lions • Stream",
      owner: "DaytoDayDavis (Owner / Coach)",
      platform: "twitch",
      channel: "fazedarkskin931",
      isLive: false
    },
    {
      id: "panthers",
      title: "Carolina Panthers • Stream",
      owner: "countryswag77 (Owner / Coach)",
      platform: "twitch",
      channel: "countryswag77",
      isLive: false
    },
    {
      id: "vikings",
      title: "Minnesota Vikings • Stream",
      owner: "Rod (Owner / Coach)",
      platform: "twitch",
      channel: "hotrod55_spf",
      isLive: false
    },
    {
      id: "cowboys",
      title: "Dallas Cowboys • Stream",
      owner: "Jordan (Owner / Coach)",
      platform: "twitch",
      channel: "jordannoair",
      isLive: false
    },
    {
      id: "chargers",
      title: "Los Angeles Chargers • Stream",
      owner: "Quailman (Owner / Coach)",
      platform: "twitch",
      channel: "quailman1738",
      isLive: false
    },
    {
      id: "broncos",
      title: "Denver Broncos • Stream",
      owner: "Vurm (Owner / Coach)",
      platform: "twitch",
      channel: "vurmiciousknid",
      isLive: false
    },
    {
      id: "49ers",
      title: "San Francisco 49ers • Stream",
      owner: "RJ (Owner / Coach)",
      platform: "twitch",
      channel: "rjthedesigner",
      isLive: false
    },
    {
      id: "bengals",
      title: "Cincinnati Bengals • Stream",
      owner: "dellis19 (Owner / Coach)",
      platform: "twitch",
      channel: "dellis19",
      isLive: false
    },
    {
      id: "jets",
      title: "New York Jets • Stream",
      owner: "YoungMoses (Owner / Coach)",
      platform: "twitch",
      channel: "youngmosesgaming",
      isLive: false
    },
    {
      id: "seahawks",
      title: "Seattle Seahawks • Stream",
      owner: "Patrik (Owner / Coach)",
      platform: "twitch",
      channel: "sanchez_717",
      isLive: false
    },
    {
      id: "buccaneers",
      title: "Tampa Bay Buccaneers • Stream",
      owner: "Vjackson (Owner / Coach)",
      platform: "twitch",
      channel: "beans6613",
      isLive: false
    },
    {
      id: "falcons",
      title: "Atlanta Falcons • Stream",
      owner: "BWO (Owner / Coach)",
      platform: "twitch",
      channel: "iambwo4life",
      isLive: false
    },
    {
      id: "ravens",
      title: "Baltimore Ravens • Stream",
      owner: "Tchanka (Owner / Coach)",
      platform: "twitch",
      channel: "th30nlyeagle",
      isLive: false
    },
    {
      id: "browns",
      title: "Cleveland Browns • Stream",
      owner: "Mr.Notification (Owner / Coach)",
      platform: "twitch",
      channel: "jayydash23",
      isLive: false
    },
    {
      id: "jaguars",
      title: "Jacksonville Jaguars • Stream",
      owner: "Coach Ocinco (Owner / Coach)",
      platform: "twitch",
      channel: "coachocinco",
      isLive: false
    }
  ],

  // =========================================================
  // PAST VODs (add YouTube IDs later as you upload them)
  // =========================================================
  vods: [
    {
      id: "vod-1",
      title: "FNSL Stream / Game VOD",
      description: "Uploaded FNSL content",
      type: "game",
      season: "58",
      platform: "youtube",
      videoId: "-Uu0btkah3Y",
      date: "2026-08-19",
      teams: []
    }
  ],

  // =========================================================
  // LEAGUE LEADERS (slideshow) — update from NeonSportz / stats
  // =========================================================
  topPlayers: [
    { pos: "QB", name: "Update Me", team: "Team", stat: "0 YDS / 0 TD", rank: 1 },
    { pos: "RB", name: "Update Me", team: "Team", stat: "0 YDS / 0 TD", rank: 1 },
    { pos: "WR", name: "Update Me", team: "Team", stat: "0 YDS / 0 TD", rank: 1 },
    { pos: "TE", name: "Update Me", team: "Team", stat: "0 YDS / 0 TD", rank: 1 },
    { pos: "DEF", name: "Update Me", team: "Team", stat: "0 SACKS", rank: 1 }
  ],


  // =========================================================
  // LEAGUE HISTORY – All 57 Super Bowls locked in
  // =========================================================
  history: [
    // Madden 19
    { season: 1,  superBowl: "I",   champion: "Indianapolis Colts",          runnerUp: "", score: "", mvp: "24ADREW", notes: "Madden 19" },
    { season: 2,  superBowl: "II",  champion: "Washington Football Team",    runnerUp: "", score: "", mvp: "JRH8910", notes: "Madden 19" },
    { season: 3,  superBowl: "III", champion: "Carolina Panthers",           runnerUp: "", score: "", mvp: "JON", notes: "Madden 19" },
    { season: 4,  superBowl: "IV",  champion: "Carolina Panthers",           runnerUp: "", score: "", mvp: "", notes: "Madden 19" },
    { season: 5,  superBowl: "V",   champion: "Jacksonville Jaguars",        runnerUp: "", score: "", mvp: "YOUNGMOSESDMG", notes: "Madden 19" },

    // Madden 20
    { season: 6,  superBowl: "VI",   champion: "Cleveland Browns",           runnerUp: "", score: "", mvp: "CHUCKESMILES", notes: "Madden 20" },
    { season: 7,  superBowl: "VII",  champion: "Green Bay Packers",          runnerUp: "", score: "", mvp: "JUDAH BES", notes: "Madden 20" },
    { season: 8,  superBowl: "VIII", champion: "Miami Dolphins",             runnerUp: "", score: "", mvp: "DEBARGE 313", notes: "Madden 20" },
    { season: 9,  superBowl: "IX",   champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "JACK.FLANIGAN13", notes: "Madden 20" },
    { season: 10, superBowl: "X",    champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "", notes: "Madden 20" },
    { season: 11, superBowl: "XI",   champion: "Los Angeles Chargers",       runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 20" },
    { season: 12, superBowl: "XII",  champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "TWAN ZOOTED", notes: "Madden 20" },
    { season: 13, superBowl: "XIII", champion: "Philadelphia Eagles",        runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 20" },

    // Madden 21
    { season: 14, superBowl: "XIV",  champion: "Dallas Cowboys",             runnerUp: "", score: "", mvp: "PATS8312", notes: "Madden 21" },
    { season: 15, superBowl: "XV",   champion: "Carolina Panthers",          runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 21" },
    { season: 16, superBowl: "XVI",  champion: "Arizona Cardinals",          runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 21" },
    { season: 17, superBowl: "XVII", champion: "Los Angeles Chargers",       runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 21" },
    { season: 18, superBowl: "XVIII",champion: "Miami Dolphins",             runnerUp: "", score: "", mvp: "IRONMAN170", notes: "Madden 21" },
    { season: 19, superBowl: "XIX",  champion: "Kansas City Chiefs",         runnerUp: "", score: "", mvp: "EIFVIL", notes: "Madden 21" },
    { season: 20, superBowl: "XX",   champion: "New England Patriots",       runnerUp: "", score: "", mvp: "SD YOUNG", notes: "Madden 21" },
    { season: 21, superBowl: "XXI",  champion: "Arizona Cardinals",          runnerUp: "", score: "", mvp: "TR904", notes: "Madden 21" },

    // Madden 22
    { season: 22, superBowl: "XXII", champion: "Detroit Lions",              runnerUp: "", score: "", mvp: "MrMonarch", notes: "Madden 22" },
    { season: 23, superBowl: "XXIII",champion: "Kansas City Chiefs",         runnerUp: "", score: "", mvp: "DEllis19", notes: "Madden 22" },
    { season: 24, superBowl: "XXIV", champion: "Pittsburgh Steelers",        runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 22" },
    { season: 25, superBowl: "XXV",  champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "COOP", notes: "Madden 22" },
    { season: 26, superBowl: "XXVI", champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "COOP", notes: "Madden 22" },
    { season: 27, superBowl: "XXVII",champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "COOP", notes: "Madden 22" },
    { season: 28, superBowl: "XXVIII",champion: "Minnesota Vikings",         runnerUp: "", score: "", mvp: "COOP", notes: "Madden 22 – 4-peat" },

    // Madden 23
    { season: 29, superBowl: "XXIX", champion: "Cincinnati Bengals",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 23" },
    { season: 30, superBowl: "XXX",  champion: "Cincinnati Bengals",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 23" },
    { season: 31, superBowl: "XXXI", champion: "Jacksonville Jaguars",       runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 23" },
    { season: 32, superBowl: "XXXII",champion: "Las Vegas Raiders",          runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 23" },
    { season: 33, superBowl: "XXXIII",champion: "New York Jets",             runnerUp: "", score: "", mvp: "PORTLAND STORM", notes: "Madden 23" },
    { season: 34, superBowl: "XXXIV",champion: "Detroit Lions",              runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 23" },
    { season: 35, superBowl: "XXXV", champion: "Tampa Bay Buccaneers",       runnerUp: "", score: "", mvp: "TAYLORS6G", notes: "Madden 23" },
    { season: 36, superBowl: "XXXVI",champion: "Chicago Bears",              runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 23" },
    { season: 37, superBowl: "XXXVII",champion: "Cleveland Browns",          runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 23" },

    // Madden 24
    { season: 38, superBowl: "XXXVIII", champion: "Denver Broncos",          runnerUp: "", score: "", mvp: "S-TRADA", notes: "Madden 24" },
    { season: 39, superBowl: "XXXIX",   champion: "Baltimore Ravens",        runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 24" },
    { season: 40, superBowl: "XL",      champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24" },
    { season: 41, superBowl: "XLI",     champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24" },
    { season: 42, superBowl: "XLII",    champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24 – 3-peat" },
    { season: 43, superBowl: "XLIII",   champion: "Los Angeles Chargers",    runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 24" },
    { season: 44, superBowl: "XLIV",    champion: "Las Vegas Raiders",       runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 24" },

    // Madden 25
    { season: 45, superBowl: "XLV",   champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25" },
    { season: 46, superBowl: "XLVI",  champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25" },
    { season: 47, superBowl: "XLVII", champion: "Denver Broncos",            runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 25" },
    { season: 48, superBowl: "XLVIII",champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25" },
    { season: 49, superBowl: "XLIX",  champion: "Seattle Seahawks",          runnerUp: "", score: "", mvp: "COOP", notes: "Madden 25" },
    { season: 50, superBowl: "L",     champion: "Denver Broncos",            runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 25" },

    // Madden 26
    { season: 51, superBowl: "LI",    champion: "New York Giants",           runnerUp: "", score: "", mvp: "SMOKIE", notes: "Madden 26" },
    { season: 52, superBowl: "LII",   champion: "New York Giants",           runnerUp: "", score: "", mvp: "SMOKIE", notes: "Madden 26" },
    { season: 53, superBowl: "LIII",  champion: "Baltimore Ravens",          runnerUp: "", score: "", mvp: "BWO", notes: "Madden 26" },
    { season: 54, superBowl: "LIV",   champion: "San Francisco 49ers",       runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 26" },
    { season: 55, superBowl: "LV",    champion: "Detroit Lions",             runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 26" },
    { season: 56, superBowl: "LVI",   champion: "Las Vegas Raiders",         runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 26" },
    { season: 57, superBowl: "LVII",  champion: "Jacksonville Jaguars",      runnerUp: "", score: "", mvp: "COACH OCINCO", notes: "Madden 26 – Current defending champions" }
  ],

  // =========================================================
  // STANDINGS (update weekly)
  // =========================================================
  standings: {
    afc: [
      { team: "Buffalo Bills", record: "16-1", owner: "" },
      { team: "Jacksonville Jaguars", record: "14-3", owner: "Coach Ocinco" },
      { team: "New York Jets", record: "13-4", owner: "YoungMoses" },
      { team: "Indianapolis Colts", record: "13-4", owner: "Willie" },
      { team: "Denver Broncos", record: "12-5", owner: "Vurm" },
      { team: "Cincinnati Bengals", record: "10-7", owner: "dellis19" },
      { team: "New England Patriots", record: "8-9", owner: "Primetime" },
      { team: "Pittsburgh Steelers", record: "8-9", owner: "AlmoneyDMG" },
      { team: "Houston Texans", record: "6-11", owner: "HighlyAnti" },
      { team: "Cleveland Browns", record: "6-11", owner: "Mr.Notification" },
      { team: "Kansas City Chiefs", record: "6-11", owner: "tr904" },
      { team: "Los Angeles Chargers", record: "5-12", owner: "Quailman" },
      { team: "Las Vegas Raiders", record: "3-14", owner: "Dustin" },
      { team: "Tennessee Titans", record: "1-16", owner: "Coach Ocinco" },
      { team: "Miami Dolphins", record: "1-16", owner: "CoolCam" },
      { team: "Baltimore Ravens", record: "1-16", owner: "Tchanka" },
    ],
    nfc: [
      { team: "Atlanta Falcons", record: "17-0", owner: "BWO" },
      { team: "Seattle Seahawks", record: "16-1", owner: "Patrik" },
      { team: "New York Giants", record: "15-2", owner: "Smokie" },
      { team: "Detroit Lions", record: "13-4", owner: "DaytoDayDavis" },
      { team: "Arizona Cardinals", record: "11-6", owner: "BDog" },
      { team: "Chicago Bears", record: "11-6", owner: "Keezy" },
      { team: "Green Bay Packers", record: "10-7", owner: "COOP" },
      { team: "Los Angeles Rams", record: "10-7", owner: "Jay B" },
      { team: "Carolina Panthers", record: "10-7", owner: "countryswag77" },
      { team: "Tampa Bay Buccaneers", record: "9-8", owner: "Vjackson" },
      { team: "Philadelphia Eagles", record: "9-8", owner: "Stu" },
      { team: "Washington Commanders", record: "7-10", owner: "Redskins4life" },
      { team: "San Francisco 49ers", record: "3-14", owner: "RJ" },
      { team: "Dallas Cowboys", record: "3-14", owner: "Jordan" },
      { team: "Minnesota Vikings", record: "3-14", owner: "Rod" },
      { team: "New Orleans Saints", record: "2-15", owner: "" },
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

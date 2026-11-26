// ============================================================
// FNSL TV - CONFIG & DATA  (LOCKED IN - permanent base data)
// Father N Son League
// ============================================================

const FNSL_CONFIG = {
  leagueName: "Father N Son League",
  shortName: "FNSL",
  founded: "2018",
  cycleSeason: "M27 - S3",      // current Madden cycle (update when new Madden drops)
  currentSeason: "Season 60",   // lifetime season count (bump after each Super Bowl)
  defendingChamp: "Atlanta Falcons",
  defendingCoach: "BWO",

  // =========================================================
  // SOCIAL / COMMUNITY LINKS (logo buttons on the site)
  // Leave url empty ("") to hide that button
  // =========================================================
  socialLinks: [
    {
      id: "discord",
      label: "Discord",
      url: "https://discord.gg/eQ8UDrzyZp",
      color: "#5865F2"
    },
    {
      id: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@fnslmadden",
      color: "#FF0000"
    },
    {
      id: "x",
      label: "X",
      url: "https://x.com/FNSLMadden",
      color: "#e7e9ea"
    },
    {
      id: "neonsportz",
      label: "NeonSportz",
      url: "https://neonsportz.com/leagues/FNSL",
      color: "#22c55e"
    }
  ],

  // =========================================================
  // AUTOMATIC LIVE DETECTION
  // =========================================================
  twitchChannels: [
    "fnsldu5t1n812",
    "bk_subjectzero",
    "chopshotta_",
    "mr_smokie",
    "stu07172008",
    "primestudio1",
    "tr904",
    "bdog5123",
    "anticartier",
    "coachocinco",
    "almoeydmg",
    "coolcam_1324__",
    "brycebrizi",
    "countryswag77",
    "hotrod55_spf",
    "jordannoair",
    "quailman1738",
    "vurmiciousknid",
    "sanchez_717",
    "youngmosesgaming",
    "raywalkertv",
    "jaysixz",
    "beans6613",
    "iambwo4life",
    "th30nlyeagle",
    "jayydash23",
    "amazingcar678"
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
      owner: "BK_SubjectZero (Owner / Coach)",
      platform: "twitch",
      channel: "bk_subjectzero",
      isLive: false
    },
    {
      id: "bears",
      title: "Chicago Bears • Stream",
      owner: "Chop (Owner / Coach)",
      platform: "twitch",
      channel: "chopshotta_",
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
      owner: "BryceBrizi (Owner / Coach)",
      platform: "twitch",
      channel: "brycebrizi",
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
      id: "bengals",
      title: "Cincinnati Bengals • Stream",
      owner: "Patrik (Owner / Coach)",
      platform: "twitch",
      channel: "sanchez_717",
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
      owner: "Benny0972 (Owner / Coach)",
      platform: "twitch",
      channel: "raywalkertv",
      isLive: false
    },
    {
      id: "49ers",
      title: "San Francisco 49ers • Stream",
      owner: "JaySixz (Owner / Coach)",
      platform: "twitch",
      channel: "jaysixz",
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
      id: "saints",
      title: "New Orleans Saints • Stream",
      owner: "AmazingCar (Owner / Coach)",
      platform: "twitch",
      channel: "amazingcar678",
      isLive: false
    }
  ],

  // =========================================================
  // PAST VODs (add YouTube IDs later as you upload them)
  // =========================================================

  vods: [
    // Chronological — older FNSL content first
    {
      id: "vod-podcast-ep1a",
      title: "Podcast EP 1",
      description: "FNSL Podcast Episode 1",
      type: "show",
      season: "",
      platform: "youtube",
      videoId: "TkJfcJo0xck",
      date: "2020-01-01",
      teams: []
    },
    {
      id: "vod-podcast-ep1b",
      title: "FNSL Podcast EP 1",
      description: "FNSL Podcast Episode 1",
      type: "show",
      season: "",
      platform: "youtube",
      videoId: "kQrBSRkt2Tg",
      date: "2020-01-02",
      teams: []
    },
    {
      id: "vod-amari-interview",
      title: "Amari Post Game Interview",
      description: "Post-game interview — Made with Clipchamp",
      type: "interview",
      season: "",
      platform: "youtube",
      videoId: "VM_nIIEH0R4",
      date: "2020-06-01",
      teams: []
    },
    {
      id: "vod-podcast-ep3",
      title: "FNSL Podcast EP 3",
      description: "FNSL Podcast Episode 3",
      type: "show",
      season: "",
      platform: "youtube",
      videoId: "kq9PQ7XZCL0",
      date: "2021-01-01",
      teams: []
    },
    {
      id: "vod-podcast-ep4",
      title: "FNSL Podcast EP 4",
      description: "FNSL Podcast Episode 4",
      type: "show",
      season: "",
      platform: "youtube",
      videoId: "08VyLP2MZGI",
      date: "2021-06-01",
      teams: []
    },
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
  // TICKER — scores, matchups, announcements (scrolls on bottom)
  // type: "final" | "live" | "upcoming" | "note"
  // =========================================================
  tickerItems: [
    { type: "note", text: "FNSL M27-S3 Week 6 — Watch live on FNSL.TV" },
    { type: "note", text: "AFC leader: Tennessee Titans (6-0)" },
    { type: "note", text: "NFC leader: Minnesota Vikings (5-0)" },
    { type: "final", text: "WK5 Cardinals 38 @ Patriots 28" },
    { type: "final", text: "WK5 Giants 31 @ Colts 14" },
    { type: "final", text: "WK5 Bears 27 @ Texans 7" },
    { type: "final", text: "WK5 Steelers 37 @ Bengals 10" },
    { type: "final", text: "WK5 49ers 29 @ Rams 28" },
    { type: "final", text: "WK5 Seahawks 34 @ Jets 37" },
    { type: "final", text: "WK5 Chiefs 37 @ Saints 10" },
    { type: "final", text: "WK5 Packers 34 @ Commanders 30" },
    { type: "final", text: "WK5 Jaguars 14 @ Titans 38" },
    { type: "final", text: "WK5 Bills 17 @ Dolphins 24" },
    { type: "final", text: "WK5 Panthers 14 @ Buccaneers 20" },
    { type: "final", text: "WK5 Chargers 38 @ Raiders 21" },
    { type: "final", text: "WK5 Broncos 30 @ Falcons 20" },
    { type: "final", text: "WK5 Cowboys 21 @ Eagles 18" },
    { type: "final", text: "WK5 Lions 0 @ Vikings 47" },
    { type: "final", text: "WK5 Browns 34 @ Ravens 27" },
    { type: "upcoming", text: "WK6 Broncos @ Buccaneers" },
    { type: "upcoming", text: "WK6 Commanders @ Eagles" },
    { type: "upcoming", text: "WK6 Ravens @ Cowboys" },
    { type: "upcoming", text: "WK6 Bears @ Lions" },
    { type: "upcoming", text: "WK6 Raiders @ Dolphins" },
    { type: "upcoming", text: "WK6 Bills @ 49ers" },
    { type: "upcoming", text: "WK6 Bengals @ Patriots" },
    { type: "upcoming", text: "WK6 Giants @ Saints" },
    { type: "upcoming", text: "WK6 Jaguars @ Chargers" },
    { type: "upcoming", text: "WK6 Browns @ Chiefs" },
    { type: "upcoming", text: "WK6 Cardinals @ Seahawks" },
    { type: "note", text: "Defending champ: Atlanta Falcons · BWO" }
  ],

  // =========================================================
  // LEAGUE LEADERS (slideshow) — update from NeonSportz / stats
  // =========================================================
  topPlayers: [
    {
      title: "PASSING YARDS",
      leaders: [
        { rank: 1, name: "Jordan Love", team: "GB", stat: "1627 YDS · 17 TD" },
        { rank: 2, name: "Cam Newton", team: "CAR", stat: "1550 YDS · 10 TD" },
        { rank: 3, name: "Jalen Milroe", team: "SEA", stat: "1496 YDS · 16 TD" },
        { rank: 4, name: "Taylen Green", team: "CLE", stat: "1473 YDS · 15 TD" },
        { rank: 5, name: "Jaxson Dart", team: "NYG", stat: "1462 YDS · 12 TD" }
      ]
    },
    {
      title: "RUSHING YARDS",
      leaders: [
        { rank: 1, name: "Chris Johnson", team: "TEN", stat: "1260 YDS · 14 TD" },
        { rank: 2, name: "Adrian Peterson", team: "MIN", stat: "793 YDS · 11 TD" },
        { rank: 3, name: "Jeremiyah Love", team: "AZ", stat: "696 YDS · 4 TD" },
        { rank: 4, name: "Trey Benson", team: "DEN", stat: "695 YDS · 7 TD" },
        { rank: 5, name: "Bijan Robinson", team: "ATL", stat: "546 YDS · 5 TD" }
      ]
    },
    {
      title: "RECEIVING YARDS",
      leaders: [
        { rank: 1, name: "Rashee Rice", team: "LAR", stat: "528 YDS · 8 TD" },
        { rank: 2, name: "Nico Collins", team: "HOU", stat: "525 YDS · 3 TD" },
        { rank: 3, name: "Eddie Kennison", team: "KC", stat: "490 YDS · 4 TD" },
        { rank: 4, name: "Kevin Santos", team: "CAR", stat: "486 YDS · 4 TD" },
        { rank: 5, name: "Christian Watson", team: "GB", stat: "481 YDS · 6 TD" }
      ]
    },
    {
      title: "TE RECEIVING",
      leaders: [
        { rank: 1, name: "Antonio Gates", team: "LAC", stat: "380 YDS · 6 TD" },
        { rank: 2, name: "Trey McBride", team: "AZ", stat: "354 YDS · 2 TD" },
        { rank: 3, name: "Rashawn Williams", team: "NE", stat: "347 YDS · 3 TD" },
        { rank: 4, name: "Theo Johnson", team: "NYG", stat: "304 YDS · 2 TD" },
        { rank: 5, name: "Darren Waller", team: "CAR", stat: "292 YDS · 3 TD" }
      ]
    },
    {
      title: "SACKS",
      leaders: [
        { rank: 1, name: "Calijah Kancey", team: "TB", stat: "10 SACKS" },
        { rank: 2, name: "Byron Young", team: "LAR", stat: "8.5 SACKS" },
        { rank: 3, name: "Jared Verse", team: "CLE", stat: "8 SACKS" },
        { rank: 4, name: "Micah Parsons", team: "GB", stat: "8 SACKS" },
        { rank: 5, name: "Nik Bonitto", team: "DEN", stat: "6.5 SACKS" }
      ]
    },
    {
      title: "INTERCEPTIONS",
      leaders: [
        { rank: 1, name: "Bryce Brackens", team: "LAC", stat: "5 INT" },
        { rank: 2, name: "Derek Stingley Jr", team: "HOU", stat: "4 INT" },
        { rank: 3, name: "Dillon Jefferson", team: "TEN", stat: "4 INT" },
        { rank: 4, name: "Andre Cisco", team: "NYJ", stat: "3 INT" },
        { rank: 5, name: "Andrew Mukuba", team: "PHI", stat: "3 INT" }
      ]
    },
    {
      title: "TACKLES",
      leaders: [
        { rank: 1, name: "Foyesade Oluokun", team: "JAX", stat: "39 TKL" },
        { rank: 2, name: "Trenton Simpson", team: "NE", stat: "38 TKL" },
        { rank: 3, name: "Taron Johnson", team: "IND", stat: "31 TKL" },
        { rank: 4, name: "A.J. Haulcy", team: "IND", stat: "30 TKL" },
        { rank: 5, name: "Kamren Kinchens", team: "JAX", stat: "29 TKL" }
      ]
    },
    {
      title: "KICKING",
      leaders: [
        { rank: 1, name: "Ryan Fitzgerald", team: "CAR", stat: "10/10 FG" },
        { rank: 2, name: "Chase McLaughlin", team: "NYJ", stat: "9/9 FG" },
        { rank: 3, name: "Eddy Pineiro", team: "SF", stat: "9/9 FG" },
        { rank: 4, name: "Joshua Karty", team: "CHI", stat: "8/10 FG" },
        { rank: 5, name: "Ben Tolbert", team: "DET", stat: "8/9 FG" }
      ]
    }
  ],


  // =========================================================
  // LEAGUE HISTORY – All 57 Super Bowls locked in
  // =========================================================
  history: [
    // Madden 19
    { season: 1,  superBowl: "I",   champion: "Indianapolis Colts",          runnerUp: "", score: "", mvp: "24ADREW", notes: "Madden 19", banner: "banners/sb-1.svg" },
    { season: 2,  superBowl: "II",  champion: "Washington Football Team",    runnerUp: "", score: "", mvp: "JRH8910", notes: "Madden 19", banner: "banners/sb-2.svg" },
    { season: 3,  superBowl: "III", champion: "Carolina Panthers",           runnerUp: "", score: "", mvp: "JON", notes: "Madden 19", banner: "banners/sb-3.svg" },
    { season: 4,  superBowl: "IV",  champion: "Carolina Panthers",           runnerUp: "", score: "", mvp: "JON", notes: "Madden 19 – back-to-back", banner: "banners/sb-4.svg" },
    { season: 5,  superBowl: "V",   champion: "Jacksonville Jaguars",        runnerUp: "", score: "", mvp: "YOUNGMOSESDMG", notes: "Madden 19", banner: "banners/sb-5.svg" },

    // Madden 20
    { season: 6,  superBowl: "VI",   champion: "Cleveland Browns",           runnerUp: "", score: "", mvp: "CHUCKESMILES", notes: "Madden 20", banner: "banners/sb-6.svg" },
    { season: 7,  superBowl: "VII",  champion: "Green Bay Packers",          runnerUp: "", score: "", mvp: "JUDAH BES", notes: "Madden 20", banner: "banners/sb-7.svg" },
    { season: 8,  superBowl: "VIII", champion: "Miami Dolphins",             runnerUp: "", score: "", mvp: "DEBARGE 313", notes: "Madden 20", banner: "banners/sb-8.svg" },
    { season: 9,  superBowl: "IX",   champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "JACK.FLANAGAN13", notes: "Madden 20", banner: "banners/sb-9.svg" },
    { season: 10, superBowl: "X",    champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "JACK.FLANAGAN13", notes: "Madden 20 – back-to-back", banner: "banners/sb-10.svg" },
    { season: 11, superBowl: "XI",   champion: "Condors", titleTeam: "Los Angeles Chargers", runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 20", banner: "banners/sb-11.svg" },
    { season: 12, superBowl: "XII",  champion: "Seattle Seahawks",           runnerUp: "", score: "", mvp: "TWAN ZOOTED", notes: "Madden 20", banner: "banners/sb-12.svg" },
    { season: 13, superBowl: "XIII", champion: "Philadelphia Eagles",        runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 20", banner: "banners/sb-13.svg" },

    // Madden 21
    { season: 14, superBowl: "XIV",  champion: "Dallas Cowboys",             runnerUp: "", score: "", mvp: "PATS8312", notes: "Madden 21", banner: "banners/sb-14.svg" },
    { season: 15, superBowl: "XV",   champion: "Carolina Panthers",          runnerUp: "", score: "", mvp: "EATW3LL", notes: "Madden 21", banner: "banners/sb-15.svg" },
    { season: 16, superBowl: "XVI",  champion: "Arizona Cardinals",          runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 21", banner: "banners/sb-16.svg" },
    { season: 17, superBowl: "XVII", champion: "Los Angeles Chargers",       runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 21", banner: "banners/sb-17.svg" },
    { season: 18, superBowl: "XVIII",champion: "Miami Dolphins",             runnerUp: "", score: "", mvp: "IRONMAN170", notes: "Madden 21", banner: "banners/sb-18.svg" },
    { season: 19, superBowl: "XIX",  champion: "Kansas City Chiefs",         runnerUp: "", score: "", mvp: "EIFVIL", notes: "Madden 21", banner: "banners/sb-19.svg" },
    { season: 20, superBowl: "XX",   champion: "New England Patriots",       runnerUp: "", score: "", mvp: "SD YOUNG", notes: "Madden 21", banner: "banners/sb-20.svg" },
    { season: 21, superBowl: "XXI",  champion: "Arizona Cardinals",          runnerUp: "", score: "", mvp: "TR904", notes: "Madden 21", banner: "banners/sb-21.svg" },

    // Madden 22
    { season: 22, superBowl: "XXII", champion: "Detroit Lions",              runnerUp: "", score: "", mvp: "MR MONARCH1323", notes: "Madden 22", banner: "banners/sb-22.svg" },
    { season: 23, superBowl: "XXIII",champion: "Kansas City Chiefs",         runnerUp: "", score: "", mvp: "DELLIS19", notes: "Madden 22", banner: "banners/sb-23.svg" },
    { season: 24, superBowl: "XXIV", champion: "Pittsburgh Steelers",        runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 22", banner: "banners/sb-24.svg" },
    { season: 25, superBowl: "XXV",  champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "KENNYCOOP", notes: "Madden 22", banner: "banners/sb-25.svg" },
    { season: 26, superBowl: "XXVI", champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "KENNYCOOP", notes: "Madden 22 – back-to-back", banner: "banners/sb-26.svg" },
    { season: 27, superBowl: "XXVII",champion: "Minnesota Vikings",          runnerUp: "", score: "", mvp: "KENNYCOOP", notes: "Madden 22 – 3-peat", banner: "banners/sb-27.svg" },
    { season: 28, superBowl: "XXVIII",champion: "Minnesota Vikings",         runnerUp: "", score: "", mvp: "KENNYCOOP", notes: "Madden 22 – 4-peat", banner: "banners/sb-28.svg" },

    // Madden 23
    { season: 29, superBowl: "XXIX", champion: "Cincinnati Bengals",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 23", banner: "banners/sb-29.svg" },
    { season: 30, superBowl: "XXX",  champion: "Cincinnati Bengals",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 23 – back-to-back", banner: "banners/sb-30.svg" },
    { season: 31, superBowl: "XXXI", champion: "Jacksonville Jaguars",       runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 23", banner: "banners/sb-31.svg" },
    { season: 32, superBowl: "XXXII",champion: "Las Vegas Raiders",          runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 23", banner: "banners/sb-32.svg" },
    { season: 33, superBowl: "XXXIII",champion: "New York Jets",             runnerUp: "", score: "", mvp: "PORTLAND STORM", notes: "Madden 23", banner: "banners/sb-33.svg" },
    { season: 34, superBowl: "XXXIV",champion: "Detroit Lions",              runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 23", banner: "banners/sb-34.svg" },
    { season: 35, superBowl: "XXXV", champion: "Tampa Bay Buccaneers",       runnerUp: "", score: "", mvp: "TAYLORS6G", notes: "Madden 23 – undefeated 20-0", banner: "banners/sb-35.svg" },
    { season: 36, superBowl: "XXXVI",champion: "Chicago Bears",              runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 23", banner: "banners/sb-36.svg" },
    { season: 37, superBowl: "XXXVII",champion: "Cleveland Browns",          runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 23", banner: "banners/sb-37.svg" },

    // Madden 24
    { season: 38, superBowl: "XXXVIII", champion: "Denver Broncos",          runnerUp: "", score: "", mvp: "S-TRADA", notes: "Madden 24", banner: "banners/sb-38.svg" },
    { season: 39, superBowl: "XXXIX",   champion: "Baltimore Ravens",        runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 24", banner: "banners/sb-39.svg" },
    { season: 40, superBowl: "XL",      champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24", banner: "banners/sb-40.svg" },
    { season: 41, superBowl: "XLI",     champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24 – back-to-back", banner: "banners/sb-41.svg" },
    { season: 42, superBowl: "XLII",    champion: "Atlanta Falcons",         runnerUp: "", score: "", mvp: "BWO", notes: "Madden 24 – 3-peat", banner: "banners/sb-42.svg" },
    { season: 43, superBowl: "XLIII",   champion: "Los Angeles Chargers",    runnerUp: "", score: "", mvp: "COUNTRYSWAG77", notes: "Madden 24", banner: "banners/sb-43.svg" },
    { season: 44, superBowl: "XLIV",    champion: "Las Vegas Raiders",       runnerUp: "", score: "", mvp: "BARNEY024", notes: "Madden 24", banner: "banners/sb-44.svg" },

    // Madden 25
    { season: 45, superBowl: "XLV",   champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25", banner: "banners/sb-45.svg" },
    { season: 46, superBowl: "XLVI",  champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25 – back-to-back", banner: "banners/sb-46.svg" },
    { season: 47, superBowl: "XLVII", champion: "Denver Broncos",            runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 25", banner: "banners/sb-47.svg" },
    { season: 48, superBowl: "XLVIII",champion: "Washington Commanders",     runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 25", banner: "banners/sb-48.svg" },
    { season: 49, superBowl: "XLIX",  champion: "Seattle Seahawks",          runnerUp: "", score: "", mvp: "COOP", notes: "Madden 25", banner: "banners/sb-49.svg" },
    { season: 50, superBowl: "L",     champion: "Denver Broncos",            runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 25", banner: "banners/sb-50.svg" },

    // Madden 26
    { season: 51, superBowl: "LI",    champion: "New York Giants",           runnerUp: "", score: "", mvp: "SMOKIE", notes: "Madden 26", banner: "banners/sb-51.svg" },
    { season: 52, superBowl: "LII",   champion: "New York Giants",           runnerUp: "", score: "", mvp: "SMOKIE", notes: "Madden 26 – back-to-back", banner: "banners/sb-52.svg" },
    { season: 53, superBowl: "LIII",  champion: "Baltimore Ravens",          runnerUp: "", score: "", mvp: "BWO", notes: "Madden 26", banner: "banners/sb-53.svg" },
    { season: 54, superBowl: "LIV",   champion: "San Francisco 49ers",       runnerUp: "", score: "", mvp: "SFG WILLIE", notes: "Madden 26", banner: "banners/sb-54.svg" },
    { season: 55, superBowl: "LV",    champion: "Detroit Lions",             runnerUp: "", score: "", mvp: "PRIMETIME", notes: "Madden 26", banner: "banners/sb-55.svg" },
    { season: 56, superBowl: "LVI",   champion: "Las Vegas Raiders",         runnerUp: "", score: "", mvp: "MR.NOTIFICATION", notes: "Madden 26", banner: "banners/sb-56.svg" },
    { season: 57, superBowl: "LVII",  champion: "Jacksonville Jaguars",      runnerUp: "", score: "", mvp: "COACH OCINCO", notes: "Madden 26", banner: "banners/sb-57.svg" },
    { season: 58, superBowl: "LVIII", champion: "Atlanta Falcons",          runnerUp: "", score: "", mvp: "BWO", notes: "Madden 27", banner: "banners/sb-58.svg" },
    { season: 59, superBowl: "LIX",   champion: "Atlanta Falcons",          runnerUp: "New England Patriots", score: "27-24", mvp: "BWO", notes: "Madden 27 – back-to-back, current defending champions", banner: "banners/sb-59.svg" }
  ],


  // =========================================================
  // DIVISION STANDINGS (8 pages for slideshow — update from NeonSportz CSV)
  // =========================================================
  divisionStandings: [
    {
      id: "afc-east",
      name: "AFC East",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Buffalo Bills", record: "3-2", owner: "LordWill76358" },
        { rank: 2, team: "Miami Dolphins", record: "3-2", owner: "Coolcam 1324" },
        { rank: 3, team: "New England Patriots", record: "3-2", owner: "primetimefs2" },
        { rank: 4, team: "New York Jets", record: "3-3", owner: "YoungMosesTV" },
      ]
    },
    {
      id: "afc-north",
      name: "AFC North",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Cleveland Browns", record: "4-1", owner: "MotorsportkingF" },
        { rank: 2, team: "Baltimore Ravens", record: "3-2", owner: "firemadman" },
        { rank: 3, team: "Pittsburgh Steelers", record: "1-4", owner: "almoneydmg" },
        { rank: 4, team: "Cincinnati Bengals", record: "1-4", owner: "CoconutHawk" },
      ]
    },
    {
      id: "afc-south",
      name: "AFC South",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Tennessee Titans", record: "6-0", owner: "TheCoachoCinco" },
        { rank: 2, team: "Houston Texans", record: "3-2", owner: "HighlyAnti" },
        { rank: 3, team: "Jacksonville Jaguars", record: "0-5", owner: "" },
        { rank: 4, team: "Indianapolis Colts", record: "0-6", owner: "" },
      ]
    },
    {
      id: "afc-west",
      name: "AFC West",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Los Angeles Chargers", record: "4-1", owner: "PSB Rhyno" },
        { rank: 2, team: "Kansas City Chiefs", record: "4-1", owner: "TR904" },
        { rank: 3, team: "Denver Broncos", record: "4-1", owner: "vurmiciousknid" },
        { rank: 4, team: "Las Vegas Raiders", record: "0-5", owner: "Du5t1n812" },
      ]
    },
    {
      id: "nfc-east",
      name: "NFC East",
      conference: "NFC",
      teams: [
        { rank: 1, team: "New York Giants", record: "3-1-1", owner: "Mr smokie11" },
        { rank: 2, team: "Dallas Cowboys", record: "2-3", owner: "columbuskid614" },
        { rank: 3, team: "Washington Commanders", record: "2-3", owner: "" },
        { rank: 4, team: "Philadelphia Eagles", record: "1-3-1", owner: "stu07172008" },
      ]
    },
    {
      id: "nfc-north",
      name: "NFC North",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Minnesota Vikings", record: "5-0", owner: "HOT ROD MD 55" },
        { rank: 2, team: "Green Bay Packers", record: "5-1", owner: "BK_SubjectZero" },
        { rank: 3, team: "Chicago Bears", record: "4-1", owner: "Chopworld_" },
        { rank: 4, team: "Detroit Lions", record: "1-4", owner: "BryceLovesJesus" },
      ]
    },
    {
      id: "nfc-south",
      name: "NFC South",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Tampa Bay Buccaneers", record: "3-2", owner: "PSB Beans66" },
        { rank: 2, team: "Atlanta Falcons", record: "3-3", owner: "IamBwo4life" },
        { rank: 3, team: "Carolina Panthers", record: "2-4", owner: "CountrySwag77" },
        { rank: 4, team: "New Orleans Saints", record: "1-4", owner: "amazingcar678" },
      ]
    },
    {
      id: "nfc-west",
      name: "NFC West",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Arizona Cardinals", record: "4-1", owner: "B dog 5123" },
        { rank: 2, team: "San Francisco 49ers", record: "2-3", owner: "Jay Sixz" },
        { rank: 3, team: "Los Angeles Rams", record: "1-4", owner: "" },
        { rank: 4, team: "Seattle Seahawks", record: "1-4", owner: "" },
      ]
    }
  ],
  // =========================================================
  // STANDINGS (update weekly)
  // =========================================================
  standings: {
    afc: [
      { team: "Tennessee Titans", record: "6-0", owner: "TheCoachoCinco" },
      { team: "Los Angeles Chargers", record: "4-1", owner: "PSB Rhyno" },
      { team: "Kansas City Chiefs", record: "4-1", owner: "TR904" },
      { team: "Denver Broncos", record: "4-1", owner: "vurmiciousknid" },
      { team: "Cleveland Browns", record: "4-1", owner: "MotorsportkingF" },
      { team: "Buffalo Bills", record: "3-2", owner: "LordWill76358" },
      { team: "Miami Dolphins", record: "3-2", owner: "Coolcam 1324" },
      { team: "Baltimore Ravens", record: "3-2", owner: "firemadman" },
      { team: "Houston Texans", record: "3-2", owner: "HighlyAnti" },
      { team: "New England Patriots", record: "3-2", owner: "primetimefs2" },
      { team: "New York Jets", record: "3-3", owner: "YoungMosesTV" },
      { team: "Pittsburgh Steelers", record: "1-4", owner: "almoneydmg" },
      { team: "Cincinnati Bengals", record: "1-4", owner: "CoconutHawk" },
      { team: "Las Vegas Raiders", record: "0-5", owner: "Du5t1n812" },
      { team: "Jacksonville Jaguars", record: "0-5", owner: "" },
      { team: "Indianapolis Colts", record: "0-6", owner: "" }
    ],
    nfc: [
      { team: "Minnesota Vikings", record: "5-0", owner: "HOT ROD MD 55" },
      { team: "Green Bay Packers", record: "5-1", owner: "BK_SubjectZero" },
      { team: "Arizona Cardinals", record: "4-1", owner: "B dog 5123" },
      { team: "Chicago Bears", record: "4-1", owner: "Chopworld_" },
      { team: "New York Giants", record: "3-1-1", owner: "Mr smokie11" },
      { team: "Tampa Bay Buccaneers", record: "3-2", owner: "PSB Beans66" },
      { team: "Atlanta Falcons", record: "3-3", owner: "IamBwo4life" },
      { team: "San Francisco 49ers", record: "2-3", owner: "Jay Sixz" },
      { team: "Dallas Cowboys", record: "2-3", owner: "columbuskid614" },
      { team: "Washington Commanders", record: "2-3", owner: "" },
      { team: "Carolina Panthers", record: "2-4", owner: "CountrySwag77" },
      { team: "Philadelphia Eagles", record: "1-3-1", owner: "stu07172008" },
      { team: "Los Angeles Rams", record: "1-4", owner: "" },
      { team: "New Orleans Saints", record: "1-4", owner: "amazingcar678" },
      { team: "Seattle Seahawks", record: "1-4", owner: "" },
      { team: "Detroit Lions", record: "1-4", owner: "BryceLovesJesus" }
    ]
  }
};

// Helper: compute titles count from history
function getTitleCounts() {
  const counts = {};
  FNSL_CONFIG.history.forEach(h => {
    const team = h.titleTeam || h.champion;
    counts[team] = (counts[team] || 0) + 1;
  });
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([team, titles]) => ({ team, titles }));
}

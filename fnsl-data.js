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
    "bignewff",
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
    { type: "note", text: "FNSL Season in progress — Watch live on FNSL.TV" },
    { type: "note", text: "AFC #1: Jacksonville Jaguars (3-0)" },
    { type: "note", text: "NFC #1: Arizona Cardinals (3-0)" },
    { type: "upcoming", text: "Packers @ Steelers" },
    { type: "upcoming", text: "Cardinals @ Raiders" },
    { type: "upcoming", text: "Colts @ Patriots" },
    { type: "upcoming", text: "Broncos @ Falcons" },
    { type: "upcoming", text: "Buccaneers @ Jets" },
    { type: "upcoming", text: "Dolphins @ Commanders" },
    { type: "upcoming", text: "Panthers @ Bills" },
    { type: "upcoming", text: "Browns @ Bears" },
    { type: "upcoming", text: "Vikings @ Giants" },
    { type: "upcoming", text: "Rams @ Chiefs" },
    { type: "upcoming", text: "Jaguars @ Saints" },
    { type: "upcoming", text: "Eagles @ Ravens" },
    { type: "note", text: "Join Discord · Tag @FNSLMadden on X" }
  ],

  // =========================================================
  // LEAGUE LEADERS (slideshow) — update from NeonSportz / stats
  // =========================================================
  topPlayers: [
    {
      title: "PASSING YARDS",
      leaders: [
        { rank: 1, name: "Justin Herbert", team: "LAC", stat: "6159 YDS · 56 TD" },
        { rank: 2, name: "Cam Ward", team: "TEN", stat: "5776 YDS · 46 TD" },
        { rank: 3, name: "Jacoby Brissett", team: "ARI", stat: "5537 YDS · 46 TD" },
        { rank: 4, name: "Joe Burrow", team: "CIN", stat: "5536 YDS · 50 TD" },
        { rank: 5, name: "Caleb Williams", team: "CHI", stat: "5451 YDS · 48 TD" }
      ]
    },
    {
      title: "RUSHING YARDS",
      leaders: [
        { rank: 1, name: "De'Von Achane", team: "MIA", stat: "1941 YDS · 19 TD" },
        { rank: 2, name: "Jonathan Taylor", team: "IND", stat: "1692 YDS · 16 TD" },
        { rank: 3, name: "Bijan Robinson", team: "ATL", stat: "1618 YDS · 14 TD" },
        { rank: 4, name: "Saquon Barkley", team: "PHI", stat: "1617 YDS · 13 TD" },
        { rank: 5, name: "James Cook III", team: "BUF", stat: "1521 YDS · 13 TD" }
      ]
    },
    {
      title: "RECEIVING YARDS",
      leaders: [
        { rank: 1, name: "Marvin Harrison Jr", team: "ARI", stat: "2634 YDS · 27 TD" },
        { rank: 2, name: "Calvin Ridley", team: "TEN", stat: "1941 YDS · 14 TD" },
        { rank: 3, name: "Tyreek Hill", team: "MIA", stat: "1789 YDS · 24 TD" },
        { rank: 4, name: "Joshua Palmer", team: "BUF", stat: "1752 YDS · 23 TD" },
        { rank: 5, name: "Jaxon Smith-Njigba", team: "LAC", stat: "1743 YDS · 17 TD" }
      ]
    },
    {
      title: "TE RECEIVING",
      leaders: [
        { rank: 1, name: "Travis Kelce", team: "LAC", stat: "1449 YDS · 10 TD" },
        { rank: 2, name: "Evan Engram", team: "DEN", stat: "1368 YDS · 8 TD" },
        { rank: 3, name: "Daniel Bellinger", team: "NYG", stat: "1208 YDS · 6 TD" },
        { rank: 4, name: "Terrance Ferguson", team: "LAR", stat: "1155 YDS · 11 TD" },
        { rank: 5, name: "Tyler Warren", team: "IND", stat: "1152 YDS · 11 TD" }
      ]
    },
    {
      title: "SACKS",
      leaders: [
        { rank: 1, name: "Micah Parsons", team: "LAR", stat: "22.5 SACKS" },
        { rank: 2, name: "Boye Mafe", team: "SEA", stat: "18 SACKS" },
        { rank: 3, name: "Brian Burns", team: "NYG", stat: "16.5 SACKS" },
        { rank: 4, name: "Samson Ebukam", team: "IND", stat: "15.5 SACKS" },
        { rank: 5, name: "DeMarcus Lawrence", team: "SEA", stat: "15.5 SACKS" }
      ]
    },
    {
      title: "INTERCEPTIONS",
      leaders: [
        { rank: 1, name: "Trey Taylor", team: "LV", stat: "12 INT" },
        { rank: 2, name: "Riq Woolen", team: "SEA", stat: "10 INT" },
        { rank: 3, name: "Daniel Scott", team: "IND", stat: "9 INT" },
        { rank: 4, name: "Kevin Winston Jr", team: "TEN", stat: "9 INT" },
        { rank: 5, name: "Carson Schwesinger", team: "CLE", stat: "8 INT" }
      ]
    },
    {
      title: "TACKLES",
      leaders: [
        { rank: 1, name: "Fred Warner", team: "SF", stat: "105 TKL" },
        { rank: 2, name: "Nick Martin", team: "SF", stat: "83 TKL" },
        { rank: 3, name: "Edgerrin Cooper", team: "GB", stat: "79 TKL" },
        { rank: 4, name: "Drue Tranquill", team: "KC", stat: "78 TKL" },
        { rank: 5, name: "Damone Clark", team: "DAL", stat: "78 TKL" }
      ]
    },
    {
      title: "KICKING",
      leaders: [
        { rank: 1, name: "Dorian Polk", team: "SEA", stat: "27/32 FG" },
        { rank: 2, name: "Aaron McAllister", team: "GB", stat: "24/27 FG" },
        { rank: 3, name: "Cade York", team: "WAS", stat: "23/26 FG" },
        { rank: 4, name: "Trent Tanley", team: "SF", stat: "22/28 FG" },
        { rank: 5, name: "Maddux Trujillo", team: "IND", stat: "21/24 FG" }
      ]
    }
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
  // DIVISION STANDINGS (8 pages for slideshow — update from NeonSportz CSV)
  // =========================================================
  divisionStandings: [
    {
      id: "afc-east",
      name: "AFC East",
      conference: "AFC",
      teams: [
        { rank: 1, team: "New England Patriots", record: "2-1", owner: "primetimefs2" },
        { rank: 2, team: "Miami Dolphins", record: "1-1", owner: "Coolcam 1324" },
        { rank: 3, team: "Buffalo Bills", record: "0-2", owner: "BCThaGr8" },
        { rank: 4, team: "New York Jets", record: "0-3", owner: "YoungMosesTV" }
      ]
    },
    {
      id: "afc-north",
      name: "AFC North",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Baltimore Ravens", record: "2-0", owner: "firemadman" },
        { rank: 2, team: "Cincinnati Bengals", record: "0-2", owner: "DEllis19" },
        { rank: 3, team: "Cleveland Browns", record: "0-2", owner: "MotorsportkingF" },
        { rank: 4, team: "Pittsburgh Steelers", record: "0-2", owner: "almoneydmg" }
      ]
    },
    {
      id: "afc-south",
      name: "AFC South",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Jacksonville Jaguars", record: "3-0", owner: "Big Newff" },
        { rank: 2, team: "Houston Texans", record: "2-0", owner: "HighlyAnti" },
        { rank: 3, team: "Tennessee Titans", record: "2-0", owner: "TheCoachoCinco" },
        { rank: 4, team: "Indianapolis Colts", record: "0-2", owner: "Fear Cloakk" }
      ]
    },
    {
      id: "afc-west",
      name: "AFC West",
      conference: "AFC",
      teams: [
        { rank: 1, team: "Denver Broncos", record: "1-1", owner: "vurmiciousknid" },
        { rank: 2, team: "Los Angeles Chargers", record: "1-1", owner: "PSB Rhyno" },
        { rank: 3, team: "Kansas City Chiefs", record: "1-1", owner: "TR904" },
        { rank: 4, team: "Las Vegas Raiders", record: "0-2", owner: "Du5t1n812" }
      ]
    },
    {
      id: "nfc-east",
      name: "NFC East",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Dallas Cowboys", record: "2-0", owner: "columbuskid614" },
        { rank: 2, team: "Philadelphia Eagles", record: "1-1", owner: "stu07172008" },
        { rank: 3, team: "New York Giants", record: "1-1", owner: "Mr smokie11" },
        { rank: 4, team: "Washington Commanders", record: "0-2", owner: "Redskins4Life96" }
      ]
    },
    {
      id: "nfc-north",
      name: "NFC North",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Detroit Lions", record: "3-0", owner: "FaZeDarkskin931" },
        { rank: 2, team: "Minnesota Vikings", record: "2-0", owner: "HOT ROD MD 55" },
        { rank: 3, team: "Chicago Bears", record: "1-1", owner: "L1L KEEZY" },
        { rank: 4, team: "Green Bay Packers", record: "1-2", owner: "CoopRelax" }
      ]
    },
    {
      id: "nfc-south",
      name: "NFC South",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Atlanta Falcons", record: "3-0", owner: "IamBwo4life" },
        { rank: 2, team: "Tampa Bay Buccaneers", record: "2-0", owner: "PSB Beans66" },
        { rank: 3, team: "Carolina Panthers", record: "0-2", owner: "CountrySwag77" },
        { rank: 4, team: "New Orleans Saints", record: "0-2", owner: "amazingcar678" }
      ]
    },
    {
      id: "nfc-west",
      name: "NFC West",
      conference: "NFC",
      teams: [
        { rank: 1, team: "Arizona Cardinals", record: "3-0", owner: "B dog 5123" },
        { rank: 2, team: "San Francisco 49ers", record: "2-1", owner: "PSB Bandit" },
        { rank: 3, team: "Los Angeles Rams", record: "0-2", owner: "Jayswaggin0519" },
        { rank: 4, team: "Seattle Seahawks", record: "0-2", owner: "msanchez1717" }
      ]
    }
  ],
  // =========================================================
  // STANDINGS (update weekly)
  // =========================================================
  standings: {
    afc: [
      { team: "Jacksonville Jaguars", record: "3-0", owner: "Big Newff" },
      { team: "Baltimore Ravens", record: "2-0", owner: "firemadman" },
      { team: "Houston Texans", record: "2-0", owner: "HighlyAnti" },
      { team: "Tennessee Titans", record: "2-0", owner: "TheCoachoCinco" },
      { team: "New England Patriots", record: "2-1", owner: "primetimefs2" },
      { team: "Miami Dolphins", record: "1-1", owner: "Coolcam 1324" },
      { team: "Denver Broncos", record: "1-1", owner: "vurmiciousknid" },
      { team: "Los Angeles Chargers", record: "1-1", owner: "PSB Rhyno" },
      { team: "Kansas City Chiefs", record: "1-1", owner: "TR904" },
      { team: "Cincinnati Bengals", record: "0-2", owner: "DEllis19" },
      { team: "Cleveland Browns", record: "0-2", owner: "MotorsportkingF" },
      { team: "Pittsburgh Steelers", record: "0-2", owner: "almoneydmg" },
      { team: "Buffalo Bills", record: "0-2", owner: "BCThaGr8" },
      { team: "Las Vegas Raiders", record: "0-2", owner: "Du5t1n812" },
      { team: "Indianapolis Colts", record: "0-2", owner: "Fear Cloakk" },
      { team: "New York Jets", record: "0-3", owner: "YoungMosesTV" }
    ],
    nfc: [
      { team: "Arizona Cardinals", record: "3-0", owner: "B dog 5123" },
      { team: "Detroit Lions", record: "3-0", owner: "FaZeDarkskin931" },
      { team: "Atlanta Falcons", record: "3-0", owner: "IamBwo4life" },
      { team: "Minnesota Vikings", record: "2-0", owner: "HOT ROD MD 55" },
      { team: "Tampa Bay Buccaneers", record: "2-0", owner: "PSB Beans66" },
      { team: "Dallas Cowboys", record: "2-0", owner: "columbuskid614" },
      { team: "San Francisco 49ers", record: "2-1", owner: "PSB Bandit" },
      { team: "Chicago Bears", record: "1-1", owner: "L1L KEEZY" },
      { team: "Philadelphia Eagles", record: "1-1", owner: "stu07172008" },
      { team: "New York Giants", record: "1-1", owner: "Mr smokie11" },
      { team: "Green Bay Packers", record: "1-2", owner: "CoopRelax" },
      { team: "Los Angeles Rams", record: "0-2", owner: "Jayswaggin0519" },
      { team: "Seattle Seahawks", record: "0-2", owner: "msanchez1717" },
      { team: "Carolina Panthers", record: "0-2", owner: "CountrySwag77" },
      { team: "New Orleans Saints", record: "0-2", owner: "amazingcar678" },
      { team: "Washington Commanders", record: "0-2", owner: "Redskins4Life96" }
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

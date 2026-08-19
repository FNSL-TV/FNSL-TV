# FNSL TV – Automatic Live Streams

Your Father N Son League streaming + history site, now with **automatic Twitch live detection**.

---

## How Automatic Live Detection Works

1. You list every owner’s Twitch username in `data.js` → `twitchChannels`
2. The site calls a small Vercel function (`/api/live`) every 60 seconds
3. That function asks Twitch who is currently live
4. Anyone who is live automatically appears with a red **LIVE** badge

You no longer have to manually flip `isLive: true`.

---

## Step-by-step Setup (do this once)

### 1. Get a free Twitch Client ID

1. Go to → https://dev.twitch.tv/console
2. Log in with any Twitch account
3. Click **“Register Your Application”**
4. Fill in:
   - **Name**: FNSL TV (or anything)
   - **OAuth Redirect URLs**: `http://localhost`
   - **Category**: Website Integration
5. Click **Create**
6. Copy the **Client ID** (long string of letters/numbers)

### 2. Add the Client ID to Vercel

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `TWITCH_CLIENT_ID`
   - **Value**: paste the Client ID you just copied
4. Enable it for Production, Preview, and Development
5. Click **Save**
6. **Redeploy** the project (Deployments → three dots → Redeploy) so the variable is loaded

### 3. List the Twitch usernames in `data.js`

```js
twitchChannels: [
  "your_twitch_username",
  "another_owner",
  "third_owner"
],
```

Also fill the `channel` field inside `featuredStreams` so the cards look nice:

```js
featuredStreams: [
  {
    id: "raiders-home",
    title: "Las Vegas Raiders • Home Stream",
    owner: "Dustin (Owner / Coach)",
    platform: "twitch",
    channel: "your_twitch_username",   // same as above
    isLive: false                      // auto-overridden when live
  }
  // add every owner the same way
],
```

### 4. Redeploy

After editing `data.js`, push the changes or re-upload so Vercel rebuilds.

---

## What you will see

- Anyone in `twitchChannels` who is currently live → red LIVE badge + appears at the top
- Viewer count shown when available
- Status refreshes automatically every 60 seconds
- Manual `isLive` flags still work as fallback if the API key is missing

---

## Updating the rest of the data

- **History / previous winners** → `history` array
- **VODs** → `vods` array (YouTube video IDs)
- **Standings** → `standings` object

---

## Files

- `index.html` – the page
- `data.js` – **all your league data lives here**
- `app.js` – the logic
- `api/live.js` – the serverless function that talks to Twitch
- `README.md` – this file

Enjoy the automatic live streams!

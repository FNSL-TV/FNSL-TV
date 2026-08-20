# FNSL TV

Father N Son League streaming + history site.

## GitHub upload structure (IMPORTANT)

Upload these files to the **root** of your repo so it looks exactly like this:

```
FNSL-TV/
  api/
    live.js
  index.html
  app.js
  data.js
  package.json
  vercel.json
  logo.jpg
  lombardi.jpg
  README.md
```

### How to upload cleanly

1. Delete old/broken files on GitHub if needed (especially a root-level `live.js`).
2. Unzip this folder on your computer.
3. Upload **every file and the `api` folder** into the repo root.
4. Confirm on GitHub you can open: `api/live.js`
5. Vercel will auto-deploy.

### Twitch live detection (optional for later)

In Vercel → Settings → Environment Variables:

| Key | Value |
|-----|--------|
| TWITCH_CLIENT_ID | your Twitch Client ID |
| TWITCH_CLIENT_SECRET | your Twitch Client Secret |

Then redeploy. Test: `https://YOUR-SITE.vercel.app/api/live?channels=someuser`

If secret is wrong you will see `"invalid client secret"`.
Generate a **New Secret** in the Twitch developer console and update the env var.

### Editing data

All league data lives in `data.js`:
- featuredStreams / twitchChannels
- history
- standings
- vods
- tickerItems
- socialLinks

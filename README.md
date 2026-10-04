# Manufacturing English Coach AI

Responsive PWA for iPhone, Android, Windows and Mac. The visual system follows the supplied reference: navy sidebar on PC, bottom navigation on mobile, white metric cards, blue actions, skill dashboards and manufacturing scenarios.

## Included
- Responsive desktop/mobile interface
- Home dashboard and daily practice
- AI Coach-style conversation with offline rule-based feedback
- Meeting simulations for customer, supplier, production, engineering changes, pilot runs and capacity
- Wiring-harness vocabulary with American-English speech synthesis
- Listening exercise with four speeds
- Pronunciation practice using browser speech recognition when available
- Local progress and profile persistence
- Offline PWA cache
- Installable app manifest and icons
- Optional secure serverless AI endpoint for Vercel
- Original design-reference image in `assets/design-reference.png`

## Run on a PC
1. Install Node.js 20 or later.
2. Open a terminal inside this folder.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000`.

A PWA must be served through HTTP/HTTPS. Do not open `index.html` directly if you want offline caching, microphone permissions and installation.

## Install on iPhone
1. Deploy this folder to an HTTPS host such as Vercel, Netlify or Firebase Hosting.
2. Open the deployed address in Safari.
3. Tap Share.
4. Tap **Add to Home Screen**.
5. Open English Pro from the Home Screen.

Microphone and speech-recognition support depends on the iOS/Safari version and permission settings. Text input always remains available.

## Deploy to Vercel
1. Create a new Vercel project from this folder or repository.
2. Framework preset: `Other`.
3. No build command is required.
4. Output directory: `.`
5. Deploy.

## Optional live AI
The included app works without an API key using local coaching rules. For a real AI coach:
1. Add `OPENAI_API_KEY` as a server-side Vercel environment variable.
2. Optionally add `OPENAI_MODEL`.
3. Connect the frontend chat to POST `/api/coach` with a `messages` array.

Never place an API key in `app.js`, HTML, a mobile bundle or source control.

## Test
Run `npm test` for static package checks.

## Data and privacy
Progress is stored locally in the browser with `localStorage`. No company data is uploaded by the default app. Avoid entering confidential customer, product or production data when enabling an external AI service unless the service is approved by the organization.

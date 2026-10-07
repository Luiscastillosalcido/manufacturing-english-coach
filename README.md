# Automotive English Pro V5.3 Topic Expert Builder
Complete replacement package built on the V4.2 functional application. Preserves AI Coach, Meeting Simulator, phrases, connectors, grammar, practice, evaluation, 500-term glossary, scenarios, Desktop/Mobile, Azure backend and PWA.

## V5.3 additions
- Topic Expert navigation module.
- Seven domains: SCR, Quality, Commercial, Materials, Engineering, Production and Launch.
- 50 bilingual examples per domain in Present, Past and Future: 350 scenarios / 1,050 tense views.
- Free-topic analyzer that recommends glossary terms and connectors.
- Sentence formula.
- Unified Topic Expert audio: Slow, Normal and Meeting.
- Global audio error handling.
- Frontend prefers conversational_reply from Azure and removes the generic “You mentioned...” fallback.
- New cache identifier and no-cache headers for application code.

Upload every file and folder in this package to the repository root and replace existing files. Keep Azure variables configured in Vercel.


## Final shell integration
- Uses the proven V4.2 mobile drawer, layout selector, fatal-error diagnostic and PWA shell.
- Uses the supplied Automotive English Coach manifest values and LAE icons.
- Loads phrases, scenarios, trees and Topic Expert data before app.js.
- Preserves the complete evidence-based AI English Coach instruction set in lib/coach-instructions.js.


## V5.3.1 Audio Stabilization
- Explicitly unlocks browser audio from a user gesture.
- Uses a silent Web Audio unlock for Chrome, Edge, Safari and installed PWA behavior.
- Reloads and selects installed English voices with browser-default fallback.
- Splits long sentences into safe speech chunks.
- Adds pause/resume keepalive for Chromium speech synthesis.
- Shows the selected system voice after Enable Audio.


## V5.3.2 Local Voice Fallback
- Avoids Microsoft Online/Natural Preview voices that may appear installed but fail in browser speech synthesis.
- Prefers localService English voices.
- Retries with another compatible English voice and finally the browser default voice.
- Shows a clear Windows voice installation message only after all fallbacks fail.

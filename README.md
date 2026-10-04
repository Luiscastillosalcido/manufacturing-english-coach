# Automotive English Coach 2.5 Stable

This build removes the previous company name and uses a flat upload structure. All phrase, conversation-tree, scenario, memory, and interface JavaScript is included in the single root file `app.js`. This prevents GitHub web upload from losing `data` or `assets` folders.

## Upload to GitHub
Upload every file from this folder directly to the repository root and replace existing files. Commit message: `Version 2.5 Stable Flat Package`.

## Verification
The package includes static syntax checks, a local HTTP smoke test, 100 bilingual phrases, 10 guided scenarios with 50 questions, validated learning memory, voice coach, pronunciation library, meeting flow, and an on-screen diagnostic if JavaScript fails.

On iPhone, open the Vercel URL in Safari and refresh. If an older PWA remains cached, remove the Home Screen app and add it again.

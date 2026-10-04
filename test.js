const fs=require('fs');
const required=['index.html','styles.css','app.js','manifest.webmanifest','service-worker.js','assets/icon-192.png','assets/icon-512.png'];
let fail=0;for(const f of required){if(!fs.existsSync(f)){console.error('Missing:',f);fail++}}
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));if(manifest.display!=='standalone'){console.error('PWA display invalid');fail++}
const html=fs.readFileSync('index.html','utf8');if(!html.includes('viewport-fit=cover')){console.error('Missing iPhone safe-area viewport');fail++}
console.log(fail?'Tests failed':'All static checks passed');process.exit(fail?1:0);

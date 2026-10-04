const fs=require('fs'),vm=require('vm');
const files=['index.html','styles.css','app.js','manifest.webmanifest','service-worker.js','icon-192.png','icon-512.png','design-reference.png'];
for(const f of files)if(!fs.existsSync(f))throw new Error('Missing '+f);
JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
const js=fs.readFileSync('app.js','utf8');
if(/Lear English|LEAR AUTOMOTIVE|Lear Automotive/i.test(js)||/Lear English|LEAR AUTOMOTIVE|Lear Automotive/i.test(fs.readFileSync('index.html','utf8')))throw new Error('Old brand remains');
if(!js.includes('window.PHRASES=')||!js.includes('window.SCENARIO_FLOWS'))throw new Error('Embedded data missing');
if((js.match(/\{q:/g)||[]).length!==50)throw new Error('Expected 50 scenario questions');
console.log('Static package checks passed');

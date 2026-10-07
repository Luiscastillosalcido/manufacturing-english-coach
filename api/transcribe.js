module.exports.config={api:{bodyParser:false}};
function readBody(req){return new Promise((resolve,reject)=>{const chunks=[];let size=0;req.on('data',c=>{size+=c.length;if(size>12*1024*1024){reject(new Error('Audio file is too large'));req.destroy();return}chunks.push(c)});req.on('end',()=>resolve(Buffer.concat(chunks)));req.on('error',reject)})}
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const endpoint=(process.env.AZURE_OPENAI_ENDPOINT||'').replace(/\/$/,'');
 const key=process.env.AZURE_OPENAI_API_KEY;
 const deployment=process.env.AZURE_OPENAI_TRANSCRIPTION_DEPLOYMENT;
 const version=process.env.AZURE_OPENAI_TRANSCRIPTION_API_VERSION||'2025-04-01-preview';
 if(!endpoint||!key||!deployment)return res.status(503).json({error:'Set AZURE_OPENAI_TRANSCRIPTION_DEPLOYMENT in Vercel'});
 try{
  const audio=await readBody(req);if(!audio.length)return res.status(400).json({error:'Empty audio'});
  const mime=String(req.headers['content-type']||'audio/webm').split(';')[0];
  const ext=mime.includes('mp4')?'m4a':mime.includes('ogg')?'ogg':mime.includes('wav')?'wav':'webm';
  const boundary='----EnglishCoach'+Date.now().toString(16);
  const before=Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="speech.${ext}"\r\nContent-Type: ${mime}\r\n\r\n`);
  const fields=Buffer.from(`\r\n--${boundary}\r\nContent-Disposition: form-data; name="language"\r\n\r\nen\r\n--${boundary}\r\nContent-Disposition: form-data; name="response_format"\r\n\r\njson\r\n--${boundary}--\r\n`);
  const body=Buffer.concat([before,audio,fields]);
  const url=`${endpoint}/openai/deployments/${encodeURIComponent(deployment)}/audio/transcriptions?api-version=${encodeURIComponent(version)}`;
  const r=await fetch(url,{method:'POST',headers:{'api-key':key,'Content-Type':`multipart/form-data; boundary=${boundary}`,'Content-Length':String(body.length)},body});
  const raw=await r.text();if(!r.ok)return res.status(r.status).json({error:'Azure transcription failed',detail:raw.slice(0,500)});
  const data=JSON.parse(raw);return res.status(200).json({text:data.text||data.transcript||''});
 }catch(e){return res.status(500).json({error:'Transcription processing failed',detail:e.message})}
};

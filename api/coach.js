const instructions=require('../lib/coach-instructions');
const grammarReference=require('../lib/grammar-reference');
module.exports=async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 if(req.body&&req.body.health){
  const ok=Boolean(process.env.AZURE_OPENAI_ENDPOINT&&process.env.AZURE_OPENAI_API_KEY&&process.env.AZURE_OPENAI_DEPLOYMENT);
  return ok?res.status(200).json({status:'online'}):res.status(503).json({status:'not_configured'});
 }
 const endpoint=(process.env.AZURE_OPENAI_ENDPOINT||'').replace(/\/$/,'');
 const key=process.env.AZURE_OPENAI_API_KEY;
 const deployment=process.env.AZURE_OPENAI_DEPLOYMENT;
 const apiVersion=process.env.AZURE_OPENAI_API_VERSION||'2024-10-21';
 if(!endpoint||!key||!deployment)return res.status(503).json({error:'AI Coach is not configured'});
 const body=req.body||{};
 const history=Array.isArray(body.history)?body.history.slice(-16):[];
 const context={
  mode:body.mode||'professional_coach',topic:body.topic||'free conversation',difficulty:body.difficulty||'b2',
  profile:body.profile||{},scenario:body.scenario||null,
  confirmedVocabulary:Array.isArray(body.confirmedVocabulary)?body.confirmedVocabulary.slice(-40):[],
  appVocabulary:Array.isArray(body.appVocabulary)?body.appVocabulary.slice(0,12):[],
  grammarReference:grammarReference.rules
 };
 const schema='Return JSON with conversational_reply, understood_es, clarity, clear_version, professional_version, corrections_es, new_vocabulary, next_question, and evaluation_evidence. conversational_reply must sound natural and end with exactly one main question.';
 const messages=[
  {role:'system',content:instructions+'\n\n'+schema+'\nSession context: '+JSON.stringify(context)},
  ...history.map(m=>({role:m.role==='assistant'?'assistant':'user',content:String(m.content||'').slice(0,3000)})),
  {role:'user',content:String(body.userMessage||'').slice(0,4000)}
 ];
 try{
  const url=`${endpoint}/openai/deployments/${encodeURIComponent(deployment)}/chat/completions?api-version=${encodeURIComponent(apiVersion)}`;
  const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','api-key':key},body:JSON.stringify({messages,response_format:{type:'json_object'},max_completion_tokens:1000})});
  const raw=await r.text();
  if(!r.ok)return res.status(r.status).json({error:'Azure OpenAI request failed',detail:raw.slice(0,500)});
  const envelope=JSON.parse(raw);
  let content=envelope.choices?.[0]?.message?.content;
  if(!content)throw new Error('Empty model response');
  if(typeof content!=='string')content=JSON.stringify(content);
  content=content.replace(/^```json\s*/,'').replace(/```$/,'').trim();
  const result=JSON.parse(content);
  if(!result.conversational_reply&&!result.next_question)throw new Error('Missing conversational reply');
  if(!result.next_question)result.next_question='What would you like to practice next?';
  if(!result.conversational_reply)result.conversational_reply=result.next_question;
  return res.status(200).json(result);
 }catch(error){return res.status(500).json({error:'AI Coach processing failed',detail:error.message});}
};

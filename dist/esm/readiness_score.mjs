export const name="readiness_score";
export const id="dl_e5db64ee14b212afb13d";
export const url=new URL("../icons/readiness_score.svg?v=0228374954b19c52ca03ce60c5927f2d8a8f8ee1ff166c18cb1a21bc8ec38c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

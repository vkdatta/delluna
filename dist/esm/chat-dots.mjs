export const name="chat-dots";
export const id="dl_f84f159f922b4ff78061";
export const url=new URL("../icons/chat-dots.svg?v=cd655712eaed1f00fc0ff59e76ec87b1ec0a2e1377132bd92b6b2626efb718b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="cancel_schedule_send";
export const id="dl_9ce867dcab6aecb5132b";
export const url=new URL("../icons/cancel_schedule_send.svg?v=80d81ed6c9c2b84157afa5614afde1fe1b539788795bb21a57e674877b383eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="voice_over_off-fill";
export const id="dl_236ac818783497f9e0b5";
export const url=new URL("../icons/voice_over_off-fill.svg?v=4eb3cc4898b763b5576abb0fd66ccc54086c9eb0edb0f1bdd61e8ce5a117b46d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

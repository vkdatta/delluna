export const name="heartbeat";
export const id="dl_6ce9a2f7c746487aa5f8";
export const url=new URL("../icons/heartbeat.svg?v=1b3225bb7cbc6a8fe3dd6f5013b61484f59cdfae3bd19120197eff0db362f9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

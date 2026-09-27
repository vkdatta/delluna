export const name="heartbeat";
export const id="dl_6ce9a2f7c746487aa5f8";
export const url=new URL("../icons/heartbeat.svg?v=f3dad11c2e8874e0ed34dffc60a5b5e2d882740c7b9298fbbcdedfd60326c868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

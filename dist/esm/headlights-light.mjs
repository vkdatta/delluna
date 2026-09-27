export const name="headlights-light";
export const id="dl_843c1a271533451fa3f9";
export const url=new URL("../icons/headlights-light.svg?v=11ca6ec17798c3869cd77dee27b23564a172e9c3d62bef0089c6cd5e30d9951b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

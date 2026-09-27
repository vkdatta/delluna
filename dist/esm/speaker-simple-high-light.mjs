export const name="speaker-simple-high-light";
export const id="dl_ba6d2a0f2dd4a5d25425";
export const url=new URL("../icons/speaker-simple-high-light.svg?v=56778275d5c5602698ec6ef52a5a761694b6be8f002df31d619be9713ad9da22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

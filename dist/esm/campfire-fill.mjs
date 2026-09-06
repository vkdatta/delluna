export const name="campfire-fill";
export const id="dl_eba9590d85f64a19bc93";
export const url=new URL("../icons/campfire-fill.svg?v=5c5085dfa44816e79ef14d00f0a0f38e93765019db64f11eef38d2ea1d4b213d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

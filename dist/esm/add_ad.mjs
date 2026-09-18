export const name="add_ad";
export const id="dl_d33e62709e654d7c9df4";
export const url=new URL("../icons/add_ad.svg?v=90dfba428f886584311070d4c3af92cfaa1086caada706613f1ee230a25b27a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

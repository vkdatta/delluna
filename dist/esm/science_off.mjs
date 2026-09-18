export const name="science_off";
export const id="dl_9338660e4da84f178b4e";
export const url=new URL("../icons/science_off.svg?v=585e770e5d00a7761c565136bad4a3ea1649f030b665f1e582da657e9036d1a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

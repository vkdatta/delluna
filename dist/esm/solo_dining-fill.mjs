export const name="solo_dining-fill";
export const id="dl_f7fdceaa2f85f6f94214";
export const url=new URL("../icons/solo_dining-fill.svg?v=7909c1828744f8ac81081067ae1f5aee95327f8f1a5f460b7945c89f07ab6b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

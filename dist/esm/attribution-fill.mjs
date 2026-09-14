export const name="attribution-fill";
export const id="dl_82960aa28ca840acaa10";
export const url=new URL("../icons/A/attribution-fill.svg?v=c10d685e32f3c4ea07226379aa0420b7508b7f83349e963cbb202bf4de60ebe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

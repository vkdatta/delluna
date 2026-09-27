export const name="battery_5_bar-fill";
export const id="dl_07957c5540afcd743d02";
export const url=new URL("../icons/battery_5_bar-fill.svg?v=9ebd28f4a54c3d51fb865db2660563affa64797e73526c222c99713d4d247000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="signal_cellular_nodata-fill";
export const id="dl_e058c6ec08ded1727218";
export const url=new URL("../icons/signal_cellular_nodata-fill.svg?v=05a9985fa028a6bcda108c3a2446014f2727efafe44559083dcc28d7c1552c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

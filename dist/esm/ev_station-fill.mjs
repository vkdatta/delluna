export const name="ev_station-fill";
export const id="dl_8115b610affe0e5073f3";
export const url=new URL("../icons/ev_station-fill.svg?v=2cea7216247fa1741178a10a500704cbe7c625e5ff4dbff498593f551c8cab0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

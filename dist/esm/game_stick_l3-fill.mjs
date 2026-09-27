export const name="game_stick_l3-fill";
export const id="dl_f3d49214aa0ef74f7588";
export const url=new URL("../icons/game_stick_l3-fill.svg?v=1de0e3af23c79089224c65f9eef3687b3c819f0d25868eb5a7d881682a3d5c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

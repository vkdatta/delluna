export const name="leaderboard-fill";
export const id="dl_2103d64f7e5245ca8b26";
export const url=new URL("../icons/L/leaderboard-fill.svg?v=8b625d04ad429c0b8528780320dcaf487d97b31883f4e6ce987c0021deeae7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

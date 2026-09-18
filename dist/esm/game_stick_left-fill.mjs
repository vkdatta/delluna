export const name="game_stick_left-fill";
export const id="dl_7d143cd680e5464fab85";
export const url=new URL("../icons/game_stick_left-fill.svg?v=febde9d64a3721f4631b8518c9d364ba199fb13f408a2aa09ccea6dde7e02d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

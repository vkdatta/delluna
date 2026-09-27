export const name="game_stick_right";
export const id="dl_fdaaba9f6a37e1e30cae";
export const url=new URL("../icons/game_stick_right.svg?v=9eff92261c37f361b34b43496cb1b3f5fbfe9973373c410d60f5eae71960241f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

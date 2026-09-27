export const name="game_stick_right";
export const id="dl_2e96162dcd97c2691104";
export const url=new URL("../icons/game_stick_right.svg?v=ede5c96b81b41159c55e1be01b14ea4628cf6411c2d87f4db5ed1c58209f2c48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

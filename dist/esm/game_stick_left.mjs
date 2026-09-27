export const name="game_stick_left";
export const id="dl_9bbf873e836790bb67da";
export const url=new URL("../icons/game_stick_left.svg?v=d903937d28d7bc536903eef9f91e677cb2258ac4ebf88009e68a30e4d1a10592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

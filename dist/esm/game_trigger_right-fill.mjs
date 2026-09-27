export const name="game_trigger_right-fill";
export const id="dl_78c0d53e3b8f63385294";
export const url=new URL("../icons/game_trigger_right-fill.svg?v=7336ef6d3986a38f0a95280fb4e5cc4254ef8c8983c63b75f1d63a2770fad451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

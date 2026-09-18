export const name="game_trigger_right-fill";
export const id="dl_58f3b4b553a94622a163";
export const url=new URL("../icons/G/game_trigger_right-fill.svg?v=af2f46da044d3b6812d4899fa8a08a749be3a064a8c0ad4bb9728faf8cd9c1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

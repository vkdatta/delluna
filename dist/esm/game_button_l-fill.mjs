export const name="game_button_l-fill";
export const id="dl_4fa3bb9d8c55e82e36ec";
export const url=new URL("../icons/game_button_l-fill.svg?v=3e179a1f529ecfd7d1264863728ce6ed201ca5e3496419bc245ce2c16f0e5104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

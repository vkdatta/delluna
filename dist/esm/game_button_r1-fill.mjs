export const name="game_button_r1-fill";
export const id="dl_62046853b140ed684712";
export const url=new URL("../icons/game_button_r1-fill.svg?v=32679344ff776ea0b853dc2f2ce79b5da3200114a8bda4fe25ebc628e0367c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

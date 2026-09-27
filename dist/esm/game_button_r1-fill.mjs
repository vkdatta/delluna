export const name="game_button_r1-fill";
export const id="dl_5aa3446c45ffccea5501";
export const url=new URL("../icons/game_button_r1-fill.svg?v=7f018c7696a3c062179808db7c3eff784dcfbcc7070187ba52a7d1197df4591b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

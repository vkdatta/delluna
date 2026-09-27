export const name="game_button_l";
export const id="dl_bc929335389b7206f14c";
export const url=new URL("../icons/game_button_l.svg?v=d2bfa22a6372b9f4dd9260080d3431e351defd96c91e513ad3b30442ab466499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

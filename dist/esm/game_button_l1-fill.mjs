export const name="game_button_l1-fill";
export const id="dl_f76752058e2a6d0cc56f";
export const url=new URL("../icons/game_button_l1-fill.svg?v=4e349b7c01dcfed9b55d95117f9408a3dbb58639bc095a42feb8ada5efb620d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

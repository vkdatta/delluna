export const name="game_button_r1";
export const id="dl_fac07fc200f12baeb0ed";
export const url=new URL("../icons/game_button_r1.svg?v=6c794db310ba6b17a5079e30a6eef3e31c7041bcdc2a51fe2d1703c139fab991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

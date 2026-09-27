export const name="grid_off";
export const id="dl_15b47821505c10a500e5";
export const url=new URL("../icons/grid_off.svg?v=ea9d2ff7e14dbbfdff775675687785458cf721645e23906d5e8241604b48db8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

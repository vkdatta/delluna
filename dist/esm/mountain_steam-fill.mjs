export const name="mountain_steam-fill";
export const id="dl_e611c33f82db9247a144";
export const url=new URL("../icons/mountain_steam-fill.svg?v=8116c862557f8636af135750ef5d7020b4e65af507e2bda2f48a6912deaa9114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

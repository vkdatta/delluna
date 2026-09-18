export const name="water_full-fill";
export const id="dl_5f599a285fde4825910f";
export const url=new URL("../icons/W/water_full-fill.svg?v=837c77f149b5598fed817059534d2d009289ec3a29b61591cc019ad4e0638a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

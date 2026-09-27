export const name="grid_4x4-fill";
export const id="dl_e9c0e8190b2598304f92";
export const url=new URL("../icons/grid_4x4-fill.svg?v=eb2a60d384e0ad2817232be1c196658e6e52283f394f90ff9dd7eb01b4720f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

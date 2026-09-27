export const name="map-fill";
export const id="dl_6bfd1b1b2ce195fc566e";
export const url=new URL("../icons/map-fill.svg?v=f95838d6eb88807e31473af60127367f2e124ce50e4576125b7424e268e792a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="location_off-fill";
export const id="dl_4a133dfddcd9320b2c54";
export const url=new URL("../icons/location_off-fill.svg?v=69505c5c0e82391e20ed7d6b43cfd9ae2827117ed9e32f0dc95abde1d6f83695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

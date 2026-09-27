export const name="car-battery-duotone";
export const id="dl_23aeb68bf01849f2acd4";
export const url=new URL("../icons/car-battery-duotone.svg?v=4e1016154d085898810256fe1f958d3cd4a82849ea0a01ebd30f3b2b8c200437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

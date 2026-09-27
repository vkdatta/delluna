export const name="car-battery-duotone";
export const id="dl_23aeb68bf01849f2acd4";
export const url=new URL("../icons/car-battery-duotone.svg?v=3f84a117ec243c84b32687d3b66a5e4cce0fbd143fcee8a65157057f71eb145d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

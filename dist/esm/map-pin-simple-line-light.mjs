export const name="map-pin-simple-line-light";
export const id="dl_a7420f057c394591a8ae";
export const url=new URL("../icons/map-pin-simple-line-light.svg?v=4fb8164cb1a4ea8e5417ec37ea64b7b9adc5df735ffd19b7500d0a912a78d16f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

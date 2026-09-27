export const name="battery-high-light";
export const id="dl_478355b9f496425898e4";
export const url=new URL("../icons/battery-high-light.svg?v=e1f2e0f87587623bb571d64e426f19b195eed3be14f3a3520ee59c4badfed403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

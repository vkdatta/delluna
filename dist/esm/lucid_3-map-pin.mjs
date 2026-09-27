export const name="lucid_3-map-pin";
export const id="dl_3ba300a494f34d53b2a4";
export const url=new URL("../icons/lucid_3-map-pin.svg?v=5455d2d9c3116235b2f0271549329c8b50b6d726bf5af3b99c5e4e69d9baed07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

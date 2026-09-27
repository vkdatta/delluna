export const name="map-pin-simple-duotone";
export const id="dl_d4f344e2718c439da080";
export const url=new URL("../icons/map-pin-simple-duotone.svg?v=cf999ab2d7bb2573875e37525741abf524feab1a1a564ccae554cd604c273128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

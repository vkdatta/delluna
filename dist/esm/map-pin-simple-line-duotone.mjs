export const name="map-pin-simple-line-duotone";
export const id="dl_4d0a89d7c19e40beb626";
export const url=new URL("../icons/map-pin-simple-line-duotone.svg?v=4629b84d8ebe8f16c028e3a9d311295aa97e61f480b6c10ab321fb5a79dc1c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

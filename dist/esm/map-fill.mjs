export const name="map-fill";
export const id="dl_bc083a38b46f78b04259";
export const url=new URL("../icons/map-fill.svg?v=329c21436f949987a19f845cc28bc1d7bf8b8ffe378cbcf874c90ff25d8ec96f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

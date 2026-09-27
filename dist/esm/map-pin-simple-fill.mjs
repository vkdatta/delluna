export const name="map-pin-simple-fill";
export const id="dl_5d59fc72e43e40c58f3e";
export const url=new URL("../icons/map-pin-simple-fill.svg?v=f8d9550c21f8992ef03ce50a4f54c604b49582b822c36b037e581a0b9fcc7bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

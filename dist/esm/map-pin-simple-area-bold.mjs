export const name="map-pin-simple-area-bold";
export const id="dl_5eab8dceda234122967d";
export const url=new URL("../icons/map-pin-simple-area-bold.svg?v=78e13a3e9b15c0eb4efa3b7008878b15704dea174e763f78022ae335f5e0c926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

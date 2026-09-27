export const name="directions_railway-fill";
export const id="dl_96c32e9d9712ccb62cdd";
export const url=new URL("../icons/directions_railway-fill.svg?v=c2f2c81077149c7e410be319fea9aff9b9b7dde471604b2fa647f87fd60d2eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

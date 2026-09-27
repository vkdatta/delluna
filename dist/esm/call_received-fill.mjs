export const name="call_received-fill";
export const id="dl_fed578fb3e1a20a04377";
export const url=new URL("../icons/call_received-fill.svg?v=ed1be01f9735b5bb69a715579ffd3a877ca3ca8c6d6bad4d53e5d82b7afebe89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

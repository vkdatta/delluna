export const name="south_west";
export const id="dl_f12535b2efcc5fd7f2b4";
export const url=new URL("../icons/south_west.svg?v=ed1be01f9735b5bb69a715579ffd3a877ca3ca8c6d6bad4d53e5d82b7afebe89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

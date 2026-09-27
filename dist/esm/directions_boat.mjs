export const name="directions_boat";
export const id="dl_95a1faebec0ed408e090";
export const url=new URL("../icons/directions_boat.svg?v=b5dfb953f59fa7e0459da40da01a987629bee9404fec334e35cc5311e59e403b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

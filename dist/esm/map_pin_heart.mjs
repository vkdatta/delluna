export const name="map_pin_heart";
export const id="dl_9fedd634c10221294195";
export const url=new URL("../icons/map_pin_heart.svg?v=8482ea2a91486be23f85dd59efeb26c4a37b7c94e4b84a3a1e30e95f5429eb33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

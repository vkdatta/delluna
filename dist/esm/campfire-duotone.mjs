export const name="campfire-duotone";
export const id="dl_fdba204c8db741c1aa6d";
export const url=new URL("../icons/campfire-duotone.svg?v=b078bf418c055c42480aaf2f0e7b8fc9e716d3a5bd2a3a5a29065b995385f99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

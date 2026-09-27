export const name="bike_scooter";
export const id="dl_baa3d3c53fe8e56b181a";
export const url=new URL("../icons/bike_scooter.svg?v=601db276fc3b179db17dfecb74ba262c43d66fa37fc12368b4a91131cd4e7b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

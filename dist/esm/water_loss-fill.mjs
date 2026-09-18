export const name="water_loss-fill";
export const id="dl_5d3f1fa3c17a455d814e";
export const url=new URL("../icons/W/water_loss-fill.svg?v=c7ca8b7b96131f67c58f9aad96ec035f98605ed69c83cb363bd7af78e293be8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

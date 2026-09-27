export const name="my_location-fill";
export const id="dl_ba48a415717dda09ad58";
export const url=new URL("../icons/my_location-fill.svg?v=7277b9b96db0b0961a001647d4b1264ce8880a07882a42d1953749ef7913acb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

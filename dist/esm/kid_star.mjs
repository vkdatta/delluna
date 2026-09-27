export const name="kid_star";
export const id="dl_0515adf65e3274cdbac0";
export const url=new URL("../icons/kid_star.svg?v=b25fc2eb6675db603b1436412b3fde847a0467177e8ee95a62fbdae74533c335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="image_inset";
export const id="dl_1927a1c3317e83500747";
export const url=new URL("../icons/image_inset.svg?v=97ace92a727985ab5e7d2bd1d1b868f1cd2f2c480dc655d3c974617659947eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

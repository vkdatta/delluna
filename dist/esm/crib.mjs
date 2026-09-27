export const name="crib";
export const id="dl_7affe82297a24a4ea893";
export const url=new URL("../icons/crib.svg?v=b68eb1ffdd71e187047b1fb6c1f076eb22c890d85373658312dab54e84fdb199",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shooting-star-fill";
export const id="dl_2c140564ea10138ebe75";
export const url=new URL("../icons/shooting-star-fill.svg?v=6c766ec20fa1b033462ff044bd2466c32026b09ee506f28d79c087927a1ca43d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

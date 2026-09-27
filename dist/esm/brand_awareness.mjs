export const name="brand_awareness";
export const id="dl_28bc2c3749f083c28324";
export const url=new URL("../icons/brand_awareness.svg?v=93849d751a742fbbdfd0f05620d3ba5d629066a3eb1ac80f1bf512d5b6938fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

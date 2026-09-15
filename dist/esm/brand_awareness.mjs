export const name="brand_awareness";
export const id="dl_15c9a27637324dd49506";
export const url=new URL("../icons/B/brand_awareness.svg?v=93849d751a742fbbdfd0f05620d3ba5d629066a3eb1ac80f1bf512d5b6938fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hand-peace";
export const id="dl_30bfaebbe5aa4ac3baa4";
export const url=new URL("../icons/hand-peace.svg?v=0cb806e5abe3c1a3cdfaea51b56ee9effeea1c9d805752a8abaa2c8fa75aec8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

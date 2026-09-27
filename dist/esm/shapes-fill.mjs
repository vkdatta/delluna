export const name="shapes-fill";
export const id="dl_aa2beb9068c04bafbcdf";
export const url=new URL("../icons/shapes-fill.svg?v=c4a3c760065fdd9e5f372ed397efcc15fc1e5589e315920a8d076e471a8328e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

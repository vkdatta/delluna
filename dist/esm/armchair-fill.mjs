export const name="armchair-fill";
export const id="dl_84f677ca8d844f339efa";
export const url=new URL("../icons/armchair-fill.svg?v=0dc5ff4461e04442c1c8687cb478c007dbe1117aee017f1d41f56893b78d6565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

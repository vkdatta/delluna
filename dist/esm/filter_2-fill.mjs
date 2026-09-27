export const name="filter_2-fill";
export const id="dl_a964256a7d308dc3f265";
export const url=new URL("../icons/filter_2-fill.svg?v=c4473299584431a7674e5ee82ce77c1c21efac95b319ab2976690cfdccfa6773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

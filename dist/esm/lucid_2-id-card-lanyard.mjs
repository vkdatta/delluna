export const name="lucid_2-id-card-lanyard";
export const id="dl_8375003532fc42489652";
export const url=new URL("../icons/lucid_2-id-card-lanyard.svg?v=7f0c0a6d28a06ba8e20dc01c275ef949f72e2280a7a2c9a75bb6f0ada5701d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

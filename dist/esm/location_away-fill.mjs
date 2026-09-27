export const name="location_away-fill";
export const id="dl_642aa6143b19aba97195";
export const url=new URL("../icons/location_away-fill.svg?v=f4c9c85844dc1730638f086400927a82eb833c1870b805746b82a89e0bf60407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

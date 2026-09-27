export const name="location_home-fill";
export const id="dl_f394490f3e836f1a5e7e";
export const url=new URL("../icons/location_home-fill.svg?v=f3f19fccb8188b91ff4e72589a0944ea40cc2b83e14774082f528e212e265fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

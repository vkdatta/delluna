export const name="h_mobiledata_badge-fill";
export const id="dl_3d3093b2aa96121b226e";
export const url=new URL("../icons/h_mobiledata_badge-fill.svg?v=686a4929a035624aeecb9fd411e4194b273ec7fada4f9182ca611802c0a9c0a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

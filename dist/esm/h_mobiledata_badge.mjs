export const name="h_mobiledata_badge";
export const id="dl_7e946a621bca45e4d009";
export const url=new URL("../icons/h_mobiledata_badge.svg?v=9b11023c21a13508ed85e91cbd6b7eb5918cb4a42a95a0692c2f53bb9d421873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

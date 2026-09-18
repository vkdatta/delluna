export const name="mobile_menu-fill";
export const id="dl_3263eac540e74762ac47";
export const url=new URL("../icons/mobile_menu-fill.svg?v=ffab1cac121089289df6dd3d6ffdfe950a7c026a1487e2677f137e9f7b7c2681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

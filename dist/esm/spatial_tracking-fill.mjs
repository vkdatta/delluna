export const name="spatial_tracking-fill";
export const id="dl_fe3e56e1555f8bfd3ed2";
export const url=new URL("../icons/spatial_tracking-fill.svg?v=9fb71baf7c34299319aaf0e9f07e56bbc52aa31be5545cbd755eeaf3b095bf2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

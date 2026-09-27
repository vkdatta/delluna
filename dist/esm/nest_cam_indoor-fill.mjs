export const name="nest_cam_indoor-fill";
export const id="dl_7425554737b4c16b0738";
export const url=new URL("../icons/nest_cam_indoor-fill.svg?v=f7a2392ad56b7a543e07a188755a6701d456b8f42c78226a3d2ce8cbde5c6643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

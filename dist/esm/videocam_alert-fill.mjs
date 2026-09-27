export const name="videocam_alert-fill";
export const id="dl_372e12ae9ee8e847baad";
export const url=new URL("../icons/videocam_alert-fill.svg?v=8e3765b3d7cf2665149e1122cf597538a11d19d7519cdab9af42f7048db1bebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

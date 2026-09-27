export const name="videocam_off";
export const id="dl_c05e960cc7c5587627ea";
export const url=new URL("../icons/videocam_off.svg?v=018641be93a3292fde099f431306e52dc633d12f11b654817039c64bdb64c748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

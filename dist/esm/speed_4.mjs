export const name="speed_4";
export const id="dl_947ac7420b82d83d0344";
export const url=new URL("../icons/speed_4.svg?v=5d7c9339f0bb1b992c7a0f5259698acc63dc780e0cf27edd26128eb92f857085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

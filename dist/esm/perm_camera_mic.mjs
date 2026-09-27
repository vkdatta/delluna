export const name="perm_camera_mic";
export const id="dl_7528ef1f3bc346fa5d34";
export const url=new URL("../icons/perm_camera_mic.svg?v=2395da2249e3f708425533ec2cdf885ff3743d80fef77f7d895e4004893e2bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

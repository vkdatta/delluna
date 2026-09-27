export const name="nest_cam_stand-fill";
export const id="dl_fb75180814b13491b1d5";
export const url=new URL("../icons/nest_cam_stand-fill.svg?v=1f634c10064b283e256d86e705131b5414631644f51081a80780c30f2576da4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

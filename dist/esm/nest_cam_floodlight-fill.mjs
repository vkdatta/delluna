export const name="nest_cam_floodlight-fill";
export const id="dl_d58b548872cb13795ca3";
export const url=new URL("../icons/nest_cam_floodlight-fill.svg?v=666e5d9e536564d3ebbc2934bbccd2be6320a19f0504f242f40662e95dbcade5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

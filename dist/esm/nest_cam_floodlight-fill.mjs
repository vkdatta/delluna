export const name="nest_cam_floodlight-fill";
export const id="dl_5053813d926749a2a924";
export const url=new URL("../icons/nest_cam_floodlight-fill.svg?v=5a1e2b589b3e2ae1b0b65e2c76a7c0c5eac257d645de40deea98de2964b12124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

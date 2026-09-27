export const name="nest_cam_iq-fill";
export const id="dl_10c671e8949525a802e6";
export const url=new URL("../icons/nest_cam_iq-fill.svg?v=0d34036017f5e61bab49db9e06ac0989963b4b99af92ab12aa8e7c61b2ed5a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

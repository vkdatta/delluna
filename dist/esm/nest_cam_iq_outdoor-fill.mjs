export const name="nest_cam_iq_outdoor-fill";
export const id="dl_b7ec3ff6c37175c9ff15";
export const url=new URL("../icons/nest_cam_iq_outdoor-fill.svg?v=71a89a618142cedaea1284c0a5ad1864a391c66a8ff07bd9004ddf2a855658e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

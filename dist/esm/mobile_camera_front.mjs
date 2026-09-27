export const name="mobile_camera_front";
export const id="dl_3392f8528a72cab0d8c3";
export const url=new URL("../icons/mobile_camera_front.svg?v=c78ba326d07e5f57f4c428a2c48e6acd5e81abd39d24d7a1e902a15cb7e59326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

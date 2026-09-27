export const name="control_camera";
export const id="dl_6c8fe6408f22da985fbf";
export const url=new URL("../icons/control_camera.svg?v=ec0b62b1991f52d53b5ecaf8c33a1f7efc84f5d13a418166b6927693c38b4571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

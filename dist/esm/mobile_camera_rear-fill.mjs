export const name="mobile_camera_rear-fill";
export const id="dl_a0b1b0a6aa61bab27f16";
export const url=new URL("../icons/mobile_camera_rear-fill.svg?v=642273e8ec70f48e4fb1719b973b4a54754efa63009e1d4c29ab80a1336b97a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

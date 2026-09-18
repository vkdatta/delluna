export const name="mobile_camera_front";
export const id="dl_24f0b776bb7b46e58fd6";
export const url=new URL("../icons/M/mobile_camera_front.svg?v=93ad948ef2455ae6af473de1fdf14a52c325f85040346c189789b3db8e79cdcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

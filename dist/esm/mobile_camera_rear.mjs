export const name="mobile_camera_rear";
export const id="dl_71f730aa9b0cb591b2ca";
export const url=new URL("../icons/mobile_camera_rear.svg?v=9f4cfcb33c41f657bd081e54482be3a255d42af5f6b61f064cef96b2a787c307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

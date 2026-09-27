export const name="mobile_camera_rear";
export const id="dl_db274a1b3c44a8f4aa9e";
export const url=new URL("../icons/mobile_camera_rear.svg?v=1e00fb22789716232ab1b0511a7c8a6d5d20e8ac8b22d83210e803e21d42ff57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

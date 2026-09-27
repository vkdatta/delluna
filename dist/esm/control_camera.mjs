export const name="control_camera";
export const id="dl_d0abbdfddac68a7e38d5";
export const url=new URL("../icons/control_camera.svg?v=c787131529e8627b2312e7eed76fd96446755d1af10c2854c71b27b2900d9b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

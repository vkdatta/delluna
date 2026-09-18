export const name="switch_camera-fill";
export const id="dl_0e48740e0aad48c0925d";
export const url=new URL("../icons/switch_camera-fill.svg?v=aec09ba9005732f676b2b76c1df99f9dc9a334778a020989a6ddb0206a9dddfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

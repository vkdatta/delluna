export const name="camera-plus";
export const id="dl_a35291d0b8854d199e77";
export const url=new URL("../icons/camera-plus.svg?v=67a29605548033be71fac8949984c6391aac98f0cbb2e021441c70f34dcd9d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="camera-rotate-duotone";
export const id="dl_e5c2349a729144cf8ec1";
export const url=new URL("../icons/camera-rotate-duotone.svg?v=f57a10f4dd3465916ee75f0b0bd735e5ed5d3f65563973b3fb287949b7cf1e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

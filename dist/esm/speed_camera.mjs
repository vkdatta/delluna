export const name="speed_camera";
export const id="dl_591a6bc3bdaa7c65ed61";
export const url=new URL("../icons/speed_camera.svg?v=8519061f2f1f3fc0ab675ec84f35c94450095c4e3f2f34d4c5e13d007b42f192",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="device-tablet-camera-bold";
export const id="dl_172386062a8a4398b2b6";
export const url=new URL("../icons/device-tablet-camera-bold.svg?v=9bc4c4f9894d0034c806b32a69a4e6bdafed6dc693fac8da43c779cb03c20f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

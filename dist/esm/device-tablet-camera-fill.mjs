export const name="device-tablet-camera-fill";
export const id="dl_ef293cdac00b4e6eaf37";
export const url=new URL("../icons/device-tablet-camera-fill.svg?v=c8e11bc8dc0f7e82615f88a13d977ee7ffdcbd0d3e6241693bd6a4add650670d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="photo_camera-fill";
export const id="dl_420cf929523f4e9189a8";
export const url=new URL("../icons/P/photo_camera-fill.svg?v=702759c2ec977e3798fc2ad1670e64d775bbe9814ebe84bac3cf3f00d123d7c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

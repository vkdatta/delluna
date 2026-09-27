export const name="flip_camera_android-fill";
export const id="dl_7f79dd9ca6179a235b19";
export const url=new URL("../icons/flip_camera_android-fill.svg?v=1a12a27302bdf1ac119f9a340b4a4c3d769a476cf4ab7d9e955199387e50d2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

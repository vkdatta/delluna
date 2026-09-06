export const name="aperture-fill";
export const id="dl_7babdcf584cb4f5da7c3";
export const url=new URL("../icons/aperture-fill.svg?v=21d86b4e943f4e5f5fca0881ae279ab0f9d921bdcdd7e694ec414c0ad54828c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

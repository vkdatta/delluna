export const name="mobile_rotate_lock";
export const id="dl_5d51e610360845d38ad7";
export const url=new URL("../icons/M/mobile_rotate_lock.svg?v=6a81903cae2a1b01ce27b7f6cb06c3d5123f99a7a8600d0c0d9ee65dad768f48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

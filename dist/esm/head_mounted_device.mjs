export const name="head_mounted_device";
export const id="dl_603cf72faf544c9787b7";
export const url=new URL("../icons/H/head_mounted_device.svg?v=6d0b2d8dd3d0cdda66964002ca884e0eb001de5773ab6fbf798d30af842f564a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

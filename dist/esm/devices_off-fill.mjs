export const name="devices_off-fill";
export const id="dl_57dfe4b3720563203228";
export const url=new URL("../icons/devices_off-fill.svg?v=d5c200f7d5a04df4d698a8a0bf264083ea29865a249f8d74307946065f4b71e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

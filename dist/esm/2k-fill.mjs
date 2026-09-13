export const name="2k-fill";
export const id="dl_441a8d1313de4369b693";
export const url=new URL("../icons/2/2k-fill.svg?v=9d7fb270ee559f5cdaabb9255f3dc5c98e07351ce0fbad4f841ba31e9d437040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

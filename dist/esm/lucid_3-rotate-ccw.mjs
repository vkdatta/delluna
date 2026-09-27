export const name="lucid_3-rotate-ccw";
export const id="dl_a4a83fcb22cf4835b9b3";
export const url=new URL("../icons/lucid_3-rotate-ccw.svg?v=584a5261544ffc8794eb2107e0873918bfd1a94854efed407cdf22a3074cb15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

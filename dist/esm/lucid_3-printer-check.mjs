export const name="lucid_3-printer-check";
export const id="dl_4ae3be12b27d414c889f";
export const url=new URL("../icons/lucid_3-printer-check.svg?v=66561a53abce9ee5df28fd26be552fbcabd3f34eab888bc3d0be3baa21ac581c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

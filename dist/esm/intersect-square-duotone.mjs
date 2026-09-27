export const name="intersect-square-duotone";
export const id="dl_d71d18033c004298a291";
export const url=new URL("../icons/intersect-square-duotone.svg?v=23bbeb1ffd41291680b3d02f210d6c814fa3df6ebb61630ca0f92cce49841ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

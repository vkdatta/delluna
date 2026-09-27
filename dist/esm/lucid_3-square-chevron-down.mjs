export const name="lucid_3-square-chevron-down";
export const id="dl_18fb09c635b34fa7b125";
export const url=new URL("../icons/lucid_3-square-chevron-down.svg?v=191419ed5e23200283bd1d10ac5537cd9d928b170922f5892f517f2d54166da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-circle-chevron-down";
export const id="dl_87cd2d69777049c39e7f";
export const url=new URL("../icons/lucid_1-circle-chevron-down.svg?v=877b4a0cc43d71938d665507088cb568ca49016ba5e6ee04994eae4ac2b47557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dots-three-circle-vertical-bold";
export const id="dl_e553bddc9b8d4ce289df";
export const url=new URL("../icons/dots-three-circle-vertical-bold.svg?v=c4f95584c2c743bc9efdffb8590a7137eafbf057655c2e538d0c41b1aa7f515a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

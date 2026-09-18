export const name="nature";
export const id="dl_ad3fa4657c324ced81e6";
export const url=new URL("../icons/N/nature.svg?v=53826700be5f303d2bb909cd98862c912a2e50a19094aa7f76c6cdacdf5ee918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

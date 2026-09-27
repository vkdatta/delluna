export const name="storage-fill";
export const id="dl_c6fad482c540ced9e809";
export const url=new URL("../icons/storage-fill.svg?v=80d03d780e1eebef068e905b895da8b19fa6e34b74e3d2c72c4cd52f618ac100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

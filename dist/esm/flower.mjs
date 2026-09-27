export const name="flower";
export const id="dl_febd66135fdf4aadaffc";
export const url=new URL("../icons/flower.svg?v=c26d78a67bd6a7dfd1c22599499339c88cf601224f468c94f06a28a1ff98bc5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="address-book-duotone";
export const id="dl_6e17cc7345204594a909";
export const url=new URL("../icons/address-book-duotone.svg?v=551d7333498f406ed88e6514b3bef3d9e2514a41aa35615a9e832dbd788a5416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

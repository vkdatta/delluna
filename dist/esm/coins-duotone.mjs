export const name="coins-duotone";
export const id="dl_dd19280a5ced46c4913e";
export const url=new URL("../icons/coins-duotone.svg?v=b93314cbb7b0869ab016f6ee0428ac507f7fa177b8297fde7f7e670e2147023f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

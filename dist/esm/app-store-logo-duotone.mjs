export const name="app-store-logo-duotone";
export const id="dl_b619e10840bc42228674";
export const url=new URL("../icons/app-store-logo-duotone.svg?v=55b6654c56165c57886c38c4f12de6b9ad7a71b36ba08c2b264177e5ebae25c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="view_array";
export const id="dl_b793d4748207d0fe6b5b";
export const url=new URL("../icons/view_array.svg?v=b1d12386b9f3e4816fad82c72a7b9505bb90223912a6a20b89e517466eb60b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow-circle-up-right-fill";
export const id="dl_1e8236e525d64cc28ac1";
export const url=new URL("../icons/arrow-circle-up-right-fill.svg?v=78d44319c6b93ea3b65b5f73636d3344b0f1212d014ca3aab2a64513b5198400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

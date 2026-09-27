export const name="lucid_3-pocket-knife";
export const id="dl_aa4226e5a23241249c2a";
export const url=new URL("../icons/lucid_3-pocket-knife.svg?v=19a8ed18b9d467faae6fd9ae4f2a0748a67c421e1432be88099628cbfc023856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

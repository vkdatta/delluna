export const name="invoice-duotone";
export const id="dl_c9486bfe9a1649278472";
export const url=new URL("../icons/invoice-duotone.svg?v=445fc52feede56466e6cbf631bbb2b95901cfa3a385efc037bbfe926cb2dd78b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

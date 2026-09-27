export const name="ward-fill";
export const id="dl_ff2b738326e5b01d8a02";
export const url=new URL("../icons/ward-fill.svg?v=fb16600cf4a574912dbd6fc9c14adf241032f37f867c690076b7f360dd49a9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

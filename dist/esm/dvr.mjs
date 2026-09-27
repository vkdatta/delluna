export const name="dvr";
export const id="dl_87473af74dfb7f19ae57";
export const url=new URL("../icons/dvr.svg?v=666931610bee81f20a91c3418d8aa8964ab222185e1743eb4eef63b28f76160a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

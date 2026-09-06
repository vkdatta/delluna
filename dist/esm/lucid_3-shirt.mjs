export const name="lucid_3-shirt";
export const id="dl_e877aaa23e824a25ba3a";
export const url=new URL("../icons/lucid_3-shirt.svg?v=0ab1dba0101e5439f25cf4a360efc8a66cfd66dd4c678547a67f77e70cba9b1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

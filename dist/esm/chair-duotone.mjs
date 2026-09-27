export const name="chair-duotone";
export const id="dl_c4416fc9b3d34f959a3c";
export const url=new URL("../icons/chair-duotone.svg?v=4a01f17be2cb2e8a4ee44fc56b0a825c0fea6438e764e9b4e53beda639ef52d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arch-add";
export const id="dl_e3fa51248dc90c8194bc";
export const url=new URL("../icons/arch-add.svg?v=b603e16a7b71f16095c171577549550e2c6bed7257e64dc9a60c87dcd52a0ee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

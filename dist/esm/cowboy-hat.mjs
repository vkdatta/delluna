export const name="cowboy-hat";
export const id="dl_13daa67d938146dca83e";
export const url=new URL("../icons/cowboy-hat.svg?v=be3931b01675c767105b27e7c7b322f6b45313a51cdd827e00b94e92fa559e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

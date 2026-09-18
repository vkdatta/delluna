export const name="atr-fill";
export const id="dl_b437c5b3c74a444d8f29";
export const url=new URL("../icons/atr-fill.svg?v=24819de2926c353be790119d0d6ffc57d29901cb1eb28e3fa675eaf803f5397c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="oven-light";
export const id="dl_e5853752a2a04712b9c0";
export const url=new URL("../icons/oven-light.svg?v=87d228f924c571d374a4d376531cd499bbc738c1f74eacc316d9f9039400a7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="butterfly-duotone";
export const id="dl_b31bfadd5b1f4cfb858c";
export const url=new URL("../icons/butterfly-duotone.svg?v=060d111cc5721694a3b3afb51910b5e3b45e78dbcae4be0d4975ba249cfb03f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

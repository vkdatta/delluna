export const name="currency-gbp";
export const id="dl_7d59306d48a742ea97b6";
export const url=new URL("../icons/currency-gbp.svg?v=3daba596ff04f78c8bd125292baaf8bc6b91949242b9214feb7dbe22c6f72a3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="fastfood-fill";
export const id="dl_5d4d01d40d6deca0e076";
export const url=new URL("../icons/fastfood-fill.svg?v=c48d82b1ef70a4aca03974198e2693d8851e63cfb90c6f96c882f37e73d9aa89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

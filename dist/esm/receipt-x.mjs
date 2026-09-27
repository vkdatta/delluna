export const name="receipt-x";
export const id="dl_ccedff324b234f40a0e2";
export const url=new URL("../icons/receipt-x.svg?v=73b63f4da8b21a1890c87a01fef41d5986ff87f8858acc599005f80c35ee42a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

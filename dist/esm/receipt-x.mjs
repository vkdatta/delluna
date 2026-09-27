export const name="receipt-x";
export const id="dl_ccedff324b234f40a0e2";
export const url=new URL("../icons/receipt-x.svg?v=115f79949e98b1a4009dc7e589f737764845ef53b47b21a8b3a3d2301f7244bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

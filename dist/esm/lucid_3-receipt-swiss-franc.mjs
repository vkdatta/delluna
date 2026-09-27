export const name="lucid_3-receipt-swiss-franc";
export const id="dl_025b184694f349649c0b";
export const url=new URL("../icons/lucid_3-receipt-swiss-franc.svg?v=5d97de3c590b48247bb9c5302e16a1f002550ca456aeee1811e864291400d9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="receipt-x";
export const id="dl_ccedff324b234f40a0e2";
export const url=new URL("../icons/receipt-x.svg?v=57a6562519387547ed03a40d844391edb574c2a7144ab8f39296bfb1d6fcbb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

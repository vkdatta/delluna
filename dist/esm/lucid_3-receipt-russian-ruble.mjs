export const name="lucid_3-receipt-russian-ruble";
export const id="dl_b8d2f6ca10a74235b91a";
export const url=new URL("../icons/lucid_3-receipt-russian-ruble.svg?v=2d61fada15b8e7dd1da770fecaa24a8d0c9c86fad21a759d72116392c6b87b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

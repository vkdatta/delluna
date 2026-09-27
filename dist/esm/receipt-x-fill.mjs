export const name="receipt-x-fill";
export const id="dl_8a4c2f5ef33240fa809a";
export const url=new URL("../icons/receipt-x-fill.svg?v=0dd9551288b886c7690bfc60ff7a6d5aed97acd65de190192d0cfd8c9fc2ce9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

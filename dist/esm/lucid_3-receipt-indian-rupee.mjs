export const name="lucid_3-receipt-indian-rupee";
export const id="dl_d6803d5dc8cb48ab8a88";
export const url=new URL("../icons/lucid_3-receipt-indian-rupee.svg?v=f6b46b34debe79c56692d6cfb12e97324d5d1dbdcc490c48a173e85e4129c8aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

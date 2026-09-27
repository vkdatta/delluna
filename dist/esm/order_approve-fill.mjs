export const name="order_approve-fill";
export const id="dl_bdba5bd16a3b1b497715";
export const url=new URL("../icons/order_approve-fill.svg?v=7247c8631cb4b85e16f2bb7f645bb7599c804ea13217a20ebeca6603b18dcd2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

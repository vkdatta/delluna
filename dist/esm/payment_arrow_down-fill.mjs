export const name="payment_arrow_down-fill";
export const id="dl_061a5c6753a6bf3e7dba";
export const url=new URL("../icons/payment_arrow_down-fill.svg?v=169cf965b71a5e3c86e754014d7dd844d3ef82eaf75f5fe01b63bb07443aaa1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="redeem-fill";
export const id="dl_9ae9655edf7cee4152dc";
export const url=new URL("../icons/redeem-fill.svg?v=48d972af48d32fc7cc0f9ace0d3b765581c45471cd72f1729b7bd96e0521bbf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

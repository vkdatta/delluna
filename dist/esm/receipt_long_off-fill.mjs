export const name="receipt_long_off-fill";
export const id="dl_ba1f13f88c69b7dec23b";
export const url=new URL("../icons/receipt_long_off-fill.svg?v=f6f1afa1a1690ed28bca500b80479360c9efd8a250f17952b70788a3bde04306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

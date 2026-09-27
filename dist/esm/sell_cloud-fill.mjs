export const name="sell_cloud-fill";
export const id="dl_186c6877127106f724f7";
export const url=new URL("../icons/sell_cloud-fill.svg?v=21eae6865c99a8f77ea2220029be27523fba6311ebad47ba267ce3b2cdb3c745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

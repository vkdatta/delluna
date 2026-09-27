export const name="shop-fill";
export const id="dl_9b2f74fc8b2c8acb5b78";
export const url=new URL("../icons/shop-fill.svg?v=c0a1f950731196691ce8812cf57b21223f14a59b44b51c604d33794a71804415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

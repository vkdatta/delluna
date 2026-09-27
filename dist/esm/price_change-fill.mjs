export const name="price_change-fill";
export const id="dl_742c281571a88e5054a0";
export const url=new URL("../icons/price_change-fill.svg?v=7ced259a2c93375917913c121fbc6d4d12d230b25b11918efd650522790dba51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

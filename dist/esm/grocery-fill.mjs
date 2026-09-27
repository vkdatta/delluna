export const name="grocery-fill";
export const id="dl_9e53f51f31fba284b119";
export const url=new URL("../icons/grocery-fill.svg?v=3c467ad99a5a272f0a9a2f7a9e5f5d89e6df2111edab2bea5802f9fdaee6cd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

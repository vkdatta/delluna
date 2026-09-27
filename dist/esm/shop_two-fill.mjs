export const name="shop_two-fill";
export const id="dl_8bd17710699873e28028";
export const url=new URL("../icons/shop_two-fill.svg?v=2b229c4b31f5a5c06691e090e3ed69eee93bc947afb707ec209241eb08c2a2e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

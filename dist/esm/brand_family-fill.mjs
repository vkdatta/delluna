export const name="brand_family-fill";
export const id="dl_4fd89d19e6c0332d22e8";
export const url=new URL("../icons/brand_family-fill.svg?v=a269f2987b6951181de4ced9200b2b1c4b4b854b1003161a1855b22c61296cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

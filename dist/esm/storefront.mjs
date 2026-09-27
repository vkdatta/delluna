export const name="storefront";
export const id="dl_da9f3a2b74df7de2a792";
export const url=new URL("../icons/storefront.svg?v=b8692a79bd8971051a7a2ea2fd233c457c1a13c8189bb15c2d5975dd354be373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

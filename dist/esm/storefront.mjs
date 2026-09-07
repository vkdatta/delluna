export const name="storefront";
export const id="dl_bf0380026ab943188008";
export const url=new URL("../icons/S/storefront.svg?v=b1e1288fc8b38ddf011dfc23a5f1754d30c296a56d143c67b4ed710ff58d8a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

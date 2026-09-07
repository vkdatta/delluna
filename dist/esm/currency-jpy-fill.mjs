export const name="currency-jpy-fill";
export const id="dl_030913e2994c43ddb783";
export const url=new URL("../icons/currency-jpy-fill.svg?v=30d8fcddf82df4791f94e5a3739b134d30ef508a507fbf2312e3b53c7e3c0edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

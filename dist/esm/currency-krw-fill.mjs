export const name="currency-krw-fill";
export const id="dl_7d6bb392af784ab4ae7f";
export const url=new URL("../icons/currency-krw-fill.svg?v=a12b57b848fae81ff7fe0f6fc3fb848afc773e44e6d704b288627e8f364195d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

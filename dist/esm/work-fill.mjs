export const name="work-fill";
export const id="dl_6cb865d10a3f16f4a714";
export const url=new URL("../icons/work-fill.svg?v=455dc1b774d2292c32da973e606d03905dd988f14db1ebdf750da34059f36635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

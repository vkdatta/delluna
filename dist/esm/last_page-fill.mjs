export const name="last_page-fill";
export const id="dl_e99bd00b1255a2cb8418";
export const url=new URL("../icons/last_page-fill.svg?v=8c2d7f5709b53f5f2601371d959194c800b52c20b35554814161635e5d7ac78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

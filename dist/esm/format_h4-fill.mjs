export const name="format_h4-fill";
export const id="dl_1866799c50d1ff5fd4b4";
export const url=new URL("../icons/format_h4-fill.svg?v=24fbc88b219913993e9d85364e9f77daf5a8b2af39372973ca4f620f2a46fa6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hdr_off_select";
export const id="dl_d1ec4c10804f92ddcfed";
export const url=new URL("../icons/hdr_off_select.svg?v=163bc89bb07fc08df1ad11084ade7dd40c43e3f0f86dea74a14555ab65fb7113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

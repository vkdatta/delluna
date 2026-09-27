export const name="lte_plus_mobiledata-fill";
export const id="dl_3f4c1e5f91b0daf3089a";
export const url=new URL("../icons/lte_plus_mobiledata-fill.svg?v=3eb40d26fe3ba0d860d273d41b58d1492e3c640f6105f8bcf4f24eff3a153818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

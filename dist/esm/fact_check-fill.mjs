export const name="fact_check-fill";
export const id="dl_d89ac95d638abbdf4e54";
export const url=new URL("../icons/fact_check-fill.svg?v=f99bc80d771e8b2a5543102a3093567f42ec2ba426a977c7ff13829ffb305210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

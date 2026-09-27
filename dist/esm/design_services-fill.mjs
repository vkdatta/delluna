export const name="design_services-fill";
export const id="dl_f7fa59acc1705c5e5f17";
export const url=new URL("../icons/design_services-fill.svg?v=c5b33edbfaa1bf0c00ed1f4353cdc2b0aaf5adaa812e1035fe64c4c38ee36617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

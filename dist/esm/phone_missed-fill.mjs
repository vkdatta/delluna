export const name="phone_missed-fill";
export const id="dl_54fe87876d4c6d4c228f";
export const url=new URL("../icons/phone_missed-fill.svg?v=143e728bd7130637001017fc797c5d5b0617793dae4dcaf84dba70cbd568f50f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

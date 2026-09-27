export const name="partner_reports-fill";
export const id="dl_9013061be3afccadc284";
export const url=new URL("../icons/partner_reports-fill.svg?v=95250db4d75746499b45f692d1d44b9d583372460abda7aae366cba7a97d75f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

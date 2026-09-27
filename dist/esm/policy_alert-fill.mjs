export const name="policy_alert-fill";
export const id="dl_953afd4ea3ee55c8fb51";
export const url=new URL("../icons/policy_alert-fill.svg?v=32e304b673ba44e5c64650fec87a9ed1ea574e069f62d15100fc25ed47cb91d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

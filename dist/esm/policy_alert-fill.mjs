export const name="policy_alert-fill";
export const id="dl_f36a07ccda17652cca50";
export const url=new URL("../icons/policy_alert-fill.svg?v=056325262ea99fc8a490e5d1a71f02ea8ee7179e20066ed7e2e8ec823b057486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

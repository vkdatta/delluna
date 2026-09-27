export const name="policy_alert-fill";
export const id="dl_23b1a0fc26736854ea8f";
export const url=new URL("../icons/policy_alert-fill.svg?v=049496bb7135036f704fa0182015cd4074158584759a4a408885a7078b637508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

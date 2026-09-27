export const name="partner_exchange-fill";
export const id="dl_06cd1b116ab53e3b8240";
export const url=new URL("../icons/partner_exchange-fill.svg?v=da437447230ae79d038a37fc7341104cb36d2f6c2dc4153168a2a72e7fe057db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

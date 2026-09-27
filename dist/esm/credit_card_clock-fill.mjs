export const name="credit_card_clock-fill";
export const id="dl_46130f1a7fed25ce638d";
export const url=new URL("../icons/credit_card_clock-fill.svg?v=ec6dd19b8ad1ccf730e06b0ad23dcf17835dc277a59495e873612fd69acc1985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

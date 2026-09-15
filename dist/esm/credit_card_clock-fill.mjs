export const name="credit_card_clock-fill";
export const id="dl_c889b20cea36403188b7";
export const url=new URL("../icons/C/credit_card_clock-fill.svg?v=2655c8f723f2519ac6476c8128672039d05568d3b51baf579e7f2f88ff0937dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

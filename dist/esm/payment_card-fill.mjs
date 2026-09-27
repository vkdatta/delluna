export const name="payment_card-fill";
export const id="dl_d7f98d661f93bba4b5c7";
export const url=new URL("../icons/payment_card-fill.svg?v=cac61af0837db000c2eeaa60bb9526effc050e337475c91cf22708d048c49a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

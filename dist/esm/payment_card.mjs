export const name="payment_card";
export const id="dl_9e578192936743369378";
export const url=new URL("../icons/P/payment_card.svg?v=23fcd30f9f013eef65c23ab3cd3a1026277cc3ca4095743e99a190d05dd185e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

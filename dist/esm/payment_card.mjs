export const name="payment_card";
export const id="dl_ed8c2e7f2c9436bddade";
export const url=new URL("../icons/payment_card.svg?v=644303230d04d89ad8b35bfc4282a996728523d29e1626d9a7930c083bfcafb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

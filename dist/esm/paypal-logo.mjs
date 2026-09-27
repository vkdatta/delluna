export const name="paypal-logo";
export const id="dl_592462a1f4674a2e8467";
export const url=new URL("../icons/paypal-logo.svg?v=74164a7bf32a78403253c752a6769a6feb52e0f2b01c8972bb75fc52586ed83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

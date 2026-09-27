export const name="paypal-logo-duotone";
export const id="dl_732bb86256b443f19bb3";
export const url=new URL("../icons/paypal-logo-duotone.svg?v=51f8ef04e527566d2b5a2d11d0295f9118d689ee47324c3e732b273bd7c0d9a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

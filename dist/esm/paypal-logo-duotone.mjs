export const name="paypal-logo-duotone";
export const id="dl_732bb86256b443f19bb3";
export const url=new URL("../icons/paypal-logo-duotone.svg?v=6510df34d753fb313a902bf3664fc6be3f388ace073f8ca235b850ccb47aa0d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

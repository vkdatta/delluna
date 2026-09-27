export const name="paypal-logo-light";
export const id="dl_8169cabcdbc94c65bba6";
export const url=new URL("../icons/paypal-logo-light.svg?v=72ddd3c2c53444a0a3a730d8bc4ec208ea2e20aa14e894fc9c6520d9e5c02b90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

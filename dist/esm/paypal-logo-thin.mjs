export const name="paypal-logo-thin";
export const id="dl_10fd222d522845cb817b";
export const url=new URL("../icons/paypal-logo-thin.svg?v=3e6fb924a8d586a6a7b0a474bae68d6e74fbdf5001c7cb6cc8f59786597c7c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

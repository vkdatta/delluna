export const name="paypal-logo-thin";
export const id="dl_10fd222d522845cb817b";
export const url=new URL("../icons/paypal-logo-thin.svg?v=f0bbd6ee58d3e89de07891682c04704c3307addc413c18ea31ac639417f9f6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

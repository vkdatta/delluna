export const name="paypal-logo-thin";
export const id="dl_10fd222d522845cb817b";
export const url=new URL("../icons/paypal-logo-thin.svg?v=fb1ff87d43a85b5ef93802b20f1fdda6da4291fead2396672e873fcffd395288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="contactless-payment-fill";
export const id="dl_40f9edbad5934e0da3dc";
export const url=new URL("../icons/contactless-payment-fill.svg?v=5d6fedcf6c1b2113a81ef20be3ea5e7025fa25d788e71751590ef25ef17b59c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="paypal-logo-fill";
export const id="dl_2c158a0212574940b04d";
export const url=new URL("../icons/paypal-logo-fill.svg?v=53c997dba82bd03c7dc76f4c68d3617db900e547fb45027e84ace0e9dd1b8cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

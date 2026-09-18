export const name="payments-fill";
export const id="dl_ea924d17b53349ce8d61";
export const url=new URL("../icons/payments-fill.svg?v=50989e2d43dbc27477892da4561581b892b0b9a816ca62f834c2e99ff781c5ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

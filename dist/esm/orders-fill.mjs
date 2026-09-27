export const name="orders-fill";
export const id="dl_7ba28bec7b0237c0afd3";
export const url=new URL("../icons/orders-fill.svg?v=fdef6ddb61f0400ef5fd6020282ac7d97f5bc8458335f2adc09c403d43dcba96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="local_shipping-fill";
export const id="dl_e421e1ede364046a7ab6";
export const url=new URL("../icons/local_shipping-fill.svg?v=c2b5489475fe3cc25bd3b04606c1d531a389ff1dd0e965d03d12e864116e276b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

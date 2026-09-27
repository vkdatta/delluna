export const name="stripe-logo-fill";
export const id="dl_d48fc0b6269a8a0fa1ca";
export const url=new URL("../icons/stripe-logo-fill.svg?v=3e6d011a1f2ca203e21c1ca450ae6bb405fb78864dd20438a6ed848eda093ee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

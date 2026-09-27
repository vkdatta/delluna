export const name="credit_card_off-fill";
export const id="dl_c5c5c8338f1668760ce0";
export const url=new URL("../icons/credit_card_off-fill.svg?v=ff3e0f3ff421e6faa7ae180b470d3b49258e4c37b2be3a13b9962362246c0a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

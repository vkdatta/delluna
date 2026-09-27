export const name="directions_railway_2-fill";
export const id="dl_c193e49b98be5ce38864";
export const url=new URL("../icons/directions_railway_2-fill.svg?v=4488393b5049dadea129ed298cb8cd01156b81ec5b13b8bdcfb42eaa2c2e248a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

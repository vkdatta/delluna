export const name="featured_seasonal_and_gifts-fill";
export const id="dl_91907d4408c3a758451a";
export const url=new URL("../icons/featured_seasonal_and_gifts-fill.svg?v=88c9c467b28e2a6ecc853d2c1c55b8d410a17844374fbe08dd213e90ca391663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

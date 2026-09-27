export const name="earbuds_battery-fill";
export const id="dl_5926f87cc65501257343";
export const url=new URL("../icons/earbuds_battery-fill.svg?v=578f9f07f1b0b4c2e230377221a8276912520c95e3409eb36b531b5b56a12c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

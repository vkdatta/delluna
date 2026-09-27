export const name="currency-circle-dollar-fill";
export const id="dl_90f7938a8ad642f9af00";
export const url=new URL("../icons/currency-circle-dollar-fill.svg?v=30e1cda5011c43ca243c7345fa13532f0e502d3531b5f2d016b0b85c939ed2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

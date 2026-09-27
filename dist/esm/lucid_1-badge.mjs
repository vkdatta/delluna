export const name="lucid_1-badge";
export const id="dl_4ea1e38c26944360b566";
export const url=new URL("../icons/lucid_1-badge.svg?v=67e510df9dccfb9d3f2c0830e9678bc2f1bb442de5c9f0d9df79cb33de83efdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

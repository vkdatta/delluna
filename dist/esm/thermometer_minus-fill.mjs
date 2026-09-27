export const name="thermometer_minus-fill";
export const id="dl_94e49d297958385a433b";
export const url=new URL("../icons/thermometer_minus-fill.svg?v=3a3df29c64e8c401c2ea4e8451d34b7d032d8b840f2f5bca4570e59cb0513b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

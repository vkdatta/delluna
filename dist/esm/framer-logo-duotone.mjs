export const name="framer-logo-duotone";
export const id="dl_6f9b06ace4f442438573";
export const url=new URL("../icons/framer-logo-duotone.svg?v=1a76453e3c795898aba37d3ff0669854663af3fbb2d94db5993f1be55a12bc31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="battery-charging-duotone";
export const id="dl_397782cf161543b3bff6";
export const url=new URL("../icons/battery-charging-duotone.svg?v=8acd3efce2f5f954dec1d4073f9aac32c641054c73ff6a68e7ded21987f14254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

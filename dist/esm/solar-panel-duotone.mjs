export const name="solar-panel-duotone";
export const id="dl_707e4f0e3b9e414bba4b";
export const url=new URL("../icons/S/solar-panel-duotone.svg?v=263e7aa46ee39c0eb3f9f8d158f4261da5351beb6fdd623432b89dfb1e388f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

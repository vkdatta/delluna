export const name="battery-vertical-high-duotone";
export const id="dl_e57ef3c6e12040338720";
export const url=new URL("../icons/battery-vertical-high-duotone.svg?v=b76efa91629c1b579420ede64f1fc51e2899bcf38ac59bc8fbf202d963b01450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

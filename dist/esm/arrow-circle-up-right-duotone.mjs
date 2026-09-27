export const name="arrow-circle-up-right-duotone";
export const id="dl_a2d71074431c46109ac7";
export const url=new URL("../icons/arrow-circle-up-right-duotone.svg?v=eb18cc74c4f05431c8bc238b057f309e34b8dc2010f1ab44b50a289d2b6324bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

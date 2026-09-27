export const name="arrow-circle-up-right-duotone";
export const id="dl_a2d71074431c46109ac7";
export const url=new URL("../icons/arrow-circle-up-right-duotone.svg?v=a192e6605ca5b8e22542fc277ff05136017786a1a7f5b61eefc9c8abe2f30660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

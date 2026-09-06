export const name="car-battery-light";
export const id="dl_ccbc1fa27363494388d4";
export const url=new URL("../icons/car-battery-light.svg?v=2bbf4ce1f9e04bb00edac142a07bfc6d447b7394fa03822385886f90281f87cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

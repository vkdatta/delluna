export const name="sketch-logo-duotone";
export const id="dl_c3bde26688f0445882d0";
export const url=new URL("../icons/S/sketch-logo-duotone.svg?v=e12ed80226d81142255185d60be0784979b00f48eb2d087c9bacdcc6addaad1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

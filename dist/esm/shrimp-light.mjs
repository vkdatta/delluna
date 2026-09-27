export const name="shrimp-light";
export const id="dl_c973a78fdcf31de98593";
export const url=new URL("../icons/shrimp-light.svg?v=90fe102b669c2b4fecfc65892e6322bcfa81b748e422cbcefdc47b52b6ccb379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

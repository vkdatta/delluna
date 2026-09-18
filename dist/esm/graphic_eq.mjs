export const name="graphic_eq";
export const id="dl_25685cdfef4943148f0d";
export const url=new URL("../icons/G/graphic_eq.svg?v=53f91079a723520c1771eee0d6521c1d08965e0a76394b68e32b26ca6be28a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="car-duotone";
export const id="dl_ae228c306f7a4bc295e4";
export const url=new URL("../icons/car-duotone.svg?v=71c6b4497064c00710f3479c55581a5b3e6ab80322affd571241bca9a168a4dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

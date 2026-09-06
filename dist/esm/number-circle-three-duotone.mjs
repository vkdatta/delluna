export const name="number-circle-three-duotone";
export const id="dl_fdeb86756fc049d684d6";
export const url=new URL("../icons/number-circle-three-duotone.svg?v=da52ac78e3f60aff516a7ac7a4158c4867000e17a6f556b1ceea279f5ceae422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

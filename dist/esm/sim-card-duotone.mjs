export const name="sim-card-duotone";
export const id="dl_f312150167afcba77e46";
export const url=new URL("../icons/sim-card-duotone.svg?v=0977089e8409a477da47a936b4218ee74dc17259dcaf42f00aa8db842dc5c347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

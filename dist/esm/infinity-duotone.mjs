export const name="infinity-duotone";
export const id="dl_965b991d21064fe09845";
export const url=new URL("../icons/infinity-duotone.svg?v=673cb823624bc3541c3852107290e00e36b15b2371d0b4f69f63350661664ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow-u-up-left-duotone";
export const id="dl_92f4f03693d5404cadec";
export const url=new URL("../icons/arrow-u-up-left-duotone.svg?v=223786460a94bb8706b573dcdebaaf0efa3d22fc9c86103f7f0cc64a2b87c390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

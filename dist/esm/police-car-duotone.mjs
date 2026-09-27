export const name="police-car-duotone";
export const id="dl_a386123b5105470ba2a4";
export const url=new URL("../icons/police-car-duotone.svg?v=3ed2247b967ac0eb817ad3298bceb062cb4c7f68b316a0b9afd34459073e61d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

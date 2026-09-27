export const name="cactus-duotone";
export const id="dl_f827b861e9e441338301";
export const url=new URL("../icons/cactus-duotone.svg?v=87595276be156ab24a183d9d33885e3524fcbd1b70c05dd12afb5d813eab73da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

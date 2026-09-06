export const name="infinity-duotone";
export const id="dl_965b991d21064fe09845";
export const url=new URL("../icons/infinity-duotone.svg?v=e96ea4b38350196c16a67327576aa4305649b39a73b1c69cafa0417229ea98a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-clock-4";
export const id="dl_f90b8976ca1540b8bf3f";
export const url=new URL("../icons/lucid_1-clock-4.svg?v=8bf5f9956bfd6e4c50e377c536529767eb849d8384c1f9cd82f3ebd4a74d9102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

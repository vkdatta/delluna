export const name="arrow-circle-down-left-duotone";
export const id="dl_6fbfd1eb7d2247b29b79";
export const url=new URL("../icons/arrow-circle-down-left-duotone.svg?v=6c178b608fc56efbfc4ef3835d1ce51c1ac4c31484e9557f4bd6b7314fd359ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

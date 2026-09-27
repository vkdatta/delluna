export const name="intersect-three-duotone";
export const id="dl_225a54b3212f4c18b0b5";
export const url=new URL("../icons/intersect-three-duotone.svg?v=406c492bcde813efd9a12e09d97e69c2a0c38aad36c28c0bfc9b1507f6f90f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

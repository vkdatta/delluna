export const name="stack_hexagon";
export const id="dl_b13e627c426e3d7e998e";
export const url=new URL("../icons/stack_hexagon.svg?v=b66168fc901f7eb92a66d141ae9bf415f111f51f123bcafac26c2636e82b72a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

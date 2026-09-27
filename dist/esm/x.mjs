export const name="x";
export const id="dl_b381d6b75a2d10470864";
export const url=new URL("../icons/x.svg?v=c64b3ce644e196fae0bba8b2ad8443e746c86f69bc2aff04cfc9e35a1df7ca05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

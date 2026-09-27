export const name="list-star";
export const id="dl_a49c0af66e9046388e1e";
export const url=new URL("../icons/list-star.svg?v=bb9e726c67e992ea04f89f2d239fd91caefb2bba6d74d8605de5cf04b1f80976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

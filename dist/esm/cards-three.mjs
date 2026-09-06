export const name="cards-three";
export const id="dl_de76b67845094f53bce2";
export const url=new URL("../icons/cards-three.svg?v=f6ace49d8737afe064923c978fdaaabea8c9137e658f02679487b3efdec2a42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

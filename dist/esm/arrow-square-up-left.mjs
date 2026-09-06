export const name="arrow-square-up-left";
export const id="dl_a8f1fea54774477fb7b2";
export const url=new URL("../icons/arrow-square-up-left.svg?v=3d3630ad165708bf53da06223d401f1538199d5a7c217cc018d740ae30d2d6ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

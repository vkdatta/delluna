export const name="x_circle";
export const id="dl_6e29d2bb13dbf2220561";
export const url=new URL("../icons/x_circle.svg?v=96e0dfa71be2b018ab76cefc8af23eb566ba2697efd75c04b2b73e8e16d2d98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

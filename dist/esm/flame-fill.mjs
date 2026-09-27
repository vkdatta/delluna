export const name="flame-fill";
export const id="dl_f32627eb9dc144d3b1e4";
export const url=new URL("../icons/flame-fill.svg?v=4c37d66f8677554a4994e628ca26811b0b31a29c446ec68c2883bd0778a0de28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

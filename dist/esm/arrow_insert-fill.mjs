export const name="arrow_insert-fill";
export const id="dl_35168d2db793f6ce3dc9";
export const url=new URL("../icons/arrow_insert-fill.svg?v=520d1e54f5e59f0fee2c02d5fa69025211fd013e10f98be8f4303f81c8193a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

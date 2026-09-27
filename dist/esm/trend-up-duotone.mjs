export const name="trend-up-duotone";
export const id="dl_073bd6a697c66362a5a0";
export const url=new URL("../icons/trend-up-duotone.svg?v=333930eb18487b23e3e7764cdfba320da51845d6329f6b9726c6ae041090349e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="steering-wheel-light";
export const id="dl_ae31327c449d2ce420ec";
export const url=new URL("../icons/steering-wheel-light.svg?v=d08b264e845b4474dbbf3c39ebf6695f6046baf82a218f9a7d3619a6af22baea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

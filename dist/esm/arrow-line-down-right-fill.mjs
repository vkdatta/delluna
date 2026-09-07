export const name="arrow-line-down-right-fill";
export const id="dl_237040bc6ce74cc6ac22";
export const url=new URL("../icons/arrow-line-down-right-fill.svg?v=75cbc250ec3ebeea47aa45969df38c98f85061a0bc02fdaf36d07df795384179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

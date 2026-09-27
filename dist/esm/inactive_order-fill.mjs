export const name="inactive_order-fill";
export const id="dl_f72c740ade9795fe1ea5";
export const url=new URL("../icons/inactive_order-fill.svg?v=3c8457e0f50f08b197906921b3f7bcb01f90f95a7b59e914e0ef06f8b83513d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

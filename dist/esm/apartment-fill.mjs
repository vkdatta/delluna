export const name="apartment-fill";
export const id="dl_985a90607c62734b4340";
export const url=new URL("../icons/apartment-fill.svg?v=f1de3f6cb83cdace98b1592713e91be0f8be3d312b455090bc7d35755d5eb995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

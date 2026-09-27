export const name="rocket_launch-fill";
export const id="dl_7315598c340c8e2b4d5f";
export const url=new URL("../icons/rocket_launch-fill.svg?v=ad8066b075bfecd286b617c83ca4f16f77f5f26bf97beb2f4a5bebcf40e1844a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

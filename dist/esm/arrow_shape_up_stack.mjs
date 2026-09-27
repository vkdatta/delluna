export const name="arrow_shape_up_stack";
export const id="dl_1e251513e8581395e984";
export const url=new URL("../icons/arrow_shape_up_stack.svg?v=f7f8b3cd884144ce4efc1645fc2aade3d3c39939cbe7ff92b1775c2fd3626bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

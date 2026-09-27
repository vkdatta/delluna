export const name="nest_found_savings-fill";
export const id="dl_4e7be8db80a909f2593f";
export const url=new URL("../icons/nest_found_savings-fill.svg?v=a705860cd6a31e352226bb6920c09e4f9e63654a13b239c3fb0d1449e8e5a130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

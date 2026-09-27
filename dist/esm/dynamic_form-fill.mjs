export const name="dynamic_form-fill";
export const id="dl_71cd461a4ac44d38785f";
export const url=new URL("../icons/dynamic_form-fill.svg?v=40b3f96b11ff431453dddaf46b3f6b57acdd1871d440f6718c1dc02cdd2531f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="plus-duotone";
export const id="dl_55b6e04099f84935a49f";
export const url=new URL("../icons/plus-duotone.svg?v=a10899dbb50dc1320e665cfdae153829f14582430630e014ed5799ad61dc7d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

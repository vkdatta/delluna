export const name="lucid_3-scale-3d";
export const id="dl_d771941261444a67a862";
export const url=new URL("../icons/lucid_3-scale-3d.svg?v=5e3c93da0b7e27f672ac1b55c7f91339ff0934c7463964c466f6ef48690c403d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

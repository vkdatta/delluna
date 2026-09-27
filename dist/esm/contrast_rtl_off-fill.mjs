export const name="contrast_rtl_off-fill";
export const id="dl_f1cb18ec705e9bb2a178";
export const url=new URL("../icons/contrast_rtl_off-fill.svg?v=588bc98660d6598c32ee9c28135028c768102009326683c4579bd56a810e9d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

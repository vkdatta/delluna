export const name="filter_alt-fill";
export const id="dl_ae5252b6671e47dcaa8c";
export const url=new URL("../icons/F/filter_alt-fill.svg?v=6644ff371310f944da2f5f830797afa3b4dfb95317933249e52c04737d09149f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

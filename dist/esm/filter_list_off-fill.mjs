export const name="filter_list_off-fill";
export const id="dl_d9d705bdb21eb9c2e72a";
export const url=new URL("../icons/filter_list_off-fill.svg?v=472845b170536502115813e15dad16001d34d121ff52620a0888126efc5698a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-heater";
export const id="dl_c8ca655216804d58bbc5";
export const url=new URL("../icons/lucid_2-heater.svg?v=7d840466d29d25298373dbe8ee87f307e9949ee30436807f49225b022bd40be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

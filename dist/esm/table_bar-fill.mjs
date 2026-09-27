export const name="table_bar-fill";
export const id="dl_188a8e3c5ad0c2e48e4a";
export const url=new URL("../icons/table_bar-fill.svg?v=072b908f73c05738026ea2ff2fbfa3ea11d9391d828cc725baf13b60f3b0b9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="energy_program_saving";
export const id="dl_732c21c6777c401b9e71";
export const url=new URL("../icons/E/energy_program_saving.svg?v=38311d890dd952c2345ff95e38823e5069f1f436b1b391fe6e0c000947402866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="nest_clock_farsight_digital";
export const id="dl_18b29ce4c3904dae4f00";
export const url=new URL("../icons/nest_clock_farsight_digital.svg?v=78156d98c19770134d8672ca863434ba0dc8646043661608625ff657c1c0baaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

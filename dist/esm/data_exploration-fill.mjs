export const name="data_exploration-fill";
export const id="dl_0882611a4e108b250482";
export const url=new URL("../icons/data_exploration-fill.svg?v=7de7810e625e0d2ff9364fd6daa4a79c1aa69aa1c5afc691627e706ff35adc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

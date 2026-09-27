export const name="next_plan-fill";
export const id="dl_d91d2e97015bb1f440d7";
export const url=new URL("../icons/next_plan-fill.svg?v=f61aebddf5ab2700423dc54ca0e1fe1381863e2dfcbfe036cc76514c3a8f6d56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

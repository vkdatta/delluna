export const name="step_into-fill";
export const id="dl_6448173748cb4b4695c3";
export const url=new URL("../icons/step_into-fill.svg?v=ae013dd6013a36535a005a9e3d9ccbf61492390e35d32721d1652a6b66573d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="no_sim-fill";
export const id="dl_0d2951e505c4475bb4d6";
export const url=new URL("../icons/N/no_sim-fill.svg?v=ccecf53dac22cf17771bea91095c8e74fd028190ded60e0747f90b0c4447631a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

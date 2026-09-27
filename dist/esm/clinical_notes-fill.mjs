export const name="clinical_notes-fill";
export const id="dl_b71917d51cf821b1af9b";
export const url=new URL("../icons/clinical_notes-fill.svg?v=82514c4670634ddcdba8fd53b05b487bd198f84abbb674d98c92727804594b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="split-horizontal-fill";
export const id="dl_f4611879f0b300ce58ab";
export const url=new URL("../icons/split-horizontal-fill.svg?v=61e407b908568aed85cc674931e284e25ed90c7359bc059e3b4c8a5b4393e09d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

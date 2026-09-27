export const name="engine-bold";
export const id="dl_de9ada43448740bfaf29";
export const url=new URL("../icons/engine-bold.svg?v=013a0b113ac1eda521ca29680df30b2e2cd5d940b288f0c16574ce0fd7f39021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

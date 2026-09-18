export const name="stockpot-fill";
export const id="dl_7dd03a9379be4d93ba32";
export const url=new URL("../icons/S/stockpot-fill.svg?v=5d2a6f2ae50926bfd2d63f238039ead272a7d212c4a7c37a0fee67e77a8e90a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

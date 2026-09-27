export const name="arrow-square-down-right-duotone";
export const id="dl_99d2799482104b54b23b";
export const url=new URL("../icons/arrow-square-down-right-duotone.svg?v=b928030277a1b8478935c32b7559e506bb4fb8862fdbef8cfee2d3f64d505bb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

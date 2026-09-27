export const name="scatter_plot-fill";
export const id="dl_f1e293dc79515ef7249e";
export const url=new URL("../icons/scatter_plot-fill.svg?v=ddc29439f771d6ea94cde90ec404a8f61920e6201a9bf5e88ae1ceda5a1ae715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

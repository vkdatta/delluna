export const name="tipi-fill";
export const id="dl_e7bcfeee59894cd681b8";
export const url=new URL("../icons/T/tipi-fill.svg?v=821d5a21f96129ac92238263ede64adfa67012966bee5888021713e6bb238f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

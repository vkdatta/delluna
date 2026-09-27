export const name="bar_chart";
export const id="dl_bc8880ec9d801149f699";
export const url=new URL("../icons/material_symbols/bar_chart.svg?v=20fe01f4d43fb4afb0b58461424e27dd4dcb712c1bb0233e2b0140b626d0412a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

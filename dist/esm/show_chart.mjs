export const name="show_chart";
export const id="dl_c173b19f519285e569ac";
export const url=new URL("../icons/material_symbols/show_chart.svg?v=26bcf14b1f74c3731add18cd3e4d29ebd95ada6b749b0fbcb2ce9ed0619e5e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

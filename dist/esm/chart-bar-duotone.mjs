export const name="chart-bar-duotone";
export const id="dl_726a9cf3a7ac47b6addb";
export const url=new URL("../icons/chart-bar-duotone.svg?v=7c53ca5599782f50da2591abafd76d04d9fc9388877041911cb97ea585373d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

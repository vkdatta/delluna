export const name="cloud_done-fill";
export const id="dl_1ba7f5777be49ee7f051";
export const url=new URL("../icons/cloud_done-fill.svg?v=fbe0e798456e06486d3143ebe7640240f1c710e525e8d83dc2cdab16ba1f6c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

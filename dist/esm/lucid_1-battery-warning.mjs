export const name="lucid_1-battery-warning";
export const id="dl_d015667e51d74fe5ad98";
export const url=new URL("../icons/lucid_1-battery-warning.svg?v=3743cf77b3407043158aa37bcadbf88d19c9f83512452adc9747afb1f91f05f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

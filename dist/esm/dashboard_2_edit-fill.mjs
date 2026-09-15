export const name="dashboard_2_edit-fill";
export const id="dl_1fc757817cb548d193e3";
export const url=new URL("../icons/D/dashboard_2_edit-fill.svg?v=c1d93499c761b1354e5da5c82d9899718e9faf9c723fe3b4e7c08c387080b636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
